import ListaPlatos from "@/components/ListaPlatos.vue"
import Plato from "@/components/Plato.vue"
import { mount, shallowMount } from "@vue/test-utils"

const listaPlatos = [
  { id: 1, titulo: 'A', descripcion: 'A', precio: 7, src: 'A' },
  { id: 2, titulo: 'B', descripcion: 'B', precio: 5, src: 'B' },
  { id: 2, titulo: 'B', descripcion: 'B', precio: 5, src: 'B' }
]

describe('ListaPlatos.vue', () => {

  it('debería mostrar que no hay platos si recibe una lista vacía', () => {

    const wrapper = shallowMount(ListaPlatos, {
      props: {
        platos: []
      }
    })

    // console.log(wrapper.html())

    const parrafo = wrapper.find('[data-test="no-hay-platos"]')
    expect(parrafo.text()).toBe('No hay platos en la carta')
  })

  it('debería mostrar 2 componentes Plato cuando en la lista hay 2 platos', () => {
    const wrapper = shallowMount(ListaPlatos, {
      props: {
        platos: listaPlatos
      }
    })

    const platos = wrapper.findAllComponents(Plato)
    expect(platos.length).toBe(listaPlatos.length)

  })

})