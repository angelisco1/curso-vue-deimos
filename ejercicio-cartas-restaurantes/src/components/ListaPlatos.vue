<template>
  <div>

    <div v-if="platos.length > 0">
      <Plato v-for="plato in platos" :key="plato.id" :plato="plato"></Plato>
    </div>
    <div v-else>
      <p data-test="no-hay-platos">No hay platos en la carta</p>
    </div>

  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import Plato from './Plato.vue';

const props = defineProps({
  platos: Array
})

</script>

<style>

</style>