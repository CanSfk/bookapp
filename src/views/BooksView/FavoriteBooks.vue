<script setup>
import { computed, ref } from 'vue'
// Store
import { useBookStore } from '../../stores/books'
// Components
import BookCartItem from '../../components/common/BookCartItem.vue'
import { IconButton } from '../../components/ui'
// Icons
import { IconArrowLeft, IconArrowRight } from '../../components/icons'

const book = useBookStore()
const slideIndex = ref(0)

const favoriBooks = computed(() => book.books.filter((bk) => bk.isFavori))

const bookList = computed(() => {
  const grouped = []

  for (let i = 0; i < favoriBooks.value.length; i += 2) {
    grouped.push(favoriBooks.value.slice(i, i + 2))
  }

  return grouped
})

const increment = () => {
  if (slideIndex.value < bookList.value.length - 1) slideIndex.value++
}

const decrement = () => {
  if (slideIndex.value > 0) slideIndex.value--
}
</script>

<template>
  <section class="section-lg">
    <div class="section-content">
      <div class="section-header">
        <h2 class="section-title">Favorite Books</h2>

        <div class="section-buttons">
          <button>View all ({{ favoriBooks.length }})</button>

          <IconButton is-border @click="decrement" :disabled="slideIndex === 0">
            <IconArrowLeft />
          </IconButton>

          <IconButton is-border @click="increment" :disabled="slideIndex >= bookList.length - 1">
            <IconArrowRight />
          </IconButton>
        </div>
      </div>

      <div class="section-body">
        <p class="description">
          When Maya’s brother decides to get married in Taormina, she and Conor end up stuck
          together in a romantic Sicilian villa for over a week. There, on the beautiful Ionian
          coast, between ancient ruins, delicious foods, and natural caves, Maya realizes that Conor
          might be hiding something from her. And as the destination wedding begins to erupt out of
          control, she decides that a summer fling might be just what she needs—even if it’s a
          problematic one.
        </p>

        <ul>
          <li v-for="bk in bookList[slideIndex]">
            <BookCartItem :book="bk" is-horizontal />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px;
  background-color: var(--color-background-alt);
  border-radius: 20px;
}

.description {
  color: var(--color-text-muted);
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.section-buttons {
  display: flex;
  align-items: center;
  gap: 12px;
}

.section-body {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.section-body ul {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  grid-column-start: 2;
  grid-column-end: 4;
}

@media (max-width: 1280px) {
  .section-body {
    grid-template-columns: repeat(1, 1fr);
  }

  .section-body ul {
    grid-column-start: initial;
    grid-column-end: initial;
  }
}

@media (max-width: 768px) {
  .section-body ul {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
