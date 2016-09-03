<template>
	<div class="modal fade" id="adicionar-podcast" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">Ajude-nos a encontrar os podcasts</h4>
				</div>

				<!-- Formulário -->
				<form @submit.prevent.stop="newPodcast" >
					<div class="modal-body">
						<div class="form-group">
                          <label>Nome do Podcast</label>
                          <input v-model="nome" type="text" class="form-control" placeholder="Exemplo: PamonhaCast" required>
                        </div>

                        <div class="form-group">
                          <label>Url do feed</label>
                          <input v-model="url" type="url" class="form-control" placeholder="" required>
                        </div>

                        <div class="form-group">
							<label>Categoria</label>
                          <select class="form-control" v-model="categoria" required >
                          	<option value="">Escolha uma Categoria</option>
                          	<option v-for="categoria of categorias " v-bind:value="categoria._id"> {{categoria.nome}}</option>
                          </select>
                        </div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
						<button type="submit" class="btn btn-primary">Enviar para avaliação</button>
					</div>
				</div>
			</form>
			<!-- / Formulário -->
		</div>
	</div>
</template>

<script>
	export default {
		data: () =>{
			return{
				categorias: [], 
				categoria: '', 
				nome     : '', 
				url      : '', 
			}; 
		}, 

		ready: function(){
			var self = this;

			$.post('/api/cat/getAll',{}). 
			done(function(data){
				if(data.status)
					self.$set('categorias', data.msg ); 
			}).
			fail(function(){
				alert('deu algo de errado na requisição ajax'); 
			}); 
		}, 

		methods:{
			newPodcast: function(){
				
				var data = {
					nome: this.nome, 
					url : this.url, 
					categoria: this.categoria
				}; 

				$.post('/api/pod/new', data). 
				done(function(data){
					if(data.status){
						alert('cadastrado com sucesso'); 
						location.href = '/'; 
					}else
						alert('Erro ao cadastrar novo podcast'); 
				}); 
			}
		}
	}; 
</script>