<script setup lang="ts">
	import { useMainStore } from "../stores/mainStore";
	import { storeToRefs } from "pinia";

	const mainStore = useMainStore();

	const { userNickname } = storeToRefs(mainStore);
</script>

<template>
	<section class="home-page">
		<div class="home-page__welcome-msg">Welcome to my homepage, {{ userNickname }}!</div>
	</section>
</template>

<style scoped lang="scss">
	.home-page {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;

		&__welcome-msg {
			font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
			font-size: 40px;
		}
	}
</style>
