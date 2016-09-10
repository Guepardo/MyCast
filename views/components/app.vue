// app.vue
<style>
	.red {
		color: #f00;
	}
</style>

<template>
	<section class="vbox">
		<header class="bg-white-only header header-md navbar navbar-fixed-top-xs">
			<div class="navbar-header aside bg-info">
				<a class="btn btn-link visible-xs" data-toggle="class:nav-off-screen,open" data-target="#nav,html">
					<i class="icon-list"></i>
				</a>
				<a v-link="{path : '/'}" class="navbar-brand text-lt">
					<i class="icon-earphones"></i>
					<img src="/images/logo.png" alt="." class="hide">
					<span class="hidden-nav-xs m-l-sm">MyCast</span>
				</a>
				<a class="btn btn-link visible-xs" data-toggle="dropdown" data-target=".user">
					<i class="icon-settings"></i>
				</a>
			</div>      <ul class="nav navbar-nav hidden-xs">
		<!-- 	<li>
				<a href="#nav,.navbar-header" data-toggle="class:nav-xs,nav-xs" class="text-muted">
					<i class="fa fa-indent text"></i>
					<i class="fa fa-dedent text-active"></i>
				</a>
			</li> -->
		</ul>
		

		<!-- Formulário search -->
		<search-formulario> </search-formulario>
		<!-- Formulário search -->

		<div class="navbar-right ">
			<ul class="nav navbar-nav m-n hidden-xs nav-user user">
				<li class="hidden-xs">
					<a href="#" class="dropdown-toggle lt" data-toggle="dropdown">
						<i class="icon-bell"></i>
						<span class="badge badge-sm up bg-danger count">2</span>
					</a>
					<section class="dropdown-menu aside-xl animated fadeInUp">
						<section class="panel bg-white">
							<div class="panel-heading b-light bg-light">
								<strong>You have <span class="count">2</span> notifications</strong>
							</div>
							<div class="list-group list-group-alt">
								<a href="#" class="media list-group-item">
									<span class="pull-left thumb-sm">
										<img src="/images/a0.png" alt="..." class="img-circle">
									</span>
									<span class="media-body block m-b-none">
										Use awesome animate.css<br>
										<small class="text-muted">10 minutes ago</small>
									</span>
								</a>
								<a href="#" class="media list-group-item">
									<span class="media-body block m-b-none">
										1.0 initial released<br>
										<small class="text-muted">1 hour ago</small>
									</span>
								</a>
							</div>
							<div class="panel-footer text-sm">
								<a href="#" class="pull-right"><i class="fa fa-cog"></i></a>
								<a href="#notes" data-toggle="class:show animated fadeInRight">See all the notifications</a>
							</div>
						</section>
					</section>
				</li>
				<li class="dropdown">
				<a class="btn btn-s-md btn-primary" style="width: 250px;" data-toggle="modal" data-target="#adicionar-podcast" >Adicionar Podcast :)</a>

				<!-- 	<a href="#" class="dropdown-toggle bg clear" data-toggle="dropdown">
						<span class="thumb-sm avatar pull-right m-t-n-sm m-b-n-sm m-l-sm">
							<img src="/images/a0.png" alt="...">
						</span>
						John.Smith <b class="caret"></b>
					</a>
					<ul class="dropdown-menu animated fadeInRight">            
						<li>
							<span class="arrow top"></span>
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
							<a href="modal.lockme.html" data-toggle="ajaxModal" >Logout</a>
						</li>
					</ul> -->
				</li>
			</ul>
		</div>      
	</header>
	<section>
		<section class="hbox stretch">
			<!-- .aside -->
			<aside class="bg-black dk aside hidden-print" id="nav">          
				<section class="vbox">
					<section class="w-f-md scrollable">
						<div class="slim-scroll" data-height="auto" data-disable-fade-out="true" data-distance="0" data-size="10px" data-railOpacity="0.2">



							<!-- nav -->                 
							<nav class="nav-primary hidden-xs">
								<ul class="nav bg clearfix">
									<li class="hidden-nav-xs padder m-t m-b-sm text-xs text-muted">
										Descobrir
									</li>
									<li>
										<a v-link="{path : '/'}">
											<i class="icon-disc icon text-success"></i>
											<span class="font-bold">Novidades</span>
										</a>
									</li>
									<li>
										<a v-link="{path : '/genero'}">
											<i class="icon-music-tone-alt icon text-info"></i>
											<span class="font-bold">Gêneros</span>
										</a>
									</li>
									<li>
										<a href="events.html">
											<i class="icon-drawer icon text-primary-lter"></i>
											<b class="badge bg-primary pull-right">6</b>
											<span class="font-bold">Eventos</span>
										</a>
									</li>
									<li>
										<a href="listen.html">
											<i class="icon-list icon  text-info-dker"></i>
											<span class="font-bold">Ouvindo</span>
										</a>
									</li>

									<!-- <li>
										<a href="video.html" data-target="#content" data-el="#bjax-el" data-replace="true">
											<i class="icon-social-youtube icon  text-primary"></i>
											<span class="font-bold">Video</span>
										</a>
									</li>
									<li class="m-b hidden-nav-xs"></li> -->
								</ul>
							</nav>
							<!-- / nav -->
						</div>
					</section>
					
					<!-- Settings -->
					<setting> </setting>
					<!-- Settings -->
				</section>
			</aside>
			<!-- /.aside -->

			<section id="content">
				<section class="hbox stretch">
					<section>
						<section class="vbox">
						
							<!-- Outlet SPA -->
							<router-view> </router-view>
							<!-- /Outlet SPA  -->
							
							<!-- Player -->
							<player> </player>
							<!-- / Player -->
						</section>
					</section>

					<!-- Comentários -->
					<comentarios> </comentarios>
					<!-- / Comentários -->
				</section>

				<a href="#" class="hide nav-off-screen-block" data-toggle="class:nav-off-screen,open" data-target="#nav,html"></a>
			</section>
		</section>
	</section>    
</section>

<!-- Modal para aidcionar novo podcast -->
	<adicionar-podcast-modal>s </adicionar-podcast-modal> 
<!-- /Modal para aidcionar novo podcast -->
</template>

<script>
	var Comentarios           = require('./comentarios.vue'); 
	var Player                = require('./player.vue'); 
	var AdicionarPodcastModal = require('./adicionarPodcastModal.vue'); 
	var SearchFormulario      = require('./searchFormulario.vue'); 
	var Setting               = require('./setting.vue'); 

	export default {
		components:{
			Comentarios, 
			Player, 
			AdicionarPodcastModal, 
			SearchFormulario, 
			Setting
		}, 

		replace: false,

		data: () =>  {
			return {
				msg: 'Hello world!', 
				current_playing : ''
			}
		}, 

		init: function (){
			this.$on('change_title', (name) =>{
				console.log(name); 
				document.title = name; 
			}); 

			this.$on('current_playing', (id) =>{
				this.current_playing = id; 
				alert(id); 
			}); 
		}
	}
</script>