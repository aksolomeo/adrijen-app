<script setup lang="ts">
	import talentsImg from "@/assets/images/FirstMind - 34 Talents.jpg";
	import archetypesImg from "@/assets/images/FirstMind - Archetypes.jpg";
	import workBehaviourImg from "@/assets/images/FirstMind - Work Behaviour.jpg";
</script>

<template>
	<section class="talent-report-page">
		<a-space :size="24" direction="vertical">
			<a-card class="talent-report-page__description" bordered>
				<p v-html="$t('VIEWS.TALENT_REPORT.DESCRIPTION')" style="white-space: pre-line"></p>

				<a href="/FirstMind - Adrijen Ribić.pdf" target="_blank" rel="noopener noreferrer">
					📄 {{ $t("VIEWS.TALENT_REPORT.REPORT_LINK_TEXT") }}
				</a>
			</a-card>

			<a-image :width="500" :src="talentsImg" />
		</a-space>

		<a-image-preview-group>
			<a-space :size="24" direction="vertical">
				<a-image :width="500" :src="archetypesImg" />
				<a-image :width="500" :src="workBehaviourImg" />
			</a-space>
		</a-image-preview-group>
	</section>
</template>

<style scoped lang="scss">
	.talent-report-page {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		padding: 48px;
		gap: 24px;
		background: #e8eff6;
		margin-top: 6%;

		&__description {
			background: #fff;
			max-width: 500px;
			height: 394px;
			padding: 24px;
			text-align: center;
			font-size: 16px;
			line-height: 1.6;
			box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
		}
	}
</style>
