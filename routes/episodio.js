module.exports = (app) =>{
	app.post('/api/epi/getById', app.controllers.episodioController.getById); 
}; 