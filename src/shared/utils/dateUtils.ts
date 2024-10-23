import { DateValue } from '@nextui-org/react'

export const formatDateValue = (dateValue: DateValue | null): string => {
  if (!dateValue) return ''

  const year = dateValue.year // 2024
  const month = String(dateValue.month).padStart(2, '0') // "10"
  const day = String(dateValue.day).padStart(2, '0') // "03"

  return `${year}-${month}-${day}` // "2024-10-03"
}
