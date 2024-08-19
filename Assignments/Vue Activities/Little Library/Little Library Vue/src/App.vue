<script setup>
import { reactive } from "vue";
import BookItem from "./components/BookItem.vue";
import Bookshelf from "./components/Bookshelf.vue";
import SearchBar from "./components/SearchBar.vue";
const books = [
  {
    isbn: 3456789123456,
    title: "Trust",
    author: "Hernan Diaz",
    image: "https://m.media-amazon.com/images/I/81OSqvrGtlL._SL1500_.jpg",
    isAvailable: false,
  },
  {
    isbn: 3742895018349,
    title: "Demon Copperhead",
    author: "Barbara Kingsolver",
    image: "https://m.media-amazon.com/images/I/91oWtq1Tf1L._SL1500_.jpg",
    isAvailable: true,
  },
  {
    isbn: 2346825860009,
    title: "The Women",
    author: "Kristin Hannah",
    image: "https://m.media-amazon.com/images/I/913C+MR3S5L._SL1500_.jpg",
    isAvailable: true,
  },
  {
    isbn: 3459992039990,
    title: "The Heaven & Earth Grocery Store",
    author: "James McBride",
    image: "https://m.media-amazon.com/images/I/81FS3wyevDL._SL1500_.jpg",
    isAvailable: false,
  },
  {
    isbn: 5720003920392,
    title: "Remarkably Bright Creatures",
    author: "Shelby Van Pelt",
    image: "https://m.media-amazon.com/images/I/81X7rAcaQkL._SL1500_.jpg",
    isAvailable: true,
  },
  {
    isbn: 8949994832032,
    title: "Expiration Dates",
    author: "Rebecca Serle",
    image: "https://m.media-amazon.com/images/I/71rcPDtZ0SL._SL1500_.jpg",
    isAvailable: true,
  },
  {
    isbn: 1928319248101,
    title: "Lessons in Chemistry",
    author: "Bonnie Garmus",
    image: "https://m.media-amazon.com/images/I/71dQACXhz6L._SL1500_.jpg",
    isAvailable: true,
  },
  {
    isbn: 9834829348859,
    title: "Holly",
    author: "Steven King",
    image: "https://m.media-amazon.com/images/I/815oQ6G6HDL._SL1500_.jpg",
    isAvailable: true,
  },
  {
    isbn: 6262394888392,
    title: "Let Us Descend",
    author: "Jesmyn Ward",
    image: "https://m.media-amazon.com/images/I/81HE6uwjpgL._SL1500_.jpg",
    isAvailable: true,
  },
  {
    isbn: 8823947298554,
    title: "The Covenant of Water",
    author: "Abraham Verghese",
    image: "https://m.media-amazon.com/images/I/91b7tm523VL._SL1500_.jpg",
    isAvailable: false,
  },
  {
    isbn: 7728395729385,
    title: "The Fragile Threads of Power",
    author: "V.E. Schwab",
    image: "https://m.media-amazon.com/images/I/81gGEPEVTRL._SL1500_.jpg",
    isAvailable: true,
  },
];

const bookshelf = reactive([]);
function bookToShelf(book) {
  bookshelf.push(book.image);
  console.log(bookshelf);
}
</script>
<template>
  <div class="wrapper">
    <Bookshelf>
      <div class="shelved-book" v-for="image in bookshelf" :image="image">
        <img :src="image" alt="book cover" class="book-cover" />
      </div>
    </Bookshelf>
    <SearchBar></SearchBar>
    <div class="library-container">
      <BookItem
        v-for="book in books"
        :book="book"
        @add-book="bookToShelf(book)"
      />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.library-container {
  display: grid;
  margin: 80px auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  row-gap: 50px;
  column-gap: 100px;
}
.book-cover {
  width: 200px;
  max-height: 300px;
}

.shelved-book {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
