import { ref, computed } from 'vue'

export const usePreviousRoute = () => {
  // const previousRoute = ref(null)
  let previousRoute = null

  const setPreviousRoute = (rutaPrevia) => {
    console.log({ rutaPrevia })
    // previousRoute.value = rutaPrevia
    previousRoute = rutaPrevia
  }

  return {
    previousRoute,
    setPreviousRoute,
  }
}