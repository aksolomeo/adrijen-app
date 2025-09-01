<script setup lang="ts">
	import { computed, h } from "vue";
	import { useRouter, useRoute } from "vue-router";
	import { useI18n } from "vue-i18n";
	import { HomeOutlined, UserOutlined, MailOutlined } from "@ant-design/icons-vue";

	const router = useRouter();
	const route = useRoute();

	const { t } = useI18n();
	const selectedKey = computed(() => {
		const item = menuItems.find(i => i.route === route.path);

		return item ? item.key : "";
	});

	const menuItems = [
		{ label: t("COMPONENTS.SIDEBAR.ITEMS.HOME"), key: "home", icon: h(HomeOutlined), route: "/" },
		{ label: t("COMPONENTS.SIDEBAR.ITEMS.ABOUT_ME"), key: "about", icon: h(UserOutlined), route: "/about" },
		{ label: t("COMPONENTS.SIDEBAR.ITEMS.CONTACT_ME"), key: "contact", icon: h(MailOutlined), route: "/contact" },
	];

	const handleMenuClick = ({ key }) => {
		const item = menuItems.find(i => i.key === key);

		if (item) {
			router.push(item.route);
		}
	};
</script>

<template>
	<a-menu mode="inline" :selected-keys="[selectedKey]" @click="handleMenuClick" class="sidebar">
		<a-menu-item v-for="item in menuItems" :key="item.key" :icon="item.icon">
			<span>{{ item.label }}</span>
		</a-menu-item>
	</a-menu>
</template>

<style scoped lang="scss">
	.sidebar {
		height: 100vh;
		width: 200px;
	}
</style>
