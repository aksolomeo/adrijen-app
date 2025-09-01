<script setup lang="ts">
	import { useMainStore } from "../stores/mainStore";
	import { storeToRefs } from "pinia";

	const mainStore = useMainStore();

	const { userAlias } = storeToRefs(mainStore);
</script>

<template>
	<section class="home-page">
		<div class="home-page__welcome-msg">
			<div class="home-page__welcome-msg--title">
				{{ $t("VIEWS.HOME.WELCOME_TEXT.TITLE", { userAlias }) }}
			</div>
		</div>
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
			font-size: 40px;
		}
	}
</style>
