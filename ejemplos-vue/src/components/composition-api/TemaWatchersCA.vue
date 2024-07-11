<template>
  <div>
    <h2>3. Watchers</h2>
    <input type="text" v-model="titulo">
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue';
import axios from 'axios'

const titulo = ref('')

watch(titulo, (nuevoTitulo, viejoTitulo) => {
  if (nuevoTitulo.trim() !== viejoTitulo.trim()) {
    console.log('Cambiando el título')
    document.title = nuevoTitulo
    console.log(viejoTitulo)
  }

  axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito')
    .then((resp) => {
      console.log(resp.data.drinks)
    })

})

// watch(titulo, (nuevoTitulo, viejoTitulo) => {
//   if (nuevoTitulo.trim() !== viejoTitulo.trim()) {
//     console.log('Cambiando el título')
//     document.title = nuevoTitulo
//     console.log(viejoTitulo)
//   }
// })


const usuario = ref({
  perfil: {
    nombre: 'Charly',
    apellido: 'Falco'
  }
})

watch(usuario, (newUsuario, oldUsuario) => {
  console.log('Se ha cambiado el usuario')
})

watch(usuario, (newUsuario, oldUsuario) => {
  console.log('Se ha cambiado el usuario (deep)')
}, {deep: true})

watch(() => usuario.value.perfil.nombre, (newNombre, oldNombre) => {
  console.log('Se ha cambiado el nombre')
})

setTimeout(() => {
  usuario.value.perfil.apellido = 'Mike'
}, 2000)

setTimeout(() => {
  usuario.value = { perfil: { nombre: 'Mike', apellido: 'Falco'} }
}, 4000)


</script>

<style>

</style>