<template>
  <div>
    <video ref="videoRef" width="200" src="/video.mp4"></video>

    <button type="button" @click="play">Play</button>
    <button type="button" @click="pause">Pause</button>
    <input type="range" v-model="volumen">
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'

const videoRef = ref(null)
const volumen = ref(null)

onMounted(() => {
  volumen.value = 0
})

const play = () => {
  console.dir(videoRef.value)
  videoRef.value.play()
}

const pause = () => {
  videoRef.value.pause()
}

watch(volumen, (newVolumen) => {
  console.log(newVolumen)
  videoRef.value.volume = newVolumen / 100
})

</script>

<style>

</style>