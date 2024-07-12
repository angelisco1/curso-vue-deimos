import FormPlato from "@/components/FormPlato.vue"
import { shallowMount } from "@vue/test-utils"


const platoMock = {
  id: null,
  titulo: 'P',
  descripcion: 'P',
  precio: 10,
  src: 'P',
}

describe('FormPlato.vue', () => {

  it('debería emitir el evento guardar con el plato del formulario', async () => {
    const wrapper = shallowMount(FormPlato)

    const inputTitulo = wrapper.find('[name="titulo"]')
    const inputDescripcion = wrapper.find('[name="descripcion"]')
    const inputPrecio = wrapper.find('[name="precio"]')
    const inputImagen = wrapper.find('[name="src"]')
    const form = wrapper.find('form')

    await inputTitulo.setValue(platoMock.titulo)
    await inputPrecio.setValue(platoMock.precio)
    await inputDescripcion.setValue(platoMock.descripcion)
    await inputImagen.setValue(platoMock.src)

    await form.trigger('submit.prevent')

    expect(wrapper.emitted('guardar')[0][0]).toStrictEqual(platoMock)

  })
})