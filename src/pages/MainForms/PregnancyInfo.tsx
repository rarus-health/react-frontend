import React from 'react'
import { useFormContext } from 'react-hook-form'
import { PregnancyInfoInputs } from './utils/types/PregnancyInfoInputs'
import { Input } from '@/components/ui/input'

const PregnancyInfo: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<PregnancyInfoInputs>() ?? {
    register: () => ({}),
    formState: { errors: {} },
  }
  return (
    <div className="px-6 w-full bg-white max-w-3xl mx-auto">
      <div className="personal">
        <h3 className=" text-lg leading-5">Embarazo y parto</h3>
        <div>
          <h2 className="font-semibold text-lg leading-5 mt-5">Madre</h2>

          <div className="flex flex-col">
            <label className="r-label mb-2.5" htmlFor="motherAgeAtPregnancy">
              A que edad ocurrió el embarazo
            </label>
            <Input
              className="r-input"
              id="motherAgeAtPregnancy"
              {...register('motherAgeAtPregnancy', {
                required: 'Este campo es obligatorio',
              })}
              type="text"
            />
            {errors.motherAgeAtPregnancy && (
              <p className="text-red-500">
                {errors.motherAgeAtPregnancy.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="r-label mb-2.5" htmlFor="motherPregnancyNumber">
              ¿Qué número es el embarazo?
            </label>
            <Input
              className="r-input"
              id="motherPregnancyNumber"
              {...register('motherPregnancyNumber', {
                required: 'Este campo es obligatorio',
              })}
              type="text"
            />
            {errors.motherPregnancyNumber && (
              <p className="text-red-500">
                {errors.motherPregnancyNumber.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="r-label mb-2.5" htmlFor="motherBirthNumber">
              ¿Qué número es el parto?
            </label>
            <Input
              className="r-input"
              id="motherBirthNumber"
              {...register('motherBirthNumber', {
                required: 'Este campo es obligatorio',
              })}
              type="text"
            />
            {errors.motherBirthNumber && (
              <p className="text-red-500">{errors.motherBirthNumber.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="r-label mb-2.5" htmlFor="motherHasMiscarriages">
              ¿Ha habido abortos involuntarios?
            </label>
            <div>
              <input
                type="radio"
                value="true"
                {...register('motherHasMiscarriages', {
                  required: 'Por favor, seleccione una opción',
                })}
              />
              <label className="ml-2">Sí</label>
            </div>
            <div>
              <input
                type="radio"
                value="false"
                {...register('motherHasMiscarriages', {
                  required: 'Por favor, seleccione una opción',
                })}
              />
              <label className="ml-2">No</label>
            </div>
            {errors.motherHasMiscarriages && (
              <p className="text-red-500">
                {errors.motherHasMiscarriages.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label
              className="r-label mb-2.5"
              htmlFor="motherInfectiousDiseasesDuringPregnancy"
            >
              Lista de enfermedades y lesiones infecciosas durante el embarazo{' '}
            </label>
            <Input
              className="r-input"
              id="motherInfectiousDiseasesDuringPregnancy"
              {...register('motherInfectiousDiseasesDuringPregnancy', {
                required: 'Este campo es obligatorio',
              })}
              type="text"
            />
            {errors.motherInfectiousDiseasesDuringPregnancy && (
              <p className="text-red-500">
                {errors.motherInfectiousDiseasesDuringPregnancy.message}
              </p>
            )}
          </div>
          
          <div className="flex flex-col">
            <label
              className="r-label mb-2.5"
              htmlFor="childFetalMovementStartWeek"
            >
              ¿Qué medicamentos (aparte de las vitaminas) tomó su madre durante
              el embarazo?{' '}
            </label>
            <Input
              className="r-input"
              id="childFetalMovementStartWeek"
              {...register('childFetalMovementStartWeek', {
                required: 'Este campo es obligatorio',
              })}
              type="text"
            />
            {errors.childFetalMovementStartWeek && (
              <p className="text-red-500">
                {errors.childFetalMovementStartWeek.message}
              </p>
            )}
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-lg leading-5 mt-5">Niña</h2>

          <div className="flex flex-col">
            <label
              className="r-label mb-2.5"
              htmlFor="childFetalMovementStartWeek"
            >
              El comienzo del movimiento fetal (semana){' '}
            </label>
            <Input
              className="r-input"
              id="childFetalMovementStartWeek"
              {...register('childFetalMovementStartWeek', {
                required: 'Este campo es obligatorio',
              })}
              type="text"
            />
            {errors.childFetalMovementStartWeek && (
              <p className="text-red-500">
                {errors.childFetalMovementStartWeek.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="r-label mb-2.5" htmlFor="childDiagnosedWithIUGR">
              ¿El médico diagnosticó "retatación del crecimiento intrauterino"?{' '}
            </label>
            <div>
              <input
                type="radio"
                value="true"
                {...register('childDiagnosedWithIUGR', {
                  required: 'Por favor, seleccione una opción',
                })}
              />
              <label className="ml-2">Sí</label>
            </div>
            <div>
              <input
                type="radio"
                value="false"
                {...register('childDiagnosedWithIUGR', {
                  required: 'Por favor, seleccione una opción',
                })}
              />
              <label className="ml-2">No</label>
            </div>
            {errors.childDiagnosedWithIUGR && (
              <p className="text-red-500">
                {errors.childDiagnosedWithIUGR.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-lg leading-5 mt-5">Padre</h2>

          <div className="flex flex-col">
            <label className="r-label mb-2.5" htmlFor="fatherAgeAtPregnancy">
              Edad en el momento del embarazo
            </label>
            <Input
              className="r-input"
              id="fatherAgeAtPregnancy"
              {...register('fatherAgeAtPregnancy', {
                required: 'Este campo es obligatorio',
              })}
              type="text"
            />
            {errors.fatherAgeAtPregnancy && (
              <p className="text-red-500">
                {errors.fatherAgeAtPregnancy.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label
              className="r-label mb-2.5"
              htmlFor="fatherHasChildrenFromOtherMarriages"
            >
              ¿Hay hijos de otros matrimonios?
            </label>
            <div>
              <input
                type="radio"
                value="true"
                {...register('fatherHasChildrenFromOtherMarriages', {
                  required: 'Por favor, seleccione una opción',
                })}
              />
              <label className="ml-2">Sí</label>
            </div>
            <div>
              <input
                type="radio"
                value="false"
                {...register('fatherHasChildrenFromOtherMarriages', {
                  required: 'Por favor, seleccione una opción',
                })}
              />
              <label className="ml-2">No</label>
            </div>
            {errors.fatherHasChildrenFromOtherMarriages && (
              <p className="text-red-500">
                {errors.fatherHasChildrenFromOtherMarriages.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label
              className="r-label mb-2.5"
              htmlFor="fatherHealthConditionsOfOtherChildren"
            >
              ¿Cuáles son las condiciones de salud de los niños de otros
              matrimonios?
            </label>
            <Input
              className="r-input"
              id="fatherHealthConditionsOfOtherChildren"
              {...register('fatherHealthConditionsOfOtherChildren', {
                required: 'Este campo es obligatorio',
              })}
              type="text"
            />
            {errors.fatherHealthConditionsOfOtherChildren && (
              <p className="text-red-500">
                {errors.fatherHealthConditionsOfOtherChildren.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PregnancyInfo
