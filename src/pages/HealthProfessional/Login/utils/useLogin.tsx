import { useState } from 'react'
import axios from 'axios'
import { LoginFormInputs } from './loginFormInputs'

export const useLogin = () => {
  const [isLogging, setIsLogging] = useState(false)
  const [loginError, setLoginError] = useState<null | string>(null)
  const [token, setToken] = useState(null)

  const login = async (data: LoginFormInputs) => {
    setIsLogging(true)
    setLoginError(null)

    try {
      const response = await axios.post(
        'https://rarus-health-qa.uc.r.appspot.com/users/login',
        data
      )
      if (response.data.token) setToken(response.data.token)
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.error || 'Hubo un error en el servidor'
      setLoginError(errorMessage as string)
    } finally {
      setIsLogging(false)
    }
  }

  return { login, isLogging, loginError, token }
}
