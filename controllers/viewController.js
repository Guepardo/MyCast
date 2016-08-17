module.exports = (app) =>{

	var controller ={
		index: (req, res, next) =>{
			res.render('index.html'); 
		}
	}

	return controller;
}; 