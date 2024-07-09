<template>
  <div>
    <h2>3. Watchers</h2>
    <input type="text" v-model="titulo">
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import axios from 'axios'

const titulo = ref('')

// watch(titulo, (nuevoTitulo, viejoTitulo) => {
//   if (nuevoTitulo.trim() !== viejoTitulo.trim()) {
//     console.log('Cambiando el título')
//     document.title = nuevoTitulo
//     console.log(viejoTitulo)
//   }

//   axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito')
//     .then((resp) => {
//       console.log(resp.data.drinks)
//     })

// })

watch(titulo, (nuevoTitulo, viejoTitulo) => {
  if (nuevoTitulo.trim() !== viejoTitulo.trim()) {
    console.log('Cambiando el título')
    document.title = nuevoTitulo
    console.log(viejoTitulo)
  }
})

</script>

<style>

</style>