import axios from 'axios'
const api = axios.create({
  baseURL: '/api', // Vite proxy → Django (dev)
  headers: { 'Content-Type': 'application/json' }
})
export default api
