module.exports = (app) =>{
	var Episodio = app.models.episodioModel; 

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
		}
	}; 

	return controller; 
};