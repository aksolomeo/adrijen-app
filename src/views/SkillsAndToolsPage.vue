<script setup lang="ts">
	import { ref } from "vue";
	import skillsAndToolsJson from "../data/skills-and-tools.json";
	import type { SkillsAndTools } from "../interfaces";

	const skillsAndTools = ref<SkillsAndTools>(skillsAndToolsJson);
</script>

<template>
	<section class="skills-and-tools-page">
		<div class="skills-and-tools-page__grid">
			<div v-for="(skill, index) in skillsAndTools" :key="index" class="skills-and-tools-page__grid--item">
				<label>{{ skill.skill }}</label>
				<a-rate :value="skill.rating" disabled :count="5" character="●" />
			</div>
		</div>
	</section>
</template>

<style scoped lang="scss">
	.skills-and-tools-page {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 10%;

		&__grid {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(200px, 0.3fr));
			column-gap: 7rem;
			row-gap: 1rem;
			width: 1000px;
			background: #fff;
			justify-content: center;
			padding: 24px 0;
			border-radius: 8px;
			box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);

			&--item {
				display: flex;
				align-items: center;
				justify-content: space-between;

				& label {
					font-weight: 600;
					margin-right: 8px;
				}
			}
		}
	}
</style>
