<template>
  <div class="login">
    <h1>Login</h1>

    <form data-test="form" @submit.prevent="login">
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" data-test="email" v-model="usuario.email">
      </div>

      <div>
        <label for="password">Password</label>
        <input type="password" id="password" name="password" data-test="password" v-model="usuario.password">
      </div>

      <div v-if="error">
        <span data-test="error">{{ error }}</span>
      </div>

      <button type="submit">Login</button>

    </form>

  </div>
</template>

<script setup>
import { useAuthApi } from '@/composables/useAuthApi';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const { login: loginUser } = useAuthApi()
const router = useRouter()

const usuario = reactive({
  email: '',
  password: ''
})

const error = ref(null)

const login = () => {
  // console.log(usuario)

  const loggedIn = loginUser(usuario)
  if (loggedIn) {
    router.push('/cartas/angel')
    return
  }

  error.value = 'Credenciales invalidas...'
}
</script>