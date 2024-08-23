<script setup>
const emits = defineEmits(["search-book"]);
const props = defineProps(["bookName"]);

// function emitSearchBooks(event) {
//   emits("search-book");
// }
</script>

<template>
  <div class="search-bar-container">
    <input
      class="search-bar"
      type="search"
      @input="$emit('update:bookName', $event.target.value)"
      :value="bookName"
      placeholder="Search Book"
    />
  </div>
</template>

<style scoped>
.search-bar {
  margin-top: 40px;
  width: 300px;
  height: 35px;
  padding-left: 10px;
}
</style>
