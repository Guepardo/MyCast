module.exports = (app) =>{
	app.get('/', app.controllers.viewController.index); 
	app.get('/teste', function(req, res,next){
		res.render('teste.html'); 
	})
}; 