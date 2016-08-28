// main.js
var Vue       = require('vue')
var VueRouter = require('vue-router'); 

var App   = require('./components/app.vue')
var Home  = require('./components/home.vue'); 

Vue.use(VueRouter); 

var router = new VueRouter(); 

router.map({
	'/genero':{
		component: {template : '<h1>Testando aplicação Single Page Application</h1>'}
	}, 
	'*': {
		component: Home
	}
}); 


//Filters
Vue.filter('locale', function(num){
	var num = new Number(num); 
	return num.toLocaleString(); 
}); 

router.start(App, 'body'); 
