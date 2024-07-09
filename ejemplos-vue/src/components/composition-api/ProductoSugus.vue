<template>
  <div>
    <Sugus :color="props.sugus.color" :sabor="props.sugus.sabor"></Sugus>
    <button type="button" @click="addToCart">+</button>
  </div>
</template>

<script setup>
import Sugus from './Sugus.vue'
import { ref, defineProps } from 'vue'

const props = defineProps({
  sugus: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['addToCart'])

const addToCart = () => {
  emit('addToCart', props.sugus)
}

</script>

<style>

</style>