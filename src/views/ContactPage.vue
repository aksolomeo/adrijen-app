<script setup lang="ts">
	import { ref, reactive } from "vue";
	import { useI18n } from "vue-i18n";
	import emailJS from "emailjs-com";
	import { message } from "ant-design-vue";
	import Adrijen from "@/assets/images/Adrijen Ribić.jpg";
	import { EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, EMAIL_JS_USER_ID } from "@/constants/emailjs";
	import { LINKED_IN } from "@/constants/links";
	import type { ContactForm } from "../interfaces";

	const { t } = useI18n();

	const isBtnLoading = ref(false);

	const form: ContactForm = reactive({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleSubmit = () => {
		isBtnLoading.value = true;

		const templateParams = {
			name: form.name,
			email: form.email,
			subject: form.subject,
			message: form.message,
		};

		emailJS
			.send(EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, templateParams, EMAIL_JS_USER_ID)
			.then(
				function (response) {
					form.name = "";
					form.email = "";
					form.subject = "";
					form.message = "";

					message.success(t("VIEWS.CONTACT.FORM.SUCCESS_MESSAGE"));
					console.log("Email sent!", response.status, response.text);
				},
				function (err) {
					console.log("Email sending failed...", err);
				}
			)
			.finally(() => {
				isBtnLoading.value = false;
			});
	};
</script>

<template>
	<div class="contact-page">
		<div class="contact-page-container">
			<div class="contact-page-container__info">
				<a-avatar :src="Adrijen" :size="128" style="box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15)" />

				<div>
					<div class="contact-page-container__info--item">
						<fa-icon icon="envelope" />
						<span>adrijen.ribic@yahoo.com</span>
					</div>

					<div class="contact-page-container__info--item">
						<fa-icon :icon="['fab', 'linkedin']" color="#0578ad" />
						<a :href="LINKED_IN" target="_blank" rel="noopener noreferrer">
							{{ $t("VIEWS.CONTACT.INFO.LINKED_IN") }}
						</a>
					</div>

					<div class="contact-page-container__info--item">
						<fa-icon icon="phone" />
						<span>{{ $t("VIEWS.CONTACT.INFO.PHONE") }}</span>
					</div>

					<div class="contact-page-container__info--item">
						<fa-icon icon="location-dot" style="margin-top: -50px" />
						<span style="white-space: pre-line">{{ $t("VIEWS.CONTACT.INFO.LOCATION") }}</span>
					</div>
				</div>
			</div>

			<div class="contact-page-container__form">
				<a-form layout="vertical" @submit.prevent="handleSubmit">
					<a-form-item :label="$t('VIEWS.CONTACT.FORM.NAME.LABEL')">
						<a-input v-model:value="form.name" :placeholder="$t('VIEWS.CONTACT.FORM.NAME.PLACEHOLDER')" />
					</a-form-item>

					<a-form-item :label="$t('VIEWS.CONTACT.FORM.EMAIL.LABEL')">
						<a-input v-model:value="form.email" :placeholder="$t('VIEWS.CONTACT.FORM.EMAIL.PLACEHOLDER')" />
					</a-form-item>

					<a-form-item :label="$t('VIEWS.CONTACT.FORM.SUBJECT.LABEL')">
						<a-input v-model:value="form.subject" :placeholder="$t('VIEWS.CONTACT.FORM.SUBJECT.PLACEHOLDER')" />
					</a-form-item>

					<a-form-item :label="$t('VIEWS.CONTACT.FORM.MESSAGE.LABEL')">
						<a-textarea
							v-model:value="form.message"
							:rows="4"
							:placeholder="$t('VIEWS.CONTACT.FORM.MESSAGE.PLACEHOLDER')"
							style="resize: none"
						/>
					</a-form-item>

					<a-form-item>
						<a-button
							type="primary"
							html-type="submit"
							:disabled="!form.name || !form.email || !form.message"
							:loading="isBtnLoading"
							style="width: 250px"
						>
							{{ $t("VIEWS.CONTACT.FORM.BUTTON") }}
						</a-button>
					</a-form-item>
				</a-form>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.contact-page {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 48px;
		background: #e8eff6;
		min-height: 100vh;

		&-container {
			display: flex;
			gap: 48px;
			max-width: 1000px;
			width: 100%;

			&__info {
				position: relative;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				flex: 1;
				background: #fff;
				border-radius: 8px;
				padding: 24px;
				box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
				gap: 20px;

				&--item {
					display: flex;
					align-items: center;
					gap: 12px;
					font-size: 16px;
					margin-bottom: 8px;
				}
			}

			&__form {
				flex: 1;
				background: #fff;
				border-radius: 8px;
				padding: 24px;
				box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
			}
		}

		:deep(.ant-input) {
			border-radius: 4px;
		}
	}
</style>
