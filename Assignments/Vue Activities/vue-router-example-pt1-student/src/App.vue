<script setup>
import { RouterLink, RouterView } from "vue-router";

</script>

<template>
  <div class="app">
    <header>
      <nav>
        <img src="./assets/hogwarts.png" />
        <div class="nav-items">
          <RouterLink class="link-style" to="/home">Home</RouterLink>
          <RouterLink class="link-style" to="/about">About</RouterLink>
          <RouterLink class="link-style" to="/curriculum">Curriculum</RouterLink>
        </div>
      </nav>
    </header>
    <main>
      <RouterView></RouterView>

    </main>
  </div>
</template>

<style scoped>
header {
  height: 150px;
  width: 100vw;
  background-color: #740001;
}

nav {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  padding-right: 100px;
  padding-left: 100px;
  height: 100%;
}

.link-style {
  padding-left: 1rem;
  color: #d3a625;
  font-size: large;
}

.link-style:hover {
  padding-left: 1rem;
  color: #d3a625;
  font-size: large;
  text-decoration: underline;
  cursor: pointer;
}

.link-style {
  display: flex;
  align-items: center;
}

img {
  max-height: 100vh;
  max-width: 100px;
}

main {
  padding: 2rem;
}
</style>
