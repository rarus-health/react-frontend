import { DateValue } from '@nextui-org/react'

export interface FormData {
  lastName: string
  representativeLastName: string
  phone: string
  name: string
  representativeName: string
  citizenship: string
  representativeCitizenship: string
  gender: string
  representativeGender: string
  birthday: DateValue | null
  representativeDateOfBirth: DateValue | null
  location: string
  representativePlaceOfResidence: string
  email: string
  age: string
  interests: string
  mainHospital: string
  otherDisorder: string
  geneticTest: boolean
  diagnosis: boolean
  epilepsy: boolean
  agreeConsent: boolean
  adult: boolean
}
