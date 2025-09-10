<script setup lang="ts">
	import { ref, onMounted } from "vue";
	import { useMainStore } from "../stores/mainStore";
	import { storeToRefs } from "pinia";
	import { FileTextOutlined } from "@ant-design/icons-vue";

	const mainStore = useMainStore();

	const { userAlias } = storeToRefs(mainStore);

	const isFirstHomePageVisit = ref(false);

	onMounted(() => {
		if (!sessionStorage.getItem("homePageVisited")) {
			isFirstHomePageVisit.value = true;
			sessionStorage.setItem("homePageVisited", "true");
		}
	});
</script>

<template>
	<section class="home-page" :class="{ 'fade-in': isFirstHomePageVisit }">
		<a-card class="home-page__welcome-card">
			<div class="home-page__welcome-card--title">{{ $t("VIEWS.HOME.WELCOME_TEXT.TITLE", { userAlias }) }} 👋</div>

			<div class="home-page__welcome-card--description">
				{{ $t("VIEWS.HOME.WELCOME_TEXT.DESCRIPTION") }}
			</div>

			<a-button
				type="primary"
				href="/Adrijen Ribić CV.pdf"
				class="home-page__welcome-card--btn"
				target="_blank"
				rel="noopener noreferrer"
			>
				<template #icon>
					<FileTextOutlined />
				</template>

				{{ $t("VIEWS.HOME.WELCOME_TEXT.BUTTON") }}
			</a-button>
		</a-card>
	</section>
</template>

<style scoped lang="scss">
	.home-page {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100vh;

		&__welcome-card {
			display: flex;
			flex-direction: column;
			width: 800px;
			border-radius: 16px;
			padding: 16px;
			margin-top: 12%;

			&--title {
				font-size: 40px;
			}

			&--description {
				font-size: 16px;
				white-space: pre-line;
			}

			&--btn {
				margin-top: 16px;
				width: 200px;
			}
		}
	}

	.fade-in {
		opacity: 0;
		animation: fadeIn 1.5s forwards;
	}

	@keyframes fadeIn {
		to {
			opacity: 1;
		}
	}
</style>
