import { DateValue } from '@nextui-org/react'
import { create } from 'zustand'
//import { FormData } from './types'
import { AgreeConsentInput } from '../pages/OnboardingForms/utils/MultistepForm/types/AgreeConsentInput'
import {
  PatientPersonalInputs,
  PatientMedicalInputs,
} from '../pages/OnboardingForms/utils/MultistepForm/types/PatientInputs'
import { CaregiverPersonalInputs } from '../pages/OnboardingForms/utils/MultistepForm/types/CaregiverInputs'
import { formatDateValue } from '@/shared/utils/dateUtils'

type FormData = PatientPersonalInputs &
  PatientMedicalInputs &
  CaregiverPersonalInputs &
  AgreeConsentInput
interface FormStore {
  step: number
  formData: FormData
  getUserData: () => PatientPersonalInputs
  getCaregiverData: () => CaregiverPersonalInputs
  getMedicalData: () => PatientMedicalInputs
  setFormData: (data: Partial<FormData>) => void
  nextStep: () => void
  prevStep: () => void
}

export const useFormStore = create<FormStore>((set, get) => ({
  step: 1,
  formData: {
    lastName: '',
    representativeLastName: '',
    phone: '',
    name: '',
    representativeName: '',
    citizenship: '',
    representativeCitizenship: '',
    gender: '',
    representativeGender: '',
    birthday: null as DateValue | null | '',
    representativeDateOfBirth: null,
    location: '',
    representativePlaceOfResidence: '',
    mainHospital: '',
    otherDisorder: '',
    hasGeneticTests: false,
    hasDiagnosis: false,
    hasSymptomsOfEpilepsy: false,
    agreeConsent: false,
    isAdult: false,
  } as FormData,
  getUserData: () => {
    const { formData } = get()
    return {
      name: formData.name,
      lastName: formData.lastName,
      phone: formData.phone,
      birthday: formData.birthday
        ? formatDateValue(formData.birthday as DateValue)
        : '',
      citizenship: formData.citizenship,
      gender: formData.gender,
      location: formData.location,
    }
  },
  getCaregiverData: () => {
    const { formData } = get()
    const caregiverData = {
      name: formData.representativeName,
      lastName: formData.representativeLastName,
      birthday: formData.representativeDateOfBirth
        ? formatDateValue(formData.representativeDateOfBirth as DateValue)
        : '',
      citizenship: formData.representativeCitizenship,
      gender: formData.representativeGender,
      location: formData.representativePlaceOfResidence,
    }
    return caregiverData as unknown as CaregiverPersonalInputs
  },

  getMedicalData: () => {
    const { formData } = get()
    return {
      mainHospital: formData.mainHospital,
      otherDisorder: formData.otherDisorder,
      hasDiagnosis: formData.hasDiagnosis,
      hasGeneticTests: formData.hasGeneticTests,
      hasSymptomsOfEpilepsy: formData.hasSymptomsOfEpilepsy,
      isAdult: formData.isAdult,
    }
  },
  setFormData: (data) =>
    set((state) => ({ formData: { ...state.formData, ...data } })),
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),
}))
