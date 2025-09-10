<script setup lang="ts">
	import { h } from "vue";
	import { BankOutlined } from "@ant-design/icons-vue";
	import dgLogo from "@/assets/images/DG logo.jpg";
	import arosiiLogo from "@/assets/images/Arosii logo.jpg";
	import dgTeam from "@/assets/images/DG team.jpg";
</script>

<template>
	<section class="experience-page">
		<a-card class="experience-page__card">
			<a-timeline>
				<a-timeline-item :dot="h(BankOutlined, { style: 'font-size: 20px' })">
					<div v-html="$t('VIEWS.EXPERIENCE.TIMELINE.OBRT')" />
				</a-timeline-item>

				<a-timeline-item :dot="h('img', { src: dgLogo, class: 'timeline-logo' })">
					<div style="display: flex; gap: 24px">
						<div v-html="$t('VIEWS.EXPERIENCE.TIMELINE.DIGITAL_GUEST')" style="width: 500px" />
						<a-image :src="dgTeam" :width="200" />
					</div>
				</a-timeline-item>

				<a-timeline-item :dot="h('img', { src: arosiiLogo, class: 'timeline-logo' })">
					<div v-html="$t('VIEWS.EXPERIENCE.TIMELINE.AROSII')" />
				</a-timeline-item>
			</a-timeline>
		</a-card>
	</section>
</template>

<style scoped lang="scss">
	.experience-page {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;

		&__card {
			padding: 24px;
			border-radius: 16px;
		}

		.timeline-logo {
			width: 25px;
			height: 25px;
			object-fit: contain;
			border-radius: 50%;
		}

		:deep(.timeline-description) {
			color: #8c8c8c;
		}
	}
</style>
