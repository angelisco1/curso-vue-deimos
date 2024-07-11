import axios from 'axios'

const urlFirebase = `https://ejemplos-dc1c1.firebaseio.com/curso-vue-deimos`

const getCarta = async (cartaId) => {
  const resp = await axios.get(`${urlFirebase}/${cartaId}/platos.json`)
  const platosObj = resp.data

  const platos = []
  for (let id in platosObj) {
    platos.push({
      id,
      ...platosObj[id]
    })
  }
  return platos
  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve([
  //       { id: 1, titulo: 'Tortilla de patatas', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ut quos quaerat odio modi qui architecto magni expedita doloremque temporibus, repudiandae cum, vitae tenetur incidunt voluptatem, nobis quam rem ducimus!', precio: 7, src: 'https://lacocinadefrabisa.lavozdegalicia.es/wp-content/uploads/2019/05/tortilla-espa%C3%B1ola.jpg' },
  //       { id: 2, titulo: 'Salmorejo', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ut quos quaerat odio modi qui architecto magni expedita doloremque temporibus, repudiandae cum, vitae tenetur incidunt voluptatem, nobis quam rem ducimus!', precio: 5, src: 'https://img.rtve.es/imagenes/salmorejo-cordobes-desde-baena/1632233830842.jpg' },
  //     ])
  //   }, 1500)
  // })
}

const crearPlato = (cartaId, plato) => {
  return axios.post(`${urlFirebase}/${cartaId}/platos.json`, plato)
}

export default {
  getCarta,
  crearPlato,
}