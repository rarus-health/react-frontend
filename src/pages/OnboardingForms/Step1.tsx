import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { FormData } from '../../stores/types'
import countries from '@/locales/es.json' // путь к вашему es.json
import { DatePicker } from '@nextui-org/date-picker'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useFormStore } from '../../stores/formStore'

interface Step1Props {
  isAdult: boolean
}

const Step1: React.FC<Step1Props> = ({ isAdult }) => {
  console.log('isAdult:', isAdult)
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormData>()
  const { setFormData } = useFormStore()

  React.useEffect(() => {
    setFormData({ isAdult })
  }, [isAdult, setFormData])

  const sortedCountries = Object.entries(countries.countries)
    .sort(([, a], [, b]) => (a > b ? 1 : -1))
    .map(([country]) => country)

  return (
    <div className="px-6 w-full bg-white max-w-3xl mx-auto">
      <div>
        <h3 className="font-semibold text-sm leading-5">
          {isAdult
            ? 'Complete información sobre usted'
            : 'Complete información sobre su hijo'}
        </h3>
        <div className="name flex-col">
          <div className="flex flex-col">
            <label className="r-label" htmlFor="lastName">
              Apellido
            </label>
            <Input
              {...register('lastName', { required: 'lastName is required' })}
            />
            {errors.lastName && <span>{errors.lastName.message}</span>}
          </div>
          <div className="flex flex-col">
            <label className="r-label" htmlFor="name">
              Nombre
            </label>
            <Input
              className="r-input"
              {...register('name', { required: 'name is required' })}
            />
            {errors.name && <span>{errors.name.message}</span>}
          </div>
        </div>
        <div className="info flex-col">
          <div className="flex flex-col">
            <label className="r-label" htmlFor="citizenship">
              Ciudadanía
            </label>
            <Controller
              name="citizenship"
              control={control}
              render={({ field }) => (
                <Select {...field} onValueChange={field.onChange}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {sortedCountries.map((country: string, i: number) => (
                        <SelectItem key={`country-${i}`} value={country}>
                          {countries.countries[
                            country as keyof typeof countries.countries
                          ] || country}{' '}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="flex flex-col">
            <label className="r-label" htmlFor="gender">
              Gender
            </label>
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <Select {...field} onValueChange={field.onChange}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Masculino">Hombre</SelectItem>
                      <SelectItem value="Femenino">Mujer</SelectItem>
                      <SelectItem value="other">Otro</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="date flex-col flex">
            <label className="r-label" htmlFor="birthday">
              Fecha de nacimiento
            </label>

            <div className="w-full max-w-[284px] flex flex-row gap-4 ">
              <Controller
                name="birthday"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    hideTimeZone
                    variant="bordered"
                    showMonthAndYearPickers
                    value={field.value ? field.value : null}
                    onChange={(date) => {
                      if (date) {
                        field.onChange(date)
                      } else {
                        field.onChange(null)
                      }
                    }}
                  />
                )}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="r-label" htmlFor="location">
              Lugar de residencia
            </label>
            <Controller
              name="location"
              control={control}
              render={({ field }) => (
                <Select {...field} onValueChange={field.onChange}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {sortedCountries.map((country: string, i: number) => (
                        <SelectItem key={`country-${i}`} value={country}>
                          {countries.countries[
                            country as keyof typeof countries.countries
                          ] || country}{' '}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          {isAdult && (
            <div className="flex flex-col">
              <label className="r-label" htmlFor="phone">
                Número de WhatsApp (es necesario para que nuestro asesor se
                comunique con ti)
              </label>
              <Input
                className="r-input"
                {...register('phone', { required: 'phone is required' })}
              />
              {errors.phone && <span>{errors.phone.message}</span>}
            </div>
          )}
        </div>
      </div>
      {!isAdult && (
        <div className="personal">
          <h3 className="font-semibold text-sm leading-5 mt-8">
            Complete información sobre usted
          </h3>
          <div className="name flex-col">
            <div className="flex flex-col">
              <label className="r-label" htmlFor="representativeLastName">
                Apellido
              </label>
              <Input
                className="r-input"
                {...register('representativeLastName', {
                  required: 'lastName is required',
                })}
              />
              {errors.lastName && <span>{errors.lastName.message}</span>}
            </div>
            <div className="flex flex-col">
              <label className="r-label" htmlFor="representativeName">
                Nombre
              </label>
              <Input
                className="r-input"
                {...register('representativeName', {
                  required: 'name is required',
                })}
              />
              {errors.name && <span>{errors.name.message}</span>}
            </div>
          </div>
          <div className="info flex-col">
            <div className="flex flex-col">
              <label className="r-label" htmlFor="representativeCitizenship">
                Ciudadanía
              </label>
              <Controller
                name="representativeCitizenship"
                control={control}
                render={({ field }) => (
                  <Select {...field} onValueChange={field.onChange}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {sortedCountries.map((country: string, i: number) => (
                          <SelectItem key={`country-${i}`} value={country}>
                            {countries.countries[
                              country as keyof typeof countries.countries
                            ] || country}{' '}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <div className="flex flex-col">
              <label className="r-label" htmlFor="representativeGender">
                Gender
              </label>
              <Controller
                name="representativeGender"
                control={control}
                render={({ field }) => (
                  <Select {...field} onValueChange={field.onChange}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Masculino">Hombre</SelectItem>
                        <SelectItem value="Femenino">Mujer</SelectItem>
                        <SelectItem value="other">Otro</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <div className="date flex-col flex">
              <label className="r-label" htmlFor="representativeDateOfBirth">
                Fecha de nacimiento
              </label>
              <div className="w-full max-w-xl flex flex-row gap-4 ">
                <Controller
                  name="representativeDateOfBirth"
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      hideTimeZone
                      variant="bordered"
                      showMonthAndYearPickers
                      value={field.value ? field.value : null}
                      onChange={(date) => {
                        if (date) {
                          field.onChange(date)
                        } else {
                          field.onChange(null)
                        }
                      }}
                    />
                  )}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label
                className="r-label"
                htmlFor="representativePlaceOfResidence"
              >
                Lugar de residencia
              </label>
              <Controller
                name="representativePlaceOfResidence"
                control={control}
                render={({ field }) => (
                  <Select {...field} onValueChange={field.onChange}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {sortedCountries.map((country: string, i: number) => (
                          <SelectItem key={`country-${i}`} value={country}>
                            {countries.countries[
                              country as keyof typeof countries.countries
                            ] || country}{' '}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <div className="flex flex-col">
              <label className="r-label" htmlFor="phone">
                Número de WhatsApp (es necesario para que nuestro asesor se
                comunique con ti)
              </label>
              <Input
                className="r-input"
                {...register('phone', { required: 'phone is required' })}
              />
              {errors.phone && <span>{errors.phone.message}</span>}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Step1
