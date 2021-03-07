<template>
  <v-container>
	<div>
        <v-form v-model="valido" @submit="onSubmit">
            <v-text-field
                label="Texto"
                v-model="texto"
                :counter="30"
                required
                name="Texto"
            ></v-text-field>

            <v-btn type="submit" >Listo!!</v-btn>
        </v-form>

        <br/>
        <h2 v-if='texto_almacenado!=""'> Texto almacenado: {{ texto_almacenado }}</h2>
        <br/>
	</div>

  </v-container>
</template>
<script>
	export default {
		components: {
			},
		model: {},
		props: {},
		data() {
            return {
				sintomas: ["Tos", "Fiebre", "Dolor de Cabeza"],
                texto: "",
                texto_almacenado: "",
                valido: false
			};
		},
		mounted() {
        },
		methods: {
            onSubmit() {
//                alert(this.texto);

                this.texto_almacenado = this.texto + " [Previa]"

                this.$store.commit('SET_TEXTO', this.texto);

                this.texto_almacenado = this.$store.getters.texto;
                
                console.log(this.texto_almacenado);

//                alert(this.$store.getters.texto);
            },
        },
		computed: {},
		watch: {},
	};
</script>
<style></style>
