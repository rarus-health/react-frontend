import React from 'react'
import { useFormContext } from 'react-hook-form'
import { PreparationForAppointmentInputs } from './utils/types/PreparationForAppointmentInputs'
import { Checkbox } from '@/components/ui/checkbox'
import { Textarea } from '@/components/ui/textarea' // Импорт компонента Input
import { Label } from '@/components/ui/label'

const PreparationForAppointment: React.FC = () => {
  const { register, watch } =
    useFormContext<PreparationForAppointmentInputs>() ?? {
      register: () => ({}),
      formState: { errors: {} },
    }

  const options = [
    {
      label: '¿Qué significa el resultado de la prueba genética?',
      value: 'geneticTestExplanation',
    },
    {
      label:
        '¿Deben confirmarse estos resultados utilizando otro método de investigación?',
      value: 'confirmTestResults',
    },
    {
      label:
        '¿Mis padres necesitan hacer una prueba genética y, de ser así, cuál?',
      value: 'parentsNeedGeneticTest',
    },
    {
      label: '¿Cuál es el pronóstico de la afección: cómo se desarrollará?',
      value: 'conditionPrognosis',
    },
    {
      label: '¿Qué peculiaridades del desarrollo intelectual debemos esperar?',
      value: 'intellectualDevelopmentPeculiarities',
    },
    {
      label:
        '¿Mi hijo podrá ir a un jardín de infantes o a una escuela “normal”?',
      value: 'eligibilityForNormalSchool',
    },
    {
      label:
        '¿Qué actividades (deportes, educativos) tendrán un impacto positivo en la vida y el desarrollo de mi hijo?',
      value: 'activitiesThatPromotePositiveDevelopment',
    },
    {
      label: 'Planeamos tener más hijos. ¿Cómo damos a luz a un bebé sano?',
      value: 'planningForHealthyBaby',
    },
    {
      label: '¿Hay algún centro de ayuda para personas como nosotros?',
      value: 'availableHelpCenters',
    },
    {
      label: 'Estoy cansado del niño, me duele la espalda, etc.',
      value: 'fatigueFromChildcare',
    },
  ]

  return (
    <div className="px-6 w-full bg-white max-w-3xl mx-auto">
      <div className="personal">
        <h3 className="text-lg leading-5 my-5 font-bold">
          Preparación para una cita médica
        </h3>
        <p className="mt-5">
          Por favor, especifique lo que le gustaría discutir durante la consulta
        </p>
        <p className="my-5">
          Hemos compilado una lista de preguntas frecuentes. Marque los que
          también le importan.{' '}
        </p>
        <div className="flex flex-col">
          {options.map((option) => (
            <div key={option.value} className="flex items-center space-x-2">
              <Checkbox
                id={option.value}
                {...register(
                  option.value as keyof PreparationForAppointmentInputs
                )}
              />
              <Label htmlFor={option.value} className="r-label">
                {option.label}
              </Label>
            </div>
          ))}
        </div>
        <div className="grid w-full gap-1.5 mt-4">
          <Label htmlFor="additionalInformation">Información adicional</Label>
          <Textarea
            id="additionalInformation"
            {...register('additionalInformation')}
            rows={4}
          />
        </div>
      </div>
    </div>
  )
}

export default PreparationForAppointment
