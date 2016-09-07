var passport 		 = require('passport'); 
var FacebookStrategy = require('passport-facebook').Strategy;
var facebookSecret   = require('./../config/facebookSecret'); 

module.exports = (app) => {

	var Usuario = app.models.usuarioModel; 

	//Gerenciado passport
	passport.serializeUser(function(user, done){
		done(null, user); 
	}); 

	passport.deserializeUser(function(obj, done){
		done(null, obj); 
	}); 


	passport.use(new FacebookStrategy(facebookSecret,
		function(accessToken, refreshToken, profile, done){
			process.nextTick(() =>{
				console.log(profile);

				Usuario.findOne({
					facebook_id: profile.id
				}).exec(function(error, usuario){
					if(error) console.log(error); 
					
					if(usuario == null){
						var usuario = new Usuario({
							nome       : profile.displayName, 
							facebook_id: profile.id
						}); 

						usuario.save(); 
					}
				}); 
				return done(null, profile); 
			}); 
		}
	)); 


	var controller = {
		getInformation: (req, res, next ) =>{
			if(!req.isAuthenticated())
				res.json({status : false});
			else
				res.json({status: true, msg: req.user });  
		}
	}; 

	return controller;
}; 