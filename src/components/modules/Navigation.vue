<template>
	<v-navigation-drawer
		dark
		src=""
		permanent
		app
		width=250
	>
		<v-list color="blue-grey lighten-1">
			<v-list-item v-for="([icon, text, link], i) in items" :key="i" :to="link" link>
				<v-list-item-icon>
					<v-icon>{{ icon }}</v-icon>
				</v-list-item-icon>

				<v-list-item-content>
					<v-list-item-title>
						{{ text }}
					</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
	export default {
		data: () => ({
			items: [
				["mdi-home-city", "Inicio", "/"],
				["mdi-strategy", "Juegos y Pruebas", "/prueba"],
				["mdi-play-network", "API", "/api"],
				["mdi-file-restore", "Store", "/store"],
			],
		}),
	};
</script>
