import { useState } from 'react'
import axios from 'axios'
import { RegistrationFormInputs } from './types/registrationFormInputs'

export const useRegistration = () => {
  const [isRegistering, setLoading] = useState(false)
  const [registerError, setError] = useState<null | string>(null)
  const [token, setToken] = useState(null)

  const registerUser = async (data: RegistrationFormInputs) => {
    setLoading(true)
    setError(null)

    try {
      const response = await axios.post(
        'https://rarus-health-qa.uc.r.appspot.com/users',
        data
      )
      if (response.data.token) setToken(response.data.token)
    } catch (err: any) {
      const errorMessage = err.response?.data?.error || 'Error desconocido'
      setError(errorMessage as string)
    } finally {
      setLoading(false)
    }
  }

  return { registerUser, isRegistering, registerError, token }
}
