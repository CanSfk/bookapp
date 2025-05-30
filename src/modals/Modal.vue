<script setup>
import { computed } from 'vue'
import { useModalStore } from '@/stores/modal'
import { modalMap } from '@/mappings/modalMap'

const store = useModalStore()

const currentModal = computed(() => modalMap.find((md) => md.name === store.modalName))
</script>

<template>
  <component v-if="currentModal" :is="currentModal.component" />
</template>
