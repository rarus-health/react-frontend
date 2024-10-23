import { useState } from 'react'
import axios from 'axios'
import { useFormStore } from '@/stores/formStore'
import {
  agreementPrimaryId,
  BASE_URL,
  temporalToken,
  userRoleUserAsCaregiverId,
} from '@/shared/utils/constants'
import { PatientMedicalInputs } from './types/PatientInputs.ts'
import { updateUser, addRole, signAgreement } from './useCreateUser.tsx'

import { CaregiverPersonalInputs } from './types/CaregiverInputs.ts'

export const createUserWithoutAccess = async (
  token: string,
  inputs: CaregiverPersonalInputs
) => {
  try {
    const response = await axios.put(
      `${BASE_URL}users/without-access`,
      {
        ...inputs,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    console.log('create user without access response', response.data)
    return response.data
  } catch (error) {
    console.error('Error creating user without access:', error)
    throw error
  }
}

const createPatientAsCaregiver = async (
  temporalToken: string,
  inputs: PatientMedicalInputs,
  userId: number
) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/patients/as-user`,
      {
        ...inputs,
        userId,
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

export const useCreateCaregiver = () => {
  const [isCaregiverCreating, setIsCaregiverCreating] = useState(false)
  const [caregiverCreationError, setCaregiverCreationError] = useState<
    null | string
  >(null)

  const { getUserData, getMedicalData, getCaregiverData } = useFormStore()
  const userPersonalData = getUserData()
  const medicalData = getMedicalData()
  const createCaregiver = async () => {
    setIsCaregiverCreating(true)
    setCaregiverCreationError(null)

    console.log('Caregiver Personal Data:', userPersonalData)

    try {
      const response = await updateUser(temporalToken, userPersonalData)
      const userId = response.data.id
      await addRole(userRoleUserAsCaregiverId, temporalToken)
      await createUserWithoutAccess(
        temporalToken,
        getCaregiverData as unknown as CaregiverPersonalInputs
      )

      await createPatientAsCaregiver(temporalToken, medicalData, userId)
      await signAgreement(agreementPrimaryId, temporalToken)
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.error || 'Hubo un error en el servidor'
      setCaregiverCreationError(errorMessage as string)
    } finally {
      setIsCaregiverCreating(false)
    }
  }

  return {
    createCaregiver,
    isCaregiverCreating,
    caregiverCreationError,
  }
}
