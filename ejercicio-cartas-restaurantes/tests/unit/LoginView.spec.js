import LoginView from "@/views/LoginView.vue"
import { shallowMount } from "@vue/test-utils"
import { useAuthApi } from "@/composables/useAuthApi"
import { useRouter } from "vue-router"

jest.mock('vue-router', () => {
  return {
    useRouter: jest.fn()
  }
})

jest.mock('../../src/composables/useAuthApi.js', () => {
  return {
    useAuthApi: jest.fn(() => {
      return {
        login: jest.fn(() => {
          return false
        })
        // login: jest.fn()
      }
    })
  }
})


describe('LoginView.vue', () => {

  const push = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('debería mostrar "Credenciales invalidas..." si introducimos los datos mal', async () => {
    // useAuthApi().login.mockReturnValue(false)

    const wrapper = shallowMount(LoginView)

    const inputEmail = wrapper.find('[data-test="email"]')
    const inputPassword = wrapper.find('[data-test="password"]')
    const form = wrapper.find('[data-test="form"]')

    await inputEmail.setValue('abc@gmail.com')
    await inputPassword.setValue('1234')

    await form.trigger('submit.prevent')

    const spanError = wrapper.find('[data-test="error"]')
    expect(spanError.text()).toBe('Credenciales invalidas...')
  })

  it('debería ir a la carta del restaurante si introducimos los datos bien', async () => {
    useRouter.mockReturnValue({ push })
    useAuthApi.mockReturnValue({ login: () => true })

    const wrapper = shallowMount(LoginView)

    const inputEmail = wrapper.find('[data-test="email"]')
    const inputPassword = wrapper.find('[data-test="password"]')
    const form = wrapper.find('[data-test="form"]')

    await inputEmail.setValue('admin@admin.es')
    await inputPassword.setValue('admin')

    await form.trigger('submit.prevent')

    expect(push).toHaveBeenCalledWith('/cartas/angel')
  })
})