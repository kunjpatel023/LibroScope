import React, { createContext, useContext, useState, useEffect } from 'react'
import api from '../utils/api'

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('user')) } catch { return null }
  })
  const [token, setToken] = useState(() => localStorage.getItem('token'))

  useEffect(() => {
    if (token) api.defaults.headers.common['Authorization'] = `Token ${token}`
  }, [token])

  async function login({ email, password }) {
    // Try real API, else fallback to simulated auth for frontend dev
    try {
      const res = await api.post('/auth/login/', { email, password })
      const { user: u, token: t } = res.data
      setUser(u); setToken(t)
      localStorage.setItem('user', JSON.stringify(u))
      localStorage.setItem('token', t)
      return u
    } catch (err) {
      // Simulate login (dev)
      const u = { id: 1, name: 'Demo User', email }
      const t = 'demo-token'
      setUser(u); setToken(t)
      localStorage.setItem('user', JSON.stringify(u))
      localStorage.setItem('token', t)
      return u
    }
  }

  function logout() {
    setUser(null); setToken(null)
    localStorage.removeItem('user'); localStorage.removeItem('token')
    delete api.defaults.headers.common['Authorization']
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
