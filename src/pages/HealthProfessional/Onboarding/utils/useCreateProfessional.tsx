import { useState } from 'react'
import axios from 'axios'
import { CreateProfessionalInputs } from './types/CreateProfessionalInputs'

export const useCreateProfessional = () => {
  const [isCreating, setIsCreating] = useState(false)
  const [creationError, setCreationError] = useState<null | string>(null)
  const [professionalId, setProfessionalId] = useState<null | number>(null)

  const createProfessional = async (inputs: CreateProfessionalInputs) => {
    setIsCreating(true)
    setCreationError(null)

    try {
      const response = await axios.post(
        'https://rarus-health-qa.uc.r.appspot.com/health-professionals',
        inputs
      )
      if (response.data.id) setProfessionalId(response.data.id as number)
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.error || 'Hubo un error en el servidor'
      setCreationError(errorMessage as string)
    } finally {
      setIsCreating(false)
    }
  }

  return {
    createProfessional,
    isCreating,
    creationError,
    professionalId,
  }
}
