<template>
  <div>
    <h2>Slots</h2>
    <Acordeon titulo="Receta de sandwich mixto">
      <ul>
        <li>Coge 2 rodajas de queso y jamon york</li>
        <li>Coge 2 rebanadas de pan bimbo</li>
        <li>Junta todo</li>
      </ul>

      <template v-slot:footer>
        <p :style="{textAlign: 'right'}">Receta de Ángel</p>
      </template>
    </Acordeon>

    <Acordeon titulo="Mis últimas vacaciones">
      <img width="300" src="https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg" alt="Un paisaje">
      <template v-slot:footer>
        <button>Like</button>
      </template>
    </Acordeon>
  </div>
</template>

<script setup>
import Acordeon from './Acordeon.vue'

</script>

<style>

</style>