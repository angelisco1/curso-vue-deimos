import axios from 'axios'

export default {
  install(app, config) {

    const getCocktails = async (filtro) => {
      console.log('Estás usando el plugin de CocktailsAPI')
      const resp = await axios.get(`https://www.thecocktaildb.com/api/json/${config.version}/1/search.php?s=${filtro}`)
      return resp.data.drinks
    }

    app.provide('CocktailsApi', {
      getCocktails
    })
  }
}