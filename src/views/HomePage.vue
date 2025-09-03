<script setup lang="ts">
	import { useMainStore } from "../stores/mainStore";
	import { storeToRefs } from "pinia";
	import { FileTextOutlined } from "@ant-design/icons-vue";

	const mainStore = useMainStore();

	const { userAlias } = storeToRefs(mainStore);
</script>

<template>
	<section class="home-page">
		<div class="home-page__welcome-msg">
			<div class="home-page__welcome-msg--title">
				{{ $t("VIEWS.HOME.WELCOME_TEXT.TITLE", { userAlias }) }}
			</div>

			<div class="home-page__welcome-msg--description">
				{{ $t("VIEWS.HOME.WELCOME_TEXT.DESCRIPTION") }}
			</div>

			<a-button type="primary" href="/Adrijen Ribić CV.pdf" class="home-page__welcome-msg--btn">
				<template #icon>
					<FileTextOutlined />
				</template>

				{{ $t("VIEWS.HOME.WELCOME_TEXT.BUTTON") }}
			</a-button>
		</div>
	</section>
</template>

<style scoped lang="scss">
	.home-page {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100vh;

		&__welcome-msg {
			display: flex;
			flex-direction: column;
			width: 800px;
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
</style>
