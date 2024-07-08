<template>
  <h1>Curso de Vue</h1>
  <!-- <TemaDatos></TemaDatos>
  <TemaDatosCA></TemaDatosCA> -->
  <TemaDirectivasCA></TemaDirectivasCA>
</template>

<script>
import TemaDatos from './components/TemaDatos.vue'
import TemaDatosCA from './components/composition-api/TemaDatosCA.vue'
import TemaDirectivasCA from './components/composition-api/TemaDirectivasCA.vue'

export default {
  name: 'App',
  components: {
    TemaDatos,
    TemaDatosCA,
    TemaDirectivasCA,
  }
}
</script>

<style>

</style>
