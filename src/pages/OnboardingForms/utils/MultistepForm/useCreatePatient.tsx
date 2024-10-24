import { useState } from 'react'
import axios from 'axios'
import { PatientMedicalInputs } from '../../../MainForms/utils/types/PregnancyInfoInputs.ts'
import { BASE_URL, temporalToken } from '@/shared/utils/constants'

import { updateUser, addRole, signAgreement } from './useCreateUser.tsx'
import { useFormStore } from '@/stores/formStore'

//patient - Create Patient as User
const createPatientAsUser = async (
  temporalToken: string,
  data: PatientMedicalInputs
) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/patients/as-user`,
      {
        ...data,
      },
      {
        headers: {
          Authorization: `Bearer ${temporalToken}`,
        },
      }
    )
    console.log('updateUserPatient response', response.data)
    return response.data
  } catch (error) {
    console.error('Error updating user patient:', error)
    throw error
  }
}

export const useCreatePatient = () => {
  const [isPatientCreating, setIsPatientCreating] = useState(false)
  const [patientCreationError, setPatientCreationError] = useState<
    null | string
  >(null)
  const { getUserData, getMedicalData } = useFormStore()

  const userPersonalData = getUserData()
  const medicalData = getMedicalData()

  const createPatient = async () => {
    setIsPatientCreating(true)
    setPatientCreationError(null)

    try {
      // Сначала обновляем пользователя
      await updateUser(temporalToken, userPersonalData)

      // Затем добавляем роль
      await addRole(1, temporalToken)
      // Создаем пациента как пользователя
      await createPatientAsUser(temporalToken, medicalData)

      // Подписываем соглашение
      await signAgreement(1, temporalToken)

      console.log('Patient creation successful')
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.error || 'Hubo un error en el servidor'
      setPatientCreationError(errorMessage as string)
    } finally {
      setIsPatientCreating(false)
    }
  }

  return {
    createPatient,
    isPatientCreating,
    patientCreationError,
  }
}
