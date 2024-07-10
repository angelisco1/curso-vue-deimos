<template>
  <div id="spinner">

  </div>
</template>

<script setup>

</script>

<style>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

#spinner {
  width: 30px;
  height: 30px;
  border: 3px dotted black;
  border-radius: 50%;
  animation: spin infinite infinite;
  border-left-color: rgb(255, 115, 0);
}
</style>