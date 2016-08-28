module.exports = (app) =>{
	app.post('/api/epi/getEpisodesByPodcastId', app.controllers.episodioController.getEpisodesByPodcastId); 
	app.post('/api/epi/getById'				  , app.controllers.episodioController.getById); 
	app.post('/api/epi/view'                  , app.controllers.episodioController.view); 
	app.post('/api/epi/getListMostViewed'     , app.controllers.episodioController.getListMostViewed);
	app.post('/api/epi/getListLowerViewed'    , app.controllers.episodioController.getListLowerViewed); 
	app.post('/api/epi/getListRecent'         , app.controllers.episodioController.getListRecent); 
}; 