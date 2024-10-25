import { FieldErrors } from 'react-hook-form'
import { CreateProfessionalInputs } from '../types/CreateProfessionalInputs'

export const checkErrors = (
  errors: FieldErrors<CreateProfessionalInputs>,
  apiError: string | null
): string | null => {
  if (apiError) return apiError

  if (Object.keys(errors).length > 0)
    return Object.values(errors)[0].message as string

  return null
}
