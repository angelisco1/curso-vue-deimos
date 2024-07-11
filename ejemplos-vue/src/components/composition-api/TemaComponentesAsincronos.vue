<template>
  <div>
    <button @click="mostrarAdmin">Ir al panel de administración</button>

    <div v-if="muestraAdmin">
      <Suspense>
        <template #default>
          <LazyAdmin2></LazyAdmin2>
        </template>
        <template #fallback>
          <Spinner></Spinner>
        </template>
      </Suspense>

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

const LazyAdmin2 = defineAsyncComponent(() => import('./LazyAdmin.vue'))

const muestraAdmin = ref(false)
const mostrarAdmin = () => {
  muestraAdmin.value = !muestraAdmin.value
}

</script>

<style>

</style>