<template>
  <Header></Header>
  <p>Vienes de la ruta: {{ previousRoute?.path }}</p>


  <router-view/>
</template>

<script setup>
import { watch } from 'vue';
import Header from './components/Header.vue';
// import { usePreviousRoute } from './composables/usePreviousRoute';
import { previousRoute } from './router';

// const previousRoute = usePreviousRoute()
// watch(previousRoute, (newPrevRoute) => {
//   console.log({newPrevRoute})
// })


</script>

<style>

</style>
