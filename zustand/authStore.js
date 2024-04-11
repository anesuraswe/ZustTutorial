import create from 'zustand'
import axios from 'axios'
import { URL } from './urls/urls'
const useAuthStore = create((set) => ({
  user: null,
  token: null,
  login: async (email, password) => {
    try {
      const response = await axios.post(URL, {
        email,
        password,
      })
      if (response.data) {
        set({ user: response.data.user, token: response.data.token })
      }
    } catch (error) {
      console.error('Login failed:', error)
      throw error
    }
  },
  logout: () => set({ user: null, token: null }),
}))

export default useAuthStore
