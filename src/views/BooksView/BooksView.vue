<script setup>
// Partials
import BookList from './BookList.vue'
import FavoriteBooks from './FavoriteBooks.vue'
</script>

<template>
  <div class="wrapper">
    <FavoriteBooks />

    <BookList />
  </div>
</template>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding-block: 30px 60px;
}
</style>
