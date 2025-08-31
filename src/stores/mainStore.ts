import { ref } from "vue";
import { defineStore } from "pinia";

export const useMainStore = defineStore("mainStore", () => {
	// * State
	const userNickname = ref<string>("");

	// * Actions

	return { userNickname };
});
