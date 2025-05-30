<script setup>
import { computed } from 'vue'

// Icons
import { IconChevronDown } from '../icons'

const props = defineProps({
  modelValue: Number,
  title: String,
  defValue: {
    type: Number,
    default: 0,
  },
  data: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['update:modelValue'])

const val = computed({
  get: () =>
    props.data.find((item) => item.value === props.modelValue) || {
      label: props.title,
      value: props.defValue,
    },
  set: (newVal) => emit('update:modelValue', newVal.value),
})

const handleClick = (item) => {
  val.value = item
}
</script>

<template>
  <div class="select">
    <button type="button" class="select-button" tabindex="0">
      <span>{{ val.label }}</span>
      <IconChevronDown class="icon" />
    </button>

    <ul class="select-list">
      <li
        v-for="item in data"
        :key="item.value"
        @click="handleClick(item)"
        :class="{ active: item.value === val.value.value }"
      >
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.select {
  position: relative;
  width: 200px;
  font-family: var(--font-family-roboto);
  color: var(--color-text-muted);
  z-index: 10;
}

.select-button {
  position: relative;
  width: 100%;
  height: 44px;
  border: 1px solid var(--color-border);
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 200ms ease-in;
  z-index: 10;
  background: transparent;
}

.select-button:focus {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-color: var(--color-primary);
  border-left-color: var(--color-primary);
  border-right-color: var(--color-primary);
}

.select-list {
  position: absolute;
  left: 0;
  top: calc(100% - 20px);
  width: 100%;
  padding: 6px;
  font-size: 13px;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-top: none;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  visibility: hidden;
  opacity: 0;
  transition: all 200ms ease-in;
}

.select-button:focus + .select-list {
  visibility: visible;
  opacity: 1;
  top: 100%;
}

.select-button:focus .icon {
  color: var(--color-text-primary);
}

.select-list li {
  cursor: pointer;
  padding: 8px 5px;
  border-radius: 4px;
  transition: all 200ms ease-in;
}

.select-list li:hover,
.active {
  background-color: var(--color-hover-silver);
  color: var(--color-primary);
}
</style>
