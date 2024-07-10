<template>
  <div>
    <form @submit.prevent="registro">

      <div>
        <label for="email">Email:</label>
        <!-- <input type="text" id="email" name="email" v-model="email"> -->
        <input type="text" id="email" name="email" :value="email" @input="setEmail($event.target.value)">
        <ul v-if="erroresEmail.length > 0">
          <li v-for="msg in erroresEmail">{{ msg }}</li>
        </ul>
      </div>

      <div>
        <label for="password">Password:</label>
        <!-- <input type="password" id="password" name="password" v-model="password"> -->
        <input type="password" id="password" name="password" :value="password" @input="setPassword($event.target.value)">
        <ul v-if="erroresPassword.length > 0">
          <li v-for="msg in erroresPassword">{{ msg }}</li>
        </ul>
      </div>

      <div>
        <label for="genero">Hombre
          <input type="radio" id="hombre" name="genero" value="h" v-model="genero">
        </label>
        <label for="genero">Mujer
          <input type="radio" id="mujer" name="genero" value="m" v-model="genero">
        </label>
      </div>

      <button type="submit">Registro</button>
    </form>
  </div>
</template>

<script setup>
import { useInputField } from '@/composables/useInputField';
import { ref, watch } from 'vue'

// const email = ref('')
// const password = ref('')
const genero = ref('m')

// const erroresEmail = ref([])

// watch(email, (newEmail) => {
//   const mensajesError = []
//   if (!newEmail) {
//     mensajesError.push('El email es obligatorio')
//   }

//   if (!newEmail.match(/\w+@\w+\.\w{2,4}/)) {
//     mensajesError.push('No es un email correcto')
//   }

//   erroresEmail.value = mensajesError
// })

const { inputValue: email, setInput: setEmail, errores: erroresEmail } = useInputField({required: true, email: true})

const { inputValue: password, setInput: setPassword, errores: erroresPassword } = useInputField({required: true, minLength: 8})


const registro = () => {
  console.log(`Registro con: email=${email.value}, pw=${password.value}, genero=${genero.value}`)
  // axios.post
}

</script>

<style>

</style>