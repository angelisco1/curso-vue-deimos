<template>
  <div>
    <h2>Teleport</h2>

    <Modal v-if="modalAbierto" titulo="Bienvenido" @cerrarModal="cerrarModal">
      <img width="300" src="https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg" alt="Un paisaje">
    </Modal>
    <button @click="abrirModal">Abrir modal</button>

    <ModalWindow titulo="Bienvenido" @cerrarModal="cerrarModal" :to="target">
      <img width="300" src="https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg" alt="Un paisaje">
    </ModalWindow>

    <button @click="abrirModalWindow">Abrir modal en otra ventana</button>

  </div>
</template>

<script setup>
import Modal from './Modal.vue';
import ModalWindow from './ModalWindow.vue';
import { ref } from 'vue'

const modalAbierto = ref(false)

const target = ref(document.createElement('div'))

const abrirModal = () => {
  modalAbierto.value = true
}

const abrirModalWindow = () => {
  const extWindow = window.open('', '', 'height=500,width=600')
  extWindow.document.body.appendChild(target.value)
}

const cerrarModal = () => {
  modalAbierto.value = false
}

</script>

<style>

</style>