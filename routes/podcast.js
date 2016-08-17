module.exports = (app) =>{
	app.get('/novo', app.controllers.podcastController.novo); 
}; 