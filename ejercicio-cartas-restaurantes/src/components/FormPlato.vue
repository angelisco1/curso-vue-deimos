<template>
  <div>
    <form @submit.prevent="guardarPlato">
      <div>
        <label for="titulo">Plato</label>
        <input type="text" id="titulo" name="titulo" v-model="plato.titulo">
      </div>

      <div>
        <label for="descripcion">Descripción</label>
        <textarea id="descripcion" name="descripcion" v-model="plato.descripcion"></textarea>
      </div>

      <div>
        <label for="precio">Precio</label>
        <input type="number" id="precio" name="precio" v-model="plato.precio">
      </div>

      <div>
        <label for="src">Url imagen</label>
        <input type="text" id="src" name="src" v-model="plato.src">
      </div>

      <button type="submit">Guardar</button>

    </form>
  </div>
</template>

<script setup>
import { reactive, defineEmits } from 'vue'

const emit = defineEmits(['guardar'])

const plato = reactive({
  id: null,
  titulo: '',
  descripcion: '',
  precio: 0,
  src: '',
})

const guardarPlato = () => {
  // console.log(plato)
  emit('guardar', plato)
}

</script>

<style>

</style>