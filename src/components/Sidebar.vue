<script setup lang="ts">
	import { ref } from "vue";
	import { useRouter, useRoute } from "vue-router";

	// Define your menu items
	const menuItems = [
		{ label: "Home", key: "home", route: "/" },
		{ label: "About", key: "about", route: "/about" },
		{ label: "Contact", key: "contact", route: "/contact" },
	];

	const router = useRouter();
	const route = useRoute();

	// Track selected menu item
	const selectedKey = ref(route.path);

	// Handle menu click
	const handleMenuClick = ({ key }) => {
		const item = menuItems.find(i => i.key === key);

		if (item) {
			router.push(item.route);
			selectedKey.value = key;
		}
	};
</script>

<template>
	<a-menu mode="inline" :selected-keys="[selectedKey]" @click="handleMenuClick" style="height: 100vh; width: 200px">
		<a-menu-item v-for="item in menuItems" :key="item.key">
			{{ item.label }}
		</a-menu-item>
	</a-menu>
</template>
