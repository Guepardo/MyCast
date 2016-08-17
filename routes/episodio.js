module.exports = (app) =>{
	app.post('/api/epi/getEpisodesByPodcastId', app.controllers.episodioController.getEpisodesByPodcastId); 
	app.post('/api/epi/getById', app.controllers.episodioController.getById); 
}; 