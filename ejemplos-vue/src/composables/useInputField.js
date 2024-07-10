import { ref, watch } from 'vue'

/*
validaciones = {
  required: true,
  email: true
}
validaciones = {
  minLength: 8,
  withMayus: true
}

*/

export const useInputField = (validaciones = {}) => {

  const inputValue = ref('')
  const errores = ref([])

  const setInput = (nuevoValor) => {
    inputValue.value = nuevoValor
  }

  // const resetInput = () => {
  //   inputValue = {
  //     email: '',
  //     pass: ''
  //   }
  // }

  watch(inputValue, (newInput) => {
    const mensajesError = []

    Object.entries(validaciones).forEach((entry) => {
      const [key, val] = entry

      if (key === 'required') {
        if (!newInput) {
          mensajesError.push('El campo es obligatorio')
        }
      }

      if (key === 'minLength') {
        if (newInput.length < val) {
          mensajesError.push(`La longitud mínima es 8, te faltan ${val - newInput.length} caracteres`)
        }
      }

      if (key === 'email') {
        if (!newInput.match(/\w+@\w+\.\w{2,4}/)) {
          mensajesError.push('No es un email correcto')
        }
      }

    })

    errores.value = mensajesError
  })

  return {
    inputValue,
    errores,
    setInput,
  }

}