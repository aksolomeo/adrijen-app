import { ref } from "vue";
import { defineStore } from "pinia";

export const useMainStore = defineStore("mainStore", () => {
	// * State
	const userAlias = ref<string>("");

	// * Actions

	return { userAlias };
});
