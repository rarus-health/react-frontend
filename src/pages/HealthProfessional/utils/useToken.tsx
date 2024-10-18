import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const useToken = () => {
  const navigate = useNavigate()

  const [tokenState, setTokenState] = useState<string | null>(null)

  const redirectIfUserIsLoggedIn = () => {
    const token = localStorage.getItem('accessToken')

    if (token) {
      if (isTokenExpired(String(token))) {
        navigate('/health-professional/login')
        return
      }
      navigate('/health-professional/patients')
    }
  }

  const getToken = () => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      const tokenStr = String(token)
      if (isTokenExpired(tokenStr)) {
        navigate('/health-professional/login')
        return
      }
      setTokenState(tokenStr)
    }
  }

  const setToken = (token: string) => {
    setTokenState(token)
    localStorage.setItem('accessToken', token)
  }

  const isTokenExpired = (token: string) => {
    const decoded = parseJwt(token)
    const currentTime = Date.now() / 1000
    return decoded.exp < currentTime
  }

  const parseJwt = (token: string) => {
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        })
        .join('')
    )

    return JSON.parse(jsonPayload)
  }

  return { getToken, setToken, redirectIfUserIsLoggedIn, token: tokenState }
}
