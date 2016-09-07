var passport = require('passport'); 

module.exports = function(app){
	app.get('/auth/facebook', passport.authenticate('facebook')); 

	app.get('/auth/facebook/callback',
		passport.authenticate('facebook', { 
			successRedirect : '/', 
			failureRedirect: '/login' 
		}),
		function(req, res) {
			res.redirect('/');
		});

	// app.get('/teste', function(req, res){
	// 	// console.log(req); 
	// 	res.json({id : req.user }); 
	// }); 

	// app.get('/logout', function(req, res){
	// 	req.logout();
	// 	res.redirect('/');
	// });

	app.post('/api/use/getInformation', app.controllers.usuarioController.getInformation); 

}; 