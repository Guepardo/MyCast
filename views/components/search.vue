<template>
  <section class="scrollable padder-lg w-f-md" id="bjax-target">
   <a href="#" class="pull-right text-muted m-t-lg" data-toggle="class:fa-spin" ><i class="icon-refresh i-lg  inline" id="refresh"></i></a>
   <h2 class="font-thin m-b">Resultados para {{query}}<span class="musicbar animate inline m-l-sm" style="width:20px;height:20px">
    <span class="bar1 a1 bg-primary lter"></span>
    <span class="bar2 a2 bg-info lt"></span>
    <span class="bar3 a3 bg-success"></span>
    <span class="bar4 a4 bg-warning dk"></span>
    <span class="bar5 a5 bg-danger dker"></span>
  </span></h2>

  <div class="row row-sm"  >
   <episode v-for="episodio of episodios" :episode="episodio" > </episode>
  </div>
</section>
</template>

<script>

var Episode = require('./episode.vue'); 

 export default {
 	components:{
 		Episode
 	}, 

 	data: () =>{
 		return{
 			episodios: [], 
 			query    : ''
 		}; 
 	}, 

 	ready: function(){
 	}, 

 	events:{
 		'query_search': function(data){
 			console.log(data.query); 
 			this.query = data.query; 

 			var data ={
 				query: data.query
 			}; 

 			var self = this; 

 			if(data.query == '')
 				return;
 			
 			$.post('/api/epi/search',data). 
 			done(function(data){
 				if(data.status)
 					self.$set('episodios', data.msg ); 
 			}).
 			fail(function(){
 				alert('Error ao se conectar ao servidor'); 
 			})
 		}
 	}
 }
</script>