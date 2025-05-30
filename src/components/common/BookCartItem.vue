<script setup>
import { computed } from 'vue'
//Store
import { useBookStore } from '../../stores/books'
// Icons
import { IconLike, IconPage, IconUser } from '../icons'
// Components
import { Button } from '../ui'
// Constants
import { readingStatus } from '../../constants'

const bookStore = useBookStore()

const props = defineProps({
  book: {
    type: Object,
    required: true,
  },
  isHorizontal: Boolean,
})

const readingStatusLabel = computed(() => {
  const status = readingStatus.find((item) => item.value === props.book.readingStatus)

  return status?.label || 'Unknown'
})

const readingStatusClass = computed(() => {
  switch (props.book.readingStatus) {
    case 1:
      return 'reading-info'
    case 2:
      return 'reading-warning'
    case 3:
      return 'reading-success'
  }
})

const readingProgress = computed(() => {
  if (props.book.readingStatus !== 2) return null

  return Math.round((props.book.numberOfPagesRead / props.book.totalNumberOfPage) * 100) + ' %'
})
</script>

<template>
  <div :class="['card', isHorizontal ? 'horizontal' : '']">
    <div class="card-header">
      <img :src="`/public/images/${book.img}`" alt="book image" class="img" />

      <button
        :class="['btn-like', book.isFavori ? 'active' : '']"
        @click="bookStore.toggleFavori(book.id)"
      >
        <IconLike />
      </button>
    </div>

    <div class="card-body">
      <div class="reading-state">
        <span :class="['reading-state-text', readingStatusClass]">{{ readingStatusLabel }}</span>

        <span v-if="readingProgress" class="reading-state-ratio">{{ readingProgress }}</span>
      </div>

      <div class="content">
        <h3 class="content-title">{{ book.bookTitle }}</h3>

        <div class="info">
          <div>
            <IconUser />
            <span>{{ book.author }}</span>
          </div>

          <div>
            <IconPage />
            <span>{{ book.totalNumberOfPage }} Pages</span>
          </div>
        </div>

        <Button size="md">Update info</Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  height: 100%;
  padding-bottom: 22px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  border: 1px solid transparent;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  transition: border-color 250ms ease-in;
}

.card:active {
  border-color: var(--color-border);
}

.card.horizontal {
  height: 100%;
  flex-direction: row;
  padding-bottom: 0px;
}

.card.horizontal .card-header {
  flex: 1 1 0%;
}

.card-header {
  position: relative;
}

.card-body {
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.btn-like {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: color 300ms ease-out;
}

.btn-like.active {
  color: var(--color-danger);
}

.reading-state {
  padding-inline: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.reading-state-text {
  padding: 6px 10px;
  background-color: var(--orange);
  color: var(--white);
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
}

.reading-state-text.reading-info {
  background-color: var(--color-info);
}

.reading-state-text.reading-warning {
  background-color: var(--color-warning);
}

.reading-state-text.reading-success {
  background-color: var(--color-success);
  color: var(--color-green-dark);
}

.reading-state-ratio {
  color: var(--black);
  font-weight: 700;
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-inline: 8px;
}

.content-title {
  font-weight: 700;
  font-size: 14px;
  color: var(--color-text-secondary);
}

.info {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: var(--color-text-muted);
  font-size: 14px;
  font-weight: 500;
  margin-top: auto;
}

.info div {
  display: flex;
  align-items: center;
  gap: 6px;
}
</style>
