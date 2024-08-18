<script></script>
<template>
  <h1>Little Library</h1>

  <div class="bookshelf-container">
    <p class="bookshelf-title">Your Bookshelf:</p>

    <div class="bookshelf-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.bookshelf-container {
  display: flex;
  flex-direction: column;
  width: 90%;
  background-color: azure;
}

.bookshelf-title {
  margin: 20px auto auto 20px;
}

.bookshelf-content {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 30px;
  justify-content: flex-start;
}
</style>
