<script setup>
// Components
import { reactive } from 'vue'
import Wrapper from '../components/modal/Wrapper.vue'
import { TextInput, SelectBox, Button } from '../components/ui'

// Constants
import { readingStatus } from '../constants'

const formData = reactive({
  bookTitle: '',
  author: '',
  totalNumberOfPage: 0,
  readingStatus: 0,
  numberOfPagesRead: 0,
})

const onSubmit = () => {
  console.log(formData)
}
</script>

<template>
  <Wrapper title="Book entry form">
    <template #body>
      <div class="body-container">
        <span class="desc">Fill out the fields below to add a new book to the library system.</span>

        <form @submit.prevent="onSubmit">
          <div class="form-group">
            <TextInput placeholder="Book title" v-model="formData.bookTitle" />
            <TextInput placeholder="Author" v-model="formData.author" />
            <TextInput placeholder="Total number of pages" v-model="formData.totalNumberOfPage" />

            <SelectBox
              title="Reading status"
              :def-value="0"
              :data="readingStatus"
              v-model="formData.readingStatus"
            />

            <TextInput placeholder="Number of pages read" v-model="formData.numberOfPagesRead" />
          </div>

          <Button>Add Book</Button>
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
