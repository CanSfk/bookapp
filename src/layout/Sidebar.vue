<script setup>
import { useLayoutStore } from '../stores/layout'

const layout = useLayoutStore()
</script>

<template>
  <span v-if="layout.isSidebarOpen">{{ layout.isSidebarOpen }}</span>
</template>
