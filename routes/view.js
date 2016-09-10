module.exports = (app) =>{
	app.get('/', app.controllers.viewController.index); 
}; 