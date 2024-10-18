import { useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { RegistrationFormInputs } from './types/RegistrationFormInputs'

export const useRegistration = () => {
  const [isRegistering, setIsRegistering] = useState(false)
  const [registerError, setRegisterError] = useState<null | string>(null)
  const [token, setToken] = useState<null | string>(null)

  const registerUser = async ({ email, password }: RegistrationFormInputs) => {
    setIsRegistering(true)
    setRegisterError(null)

    try {
      const registerResponse = await makeRegisterRequest(email, password)
      const token = registerResponse?.data?.token || null

      if (token) {
        await makeAddHealthProfessionalRoleRequest(token)
        setToken(String(token))
      }
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.error || 'Hubo un error en el servidor'
      setRegisterError(errorMessage as string)
    } finally {
      setIsRegistering(false)
    }
  }

  const makeRegisterRequest = async (
    email: string,
    password: string
  ): Promise<AxiosResponse<any, any>> => {
    return await axios.post('https://rarus-health-qa.uc.r.appspot.com/users', {
      email,
      password,
    })
  }

  const makeAddHealthProfessionalRoleRequest = async (token: string) => {
    const healthProfessionalRoleId = 3
    await axios.put(
      'https://rarus-health-qa.uc.r.appspot.com/users/add-role',
      {
        roleId: healthProfessionalRoleId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
  }

  return { registerUser, isRegistering, registerError, token }
}
