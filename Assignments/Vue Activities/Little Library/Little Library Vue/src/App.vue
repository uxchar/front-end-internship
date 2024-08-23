<script setup>
import { reactive, ref } from "vue";
import BookItem from "./components/BookItem.vue";
import Bookshelf from "./components/Bookshelf.vue";
import SearchBar from "./components/SearchBar.vue";
const books = reactive([
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
]);

const bookshelf = reactive([]);
function bookToShelf(book) {
  bookshelf.push(book.image);
}
const bookName = ref("");

function filterBooks(newBookName) {
  console.log(newBookName);
  bookName.value = newBookName;
  bookshelf.value = books.filter((book) => {
    book.title.toLowerCase().includes(newBookName.toLowerCase());
  });
}

function createBook() {
  books.push({
    title: bookTitle,
    author: bookAuthor,
    image: bookCover,
    isAvailable: bookAvailablity,
  });

  bookTitle = "";
  bookAuthor = "";
  bookCover = "";
  bookAvailablity = false;
}
// let bookIsbn = "";
let bookTitle = "";
let bookAuthor = "";
let bookCover = "";
let bookAvailablity = false;
</script>

<template>
  <div class="wrapper">
    <Bookshelf>
      <div class="shelved-book" v-for="image in bookshelf" :image="image">
        <img :src="image" alt="book cover" class="book-cover" />
      </div>
    </Bookshelf>
    <!-- Search bar component -->
    <SearchBar v-model="bookName" @update:bookName="filterBooks" />
    <div class="library-container">
      <BookItem
        v-for="book in books"
        :book="book"
        @add-book="bookToShelf(book)"
      />
    </div>
    <div class="create-book-container">
      <!-- <input
        type="text"
        v-model="bookIsbn"
        placeholder="Enter book isbn number"
      /> -->
      <input type="text" v-model="bookTitle" placeholder="Enter book title" />
      <input type="text" v-model="bookAuthor" placeholder="Enter book author" />
      <input
        type="text"
        v-model="bookCover"
        placeholder="Enter book image url"
      />
      <div>
        <input
          name="availability"
          id="availability"
          type="checkbox"
          v-model="bookAvailablity"
        />
        <label for="availability"> Is this book availible?</label>
      </div>
      <button @click="createBook()">Create Book</button>
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

.create-book-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 80px;
}
</style>
