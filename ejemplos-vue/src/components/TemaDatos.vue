<template>
  <div>
    <h2>1. Datos</h2>

    <h3>String Interpolation</h3>
    <p>Hola {{nombre}} {{apellidos}}</p>


    <h3>Event Binding</h3>
    <!-- <button type="button" v-on:click="setUsuario">Cambiar usuario</button> -->

    <button type="button" @click="setUsuario">Cambiar usuario</button>

  </div>
</template>

<!-- OPTIONS API -->
<script>
export default {
  data() {
    return {
      nombre: 'Ángel',
      apellidos: 'Villalba'
    }
  },
  methods: {
    setUsuario() {
      this.nombre = 'Charly'
      this.apellidos = 'Falco'
    }
  }
}
</script>


<style>

</style>