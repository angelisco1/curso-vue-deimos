<template>
  <div>
    <button @click="mostrarAdmin">Ir al panel de administración</button>

    <div v-if="muestraAdmin">
      <LazyAdmin></LazyAdmin>
    </div>


  </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue'
import Spinner from './Spinner.vue'

// const LazyAdmin = defineAsyncComponent(() => import('./LazyAdmin.vue'))
const LazyAdmin = defineAsyncComponent({
  loader: () => import('./LazyAdmin.vue'),
  loadingComponent: Spinner
})

const muestraAdmin = ref(false)
const mostrarAdmin = () => {
  muestraAdmin.value = !muestraAdmin.value
}

</script>

<style>

</style>