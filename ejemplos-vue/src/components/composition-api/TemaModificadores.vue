<template>
  <div>
    <h2>4. Modificadores</h2>

    <input type="text" @keyup.left.right.up.down="setTeclas">

    <p>Combinación: {{ combinacionFlecasStr }}</p>


    <div id="caja-1" @click="mostrarMensaje('caja1')">

      <div id="caja-2" @click.stop="mostrarMensaje('caja2')">

      </div>

    </div>

  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'

const combinacionFlechas = reactive({
  flechas: []
})

const combinacionFlecasStr = computed(() => {
  return combinacionFlechas.flechas.join(', ')
})

const setTeclas = (event) => {
  console.log(event.code)
  combinacionFlechas.flechas.push(event.code)
}

const mostrarMensaje = (caja) => {
  console.log('Has pulsado en la caja ' + caja)
}
</script>

<style>
#caja-1 {
  border: 1px solid black;
  width: 500px;
  height: 500px;
}

#caja-2 {
  border: 1px solid black;
  width: 150px;
  height: 150px;
}
</style>