<script setup>
import { reactive } from 'vue'
// Store
import { useBookStore } from '../stores/books'
// Components
import Wrapper from '../components/modal/Wrapper.vue'
import { TextInput, SelectBox, Button } from '../components/ui'
// Constants
import { readingStatus } from '../constants'

const bookStore = useBookStore()

const formData = reactive({
  bookTitle: '',
  author: '',
  totalNumberOfPage: '',
  readingStatus: 0,
  numberOfPagesRead: '',
})

const onSubmit = () => {
  bookStore.addBook(formData)
}
</script>

<template>
  <Wrapper title="Book entry form">
    <template #body>
      <div class="body-container">
        <span class="desc">Fill out the fields below to add a new book to the library system.</span>

        <form @submit.prevent="onSubmit">
          <div class="form-group">
            <TextInput placeholder="Book title" v-model="formData.bookTitle" required />
            <TextInput placeholder="Author" v-model="formData.author" />
            <TextInput
              type="number"
              placeholder="Total number of pages"
              v-model="formData.totalNumberOfPage"
            />

            <SelectBox
              title="Reading status"
              :def-value="0"
              :data="readingStatus"
              v-model="formData.readingStatus"
            />

            <TextInput
              type="number"
              placeholder="Number of pages read"
              v-model="formData.numberOfPagesRead"
            />
          </div>

          <Button size="lg">Add Book</Button>
        </form>
      </div>
    </template>
  </Wrapper>
</template>

<style scoped>
.body-container,
form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.desc {
  font-family: var(--font-family-roboto);
  font-size: 14px;
  color: var(--color-text-muted);
  line-height: 1.4;
}
</style>
