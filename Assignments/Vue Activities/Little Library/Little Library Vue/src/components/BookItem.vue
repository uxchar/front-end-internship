<script setup>
const props = defineProps(["book"]);
</script>

<template>
  <div class="book-container">
    <div class="book-info-container">
      <div class="image-container" v-if="book.isAvailable">
        <img :src="book.image" class="book-cover" alt="book cover" />
      </div>
      <div class="not-available" v-else>
        <img :src="book.image" class="book-cover" alt="book cover" />
      </div>

      <p class="">{{ book.title }}</p>
      <p class="">{{ book.author }}</p>
      <p class="book" v-if="book.isAvailable"></p>
      <p class="book" v-else>Coming Soon!</p>
    </div>
  </div>
</template>

<style scoped>
.not-available {
  filter: grayscale(95%);
}
.book-info-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.book-cover {
  width: 150px;
}
</style>
