import { BASE_URL } from '@/shared/utils/constants'
import { DateValue } from '@nextui-org/react'
import axios from 'axios'

//Update User
export const updateUser = async (
  token: string,
  data: {
    name: string
    lastName: string
    phone: string
    birthday: string
    citizenship: string
    gender: string
    location: string
  }
) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/users`,
      {
        ...data,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
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

//both patient and caregiver - Add Role
export const addRole = async (roleId: number, token: string) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/users/add-role`,
      {
        roleId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    console.log('addRole response', response.data)
    return response.data
  } catch (error) {
    console.error('Error adding role:', error)
    throw error
  }
}

//caregiver - Create user without access
export const createUserWithoutAccess = async (
  token: string,
  data: {
    name: string
    lastName: string
    birthday: DateValue | null
    citizenship: string
    gender: string
    location: string
  }
) => {
  try {
    const response = await axios.put(
      `${BASE_URL}users/without-access`,
      {
        ...data,
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

//caregiver - Create patient without access
export const createCaregiver = async (
  token: string,
  data: {
    name: string
    lastName: string
    phone: string
    birthday: DateValue | null
    citizenship: string
    gender: string
    location: string
  }
) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/patients/as-caregiver`,
      {
        ...data,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    console.log('create caregiver response', response.data)
    return response.data
  } catch (error) {
    console.error('Error creating caregiver:', error)
    throw error
  }
}

//both patient and caregiver - Sign agreement
export const signAgreement = async (agreementTypeId: number, token: string) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/users/sign-agreement`,
      {
        agreementTypeId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    console.log('signAgreement response', response.data)
    return response.data
  } catch (error) {
    console.error('Error signing agreement:', error)
    throw error
  }
}
