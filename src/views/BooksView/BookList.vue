<script setup>
// Components
import { BookCartItem } from '../../components/common'

// Store
import { useBookStore } from '../../stores/books'

const book = useBookStore()
</script>

<template>
  <section class="section section-lg">
    <div class="section-header">
      <h1 class="section-title">Books</h1>
    </div>

    <ul class="book-list">
      <li v-for="bk in book.books" :key="bk.id">
        <BookCartItem :book="bk" />
      </li>
    </ul>
  </section>
</template>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.book-list {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 60px;
  column-gap: 32px;
}

@media (max-width: 1280px) {
  .book-list {
    grid-template-columns: repeat(4, 1fr);
    row-gap: 52px;
    column-gap: 24px;
  }
}

@media (max-width: 1024px) {
  .book-list {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .book-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .book-list {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
