import { defineStore } from "pinia"

export const useModalStore = defineStore('modal', {
	state: () => ({
		modalState: false
	}),
	actions: {
		toggle() {
			this.modalState = !this.modalState
		}
	}
})