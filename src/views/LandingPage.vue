<script setup lang="ts">
	import { ref } from "vue";
	import parentalAdvisoryImg from "../assets/images/parental-advisory.png";
	import warning18img from "../assets/images/warning-18-sign.png";
	import { useI18n } from "vue-i18n";
	import { useMainStore } from "../stores/mainStore";
	import { storeToRefs } from "pinia";

	const mainStore = useMainStore();

	const { t } = useI18n();
	const { userNickname } = storeToRefs(mainStore);
	const formRef = ref();
	const isAgreementChecked = ref(false);
	const rules = {
		nickname: [{ required: true, message: t("VIEWS.LANDING.INPUT.VALIDATION_MSG"), trigger: "blur" }],
	};

	const emit = defineEmits<(e: "enter") => void>();

	const onEnter = () => {
		formRef.value
			.validate()
			.then(() => {
				if (isAgreementChecked.value) {
					emit("enter");
				}
			})
			.catch(error => {
				console.log("Nickname validation failed:", error);
			});
	};
</script>

<template>
	<div class="landing-page">
		<img :src="warning18img" alt="Logo" class="landing-page__img--warning18" />
		<img :src="parentalAdvisoryImg" alt="Logo" class="landing-page__img--parentalAdvisory" />

		<a-form ref="formRef" :model="{ nickname: userNickname }" :rules="rules" layout="vertical">
			<a-form-item name="nickname">
				<a-input
					v-model:value="userNickname"
					:addon-before="$t('VIEWS.LANDING.INPUT.LABEL')"
					:placeholder="$t('VIEWS.LANDING.INPUT.PLACEHOLDER')"
					class="landing-page__input"
				/>
			</a-form-item>
		</a-form>

		<div class="landing-page__agreement">
			<a-checkbox v-model:checked="isAgreementChecked" class="landing-page__agreement--checkbox" />
			<span class="landing-page__agreement--text">{{ $t("VIEWS.LANDING.AGREEMENT") }}</span>
		</div>

		<a-button type="primary" size="large" :disabled="!isAgreementChecked" danger @click="onEnter">
			{{ $t("VIEWS.LANDING.BUTTON") }}
		</a-button>
	</div>
</template>

<style scoped lang="scss">
	.landing-page {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		user-select: none;

		&__img {
			&--warning18 {
				position: absolute;
				top: 48px;
				right: 48px;
				width: 200px;
			}

			&--parentalAdvisory {
				width: 700px;
			}
		}

		&__input {
			margin-top: 24px;
			width: 350px;

			:deep(.ant-input-group-addon) {
				border-radius: 8px 0 0 8px;
			}

			:deep(.ant-input) {
				border-radius: 0 8px 8px 0;
			}
		}

		&__agreement {
			width: 600px;
			text-align: center;
			margin: 24px 0;
			font-style: italic;

			&--text {
				margin-left: 12px;
			}
		}
	}
</style>
