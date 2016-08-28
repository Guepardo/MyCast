module.exports = (app) =>{
	app.post('/api/pod/getAll', app.controllers.podcastController.getAll); 
	app.post('/api/pod/new'   , app.controllers.podcastController.new); 
}; 