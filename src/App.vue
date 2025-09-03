<script setup lang="ts">
	import { RouterView } from "vue-router";
	import { useMainStore } from "./stores/mainStore";
	import { storeToRefs } from "pinia";
	import LandingPage from "./views/LandingPage.vue";
	import PageHeader from "./components/PageHeader.vue";
	import Sidebar from "./components/Sidebar.vue";
	import TopBarNav from "./components/TopBarNav.vue";

	const mainStore = useMainStore();

	const { showLandingPage } = storeToRefs(mainStore);

	const enterSite = () => {
		showLandingPage.value = false;
	};
</script>

<template>
	<LandingPage v-if="showLandingPage" @enter="enterSite" />

	<a-layout v-else>
		<a-layout-sider collapsible>
			<Sidebar />
		</a-layout-sider>

		<a-layout-content>
			<PageHeader />
			<TopBarNav />
			<RouterView />
		</a-layout-content>
	</a-layout>
</template>
