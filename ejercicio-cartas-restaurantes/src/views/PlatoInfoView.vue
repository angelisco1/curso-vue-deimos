<template>
  <div class="plato-info">
    <h2>Plato info</h2>

    <PlatoCompleto v-if="plato" :plato="plato"></PlatoCompleto>
    <div v-else>Cargando...</div>
  </div>
</template>

<script setup>
import PlatoCompleto from '@/components/PlatoCompleto.vue';
import CartasService from '@/services/cartas.service';
import { watch, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const plato = ref(null)

onMounted(async () => {
  const { cartaId, platoId } = route.params
  plato.value = await CartasService.getPlato(cartaId, platoId)
})

watch(() => route.params.platoId, async () => {
  const { cartaId, platoId } = route.params
  plato.value = await CartasService.getPlato(cartaId, platoId)
})


</script>