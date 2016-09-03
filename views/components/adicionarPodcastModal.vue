<template>
	<div class="modal fade" id="adicionar-podcast" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">Ajude-nos a encontrar os podcasts</h4>
				</div>

				<!-- Formulário -->
				<form>
					<div class="modal-body">
						<div class="form-group">
                          <label>Nome do Podcast</label>
                          <input type="text" class="form-control" placeholder="Exemplo: PamonhaCast">
                        </div>

                        <div class="form-group">
                          <label>Url do feed</label>
                          <input type="email" class="form-control" placeholder="Enter email">
                        </div>

                        <div class="form-group">
							<label>Categoria</label>
                          <select class="form-control">
                          	<option>--Selecione--</option>
                          </select>
                        </div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
						<button type="button" class="btn btn-primary">Enviar para avaliação</button>
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

			}; 
		}
	}; 
</script>