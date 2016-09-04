<template>
	<form class="navbar-form navbar-left input-s-lg m-t m-l-n-xs hidden-xs" role="search">
		<div class="form-group">
			<div class="input-group">
				<span class="input-group-btn">
					<button type="submit" class="btn btn-sm bg-white btn-icon rounded"><i class="fa fa-search"></i></button>
				</span>
				<input type="text" class="form-control input-sm no-border rounded" placeholder="Porcurar por um podcast..." @keyup="onQuery" v-model="query" >
			</div>
		</div>
	</form>
</template>

<script>
	var Search = require('./search.vue'); 

	export default{
		data: () =>{
			return {
				query: ''
			}; 
		}, 

		methods: {
			onQuery: function(){
				var data ={
					query : this.query
				}; 

				this.$parent.$broadcast('query_search', data); 

				this.$router.go('/search'); 
				
				console.log(this.$parent); 
			}
		}
	}
</script>