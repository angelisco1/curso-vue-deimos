<template>
  <div>
    <h2>5. Propiedades y Emits</h2>

    <div id="fila-sugus">
      <!-- <Sugus color="green"></Sugus> -->
      <!-- <Sugus></Sugus>
      <Sugus color="orange" sabor="naranja"></Sugus>
      <Sugus color="blue" sabor="piña"></Sugus>
      <Sugus color="red" sabor="fresa"></Sugus> -->
      <ProductoSugus
        v-for="sugus in listaSugus"
        :key="sugus.id"
        :sugus="sugus"
        @addToCart="addToCart"
      ></ProductoSugus>
    </div>

    <hr>
    <p>Vas a comprar:</p>

    <div id="fila-sugus">
      <div v-for="(sugus, sabor) in carrito.sugus" :key="sabor">
        <Sugus :color="sugus.color" :sabor="sabor"></Sugus>
        x {{sugus.cantidad}}
      </div>
    </div>

  </div>
</template>

<script setup>
import Sugus from './Sugus.vue'
import ProductoSugus from './ProductoSugus.vue'
import { ref, reactive } from 'vue'

const listaSugus = ref([
  { id: 1, color: 'orange', sabor: 'naranja' },
  { id: 2, color: 'red', sabor: 'fresa' },
  { id: 3, color: 'yellow', sabor: 'limón' },
  { id: 4, color: 'blue', sabor: 'piña' },
])

const carrito = reactive({
  sugus: {
    piña: {cantidad: 3, color: 'blue'}
  }
})

const addToCart = (event) => {
  console.log(event)
  if (Object.keys(carrito.sugus).includes(event.sabor)) {
    carrito.sugus[event.sabor].cantidad += 1
  } else {
    carrito.sugus[event.sabor] = {color: event.color, cantidad: 1}
    // carrito.sugus = {
    //   ...carrito.sugus,
    //   [event.sabor]: 1
    // }
  }
}

</script>

<style>
#fila-sugus {
  display: flex;
  justify-content: center;
}
</style>