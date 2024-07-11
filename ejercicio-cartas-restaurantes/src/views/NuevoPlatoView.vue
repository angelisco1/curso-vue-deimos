<template>
  <div class="nuevo-plato">
    <h1>Nuevo plato</h1>
    <FormPlato @guardar="crearPlato"></FormPlato>
  </div>
</template>

<script setup>
import FormPlato from '@/components/FormPlato.vue';
import CartasService from '@/services/cartas.service';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const crearPlato = async (nuevoPlato) => {
  const cartaId = route.params.cartaId
  await CartasService.crearPlato(cartaId, nuevoPlato)
  router.push(`/cartas/${cartaId}`)
}

</script>