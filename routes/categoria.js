module.exports = (app) =>{
	app.post('/api/cat/new'   , app.controllers.categoriaController.new);
	app.post('/api/cat/getAll', app.controllers.categoriaController.getAll);
}; 