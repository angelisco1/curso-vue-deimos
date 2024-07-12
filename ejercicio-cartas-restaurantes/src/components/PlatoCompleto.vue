<template>
  <div class="plato-completo">
    <div>
      <h3>{{ plato.titulo }} (Precio: {{ plato.precio }}€)</h3>
      <p>{{ plato.descripcion }}</p>
    </div>
    <img width="200" :src="plato.src" alt="">
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  plato: Object
})

</script>

<style scoped>
.plato-completo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
}
</style>