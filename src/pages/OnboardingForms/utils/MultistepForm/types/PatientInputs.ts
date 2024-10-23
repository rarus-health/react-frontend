export type PatientPersonalInputs = {
  name: string
  lastName: string
  birthday: any
  citizenship: string
  gender: string
  location: string
  phone: string
}

export type PatientMedicalInputs = {
  mainHospital: string
  otherDisorder: string
  hasDiagnosis: false
  hasGeneticTests: false
  hasSymptomsOfEpilepsy: false
  isAdult: boolean
}
