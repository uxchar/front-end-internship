<script setup>
const emits = defineEmits(["search-book"]);

function emitSearchBooks() {
  emits("search-book");
}
</script>

<template>
  <div class="search-bar-container">
    <input
      class="search-bar"
      type="search"
      @keypress="emitSearchBooks()"
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
