
const UsuariosRegistrados = [
  { email: 'admin@admin.es', password: 'admin', rol: 'admin' },
  { email: 'dueño@gmail.com', password: 'dueño', rol: 'dueño' },
  { email: 'angel@gmail.com', password: 'angel', rol: 'free' },
]


export const useAuthApi = () => {
  const login = (usuario) => {
    const usuarioBuscado = UsuariosRegistrados.find(u => u.email === usuario.email && u.password === usuario.password)
    if (!usuarioBuscado) {
      return false
    }

    localStorage.setItem('usuario', JSON.stringify({ email: usuarioBuscado.email, rol: usuarioBuscado.rol }))

    return true
  }

  const logout = () => {
    localStorage.removeItem('usuario')
  }

  const getUserAuthenticated = () => {
    return localStorage.getItem('usuario')
  }

  return {
    login,
    logout,
    getUserAuthenticated,
  }
}