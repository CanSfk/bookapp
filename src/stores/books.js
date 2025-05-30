import { defineStore } from 'pinia'

// Utils
import { generateBooks, randomId } from '../utils'

// Constants
import { bookImages } from '../constants'

const LOCAL_STORAGE_KEY = 'my_books'

export const useBookStore = defineStore('book', {
  state: () => ({
    books: [],
  }),

  actions: {
    initBooks() {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY)

      if (saved) {
        this.books = JSON.parse(saved)
      } else {
        this.books = generateBooks(40)
        this.saveBooks()
      }
    },

    saveBooks() {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.books))
    },

    addBook(book) {
      const newBook = {
        ...book,
        id: randomId(),
        img: bookImages[Math.floor(Math.random() * 6)],
        isFavori: false,
      }

      this.books.push(newBook)
      this.saveBooks()
    },

    updateBook(index, updated) {
      this.books[index] = { ...this.books[index], ...updated }
      this.saveBooks()
    },

    toggleFavori(id) {
      const bookIndex = this.books.findIndex((book) => book.id === id)

      if (bookIndex !== -1) {
        this.books[bookIndex].isFavori = !this.books[bookIndex].isFavori
        this.saveBooks()
      }
    },
  },
})
