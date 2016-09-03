module.exports = (app) =>{

	var Categoria = app.models.categoriaModel; 

	var controller = {
		new: (req, res, next) =>{
			req.checkBody('nome', 'O nome não pode ser vazio').notEmpty(); 
			req.checkBody('descricao','A descrição não pode ser vazia').notEmpty(); 

			var error = req.validationErrors(); 

			if(error){
				res.json({status: false , msg: error}); 
				return; 
			}

			var nome      = req.body.nome; 
			var descricao = req.body.descricao; 

			var categoria = new Categoria({
				nome	 : nome, 
				descricao: descricao
			}); 

			categoria.save((error, categoria) =>{
				if(error){
					res.json({status: false, msg: error.errmsg}); 
					return;		
				}
				res.json({status: true, msg: categoria});
			}); 
		}, 

		getAll: (req, res, next ) =>{
			Categoria.find({}). 
			exec((error, categorias) =>{
				if(error){
					res.json({status: false, msg: error.errmsg}); 
					return; 
				}

				res.json({msg: categorias}); 
			}); 		
		}
	}

	return controller; 
}; 