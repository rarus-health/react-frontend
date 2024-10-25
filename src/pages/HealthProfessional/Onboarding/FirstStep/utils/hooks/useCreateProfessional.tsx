import { useState } from 'react'
import { CreateProfessionalInputs } from '../types/CreateProfessionalInputs'
import axios from 'axios'

export const useCreateProfessional = () => {
  const [isCreating, setIsCreating] = useState(false)
  const [creationError, setCreationError] = useState<null | string>(null)
  const [newProfessionalId, setNewProfessionalId] = useState<null | number>(
    null
  )

  const createProfessional = async (
    inputs: CreateProfessionalInputs,
    token: string
  ) => {
    setIsCreating(true)
    setCreationError(null)
    try {
      const response = await axios.post(
        'https://rarus-health-qa.uc.r.appspot.com/health-professionals',
        inputs,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      if (response.data.id) setNewProfessionalId(response.data.id as number)
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.error || 'Hubo un error en el servidor.'
      setCreationError(errorMessage as string)
    } finally {
      setIsCreating(false)
    }
  }

  return {
    createProfessional,
    isCreating,
    creationError,
    newProfessionalId,
  }
}
