import { create } from 'zustand'
import { FormData } from './types'

interface FormStore {
  step: number
  formData: FormData
  setFormData: (data: Partial<FormData>) => void
  nextStep: () => void
  prevStep: () => void
}

const useFormStore = create<FormStore>((set) => ({
  step: 1,
  formData: {
    surname: '',
    representativeSurname: '',
    whatsapp: '',
    name: '',
    representativeName: '',
    citizenship: '',
    representativeCitizenship: '',
    gender: '',
    representativeGender: '',
    dateOfBirth: null,
    representativeDateOfBirth: null,
    placeOfResidence: '',
    representativePlaceOfResidence: '',
    email: '',
    age: '',
    occupation: '',
    interests: '',
    medicalInstitution: '',
    geneticTest: false,
    diagnosis: false,
    epilepsy: false,
    agreeConsent: false,
  },
  setFormData: (data) =>
    set((state) => ({ formData: { ...state.formData, ...data } })),
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),
}))

export default useFormStore
