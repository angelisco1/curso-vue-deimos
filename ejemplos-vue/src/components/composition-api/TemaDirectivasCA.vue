<template>
  <div>
    <h2>2. Directivas</h2>

    <h3>De interpolación</h3>
    <p v-text="lemaStark"></p>
    <!-- <p>{{lemaStark}}</p> -->
     <p>{{ post }}</p>
     <p v-html="post"></p>


    <h3>Condicionales</h3>

    <div v-if="isAuthenticated">
      <p>Otro menú</p>
      <button @click="logout">Logout</button>
    </div>
    <div v-else>
      <p>Menú</p>
      <button @click="login">Login</button>
    </div>

    <p v-show="isAuthenticated">Bienvenido usuario</p>

    <h3>Iterables</h3>
    <ul>
      <li v-for="(usuario, index) in listaUsuarios">{{index + 1}} - {{ usuario }}</li>
    </ul>

    <ul>
      <li v-for="(val, key) in usuarioLogueado">{{ key }}: {{ val }}</li>
    </ul>

    <ul>
      <li v-for="key in Object.keys(usuarioLogueado)">{{ key }}</li>
    </ul>


  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const lemaStark = ref('Winter is coming!')
const post = `<h4>Post 1</h4><br><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatum deserunt beatae et. Perspiciatis odio ex quia, <strong>distinctio harum</strong> necessitatibus consequatur! Exercitationem modi veritatis tempora distinctio asperiores, ab eaque neque.</p><button onclick="alert('hackeado');">Login</button>`

const isAuthenticated = ref(false)
const listaUsuarios = reactive([
  'Charly Falco',
  'Mike Kozinsky',
  'Octavia Blake'
])
const usuarioLogueado = reactive({
  username: 'cfalco',
  lastLogin: Date.now()
})

const login = () => {
  isAuthenticated.value = true
}

const logout = () => {
  isAuthenticated.value = false
}

</script>

<style>

</style>