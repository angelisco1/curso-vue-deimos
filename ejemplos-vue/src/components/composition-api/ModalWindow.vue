<template>
  <Teleport :to="to">
    <div class="backdrop">
      <div class="modal">
        <div class="header">
          <span>{{titulo}}</span>
          <button @click="cerrar">x</button>
        </div>

        <div class="body">
          <slot></slot>
        </div>

      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue';

const props = defineProps({
  titulo: String,
  to: Object
})

const emit = defineEmits(['cerrarModal'])

const cerrar = () => {
  emit('cerrarModal', true)
}

</script>

<style scoped>
.backdrop {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  position: relative;
  width: 70vw;
  height: 60vh;
  background-color: white;
}

.modal .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>