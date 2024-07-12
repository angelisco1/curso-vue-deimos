<template>
  <div>
    <nav>
      <router-link :to="{ name: 'carta', params: {cartaId: 'angel'} }">Inicio</router-link> |
      <router-link :to="{name: 'nuevoPlato', params: {cartaId: 'angel'} }">Añadir plato</router-link> |
      <router-link :to="{name: 'login'}">Login</router-link>
      <!-- <router-link to="/cartas/angel">Inicio</router-link> |
      <router-link to="/cartas/angel/nuevo-plato">Añadir plato</router-link> |
      <router-link to="/login">Login</router-link> -->
    </nav>
  </div>
</template>

<script setup>

</script>

<style>

</style>