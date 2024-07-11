<template>
  <div>
    <h2>Ejercicio 1</h2>

    <div>
      <input type="text" v-model="filtro">
      <!-- <input type="number" v-model.number="num"> -->
    </div>
    <ul>
      <li v-for="cocktail in cocktails" :key="cocktail.idDrink">
      <!-- <li v-for="cocktail in cocktails.data" :key="cocktail.idDrink"> -->
      <!-- <li v-for="cocktail in cocktails.data" :key="cocktail.idDrink"> -->
        {{ cocktail.strDrink }}
        <button type="button" @click="seleccionarCockatil(cocktail)">Ver +</button>
      </li>
    </ul>

    <hr>

    <div v-if="cocktailSeleccionado">
      <h4>{{ cocktailSeleccionado.strDrink }}</h4>
      <img :src="cocktailSeleccionado.strDrinkThumb" :alt="cocktailSeleccionado.strDrink" width="160">
      <p>{{ cocktailSeleccionado.strInstructions }}</p>
    </div>
    <div v-else>
      <p>Selecciona un cocktail para ver su información</p>
    </div>


  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, watch, reactive, inject } from 'vue';

const filtro = ref('')
// const num = ref(0)
const cocktails = ref([])
// const cocktails = reactive({data: []})
// const cocktails = reactive([])
const cocktailSeleccionado = ref(null)

const CocktailsApi = inject('CocktailsApi')



watch(filtro, async (newFiltro) => {
  // const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${newFiltro}`)
  // console.log(resp.data.drinks)
  // cocktails.value = resp.data.drinks
  // cocktails.data = resp.data.drinks
  // cocktails = resp.data.drinks
  // cocktails.push(...resp.data.drinks)
  // cocktails.length = 0
  // cocktails.push(...resp.data.drinks)
  cocktails.value = await CocktailsApi.getCocktails(newFiltro)
})

// watch(num, async (num1) => {
//   console.log(typeof(num1))
// })

const seleccionarCockatil = (cocktail) => {
  cocktailSeleccionado.value = cocktail
}

</script>

<style>

</style>