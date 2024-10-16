import WelcomeImg from '@/assets/healthProfessional/welcome_health_professional.png'
import ShareExperiencesImg from '@/assets/healthProfessional/share_experiencies_health_professional.png'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const steps = [
  {
    title: '¡Bienvenido a Rarus Health para personal de salud!',
    description:
      'Estamos trabajando con cuidadores y pacientes con necesidades médicas especiales. Aquí tendrá la oportunidad de investigar mejor las enfermedades genéticas raras basándose en la odisea de pacientes reales.',
    image: WelcomeImg,
  },
  {
    title: null,
    description:
      'Además, se le brinda la oportunidad de intercambiar experiencias con otros especialistas, crear colaboraciones, participar en webinars y conducirlos, nutrir nuevos especialistas del mundo, ayudar en la formación y el desarrollo profesional.',
    image: ShareExperiencesImg,
  },
]

export default function Introduction() {
  const [currentStep, setCurrentStep] = useState(0)
  const stepData = steps[currentStep]

  const handleNextStep = () => {
    if (currentStep === 0) {
      setCurrentStep(currentStep + 1)
      return
    }

    if (currentStep === 1) {
      console.log('IR AL LOGIN')
      console.log('GUARDAR ESTADO LOCAL PARA QUE NO VUELVA A APARECER EL FORM?')
    }
  }

  return (
    <div className="flex h-screen items-center borde">
      <div className="flex flex-col items-center m-4 borde">
        <img
          className="mb-[40px] h-[220px] md:h-[180px]"
          src={stepData.image}
          alt=""
        />
        {stepData.title && (
          <h1 className="text-[22pt] text-[#202427] mb-[19px] text-center max-w-[777px]">
            {stepData.title}
          </h1>
        )}
        <p className="text-[14pt] text-[#7E99AC] text-center max-w-[777px] mb-[30px]">
          {stepData.description}
        </p>

        <div>
          <Button type="submit" onClick={() => handleNextStep()}>
            Siguiente
          </Button>
        </div>
      </div>
    </div>
  )
}
