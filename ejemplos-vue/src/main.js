import { createApp } from 'vue'
import App from './App.vue'
import CocktailsApiPlugin from './plugins/CocktailsApiPlugin'

const app = createApp(App)

app.use(CocktailsApiPlugin, { version: 'v1' })

app.mount('#app')
