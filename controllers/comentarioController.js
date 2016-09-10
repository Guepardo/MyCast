module.exports = (app) => {

	var Comentario = app.models.comentarioModel; 
	var Usuario    = app.models.usuarioModel; 

	var controller = {
		newComment: (req, res, next) => {
			req.checkBody('texto'   , 'texto inválido').notEmpty();
			req.checkBody('tempo'   , 'tempo inválido').notEmpty(); 
			req.checkBody('episodio', 'episodio inválido').notEmpty(); 

			var error = req.validationErrors(); 

			if(error){
				res.json({status: false , msg: error}); 
				return; 
			}; 

			//Verificar se o usuário está registrando antes de tentar registrar o comentário: 
			if(!req.isAuthenticated()){
				res.json({status: false, msg: 'É necessário estar autenticando no sistema.'});
				return;  
			}

			var userId = req.user.id; 

			var tempo    = req.body.tempo; 
			var texto    = req.body.texto; 
			var episodio = req.body.episodio; 

			Usuario.findOne({
				facebook_id : userId
			}).exec((error, usuario) => {
				if(error){
					res.json({status: false, msg: error.errmsg}); 
					return;
				}

				if(usuario == null){
					res.json({status: false, msg: 'Usuário não existe na base de dados.'})
					return;
				}

				var comentario = new Comentario({
					user    : usuario._id, 
					tempo   : tempo, 
					data    : new Date(),  
					texto   : texto,
					episodio: episodio
				}); 

				comentario.save(); 
				res.json({status: true}); 
			}); 

		}
	}; 

	return controller; 
}; 