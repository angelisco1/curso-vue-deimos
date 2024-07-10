<template>
  <div>

    <div>
      <label for="framework">Selecciona el framework a usar:</label>
      <select name="framework" id="framework" v-model="frameworkSeleccionado">
        <option value="vue">Vue</option>
        <option value="angular">Angular</option>
        <option value="react">React</option>
      </select>
      <component :is="frameworkCmp"></component>
    </div>


  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import VueCmp from './VueCmp.vue';
import ReactCmp from './ReactCmp.vue';
import AngularCmp from './AngularCmp.vue';

const frameworkSeleccionado = ref('vue')

const frameworkCmp = computed(() => {
  const components = {
    vue: VueCmp,
    react: ReactCmp,
    angular: AngularCmp,
  }
  return components[frameworkSeleccionado.value]
})

</script>

<style>

</style>