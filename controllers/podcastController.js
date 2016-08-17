var feedParser = require('ortoo-feedparser'); 

module.exports = (app) =>{

	var Podcast  = app.models.podcastModel; 
	var Episodio = app.models.episodioModel; 
	
	var controller = {
		new: (req, res, next) =>{
			req.checkBody('url', 'url inválida').notEmpty(); 
			req.checkBody('nome', 'nome inválido').notEmpty(); 

			var error = req.validationErrors(); 

			if(error){
				res.json({status: false , msg: error}); 
				return; 
			}

			var nome  = req.body.nome; 
			var url   = req.body.url; 

			var podcast = new Podcast({
				nome: nome, 
				url : url 
			}); 

			podcast.save(function (error, pod){
				if(error){
					res.json({status: false, msg: error.errmsg}); 
					return;
				}

				feedParser.parseFile(pod.url). 
				on('article', function (article){

				 	var episodio = new Episodio({
				 		nome:    article.title, 
				 		vitrine: article.image.url || "nada" , 
				 		midia:   article.enclosures[0].url
				 	}); 

				 	episodio.save((error, ep) =>{
				 		if(!error){
				 			pod.episodios.push(ep._id); 
				 			pod.save(); 
				 		}else{
				 			console.log(error); 
				 		}
				 	}); 

				}); 
				res.json({staus: true }); 
			}); 
		}, 

		getAll: (req, res, next) =>{
			
			Podcast.find(). 
			select('nome _id'). 
			exec((error, podcasts) =>{
				if(error){
					res.json({status: false, msg: error.errmsg}); 
					return; 
				}

				res.json({msg: podcasts}); 
			}); 
		}
	}; 

	return controller; 
}; 
