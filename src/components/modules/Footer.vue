<template>
	<v-footer dark padless app color="blue-grey lighten-1">
		<v-card class="flex" flat tile>
			<v-card-title class="teal">
				<strong class="subheading">Seguinos en las redes!!</strong>

				<v-spacer></v-spacer>

				<v-btn v-for="([icon, link]) in icons" :key="icon" class="mx-4" dark icon @click="irA(link)">
					<v-icon size="24px">
						{{ icon }}
					</v-icon>
				</v-btn>
			</v-card-title>

			<v-card-text>
				{{ new Date().getFullYear() }} — <strong>RS@Vuetify</strong>
			</v-card-text>
		</v-card>
	</v-footer>
</template>

<script>
	export default {
		data: () => ({
			icons: [
					["mdi-facebook", "/facebook"],
					["mdi-twitter", "/twitter"],
					["mdi-instagram", "/instagram"]
			],
		}),
		methods: {
			irA(link) {
//				window.location.href = link;
				window.open(link);
			},
		}
	};
</script>
