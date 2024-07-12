import { useAuthApi } from '@/composables/useAuthApi'
import { usePreviousRoute } from '@/composables/usePreviousRoute'
import CartaView from '@/views/CartaView.vue'
import LoginView from '@/views/LoginView.vue'
import NuevoPlatoView from '@/views/NuevoPlatoView.vue'
import PlatoInfoView from '@/views/PlatoInfoView.vue'
import Error401View from '@/views/Error401View.vue'
import Error403View from '@/views/Error403View.vue'
import Error404View from '@/views/Error404View.vue'
import { ref } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    redirect: '/cartas/angel',
    meta: {
      needAuthentication: false,
      roles: []
    },
  },
  {
    path: '/cartas/:cartaId',
    component: CartaView,
    name: 'carta',
    meta: {
      needAuthentication: false,
      roles: []
    },
    children: [
      {
        path: 'platos/:platoId',
        name: 'plato',
        component: PlatoInfoView,
        meta: {
          needAuthentication: true,
          roles: []
        },
      },
      // {
      //   path: 'platos/:platoId/editar-plato',
      //   component: PlatoInfoView
      // }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      needAuthentication: false,
      roles: []
    }
  },
  {
    path: '/cartas/:cartaId/nuevo-plato',
    component: NuevoPlatoView,
    name: 'nuevoPlato',
    meta: {
      needAuthentication: true,
      roles: ['admin', 'dueño']
    }
  },
  {
    path: '/error401',
    component: Error401View,
    name: 'error401',
    meta: {
      needAuthentication: false,
      roles: []
    }
  },
  {
    path: '/error403',
    component: Error403View,
    name: 'error403',
    meta: {
      needAuthentication: false,
      roles: []
    }
  },
  {
    path: '/:path(.*)*',
    component: Error404View,
    name: 'error',
    meta: {
      needAuthentication: false,
      roles: []
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// export let previousRoute = null
export const previousRoute = ref(null)

router.beforeEach((to, from, next) => {
  previousRoute.value = from
  // previousRoute = from
  // const { setPreviousRoute } = usePreviousRoute()
  // setPreviousRoute(from)

  const { getUserAuthenticated } = useAuthApi()
  const usuario = getUserAuthenticated()

  const isAuthenticated = !!usuario
  const rol = usuario?.rol

  console.log({ need: to.meta.needAuthentication, isAuthenticated })

  if (to.meta.needAuthentication && !isAuthenticated) {
    return next('/error401')
  } else {

  }
  console.log({ roles: to.meta.roles, rol })

  // if (!(to.meta.roles.length > 0 && to.meta.roles.includes(rol))) {
  //   return next('/error403')
  // }

  next()

})

export default router
