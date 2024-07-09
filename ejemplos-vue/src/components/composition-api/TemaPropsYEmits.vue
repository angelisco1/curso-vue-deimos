<template>
  <div>
    <h2>5. Propiedades y Emits</h2>

    <div id="fila-sugus">
      <!-- <Sugus color="green"></Sugus> -->
      <!-- <Sugus></Sugus>
      <Sugus color="orange" sabor="naranja"></Sugus>
      <Sugus color="blue" sabor="piña"></Sugus>
      <Sugus color="red" sabor="fresa"></Sugus> -->
      <ProductoSugus v-for="sugus in listaSugus" :key="sugus.id" :sugus="sugus"></ProductoSugus>
    </div>
  </div>
</template>

<script setup>
import Sugus from './Sugus.vue'
import ProductoSugus from './ProductoSugus.vue'
import { ref } from 'vue'

const listaSugus = ref([
  { id: 1, color: 'orange', sabor: 'naranja' },
  { id: 2, color: 'red', sabor: 'fresa' },
  { id: 3, color: 'yellow', sabor: 'limón' },
  { id: 4, color: 'blue', sabor: 'piña' },
])


</script>

<style>
#fila-sugus {
  display: flex;
  justify-content: center;
}
</style>