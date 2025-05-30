<script setup>
import { RouterView } from 'vue-router'

// Layout
import Layout from './layout/Layout.vue'

// Store
import { useBookStore } from './stores/books'

const book = useBookStore()

book.initBooks()
</script>

<template>
  <Layout>
    <RouterView />
  </Layout>
</template>
