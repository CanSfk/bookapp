<script setup>
const model = defineModel()

defineProps({
  type: {
    type: String,
    default: 'text',
  },
})
</script>

<template>
  <input :type="type" v-model="model" />
</template>

<style scoped>
input {
  width: 100%;
  height: 44px;
  border: 1px solid var(--color-border);
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
  font-family: var(--font-family-roboto);
  color: var(--color-text-muted);
  transition: all 200ms ease-in;
}

input:focus {
  border-color: var(--color-primary);
}
</style>
