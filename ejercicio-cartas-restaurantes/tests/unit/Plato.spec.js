import Plato from "@/components/Plato.vue"
import { mount, shallowMount } from "@vue/test-utils"
import { useRouter } from "vue-router"

jest.mock('vue-router', () => {
  return {
    useRoute: jest.fn(() => {
      return {
        params: {
          cartaId: '201'
        }
      }
    }), // () => {}
    useRouter: jest.fn(),
    // useRouter: jest.fn(() => {
    //   return {
    //     push: jest.fn()
    //   }
    // }),
  }
})

const platoMock = {
  id: 1,
  titulo: 'A',
  descripcion: 'A',
  precio: 9,
  src: 'A',
}


describe('Plato.vue', () => {

  const push = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('debería pintar el plato con las propiedades que recibe', () => {

    const wrapper = mount(Plato, {
      props: {
        plato: platoMock
      }
    })
    // console.log(wrapper)

    const titulo = wrapper.find('[data-test="plato-titulo"]')
    const precio = wrapper.find('[data-test="plato-precio"]')
    const imagen = wrapper.find('[data-test="plato-imagen"]')

    expect(titulo.text()).toBe(platoMock.titulo)
    expect(precio.text()).toBe(platoMock.precio + '€')
    expect(imagen.attributes('src')).toBe(platoMock.src)
    expect(imagen.attributes('alt')).toBe('Imagen del plato ' + platoMock.titulo)
  })

  it('debería redirigir a la página del plato al pulsar sobre el', async () => {
    // const push = jest.fn()
    useRouter.mockReturnValue({ push })

    const wrapper = mount(Plato, {
      props: {
        plato: platoMock
      }
    })

    const platoDiv = wrapper.find('[data-test="plato"]')
    await platoDiv.trigger('click')

    expect(push).toHaveBeenCalledTimes(1)
    expect(push).toHaveBeenCalledWith({
      name: 'plato',
      params: {
        cartaId: '201',
        platoId: 1
      }
    })

  })

  it('debería redirigir a la página del plato al pulsar sobre el', async () => {
    // const push = jest.fn()
    useRouter.mockReturnValue({ push })

    const wrapper = mount(Plato, {
      props: {
        plato: {
          ...platoMock,
          id: 10
        }
      }
    })

    const platoDiv = wrapper.find('[data-test="plato"]')
    await platoDiv.trigger('click')

    expect(push).toHaveBeenCalledTimes(1)
    expect(push).toHaveBeenCalledWith({
      name: 'plato',
      params: {
        cartaId: '201',
        platoId: 10
      }
    })

  })

})