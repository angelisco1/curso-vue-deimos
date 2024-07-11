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
  border: 1px solid black;
  width: 100px;
  height: 100px;
  border-radius: 5px;
  color: white;
  position: relative;
  margin: 10px;
  overflow: hidden;
}

#envoltorio > p {
  text-align: center;
  transform-origin: center center;
  transform: rotate(-45deg);
  position: absolute;
  top: 25px;
  left: 30px;
  text-shadow: 60px 0px 0px, -60px 0px 0px, -25px 30px 0px, 25px -30px 0px, 30px 30px 0px, -30px -30px 0px, 0px 60px 0px, 0px -60px 0px;
}
</style>