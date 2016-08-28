var main = Vue.component('main',{
    template: '#main-template', 

    data: function(){
      return {
        epMais: [],
        epMenos: [], 
        epRecente:[]
      }; 
    }, 

    ready: function(){
      var self = this; 
      $.post('/api/epi/getListMostViewed').
      done(function(data){
        self.$set('epMais', data.msg); 
      }); 

      $.post('/api/epi/getListLowerViewed').
      done(function(data){
        self.$set('epMenos', data.msg); 
      }); 

      $.post('/api/epi/getListRecent').
      done(function(data){
        self.$set('epRecente', data.msg); 
      }); 
    }, 

    methods:{
      
  	}
}); 