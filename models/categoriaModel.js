var mongoose = require('mongoose'); 

module.exports = (app) =>{
	var schema = mongoose.Schema({
		nome:      {type: String, required: true, unique: true }, 
		descricao: {type: String, required: false}
	}); 

	return mongoose.model('Categoria', schema ); 
}; 