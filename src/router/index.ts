import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: () => import("../views/HomePage.vue"),
		},
		{
			path: "/about",
			redirect: "/about/education",
			children: [
				{
					path: "/about/education",
					name: "education",
					meta: { title: "COMPONENTS.SIDEBAR.ITEMS.ABOUT_ME.SUB_MENU.EDUCATION" },
					component: () => import("../views/EducationPage.vue"),
				},
				{
					path: "/about/skills-and-tools",
					name: "skills-and-tools",
					meta: { title: "COMPONENTS.SIDEBAR.ITEMS.ABOUT_ME.SUB_MENU.SKILLS_AND_TOOLS" },
					component: () => import("../views/SkillsAndToolsPage.vue"),
				},
				{
					path: "/about/talent-report",
					name: "talent-report",
					meta: { title: "COMPONENTS.SIDEBAR.ITEMS.ABOUT_ME.SUB_MENU.TALENT_REPORT" },
					component: () => import("../views/TalentReportPage.vue"),
				},
				{
					path: "/about/interests",
					name: "interests",
					meta: { title: "COMPONENTS.SIDEBAR.ITEMS.ABOUT_ME.SUB_MENU.INTERESTS" },
					component: () => import("../views/InterestsPage.vue"),
				},
			],
		},
		{
			path: "/career",
			redirect: "/career/portfolio",
			children: [
				{
					path: "/career/portfolio",
					name: "portfolio",
					meta: { title: "COMPONENTS.SIDEBAR.ITEMS.CAREER.SUB_MENU.PORTFOLIO" },
					component: () => import("../views/PortfolioPage.vue"),
				},
				{
					path: "/career/experience",
					name: "experience",
					meta: { title: "COMPONENTS.SIDEBAR.ITEMS.CAREER.SUB_MENU.EXPERIENCE" },
					component: () => import("../views/ExperiencePage.vue"),
				},
			],
		},
		{
			path: "/contact",
			name: "contact",
			meta: { title: "COMPONENTS.SIDEBAR.ITEMS.CONTACT" },
			component: () => import("../views/ContactPage.vue"),
		},
	],
});

export default router;
