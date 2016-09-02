<template>
	<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2" >
		<div class="item">
			<div class="pos-rlt">
				<div class="bottom">
					<!-- <span class="badge bg-info m-l-sm m-b-sm">03:20</span> -->
				</div>
				<div class="item-overlay opacity r r-2x bg-black">
					<div class="text-info padder m-t-sm text-sm">
						<i class="fa fa-star"></i>
						<i class="fa fa-star"></i>
						<i class="fa fa-star"></i>
						<i class="fa fa-star"></i>
						<i class="fa fa-star-o text-muted"></i>
					</div>
					<div class="center text-center m-t-n">
						<a v-on:click="play()"><i class="icon-control-play i-2x"></i></a>
					</div>
					<div class="bottom padder m-b-sm">
						<a href="#" class="pull-right">
							<i class="fa fa-heart-o"></i>
						</a>
						<a v-on:click="addToPlay">
							<i class="fa fa-plus-circle"></i>
						</a>
					</div>
				</div>
				<a >
					<img v-bind:src="episode.vitrine" alt="{{episode.nome}}" class="r r-2x img-full">
				</a>
			</div>
			<div class="padder-v">
				<a href="#" class="text-ellipsis">{{episode.nome}}</a>
				<a href="#" class="text-ellipsis text-xs text-muted">{{episode.views | locale }} views</a>
			</div>
		</div>
	</div>
</div>
</template>

<script>
	export default{
		props:['episode'], 

		methods:{
			play: function(){
				$('#jplayer_N').jPlayer("setMedia", {
					mp3: this.episode.midia, 
					title: this.episode.nome, 
					_id: this.episode._id
				}).jPlayer('play'); 

				this.$dispatch('current_playing', this.episode._id); 

				this.view(); 
			}, 

			view: function(){

				this.episode.views++; 

				$.post('/api/epi/view', {id: this.episode._id}). 
				done(function(done){
					console.log(done); 
				}); 
			}, 

			addToPlay: function(){
				myPlaylist.add({
					mp3: this.episode.midia, 
					title: this.episode.nome, 
					_id: this.episode._id
				}); 

				alert('Episódio '+this.episode.nome+' adicionado a lista de reprodução'); 
			}
		}
	}
</script>