<template>
  <v-container>
	<div>
		<br/>
		<h2 v-for="indice in 3" :key="indice">
			{{ indice }}
		</h2>
		<br/>
		<h2>Número: {{ numero }}</h2>
	</div>

	<br/>
	<h2 v-for="sintoma in sintomas" :key="sintoma">
		{{ sintoma }}
	</h2>
	<br/>
	
    <v-btn-toggle v-model="escribe" mandatory>
        <v-btn :value="1" flat>
          Quiero escribir algo...
        </v-btn>
        <v-btn :value="0" flat>
          Ni en pedo escribo
        </v-btn>
    </v-btn-toggle>
	<br/>
	<h2>{{ escribe }}</h2>
	<br/>
	<v-text-field label="Ingrese cualquiera" value:string v-if="escribe=1" ></v-text-field>
  </v-container>
</template>
<script>
	export default {
		components: {
			},
		model: {
			prop: 'escribe',
			event: 'change'
		},
		props: {
			escribe: String
			},
		data() {
			return {
				numero: "2",
				sintomas: ["Tos", "Fiebre", "Dolor de Cabeza"],
			};
		},
		mounted() {
			this.escribe = this.$store.getters.escribe;
			
            this.numero = this.$store.getters.numero;
			
            this.$store.commit('SET_NUMERO', "3");

            this.numero = this.$store.getters.numero;

		},
		methods: {},
		computed: {},
		watch: {},
	};
</script>
<style></style>
