
<template>
  <div>
    <h1>Buscador de cocktails</h1>
    <div>
      <input type="text" v-model="filtro" />
    </div>
    <ul>
      <li v-for="cocktail in cocktails" :key="cocktail.idDrink">
        {{ cocktail.strDrink }}
        <button type="button" @click="seleccionarCocktail(cocktail)">
          Ver +
        </button>
      </li>
    </ul>
    <hr />
    <div v-if="cocktailSeleccionado">
      <h4>{{ cocktailSeleccionado.strDrink }}</h4>
      <img
        :src="cocktailseleccionado.strDrinkThumb"
        :alt="cocktailSeleccionado.strDrink"
      />
      <p>{{ cocktailSeleccionado.strInstructions }}</p>
    </div>
    <div v-else>
      <p>Selecciona un cocktail para ver su información</p>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, watch, reactive } from "vue";
const filtro = ref("");
const cocktails = ref([]);
const cocktailSeleccionado = ref(null);
watch(filtro, async (newFiltro) => {
  const resp = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${newFiltro}`
  );
  console.log(resp.data.drinks);
  cocktails.value = resp.data.drink;
});
const seleccionarCocktail = (cocktail) => {
  cocktailSeleccionado.value = cocktail;
};
</script>
<style></style>