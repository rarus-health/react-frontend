import { useState } from 'react'
import axios from 'axios'

export const useValidateHealthProfessionalExists = () => {
  const [isValidatingExistence, setIsValidatingExistence] = useState(false)
  const [existenceError, setExistenceError] = useState<null | string>(null)
  const [hasValidatedExistence, setHasValidatedExistence] = useState(false)
  const [foundHealthProfessionalId, setFoundHealthProfessionalId] = useState<
    null | number
  >(null)

  const validateHealthProfessionalExists = async (token: string) => {
    setIsValidatingExistence(true)

    try {
      const response = await axios.get(
        'https://rarus-health-qa.uc.r.appspot.com/health-professionals',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      const id = response?.data?.healthProfessional?.id
      if (id) setFoundHealthProfessionalId(id as number)
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.error || 'Hubo un error en el servidor.'
      setExistenceError(errorMessage as string)
    } finally {
      setIsValidatingExistence(false)
      setHasValidatedExistence(true)
    }
  }

  return {
    validateHealthProfessionalExists,
    isValidatingExistence,
    existenceError,
    foundHealthProfessionalId,
    hasValidatedExistence,
  }
}
