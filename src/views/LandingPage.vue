<script setup lang="ts">
	import { ref } from "vue";
	import adrijenAvatar from "../assets/images/adrijen-avatar.png";
	import { useI18n } from "vue-i18n";
	import { useMainStore } from "../stores/mainStore";
	import { storeToRefs } from "pinia";

	const mainStore = useMainStore();

	const { t } = useI18n();
	const { userAlias } = storeToRefs(mainStore);
	const formRef = ref();
	const isLoading = ref(false);
	const rules = {
		alias: [{ required: true, message: t("VIEWS.LANDING.INPUT.VALIDATION_MSG"), trigger: "blur" }],
	};
	const speechBubble = `
╭───────────────────────────────╮
│ Greetings, visitor!           │
│ Who do I have the pleasure    │
│ of meeting?                   │
│ Please type your alias below! │
╰───────────────────────────────╯`;

	const emit = defineEmits<(e: "enter") => void>();

	const onEnter = () => {
		formRef.value
			.validate()
			.then(() => {
				if (userAlias.value) {
					isLoading.value = true;

					setTimeout(() => {
						isLoading.value = false;
						emit("enter");
					}, 1000);
				}
			})
			.catch(error => {
				console.log("Alias validation failed:", error);
			});
	};
</script>

<template>
	<div class="landing-page">
		<div class="landing-page__inner-wrapper">
			<img :src="adrijenAvatar" alt="Logo" class="landing-page__avatar" />

			<section class="landing-page__greetings-wrapper">
				<pre class="landing-page__speech-bubble">{{ speechBubble }}</pre>

				<a-form ref="formRef" :model="{ alias: userAlias }" :rules="rules" layout="vertical">
					<a-form-item name="alias">
						<a-input
							v-model:value="userAlias"
							:addon-before="$t('VIEWS.LANDING.INPUT.LABEL')"
							:placeholder="$t('VIEWS.LANDING.INPUT.PLACEHOLDER')"
							class="landing-page__input"
						/>
					</a-form-item>
				</a-form>

				<a-button
					type="primary"
					size="large"
					:disabled="!userAlias"
					:loading="isLoading"
					class="landing-page__btn"
					@click="onEnter"
				>
					{{ $t("VIEWS.LANDING.BUTTON") }}
				</a-button>
			</section>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.landing-page {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background: #e8eff6;
		user-select: none;

		&__inner-wrapper {
			display: flex;
			align-items: flex-start;
			justify-content: flex-start;
		}

		&__greetings-wrapper {
			display: flex;
			flex-direction: column;
			justify-content: center;
			margin-top: 48px;
			margin-left: -8%;
		}

		&__avatar {
			width: 500px;
		}

		&__input {
			width: 300px;

			:deep(.ant-input-group-addon) {
				border-radius: 8px 0 0 8px;
			}

			:deep(.ant-input) {
				border-radius: 0 8px 8px 0;
			}
		}

		&__btn {
			width: 150px;
		}
	}
</style>
