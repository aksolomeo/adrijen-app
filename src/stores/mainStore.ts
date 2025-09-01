import { ref } from "vue";
import { defineStore } from "pinia";

export const useMainStore = defineStore(
	"mainStore",
	() => {
		// * State
		const userAlias = ref<string>("");
		const showLandingPage = ref<boolean>(true);

		// * Actions

		return { userAlias, showLandingPage };
	},
	{
		persist: { storage: sessionStorage },
	}
);
