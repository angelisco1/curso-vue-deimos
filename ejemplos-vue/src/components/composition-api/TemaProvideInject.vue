<template>
  <div>
    <div>
      <select name="lang" id="lang" v-model="lang">
        <option value="es">ES</option>
        <option value="en">EN</option>
        <option value="it">IT</option>
      </select>
    </div>

    <Nodo1></Nodo1>
  </div>
</template>

<script setup>
import Nodo1 from './Nodo1.vue';
import { provide, ref } from 'vue'

const lang = ref('es')

const setLang = (newLang) => {
  console.log('Función de arriba')
  lang.value = newLang
}

provide('lang', {lang, setLang})


</script>

<style>

</style>