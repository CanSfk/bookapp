<script setup lang="ts">
import { useModalStore } from '../stores/modal'

const modal = useModalStore()
</script>

<template>
  <div class="xl">
    <h1>Temp View</h1>

    <div>
      <button @click="modal.openModal('book-entry-modal')">CLick</button>
    </div>
  </div>
</template>

<style scoped>
.xl {
  display: grid;
  place-items: center;
  gap: 60px;
}
</style>
