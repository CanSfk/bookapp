<script setup>
import { computed } from 'vue'

const props = defineProps({
  isBorder: Boolean,
})

const classes = computed(() => ({
  btn: true,
  border: props.isBorder,
}))
</script>

<template>
  <button :class="classes">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: grid;
  place-items: center;
}

.btn.border {
  border: 1px solid var(--color-border);
}
</style>
