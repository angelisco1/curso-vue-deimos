<template>
  <div class="carta">
    <h1>Carta</h1>

    <ListaPlatos :platos="listaPlatos"></ListaPlatos>

    <hr>

    <router-view/>

  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'
import CartasService from '../services/cartas.service'
import ListaPlatos from '../components/ListaPlatos.vue'

const route = useRoute()
console.log(route)

const listaPlatos = ref([])

onMounted(async () => {
  const cartaId = route.params.cartaId
  const platos = await CartasService.getCarta(cartaId)
  console.log(platos)
  listaPlatos.value = platos
})

</script>
