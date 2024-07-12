<template>
  <div class="plato" data-test="plato" @click="verInfo">
    <img :src="plato.src" :alt="altImagen" data-test="plato-imagen">
    <span class="titulo" data-test="plato-titulo">{{ plato.titulo }}</span>
    <span data-test="plato-precio">{{ precio }}</span>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()

const props = defineProps({
  plato: Object
})

const precio = computed(() => {
  return props.plato.precio + '€'
})

const altImagen = computed(() => {
  return `Imagen del plato ${props.plato.titulo}`
})

const verInfo = () => {
  const cartaId = route.params.cartaId
  router.push({ name: 'plato', params: {
    cartaId,
    platoId: props.plato.id
  }})
}
</script>

<style>
.plato {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  padding: 0 10px 0 0;
  margin: 20px;
  width: 50%;
  cursor: pointer;
}

.plato img {
  width: 150px;
}

.plato .titulo {
  font-weight: bold;
}
</style>