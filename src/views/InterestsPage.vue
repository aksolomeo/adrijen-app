<script setup lang="ts">
	import { ref } from "vue";
	import { Vue3AudioPlayer } from "@codeniu/vue3-audio-player";
	import "@codeniu/vue3-audio-player/dist/vue3-audio-player.css";
	import hemomancerTheme from "@/assets/music/Hemomancer Main Theme, Pt. 1.wav";
	import dandelion from "@/assets/music/Dandelion.wav";
	import hikingDolomites from "@/assets/images/hiking-dolomites.jpg";
	import hikingAlps from "@/assets/images/hiking-alps.jpg";
	import hikingGalicnik from "@/assets/images/hiking-galicnik.jpg";
	import hikingPepushaj from "@/assets/images/hiking-pepushaj.jpg";

	const images = ref([hikingDolomites, hikingAlps, hikingGalicnik, hikingPepushaj]);
</script>

<template>
	<section class="interests-page">
		<div class="interests-page__cards-wrapper">
			<a-card hoverable :bordered="false" class="interests-page__card music-production-card">
				<template #title>
					<fa-icon icon="music" class="interests-page__card--icon" />
					{{ $t("VIEWS.INTERESTS.MUSIC_PRODUCTION.TITLE") }}
				</template>

				<div class="interests-page__card--description">{{ $t("VIEWS.INTERESTS.MUSIC_PRODUCTION.DESCRIPTION") }}</div>

				<vue3-audio-player
					:audio-list="[
						{
							src: dandelion,
						},
					]"
					theme-color="#0578ad"
					:show-name="true"
				/>

				<div class="music-production-card__track-title">
					{{ $t("VIEWS.INTERESTS.MUSIC_PRODUCTION.TRACK_TITLES.DANDELION") }}
				</div>

				<div style="display: flex; justify-content: center">
					<a-divider />
				</div>

				<vue3-audio-player
					:audio-list="[
						{
							src: hemomancerTheme,
						},
					]"
					theme-color="#0578ad"
					:show-name="true"
				/>

				<div class="music-production-card__track-title">
					{{ $t("VIEWS.INTERESTS.MUSIC_PRODUCTION.TRACK_TITLES.HEMOMANCER_MAIN_THEME") }}
				</div>
			</a-card>

			<div class="interests-page__cards-wrapper--middle-container">
				<a-card hoverable :bordered="false" class="interests-page__card">
					<template #title>
						<fa-icon icon="guitar" class="interests-page__card--icon" />
						{{ $t("VIEWS.INTEREST.GUITAR.TITLE") }}
					</template>

					<div class="interests-page__card--description">{{ $t("VIEWS.INTERESTS.GUITAR.DESCRIPTION") }}</div>
				</a-card>

				<a-card hoverable :bordered="false" class="interests-page__card">
					<template #title>
						<fa-icon icon="futbol" class="interests-page__card--icon" />
						{{ $t("VIEWS.INTERESTS.SPORTS.TITLE") }}
					</template>

					<div class="interests-page__card--description">{{ $t("VIEWS.INTERESTS.SPORTS.DESCRIPTION") }}</div>
				</a-card>
			</div>

			<a-card hoverable :bordered="false" class="interests-page__card traveling-card">
				<template #title>
					<fa-icon icon="person-hiking" class="interests-page__card--icon" />
					{{ $t("VIEWS.INTERESTS.TRAVELING_AND_HIKING.TITLE") }}
				</template>

				<div class="interests-page__card--description">
					{{ $t("VIEWS.INTERESTS.TRAVELING_AND_HIKING.DESCRIPTION") }}
				</div>

				<a-carousel autoplay>
					<div v-for="(img, index) in images" :key="index">
						<img :src="img" style="width: 100%; height: 220px; object-fit: cover" />
					</div>
				</a-carousel>
			</a-card>
		</div>
	</section>
</template>

<style scoped lang="scss">
	.interests-page {
		display: flex;
		justify-content: center;
		padding: 48px;
		background: #e8eff6;
		margin-top: 10%;

		&__cards-wrapper {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
			gap: 24px;
			width: 100%;
			max-height: 50%;
			max-width: calc(4 * 320px + 3 * 24px);

			&--middle-container {
				display: grid;
				grid-template-rows: 1fr 1fr;
				gap: 24px;
			}

			.music-production-card {
				grid-row: span 2;

				&__track-title {
					text-align: center;
					font-size: 12px;
					color: #0578ad;
					margin-top: -20px;
				}
			}

			.traveling-card {
				grid-row: span 2;
			}
		}

		&__card {
			cursor: default;
			max-width: 440px;

			&--icon {
				margin-right: 4px;
			}

			&--description {
				white-space: pre-line;
				margin-bottom: 12px;
			}
		}

		.ant-divider {
			margin: 16px 0 0 0;
			min-width: 80%;
			max-width: 80%;
		}
	}
</style>
