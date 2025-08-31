<script setup lang="ts">
	import { ref } from "vue";
	import { RouterView } from "vue-router";
	import LandingPage from "./views/LandingPage.vue";
	import Sidebar from "./components/Sidebar.vue";

	const showLandingPage = ref(true);

	const enterSite = () => {
		showLandingPage.value = false;
	};
</script>

<template>
	<LandingPage v-if="showLandingPage" @enter="enterSite" />

	<main v-else>
		<section>
			<Sidebar />
		</section>

		<section>
			<RouterView />
		</section>
	</main>
</template>

<style scoped lang="scss">
	main {
		display: flex;
		flex-direction: row;
		max-height: 100vh;
		user-select: none;

		& section:last-child {
			flex: 1;
		}
	}
</style>
