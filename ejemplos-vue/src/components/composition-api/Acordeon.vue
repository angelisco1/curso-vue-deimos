<template>
  <div class="acordeon">

    <div class="header" @click="toggleCerrado">
      {{titulo}}
    </div>

    <div class="body" :class="{cerrado: cerrado, abierto: !cerrado}">
      <slot></slot>

      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  titulo: String
})
const cerrado = ref(false)

const toggleCerrado = () => {
  cerrado.value = !cerrado.value
}

</script>

<style scoped>
.acordeon {
  border: 1px solid black;
  border-radius: 10px;
  overflow: hidden;
}

.acordeon .header {
  border-bottom: 1px solid black;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  padding: 10px 15px;
}

.acordeon .body.abierto {
  padding: 10px 30px;
  height: auto;
}

.acordeon .body.cerrado {
  height: 0px;
}
</style>