import { bookImages, baseBook } from '../constants'

export const generateBooks = (count = 50) => {
  const books = []

  for (let i = 0; i < count; i++) {
    books.push({
      ...baseBook,
      id: randomId(),
      isFavori: Boolean(Math.floor(Math.random() * 2)),
      readingStatus: Math.floor(Math.random() * 3) + 1,
      numberOfPagesRead: Math.floor(Math.random() * 116),
      img: bookImages[i % bookImages.length],
    })
  }

  return books
}

export const randomId = () => {
  const timestamp = new Date().getTime()
  const randomSuffix = Math.floor(Math.random() * 999999)

  return `${timestamp}-${randomSuffix}`
}
