var episode = Vue.component('episode',{
	template: '#episode-template', 
	
	props:['episode'], 

	methods:{
		play: function(){
			$('#jplayer_N').jPlayer("setMedia", {
				mp3: this.episode.midia, 
				title: this.episode.nome
			}).jPlayer('play'); 

			this.view(); 
		}, 

		view: function(){

			this.episode.views++; 

			$.post('/api/epi/view', {id: this.episode._id}). 
			done(function(done){
				console.log(done); 
			}); 
		}
	}
}); 