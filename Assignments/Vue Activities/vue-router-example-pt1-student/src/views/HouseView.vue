<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();
let houseName = ref("");
let houseColors = ref("");
let houseFounder = ref("")
let houseAnimal = ref("");
let houseElement = ref("");



const id = route.params.id
fetch(`https://wizard-world-api.herokuapp.com/Houses/${id}`)
    .then((res) => res.json())
    .then((house) => {
        console.log(house);
        houseName.value = house.name;
        houseColors.value = house.colors;
        houseFounder.value = house.founder;
        houseAnimal.value = house.animal;
        houseElement.value = house.element;
    });

</script>

<template>
    <div class="house-card">
        <p>{{ houseName }}</p>
        <p>{{ houseColours }}</p>
        <p>{{ houseFounder }}</p>
        <p>{{ houseAnimal }}</p>
        <p>{{ houseElement }}</p>
    </div>
</template>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.house-card {
    color: #fff;
}

p {
    padding: 16px;
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

.houses {
    padding-top: 36px;
    display: flex;
    justify-content: center;
}
</style>
