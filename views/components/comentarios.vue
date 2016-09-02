<template>
	<aside class="aside-md bg-light dk" id="sidebar">
		<section class="vbox animated fadeInRight">
			<section class="w-f-md scrollable hover">
				<h4 class="font-thin m-l-md m-t">Comentários</h4>
				<ul class="list-group no-bg no-borders auto m-t-n-xxs">
					
					<li class="list-group-item" v-for="n of 10" >
						<div class="clear">
							<div><a href="#">Chris Fox</a> <small> às 22:00</small></div>
							<small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. </small>
						</div>
					</li>

				</ul>
			</section>

			<footer class="footer footer-md bg-black">
				<form class="" role="search">
					<div class="form-group clearfix m-b-none">
						<div class="input-group m-t m-b">
							<span class="input-group-btn">
								<button type="submit" class="btn btn-sm bg-empty text-muted btn-icon"><i class="fa fa-comment"></i></button>
							</span>
							<input 
								type="text" 
								class="form-control input-sm text-white bg-empty b-b b-dark no-border" 
								v-model="comentario" 
								@focusOut="focusOut" 
								@focus="onFocus" 
								@keyup.enter="comentar"
								placeholder="Comentar esse momento"
							>

						</div>
					</div>
				</form>
			</footer>

		</section>              
	</aside>
</template>

<script>
	export default{
		ready: function(){
			console.log('Hello from comentários'); 
		}, 

		data: () =>{
			return {
				comentario: ''
			}; 
		}, 

		methods:{
			onFocus: function(){
				console.log('onFocus'); 
			},

			focusOut: function(){
				console.log('outFocus'); 
			},

			comentar: function(){
				alert(this.comentario);
				this.comentario = '';
			}
		}
	}
</script>