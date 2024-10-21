import { isTokenExpired } from '@/shared/jwt/jwt'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TOKEN_KEY = 'healthProfessionalToken'

export const useToken = () => {
  const navigate = useNavigate()
  const [token, setToken] = useState<string | null>(null)

  const getToken = () => {
    const localStorageToken = localStorage.getItem(TOKEN_KEY)
    if (!localStorageToken || isTokenExpired(localStorageToken)) {
      navigate('/health-professional/login')
      return
    }
    setToken(localStorageToken)
  }

  const persistToken = (token: string) => {
    setToken(token)
    localStorage.setItem(TOKEN_KEY, token)
  }

  const redirectIfUserIsLoggedIn = () => {
    const token = localStorage.getItem(TOKEN_KEY)
    if (token) {
      if (isTokenExpired(String(token))) {
        navigate('/health-professional/login')
        return
      }
      navigate('/health-professional/patients')
    }
  }

  return { getToken, persistToken, redirectIfUserIsLoggedIn, token }
}
