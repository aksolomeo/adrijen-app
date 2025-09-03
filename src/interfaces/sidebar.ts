import type { VNode } from "vue";

export interface SidebarItem {
	label: string;
	key: string;
	icon?: VNode;
	route: string;
	children?: SidebarItem[];
}

export type SidebarItems = SidebarItem[];
