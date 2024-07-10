const Traducciones = {
  'es': {
    'Bienvenido': 'Bienvenido'
  },
  'en': {
    'Bienvenido': 'Welcome'
  },
  'it': {
    'Bienvenido': 'Benvenuti'
  }
}

export const traducir = (text, lang = 'es') => {
  console.log(lang)
  const traduccion = Traducciones[lang.value.toLowerCase()][text]
  if (!traduccion) {
    return `No tenemos la traducción en ${lang} para el texto ${text}`
  }
  return traduccion
}