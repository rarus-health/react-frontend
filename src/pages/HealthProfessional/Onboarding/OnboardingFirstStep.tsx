import Header from '@/components/layout/Header'
import { StepIndicator } from './utils/StepIndicator'
import { CreateProfessionalInputs } from './utils/OnboardingFirstStep/types/CreateProfessionalInputs'
import { useCreateProfessional } from './utils/OnboardingFirstStep/useCreateProfessional'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ProfessionSelect } from './utils/OnboardingFirstStep/ProfessionSelect'
import { FormInput } from './utils/OnboardingFirstStep/FormInput'
import { Button } from '@/components/ui/button'
import SpanError from '@/components/ui/SpanError'
import { checkErrors } from './utils/OnboardingFirstStep/checkErrors'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function OnboardingFirstStep() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProfessionalInputs>({
    mode: 'onChange',
  })

  const { createProfessional, isCreating, creationError, professionalId } =
    useCreateProfessional()

  const handleCreateProfessional: SubmitHandler<CreateProfessionalInputs> = (
    inputs
  ) => {
    createProfessional(inputs)
  }

  useEffect(() => {
    if (professionalId)
      navigate(
        `/health-professional/onboarding/second-step?professionalId=${professionalId}`
      )
  }, [professionalId])

  return (
    <div className="w-screen min-h-screen flex flex-col bg-gray-100">
      <Header title="Queremos saber de usted" />

      <div className="w-screen flex flex-col max-w-screen-2xl mx-auto p-5">
        <h1 className="mt-5 text-sm md:text-base text-center">
          Por favor complete la información.
        </h1>

        <StepIndicator activeStep={1} />
        <form onSubmit={handleSubmit(handleCreateProfessional)}>
          <div className="w-full flex flex-col lg:flex-row mt-5 items-stretch md:justify-center">
            <div className="flex-1 p-2 max-w-md gap-5 flex flex-col min-h-full">
              <FormInput
                label="Nombre"
                id="name"
                register={register}
                required={true}
              />
              <FormInput
                label="Apellido"
                id="lastName"
                register={register}
                required={true}
              />
              <FormInput
                name="Teléfono"
                label="Teléfono (Ejemplo: +56912345678)"
                id="phone"
                register={register}
                required={true}
              />
              <ProfessionSelect register={register} />
              <FormInput
                label="Área de trabajo o especialización"
                id="specialization"
                register={register}
                required={true}
              />
            </div>

            <div className="flex-1 p-2 max-w-md gap-5 flex flex-col min-h-full">
              <FormInput
                label="Institución de salud donde trabajas o te desempeñaste por última vez"
                id="healthInstitutionWork"
                register={register}
                required={true}
              />
              <FormInput
                label="¿Eres miembro de alguna sociedad científica? ¿Cuál?"
                id="scientificSociety"
                register={register}
              />
              <FormInput
                label="¿Estás inscrito a otras organizaciones de salud? ¿Cuáles?"
                id="healthOrganizations"
                register={register}
              />
              <FormInput
                label="¿Tienes temas de investigación de interés? ¿Cuáles?"
                id="researchOfInterests"
                register={register}
              />
              <FormInput
                label="¿Con qué enfermedades has trabajado? ¿Por cuántos años?"
                id="diseasesWorkedOn"
                register={register}
              />
            </div>
          </div>
          <div className="grid place-items-center mt-5">
            {!checkErrors(errors, creationError) && (
              <p className="text-sm md:text-base text-blue-600 text-center">
                Los campos marcados con asterisco * son requeridos.
              </p>
            )}
            {checkErrors(errors, creationError) && (
              <div>
                <SpanError
                  text={checkErrors(errors, creationError) as string}
                />
              </div>
            )}
            <Button
              className="mt-5"
              type="submit"
              disabled={Boolean(isCreating || professionalId)}
            >
              Continuar
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
