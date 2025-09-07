<script setup lang="ts">
	import computerScienceDiplomaPage1 from "@/assets/images/Diploma of AP Degree in Computer Science Page 1.jpg";
	import computerScienceDiplomaPage2 from "@/assets/images/Diploma of AP Degree in Computer Science Page 2.jpg";
	import bachelorDiplomaPage1 from "@/assets/images/Diploma of Bachelor's Degree Programme in Web Development Page 1.jpg";
	import bachelorDiplomaPage2 from "@/assets/images/Diploma of Bachelor's Degree Programme in Web Development Page 2.jpg";
</script>

<template>
	<section class="education-page">
		<section class="education-page__left-side">
			<div class="education-page__left-side--title">
				{{ $t("VIEWS.EDUCATION.DIPLOMA_COMPUTER_SCIENCE.TITLE") }}
			</div>

			<div>
				<a-image-preview-group>
					<a-image :width="250" :src="computerScienceDiplomaPage1" />
					<a-image :width="250" :src="computerScienceDiplomaPage2" />
				</a-image-preview-group>
			</div>

			<div class="education-page__left-side--details">
				<a href="https://www.baaa.dk/" target="_blank" rel="noopener noreferrer" style="color: #039fb0">
					{{ $t("VIEWS.EDUCATION.DIPLOMA_COMPUTER_SCIENCE.EDUCATIONAL_INSTITUTION") }}
					<fa-icon icon="arrow-up-right-from-square" />
				</a>
				<div>{{ $t("VIEWS.EDUCATION.DIPLOMA_COMPUTER_SCIENCE.DETAILS") }}</div>
			</div>
		</section>

		<section class="education-page__right-side">
			<div class="education-page__right-side--title">
				{{ $t("VIEWS.EDUCATION.DIPLOMA_WEB_DEVELOPMENT.TITLE") }}
			</div>

			<div>
				<a-image-preview-group>
					<a-image :width="274" :src="bachelorDiplomaPage1" />
					<a-image :width="274" :src="bachelorDiplomaPage2" />
				</a-image-preview-group>
			</div>

			<div class="education-page__right-side--details">
				<a href="https://www.baaa.dk/" target="_blank" rel="noopener noreferrer" style="color: #039fb0">
					{{ $t("VIEWS.EDUCATION.DIPLOMA_WEB_DEVELOPMENT.EDUCATIONAL_INSTITUTION") }}
					<fa-icon icon="arrow-up-right-from-square" />
				</a>
				<div>{{ $t("VIEWS.EDUCATION.DIPLOMA_WEB_DEVELOPMENT.DETAILS") }}</div>
			</div>
		</section>
	</section>
</template>

<style scoped lang="scss">
	.education-page {
		display: flex;
		justify-content: center;
		gap: 8%;
		margin-top: 12%;

		&__left-side,
		&__right-side {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 18px;

			&--title {
				font-size: 16px;
				font-weight: 500;
			}

			&--details {
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-top: 4px;
			}
		}
	}

	:deep(.ant-image:nth-child(2)) {
		margin-left: 8px;
	}

	:deep(.ant-image:nth-child(5)) {
		margin-left: 8px;
	}
</style>
