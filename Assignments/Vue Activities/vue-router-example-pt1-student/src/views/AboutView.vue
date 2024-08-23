<script setup>
import { useRouter } from "vue-router";


const router = useRouter();

const navToCurriculum = () => {
  router.push("./curriculum");
};
const navToHouse = (id) => {
  router.push(`./about/house/${id}`);
};

</script>

<template>
  <div class="wrapper">
    <h1>About us</h1>
    <p>This prestigious institution is steeped in centuries of magical tradition. Nestled amidst the enchanting
      landscape
      of Scotland, Hogwarts is more than just a school; it's a home for young witches and wizards seeking to unlock
      their full potential in a supportive and enriching environment. With a distinguished faculty, state-of-the-art
      facilities, and a diverse array of magical subjects, Hogwarts offers students an unparalleled education that
      prepares them for a lifetime of magical discovery and personal growth.</p>
    <button @click="navToCurriculum()">View our curriculum!</button>

    <h1>Hogwarts Houses</h1>
    <p>Every student is sorted into one of four prestigious houses: Gryffindor, HufflePuff, RavenClaw, or Slytherin.
      Each house embodies unique traits and values, fostering a sense of belonging, camaraderie, and personal growth.
      Together, these houses form the foundation of Hogwarts, shaping the character and experiences of its students as
      they embark on their magical journey. </p>
  </div>
  <div class="house-info">
    <div class="house-container">
      <img src=" /src/assets/gryffindor.png" alt="gryffindor badge"
        @click="navToHouse('0367baf3-1cb6-4baf-bede-48e17e1cd005')">
      <p class="house-name">Gryffindor</p>
    </div>
    <div class="house-container">
      <img src="/src/assets/slytherin.png" alt="slytherin badge"
        @click="navToHouse('a9704c47-f92e-40a4-8771-ed1899c9b9c1')">
      <p class="house-name">Slytherin</p>
    </div>
    <div class="house-container">
      <img src="/src/assets/hufflepuff.png" alt="hufflepuff badge"
        @click="navToHouse('85af6295-fd01-4170-a10b-963dd51dce14')">
      <p class="house-name">Hufflepuff</p>
    </div>
    <div class="house-container">
      <img src="/src/assets/ravenclaw.png" alt="ravenclaw badge"
        @click="navToHouse('805fd37a-65ae-4fe5-b336-d767b8b7c73a')">
      <p>Ravenclaw</p>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  margin-bottom: 30px;
}

p {
  /* padding: 16px; */
  max-width: 50%;
  text-align: center;
}

button {
  margin-top: 16px;
  margin-bottom: 100px;
  background-color: #222f5b;
  color: white;
  height: 40px;
  width: 200px;
  border: none;
  border-radius: 5px;
}

.house-info img {
  width: 150px;
  height: auto;
}

.house-info img:hover {
  cursor: pointer;
}

.house-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

}

.houses {
  padding-top: 36px;
  display: flex;
  justify-content: center;
}

.house-info {
  display: flex;
  justify-content: center;
  margin: 60px auto;
  gap: 30px;
}
</style>
