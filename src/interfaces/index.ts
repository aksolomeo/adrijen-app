import type { VNode } from "vue";

export interface SidebarItem {
	label: string;
	key: string;
	icon?: VNode;
	route: string;
	children?: SidebarItem[];
}

export interface SkillsAndToolsItem {
	skill: string;
	rating: number;
}

export type SidebarItems = SidebarItem[];
export type SkillsAndTools = SkillsAndToolsItem[];
