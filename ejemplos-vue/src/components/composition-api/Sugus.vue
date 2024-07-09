<template>
  <div id="envoltorio" :style="{backgroundColor: props.color}">
    <p>{{ props.sabor }}</p>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  color: {
    type: String,
    default: 'yellow',
    // required: true,
    validator: (value) => {
      return ['yellow', 'orange', 'blue', 'red'].includes(value)
    }
  },
  sabor: {
    type: String,
    default: 'limón'
  },
})

// const sabor = ref('limón')
// const color = ref('yellow')
</script>

<style>
#envoltorio {
  width: 150px;
  height: 150px;
  border: 1px solid black;
}
</style>