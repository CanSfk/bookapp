<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator(value) {
      return ['primary'].includes(value)
    },
  },
  size: {
    type: String,
    default: 'md',
    validator(value) {
      return ['lg', 'md', 'sm'].includes(value)
    },
  },
  isOutline: {
    type: Boolean,
  },
})

const classes = computed(() => ({
  btn: true,
  [props.size]: true,
  [props.variant]: true,
  outline: props.isOutline,
}))
</script>

<template>
  <button :class="classes">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  min-width: 120px;
  font-size: 14px;
  font-weight: bold;
  border: 2px solid;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 300ms ease-in, color 300ms ease-in;
}

.btn.lg {
  padding: 7px 16px;
  height: 48px;
}

.btn.md {
  height: 37px;
}

.btn.sm {
  height: 37px;
}

.btn.primary {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  color: var(--white);
}

.btn.primary.outline {
  background-color: transparent;
  color: var(--color-primary);
}

.btn.primary:hover {
  background-color: var(--color-primary-dark);
  border-color: var(--color-primary-dark);
  color: var(--white);
}
</style>
