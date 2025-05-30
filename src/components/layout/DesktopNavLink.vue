<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <RouterLink :to="to" class="link" active-class="active">{{ title }}</RouterLink>
</template>

<style scoped>
.link {
  font-weight: 500;
  padding: 10px 16px;
  border-bottom: 2px solid transparent;
  transition: color 300ms ease-in;
}

.link:hover,
.active {
  color: var(--color-primary);
}

.link.active {
  border-color: var(--color-primary);
}
</style>
