<script setup lang="ts">
	import { computed, h } from "vue";
	import { useRouter, useRoute } from "vue-router";
	import { useI18n } from "vue-i18n";
	import {
		HomeOutlined,
		UserOutlined,
		MailOutlined,
		ReadOutlined,
		StarOutlined,
		SolutionOutlined,
		FolderOpenOutlined,
		ToolOutlined,
		ProfileOutlined,
	} from "@ant-design/icons-vue";
	import type { SidebarItem, SidebarItems } from "@/interfaces";

	const router = useRouter();
	const route = useRoute();

	const { t } = useI18n();

	const menuItems = computed<SidebarItems>(() => [
		{
			label: t("COMPONENTS.SIDEBAR.ITEMS.HOME"),
			key: "home",
			icon: h(HomeOutlined),
			route: "/",
		},
		{
			label: t("COMPONENTS.SIDEBAR.ITEMS.ABOUT_ME.LABEL"),
			key: "about",
			icon: h(UserOutlined),
			route: "/about",
			children: [
				{
					label: t("COMPONENTS.SIDEBAR.ITEMS.ABOUT_ME.SUB_MENU.EDUCATION"),
					key: "education",
					icon: h(ReadOutlined),
					route: "/about/education",
				},
				{
					label: t("COMPONENTS.SIDEBAR.ITEMS.ABOUT_ME.SUB_MENU.SKILLS_AND_TOOLS"),
					key: "skills-and-tools",
					icon: h(ToolOutlined),
					route: "/about/skills-and-tools",
				},
				{
					label: t("COMPONENTS.SIDEBAR.ITEMS.ABOUT_ME.SUB_MENU.INTERESTS"),
					key: "interests",
					icon: h(StarOutlined),
					route: "/about/interests",
				},
			],
		},
		{
			label: t("COMPONENTS.SIDEBAR.ITEMS.CAREER.LABEL"),
			key: "career",
			icon: h(ProfileOutlined),
			route: "/career",
			children: [
				{
					label: t("COMPONENTS.SIDEBAR.ITEMS.CAREER.SUB_MENU.PORTFOLIO"),
					key: "portfolio",
					icon: h(FolderOpenOutlined),
					route: "/career/portfolio",
				},
				{
					label: t("COMPONENTS.SIDEBAR.ITEMS.CAREER.SUB_MENU.EXPERIENCE"),
					key: "experience",
					icon: h(SolutionOutlined),
					route: "/career/experience",
				},
			],
		},
		{
			label: t("COMPONENTS.SIDEBAR.ITEMS.CONTACT"),
			key: "contact",
			icon: h(MailOutlined),
			route: "/contact",
		},
	]);

	const selectedKey = computed(() => {
		const findKey = (items: SidebarItems, path: string): string | null => {
			for (const item of items) {
				if (item.route === path) return item.key;

				if (item.children) {
					const childKey = findKey(item.children, path);

					if (childKey) return childKey;
				}
			}

			return null;
		};

		return findKey(menuItems.value, route.path) || "";
	});

	const handleMenuClick = ({ key }: { key: string }) => {
		const findItem = (items: SidebarItems, key: string): SidebarItem | null => {
			for (const item of items) {
				if (item.key === key) return item;

				if (item.children) {
					const found = findItem(item.children, key);

					if (found) return found;
				}
			}

			return null;
		};

		const item = findItem(menuItems.value, key);

		if (item && item.route) {
			router.push(item.route);
		}
	};
</script>

<template>
	<a-menu mode="inline" :selected-keys="[selectedKey]" @click="handleMenuClick" class="sidebar">
		<template v-for="item in menuItems" :key="item.key">
			<a-sub-menu v-if="item.children" :key="item.route">
				<template #title>
					<span>
						<component :is="item.icon" />
						<span>{{ item.label }}</span>
					</span>
				</template>

				<a-menu-item v-for="child in item.children" :key="child.key" :icon="child.icon">
					{{ child.label }}
				</a-menu-item>
			</a-sub-menu>

			<a-menu-item v-else :key="item.key" :icon="item.icon">{{ item.label }}</a-menu-item>
		</template>
	</a-menu>
</template>

<style scoped lang="scss">
	.sidebar {
		height: 100vh;
		width: 200px;
	}
</style>
