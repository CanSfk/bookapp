<script setup>
import { RouterLink } from 'vue-router'

// Images
import logo from '@/assets/images/logo.webp'

defineProps({
  title: {
    type: String,
    default: 'Bookapp',
  },
})
</script>

<template>
  <RouterLink to="/" class="logo-box" aria-label="BookApp homepage">
    <img :src="logo" alt="Bookapp logo" class="logo-image" />

    <span class="logo-title">{{ title }}</span>
  </RouterLink>
</template>

<style scoped>
.logo-box {
  display: flex;
  height: max-content;
  align-items: center;
  gap: 12px;
}

.logo-image {
  width: 30px;
  height: 32px;
}

.logo-title {
  font-family: var(--font-family-futura-pt);
  font-weight: 700;
  font-size: 20px;
}
</style>
