import CartaView from '@/views/CartaView.vue'
import LoginView from '@/views/LoginView.vue'
import NuevoPlatoView from '@/views/NuevoPlatoView.vue'
import PlatoInfoView from '@/views/PlatoInfoView.vue'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    redirect: '/cartas/angel'
  },
  {
    path: '/cartas/:cartaId',
    component: CartaView,
    children: [
      {
        path: 'platos/:platoId',
        component: PlatoInfoView
      },
      // {
      //   path: 'platos/:platoId/editar-plato',
      //   component: PlatoInfoView
      // }
    ]
  },
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/cartas/:cartaId/nuevo-plato',
    component: NuevoPlatoView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
