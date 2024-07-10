<template>
  <div>

    <p>{{traducir('Bienvenido', langObj.lang)}}</p>

    <button type="button" @click="resetLang">Resetear lang</button>

  </div>
</template>

<script setup>
import { traducir } from '@/utils/Traductor';
import { inject } from 'vue';

const langObj = inject('lang')
console.log(langObj)

const resetLang = () => {
  // lang.value = 'es'
  langObj.setLang('es')
}
</script>

<style>

</style>