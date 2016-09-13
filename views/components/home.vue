<style>
  .red {
    color: #f00;
  }
</style>

<template>
  <section class="scrollable padder-lg w-f-md" id="bjax-target">
   <a href="#" class="pull-right text-muted m-t-lg" data-toggle="class:fa-spin" ><i class="icon-refresh i-lg  inline" id="refresh"></i></a>
   <h2 class="font-thin m-b">Lançamentos<span class="musicbar animate inline m-l-sm" style="width:20px;height:20px">
    <span class="bar1 a1 bg-primary lter"></span>
    <span class="bar2 a2 bg-info lt"></span>
    <span class="bar3 a3 bg-success"></span>
    <span class="bar4 a4 bg-warning dk"></span>
    <span class="bar5 a5 bg-danger dker"></span>
  </span></h2>

  <div class="row row-sm"  >
   <episode v-for="episode in epRecente" :episode="episode" > </episode>
  </div>

  <a href="#" class="pull-right text-muted m-t-lg" data-toggle="class:fa-spin" ><i class="icon-refresh i-lg  inline" id="refresh"></i></a>
  <h2 class="font-thin m-b">Mais Ouvidos<span class="musicbar animate inline m-l-sm" style="width:20px;height:20px">
    <span class="bar1 a1 bg-primary lter"></span>
    <span class="bar2 a2 bg-info lt"></span>
    <span class="bar3 a3 bg-success"></span>
    <span class="bar4 a4 bg-warning dk"></span>
    <span class="bar5 a5 bg-danger dker"></span>
  </span></h2>

  <div class="row row-sm"  >
    <episode v-for="episode in epMais" :episode="episode" > </episode>
  </div>

  <a href="#" class="pull-right text-muted m-t-lg" data-toggle="class:fa-spin" ><i class="icon-refresh i-lg  inline" id="refresh"></i></a>
  <h2 class="font-thin m-b">Menos Ouvidos<span class="musicbar animate inline m-l-sm" style="width:20px;height:20px">
    <span class="bar1 a1 bg-primary lter"></span>
    <span class="bar2 a2 bg-info lt"></span>
    <span class="bar3 a3 bg-success"></span>
    <span class="bar4 a4 bg-warning dk"></span>
    <span class="bar5 a5 bg-danger dker"></span>
  </span></h2>

  <div class="row row-sm"  >
    <episode v-for="episode in epMenos" :episode="episode" > </episode>
  </div>

</section>
</template>

<script> 
import Episode from './episode.vue'; 

export default {
  components:{
  	Episode
  }, 
  
  data: function(){
      return {
        title : 'Home', 
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

      this.$dispatch('change_title', this.title); 
    }, 

    methods:{
      
  	}
}
</script>