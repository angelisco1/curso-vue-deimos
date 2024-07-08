<template>
  <div>
    <h2>1. Datos</h2>

    <h3>String Interpolation</h3>
    <p>Hola {{nombre}} {{apellidos}}</p>

    <h3>Property Binding</h3>
    <input type="text" v-bind:value="credenciales.email" @input="setEmail($event)">
    <input type="password" :value="credenciales.contraseña" @input="setPassword">


    <h3>Event Binding</h3>
    <!-- <button type="button" v-on:click="setUsuario">Cambiar usuario</button> -->
    <button type="button" @click="setUsuario">Cambiar usuario</button>

    <p>Email: {{ credenciales.email }}</p>
    <button type="button" @click="setEmail">Modificar email</button>


    <h3>Two Way Binding</h3>
    <input type="text" v-model="nombre">
    <input type="text" v-model="credenciales.email">

    <h3>Computed Props</h3>
    <p>{{ nombreCompleto }}</p>

    <input type="number" v-model="precio">

    <select :value="moneda" @change="cambiarMoneda">
      <option value="€">€</option>
      <option value="$">$</option>
      <option value="L">L</option>
    </select>

    <p>{{ precio }}€ equivale a {{ precioConvertido }}{{ moneda }}</p>

  </div>
</template>

<!-- COMPOSITION API -->
<script setup>
import { reactive, ref, computed } from 'vue'

const nombre = ref('Ángel')
const apellidos = ref('Villalba')

const credenciales = reactive({
  email: 'cfalco@gmail.com',
  contraseña: '1234'
})

const precio = ref(0)
const moneda = ref('€')

const nombreCompleto = computed(() => {
  return `${apellidos.value}, ${nombre.value}`
  // return apellidos + ', ' + nombre
})

const cambiarMoneda = (event) => {
  moneda.value = event.target.value
}

const precioConvertido = computed(() => {
  if (moneda.value === '$') {
    return precio.value * 1.08
  } else if (moneda.value === 'L') {
    return precio.value * 0.84
  } else {
    return precio.value
  }
})

const setUsuario = () => {
  // console.log(nombre.value)
  nombre.value = 'Charly'
  apellidos.value = 'Falco'
}

const setEmail = (event) => {
  console.log(event)
  credenciales.email = event.target.value
}

const setPassword = (event) => {
  console.log(event)
  credenciales.contraseña = event.target.value
}

</script>

<style>

</style>