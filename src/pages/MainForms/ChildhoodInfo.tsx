import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { useForm } from 'react-hook-form'

import { ChildhoodInfoInputs } from './utils/types/ChildhoodInfoInputs'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const ChildhoodInfo: React.FC = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useForm<ChildhoodInfoInputs>() // Используем useForm напрямую, потом поменяем на useFormContext
  return (
    <div className="px-6 w-full bg-white max-w-3xl mx-auto">
      <h3 className=" text-lg leading-5"> Infancia </h3>
      <div className="flex flex-col">
        <label className="r-label mb-2.5" htmlFor="frequentColds">
          Mi hijo a menudo sufre de resfriados
        </label>
        <div>
          <input
            type="radio"
            value="true"
            {...register('frequentColds', {
              required: 'Por favor, seleccione una opción',
            })}
          />
          <label className="ml-2">Sí</label>
        </div>
        <div>
          <input
            type="radio"
            value="false"
            {...register('frequentColds', {
              required: 'Por favor, seleccione una opción',
            })}
          />
          <label className="ml-2">No</label>
        </div>
        {errors.frequentColds && (
          <p className="text-red-500">{errors.frequentColds.message}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label className="r-label mb-2.5" htmlFor="hasAllergies">
          Mi hijo tiene alergia (para alimentos, medicamentos, cabello animal,
          etc.)
        </label>
        <div>
          <input
            type="radio"
            value="true"
            {...register('hasAllergies', {
              required: 'Por favor, seleccione una opción',
            })}
          />
          <label className="ml-2">Sí</label>
        </div>
        <div>
          <input
            type="radio"
            value="false"
            {...register('hasAllergies', {
              required: 'Por favor, seleccione una opción',
            })}
          />
          <label className="ml-2">No</label>
        </div>
        {errors.hasAllergies && (
          <p className="text-red-500">{errors.hasAllergies.message}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label className="r-label mb-2.5" htmlFor="chronicIllnesses">
          Enumere las enfermedades crónicas que tiene su hijo{' '}
        </label>
        <Input
          className="r-input"
          id="chronicIllnesses"
          {...register('chronicIllnesses', {
            required: 'Este campo es obligatorio',
          })}
          type="text"
        />
        {errors.chronicIllnesses && (
          <p className="text-red-500">{errors.chronicIllnesses.message}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label className="r-label" htmlFor="headSupportAge">
          A que edad comenzó a sostener su hijo su cabeza
        </label>
        <Controller
          name="headSupportAge"
          control={control}
          render={({ field }) => (
            <Select {...field} onValueChange={field.onChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="month1">1 mes</SelectItem>
                  <SelectItem value="months2">2 meses</SelectItem>
                  <SelectItem value="months3">3 meses</SelectItem>
                  <SelectItem value="months4">4 meses</SelectItem>
                  <SelectItem value="months5">5 meses</SelectItem>
                  <SelectItem value="months6">6 meses</SelectItem>
                  <SelectItem value="year1">1 año</SelectItem>
                  <SelectItem value="stillNotHolding">
                    Todavía no sostiene
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div className="flex flex-col">
        <label className="r-label" htmlFor="crawlingAge">
          A que edad comenzó a arrastrarse su hijo
        </label>
        <Controller
          name="crawlingAge"
          control={control}
          render={({ field }) => (
            <Select {...field} onValueChange={field.onChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="months3">3 meses</SelectItem>
                  <SelectItem value="months4">4 meses</SelectItem>
                  <SelectItem value="months5">5 meses</SelectItem>
                  <SelectItem value="months6">6 meses</SelectItem>
                  <SelectItem value="months7to12">7 a 12 meses</SelectItem>
                  <SelectItem value="stillNotCrawling">
                    Todavía no gatea
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div className="flex flex-col">
        <label className="r-label" htmlFor="sittingAge">
          A que edad comenzó a sentarse su hijo por su cuenta
        </label>
        <Controller
          name="sittingAge"
          control={control}
          render={({ field }) => (
            <Select {...field} onValueChange={field.onChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="months4">4 meses</SelectItem>
                  <SelectItem value="months5">5 meses</SelectItem>
                  <SelectItem value="months6">6 meses</SelectItem>
                  <SelectItem value="months7">7 meses</SelectItem>
                  <SelectItem value="months8to12">De 8 a 12 meses</SelectItem>
                  <SelectItem value="stillNotSitting">
                    Todavía no se sienta
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div className="flex flex-col">
        <label className="r-label" htmlFor="standingAge">
          A que edad comenzó a estar su hijo por su cuenta{' '}
        </label>
        <Controller
          name="standingAge"
          control={control}
          render={({ field }) => (
            <Select {...field} onValueChange={field.onChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="upTo6months">Hasta 6 meses</SelectItem>
                  <SelectItem value="months7to12">De 7 a 12 meses</SelectItem>
                  <SelectItem value="stillNeedsSupport">
                    Todavía necesita apoyo
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div className="flex flex-col">
        <label className="r-label" htmlFor="walkingAge">
          A que edad comenzó a caminar su hijo por su cuenta{' '}
        </label>
        <Controller
          name="walkingAge"
          control={control}
          render={({ field }) => (
            <Select {...field} onValueChange={field.onChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="months8to12">De 8 a 12 meses</SelectItem>
                  <SelectItem value="months13to18">De 13 a 18 meses</SelectItem>
                  <SelectItem value="years2">2 años</SelectItem>
                  <SelectItem value="years3">3 años</SelectItem>
                  <SelectItem value="stillNeedsSupport">
                    Todavía necesita apoyo
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div className="flex flex-col">
        <label className="r-label" htmlFor="climbingAge">
          A qué edad su hijo dominó su hijo y comenzó a subir escaleras sin
          ayuda
        </label>
        <Controller
          name="climbingAge"
          control={control}
          render={({ field }) => (
            <Select {...field} onValueChange={field.onChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="years2">2 años</SelectItem>
                  <SelectItem value="years3">3 años</SelectItem>
                  <SelectItem value="years4">4 años</SelectItem>
                  <SelectItem value="stillNeedsSupport">
                    Todavía necesita apoyo
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div className="flex flex-col">
        <label className="r-label" htmlFor="towerBuildingAge">
          A qué edad su hijo maestro coleccionaba torres de cubos, jugando con
          un constructor simple, recolectando una pirámide
        </label>
        <Controller
          name="towerBuildingAge"
          control={control}
          render={({ field }) => (
            <Select {...field} onValueChange={field.onChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="year1">1 año</SelectItem>
                  <SelectItem value="years2">2 años</SelectItem>
                  <SelectItem value="years3">3 años</SelectItem>
                  <SelectItem value="stillNeedsSupport">
                    Todavía necesita apoyo
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div className="flex flex-col">
        <label className="r-label" htmlFor="monosyllabicWordsAge">
          A qué edad comenzó a pronunciar su hijo las palabras monosilábicas
          (ba-ma-du)
        </label>
        <Controller
          name="monosyllabicWordsAge"
          control={control}
          render={({ field }) => (
            <Select {...field} onValueChange={field.onChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="months6to12">De 6 a 12 meses</SelectItem>
                  <SelectItem value="months13to18">De 13 a 18 meses</SelectItem>
                  <SelectItem value="years2">2 años</SelectItem>
                  <SelectItem value="notTalkingYet">
                    Todavía no habla
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div className="flex flex-col">
        <label className="r-label" htmlFor="twoWordSentencesAge">
          A qué edad comenzó a hablar su hijo con oraciones de dos palabras
          ("mamá, dar")
        </label>
        <Controller
          name="twoWordSentencesAge"
          control={control}
          render={({ field }) => (
            <Select {...field} onValueChange={field.onChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="months12to18">De 12 a 18 meses</SelectItem>
                  <SelectItem value="years2">2 años</SelectItem>
                  <SelectItem value="notTalkingYet">
                    Todavía no habla
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div className="flex flex-col">
        <label className="r-label mb-2.5" htmlFor="learnedAndForgottenSkills">
          Lista aquí, lo que su hijo ha aprendido primero y luego como si
          hubiera olvidado cómo hacerlo
        </label>
        <Input
          className="r-input"
          id="learnedAndForgottenSkills"
          {...register('learnedAndForgottenSkills', {
            required: 'Este campo es obligatorio',
          })}
          type="text"
        />
        {errors.learnedAndForgottenSkills && (
          <p className="text-red-500">
            {errors.learnedAndForgottenSkills.message}
          </p>
        )}
      </div>
    </div>
  )
}

export default ChildhoodInfo
