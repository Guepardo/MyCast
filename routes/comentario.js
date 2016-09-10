module.exports = (app) =>{
	app.post('/api/com/newComment', app.controllers.comentarioController.newComment); 
}; 