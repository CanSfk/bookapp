<script setup>
import { useModalStore } from '../../stores/modal'
import { IconClose } from '../icons'

defineProps({
  title: {
    type: String,
    default: 'Modal Title',
  },
})

const modal = useModalStore()
</script>

<template>
  <div class="modal-wrapper">
    <div class="modal-container">
      <div class="modal-title-box">
        <span class="modal-title">{{ title }}</span>

        <button @click="modal.closeModal" class="btn-close" aria-label="menu close">
          <IconClose />
        </button>
      </div>

      <slot name="body"></slot>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped>
.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 200;
}

.modal-container {
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 32px;
  width: 100%;
  max-width: 484px;
  border-radius: 16px;
}

.modal-title-box {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--color-border);
  color: var(--color-text-secondary);
}

.modal-title {
  font-size: 18px;
  font-weight: 700;
}

.btn-close {
  cursor: pointer;
  color: var(--color-text-muted-soft);
}
</style>
