var mongoose = require('mongoose'); 

module.exports = (app) => {
	var schema = mongoose.Schema({
		nome:       {type: String, require: true }, 
		facebook_id: {type: String, require: true},   
	}); 

	return mongoose.model('Usuario', schema); 
}; 