<script setup lang="ts">
	import { computed } from "vue";
	import { useRoute } from "vue-router";
	import { useI18n } from "vue-i18n";

	const route = useRoute();
	const { t } = useI18n();

	const pageTitle = computed(() => (route.meta.title || "") as string | undefined);
</script>

<template>
	<div class="page-header">
		{{ t(pageTitle) }}
	</div>
</template>

<style scoped lang="scss">
	.page-header {
		position: absolute;
		margin: 4px 0 0 24px;
		font-size: 2.5rem;
	}
</style>
