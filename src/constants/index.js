export const footerLinks = [
  {
    title: 'Learn More',
    child: [
      { title: 'About Bookshop', href: '#' },
      { title: 'Press Relaases', href: '#' },
      { title: 'Environment', href: '#' },
      { title: 'Jobs', href: '#' },
      { title: 'Privacy Policy', href: '#' },
      { title: 'Contact Us', href: '#' },
    ],
  },
  {
    title: 'Menu',
    child: [
      { title: 'Ebooks', href: '#' },
      { title: 'Gift Cards', href: '#' },
      { title: 'Special Offers', href: '#' },
      { title: 'New Books', href: '#' },
      { title: 'Best Sellers', href: '#' },
    ],
  },
]

export const readingStatus = [
  { label: 'To Read', value: 1 },
  { label: 'Reading', value: 2 },
  { label: 'Completed', value: 3 },
]

export const bookImages = ['img1.png', 'img2.png', 'img3.png', 'img4.png', 'img5.png', 'img6.png']

export const baseBook = {
  id: 0,
  bookTitle: 'Progressive Steps to Syncopation for the Modern Drummer',
  author: 'Ted Reed',
  totalNumberOfPage: 115,
  readingStatus: Math.floor(Math.random() * 3) + 1,
  numberOfPagesRead: 0,
  isFavori: true,
  img: 'img',
}
