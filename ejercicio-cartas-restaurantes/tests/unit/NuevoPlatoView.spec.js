import FormPlato from "@/components/FormPlato.vue"
import NuevoPlatoView from "@/views/NuevoPlatoView.vue"
import { shallowMount } from "@vue/test-utils"
import { nextTick } from "vue"
import { useRouter } from "vue-router"


const platoMock = {
  id: null,
  titulo: 'P',
  descripcion: 'P',
  precio: 10,
  src: 'P',
}

jest.mock('vue-router', () => {
  return {
    useRoute: jest.fn(() => {
      return {
        params: {
          cartaId: '201'
        }
      }
    }),
    useRouter: jest.fn()
  }
})

jest.mock('../../src/services/cartas.service.js', () => {
  return {
    crearPlato: jest.fn()
  }
})

describe('NuevoPlatoView.vue', () => {
  const push = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('debería llamar al servicio de crear plato cuando le llega el evento guardar', async () => {
    useRouter.mockReturnValue({ push })
    const wrapper = shallowMount(NuevoPlatoView)

    const formPlato = wrapper.findComponent(FormPlato)

    formPlato.vm.$emit('guardar', platoMock)

    await nextTick()

    expect(push).toHaveBeenCalledWith({ name: 'carta', params: { cartaId: '201' } })
  })
})