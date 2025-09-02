<template>
	<section class="top-bar-nav">
		<a-dropdown placement="bottomRight" class="language-dropdown">
			<a-button class="language-dropdown__flag-btn">
				<span class="language-dropdown__flag-btn--flag" :class="selectedFlagClass" />
			</a-button>

			<template #overlay>
				<a-menu class="language-dropdown__menu">
					<a-menu-item
						v-for="lang in languages"
						:key="lang.code"
						class="language-dropdown__menu--item"
						@click="changeLanguage(lang.code)"
					>
						<span :class="lang.flagClass" />
						<span class="language-dropdown__menu--label">{{ lang.label }}</span>
					</a-menu-item>
				</a-menu>
			</template>
		</a-dropdown>
	</section>
</template>

<script setup lang="ts">
	import { useI18n } from "vue-i18n";
	import { computed } from "vue";

	const { locale } = useI18n();

	const languages = [
		{ code: "en", flagClass: "fi fi-gb", label: "English" },
		{ code: "de", flagClass: "fi fi-de", label: "Deutsch" },
		{ code: "fr", flagClass: "fi fi-fr", label: "Français" },
	];

	const changeLanguage = code => {
		locale.value = code;
	};

	const selectedFlagClass = computed(() => {
		const lang = languages.find(l => l.code === locale.value);

		return lang ? lang.flagClass : "fi fi-gl";
	});
</script>

<style scoped lang="scss">
	.top-bar-nav {
		position: absolute;
		top: 16px;
		right: 16px;

		.language-dropdown {
			&__flag-btn {
				display: flex;
				align-items: center;
				width: 40px;
				height: 40px;
				padding: 4px;
				border-radius: 50% !important;
				justify-content: center;
				overflow: hidden;

				&--flag {
					display: block;
					width: 100%;
					height: 100%;
					border-radius: 50%;
					background-size: cover;
					background-position: center;
				}
			}
		}
	}

	:deep(.language-dropdown__menu--item) {
		user-select: none;
	}

	:deep(.language-dropdown__menu--label) {
		margin-left: 8px;
	}
</style>
