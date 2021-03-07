<template>
	<div>
		<h1>Acá marcha la API</h1>
		<br>
		<h4> {{ url }} </h4>
		<br>
		<h2 v-for="nombre in nombres" :key="nombre.id">
			{{ nombre.name }} [{{ nombre.id }}]
		</h2>
	</div>
</template>
<script>
	import axios from "axios";

	export default {
		components: {},
		props: {},
		data() {
			return {
				url: "https://pokemon-go1.p.rapidapi.com/pokemon_names.json",
				nombres: [],
			};
		},
		mounted() {
			const options = {
				method: "GET",
				url: this.url,
				headers: {
					"x-rapidapi-key": "dcd1def5c1msh5b35c978f31b5bdp168e4cjsn40af0c567191",
					"x-rapidapi-host": "pokemon-go1.p.rapidapi.com",
				},
			};

			axios
				.request(options)
				.then((response) => {
					this.nombres = response.data;
				})
				.catch(function (error) {
					console.error(error);
				});
		},
		methods: {},
		computed: {},
		watch: {},
	};
</script>
<style></style>
