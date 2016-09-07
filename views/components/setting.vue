<style>
	
</style>


<template>
	<footer class="footer hidden-xs no-padder text-center-nav-xs">
		<div class="bg hidden-xs ">
			<div class="dropdown dropup wrapper-sm clearfix">
				<a href="#" class="dropdown-toggle" data-toggle="dropdown">
					<span class="thumb-sm avatar pull-left m-l-xs">                        
						<img :src="foto" class="dker" alt="...">
						<i class="on b-black"></i>
					</span>
					<span class="hidden-nav-xs clear">
						<span class="block m-l">
							<strong class="font-bold text-lt">{{nome}}</strong> 
							<b class="caret"></b>
						</span>
						<span class="text-muted text-xs block m-l">Art Director</span>
					</span>
				</a>

				<ul class="dropdown-menu animated fadeInRight aside text-left" v-show="logged">                      
					<li>
						<span class="arrow bottom hidden-nav-xs"></span>
						<a href="#">Settings</a>
					</li>
					<li>
						<a href="profile.html">Profile</a>
					</li>
					<li>
						<a href="#">
							<span class="badge bg-danger pull-right">3</span>
							Notifications
						</a>
					</li>
					<li>
						<a href="docs.html">Help</a>
					</li>
					<li class="divider"></li>
					<li>
						<p><b>{{nome}}</b></p>
					</li>
				</ul>

				<ul class="dropdown-menu animated fadeInRight aside text-left" v-else>                      
					<li>
						<span class="arrow bottom hidden-nav-xs"></span>
						<a href="/auth/facebook" class="button">login</a>
					</li>
					<li class="divider"></li>
					<li>
						<p><b>{{nome}}</b></p>
					</li>
				</ul>


			</div>
		</div>           
	</footer>
</template>


<script>
	export default{
		data: () =>{
			return{
				foto: 'https://s-media-cache-ak0.pinimg.com/236x/b2/d4/da/b2d4da73a20b39882da8737314969244.jpg',  
				logged: false, 
				nome: 'Visitante'
			}; 
		}, 

		ready: function(){
			$.post('/api/use/getInformation',{}).
			done((data) =>{
				console.log(data); 
				if(data.status){
					this.nome = data.msg.displayName; 
					this.foto = 'http://graph.facebook.com/' + data.msg.id + '/picture?type=square'
					this.logged = true;
				}
			}); 
		}

	}
</script>