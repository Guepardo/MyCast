var mongoose = require('mongoose'); 

module.exports = (app) => {
	var schema = mongoose.Schema({
		nome:    {type: String, required: true, unique: true }, 
		vitrine: {type: String, required: true }, 
		midia:   {type: String, required: true, unique: true }, 
		views:   {type: Number, default: 0}
	}); 

	return mongoose.model('Episodio', schema); 
};