import { useState } from 'react'
import axios from 'axios'
import { HealthProfessionalPreferencesInputs } from '../types/healthProfessionalPreferences'

export const useCreatePreferences = () => {
  const [isCreating, setIsCreating] = useState(false)
  const [creationError, setCreationError] = useState<null | string>(null)
  const [hasCreated, setHasCreated] = useState<null | boolean>(null)

  const createPreferences = async (
    inputs: HealthProfessionalPreferencesInputs,
    token: string
  ) => {
    setIsCreating(true)
    setCreationError(null)
    try {
      const response = await axios.post(
        'https://rarus-health-qa.uc.r.appspot.com/health-professionals/preferences',
        inputs,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      if (response?.data?.healthProfessionalPreferences?.healthProfessionalId) {
        setHasCreated(true)
      }
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.error || 'Hubo un error en el servidor.'
      setCreationError(errorMessage as string)
    } finally {
      setIsCreating(false)
    }
  }

  return {
    createPreferences,
    isCreating,
    creationError,
    hasCreated,
  }
}
