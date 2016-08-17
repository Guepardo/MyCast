module.exports = (app) =>{
	
	var Episodio = app.models.episodioModel; 
	var Podcast  = app.models.podcastModel; 

	var controller ={
		getById: (req, res, next) =>{
			req.checkBody('id', 'Id inválido').notEmpty(); 

			var error = req.validationErrors(); 

			if(error){
				res.json({status: false , msg: error}); 
				return; 
			}

			var id = req.body.id; 

			Episodio.findOne({
				_id: id 
			}).
			exec((error, ep) =>{
				if(error){
					res.json({status: false, msg: error.errmsg}); 
					return;		
				}
				 
				res.json({status: true, msg: ep}); 
			}); 
		}, 

		getEpisodesByPodcastId: (req, res, next) =>{
			req.checkBody('id', 'Id inválido').notEmpty(); 

			var error = req.validationErrors(); 

			if(error){
				res.json({status: false , msg: error}); 
				return; 
			}

			var id = req.body.id; 

			Podcast.findOne({
				_id: id
			}). 
			select('nome _id episodios').
			populate('episodios'). 
			exec((error, podcast) =>{
				if(error){
					res.json({status: false, msg: error.errmsg}); 
					return;		
				}
				 
				res.json({status: true, msg: podcast}); 
			}); 
		}
	}; 

	return controller; 
};