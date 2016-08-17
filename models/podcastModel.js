var mongoose = require('mongoose'); 

module.exports = (app) =>{
	var schema = mongoose.Schema({
		nome: {type: String, required: true, unique: true}, 
		url : {type: String, required: true, unique: true}, 
		episodios: [
			{type: mongoose.Schema.Types.ObjectId, ref: 'Episodio'}
		]
	}); 

	return mongoose.model('Podcast', schema); 
}; 