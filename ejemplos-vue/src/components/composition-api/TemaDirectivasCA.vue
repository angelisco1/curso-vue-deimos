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
      <button click="login">Login</button>
    </div>

    <p v-show="isAuthenticated">Bienvenido usuario</p>

    <h3>Iterables</h3>
    <ul>
      <li v-marcar:text="'red'" v-for="(usuario, index) in listaUsuarios" :key="index">{{index + 1}} - {{ usuario }}</li>
    </ul>

    <ul>
      <li v-for="(val, key) in usuarioLogueado">{{ key }}: {{ val }}</li>
    </ul>

    <ul>
      <li v-for="key in Object.keys(usuarioLogueado)">{{ key }}</li>
    </ul>

    <ul>
      <li v-for="num in 5" :key="num">{{num}}</li>
    </ul>

    <h3 v-marcar:background.blink="'yellow'">Crear una directiva</h3>
    <div>
      <input type="text" v-focus>
    </div>

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

const vFocus = {
  mounted: (el) => {
    el.focus()
  }
}

const vMarcar = {
  beforeMount(el, binding) {
    console.log(el)
    console.log(binding)
    const cssProp = binding.arg === 'text' ? 'color' : 'backgroundColor'
    let intervalId = null

    el.addEventListener('mouseover', () => {
      console.log('Ha pasado por encima')

      if (binding.modifiers.blink) {
        intervalId = setInterval(() => {
          el.style[cssProp] = el.style[cssProp] === binding.value ? null : binding.value
        }, 1000)
      } else {
        // el.style.backgroundColor = binding.value
        el.style[cssProp] = binding.value
      }

    })

    el.addEventListener('mouseleave', () => {
      console.log('Ha quitado el ratón de encima')
      // el.style.backgroundColor = 'white'
      clearInterval(intervalId)
      el.style[cssProp] = null
    })
  },
}

const login = () => {
  isAuthenticated.value = true
}

const logout = () => {
  isAuthenticated.value = false
}

</script>

<style>

</style>