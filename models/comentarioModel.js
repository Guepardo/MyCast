var mongoose = require('mongoose'); 

module.exports = (app) =>{
	var schema = mongoose.Schema({
		user:     {type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'}, 
		tempo:    {type: String}, //acho que isso deve ficar assim 00:01 segundos
		data:     {type: Date  , required: true}, 
		texto:    {type: String, require: true}, 	
		episodio: {type: mongoose.Schema.Types.ObjectId, ref: 'Eposodio'}		
	}); 	

	return mongoose.model('Comentario', schema); 
}; 