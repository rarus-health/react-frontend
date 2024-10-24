export type PregnancyInfoInputs = {
  patientId: number
  motherAgeAtPregnancy: number
  motherPregnancyNumber: number
  motherBirthNumber: number
  motherHasMiscarriages: boolean
  motherInfectiousDiseasesDuringPregnancy: string
  motherMedicationsTaken: string
  childFetalMovementStartWeek: number
  childDiagnosedWithIUGR: boolean
  fatherAgeAtPregnancy: number
  fatherHasChildrenFromOtherMarriages: boolean
  fatherHealthConditionsOfOtherChildren: string
}
