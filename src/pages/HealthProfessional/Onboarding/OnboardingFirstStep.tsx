import Header from '@/components/layout/Header'
import { StepIndicator } from './utils/StepIndicator'
import { CreateProfessionalInputs } from './utils/types/CreateProfessionalInputs'
import { useCreateProfessional } from './utils/useCreateProfessional'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ProfessionSelect } from './utils/ProfessionSelect'
import { FormInput } from './utils/FormInput'
import { Button } from '@/components/ui/button'
import SpanError from '@/components/ui/SpanError'

export default function OnboardingFirstStep() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProfessionalInputs>({
    mode: 'onChange',
  })

  const {
    createProfessional,
    // isCreating,
    // creationError,
    // professionalId,
  } = useCreateProfessional()

  const handleCreateProfessional: SubmitHandler<CreateProfessionalInputs> = ({
    name,
    lastName,
    phone,
    profession,
    specialization,
  }) => {
    createProfessional({
      name,
      lastName,
      phone,
      profession,
      specialization,
    })
  }

  return (
    <div className="w-screen h-screen flex flex-col max-w-screen-2xl mx-auto">
      <Header title="Queremos saber de usted" />
      <main className="flex flex-col items-center">
        <h1 className="mt-5 text-sm md:text-base text-center">
          Por favor complete la información.
        </h1>

        <StepIndicator activeStep={1} />
        <form onSubmit={handleSubmit(handleCreateProfessional)}>
          <div className="w-full flex flex-col md:flex-row mt-5 items-stretch md:justify-center">
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
              {/* Cambia max-w-xs a max-w-md */}
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
            <p className="text-sm md:text-base text-blue-600 text-center">
              Los campos marcados con asterisco * son requeridos.
            </p>

            <Button
              className="mt-5"
              // onClick={() => setShowErrors(true)}
              type="submit"
              // disabled={Boolean(isLogging || token)}
            >
              Continuar
            </Button>
            {Object.keys(errors).length > 0 && (
              <div className="mt-5">
                <SpanError text={Object.values(errors)[0].message || 'Error'} />
              </div>
            )}
          </div>
        </form>
      </main>
    </div>
  )
}
