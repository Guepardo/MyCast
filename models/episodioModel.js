var mongoose = require('mongoose'); 

module.exports = (app) => {
	var schema = mongoose.Schema({
		nome:    {type: String, required: true, unique: true }, 
		vitrine: {type: String, required: true }, 
		midia:   {type: String, required: true, unique: true }
	}); 


	return mongoose.model('Episodio', schema); 
};