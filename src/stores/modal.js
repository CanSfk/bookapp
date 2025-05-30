import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => ({
    modalName: null,
  }),
  actions: {
    openModal(name) {
      this.modalName = name
    },
    closeModal() {
      this.modalName = null
    },
  },
})
