<script setup lang="ts">
	import { Vue3AudioPlayer } from "@codeniu/vue3-audio-player";
	import "@codeniu/vue3-audio-player/dist/vue3-audio-player.css";
	import hemomancerTheme from "@/assets/music/Hemomancer Main Theme, Pt. 1.wav";
	import dandelion from "@/assets/music/Dandelion.wav";

	const playlist = [
		{
			src: dandelion,
		},
		{
			src: hemomancerTheme,
		},
	];
</script>

<template>
	<section class="interests-page">
		<a-row :gutter="[24, 24]" class="interests-page__cards-wrapper">
			<a-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" class="interests-page__card">
				<a-card hoverable :bordered="false">
					<template #title>
						<fa-icon icon="music" />
						{{ $t("VIEWS.INTEREST.MUSIC_PRODUCTION.TITLE") }}
					</template>

					<div class="interests-page__card--description">{{ $t("VIEWS.INTEREST.MUSIC_PRODUCTION.DESCRIPTION") }}</div>

					<vue3-audio-player :audio-list="playlist" theme-color="#039fb0" :show-name="true" />
				</a-card>
			</a-col>

			<a-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" class="interests-page__card">
				<a-card hoverable :bordered="false">
					<template #title>
						<fa-icon icon="guitar" />
						{{ $t("VIEWS.INTEREST.GUITAR.TITLE") }}
					</template>

					<div class="interests-page__card--description">{{ $t("VIEWS.INTEREST.GUITAR.DESCRIPTION") }}</div>
				</a-card>
			</a-col>

			<a-col v-for="n in 4" :key="n" :xs="24" :sm="12" :md="8" :lg="8" :xl="8" class="interests-page__card">
				<a-card hoverable :bordered="false">
					<template #title>Card {{ n }}</template>
					<p>Card {{ n }} content goes here.</p>
				</a-card>
			</a-col>
		</a-row>
	</section>
</template>

<style scoped lang="scss">
	.interests-page {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		padding: 48px;

		&__cards-wrapper {
			display: flex;
			justify-content: center;
		}

		&__card {
			cursor: default;
			max-width: 440px;

			&--description {
				white-space: pre-line;
				margin-bottom: 12px;
			}
		}
	}
</style>
