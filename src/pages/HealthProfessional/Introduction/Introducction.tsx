import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Title from '@/components/ui/Title'

import { introducionSteps } from './utils/introductionSteps'
import { useToken } from '../utils/useToken'

export default function Introduction() {
  const navigate = useNavigate()
  const { redirectIfUserIsLoggedIn } = useToken()

  const [currentStep, setCurrentStep] = useState(0)
  const stepData = introducionSteps[currentStep]

  const handleNextStep = () => {
    if (currentStep === 0) {
      setCurrentStep(currentStep + 1)
      return
    }
    if (currentStep >= 1) navigate('/health-professional/login')
  }

  useEffect(() => {
    redirectIfUserIsLoggedIn()
  }, [])

  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <img
        className="mb-[40px] h-[220px] md:h-[180px]"
        src={stepData.image}
        alt=""
      />
      {stepData.title && <Title text={stepData.title} />}

      <p className="text-[14pt] text-[#7E99AC] text-center max-w-[777px] mb-[30px]">
        {stepData.description}
      </p>
      <Button type="submit" onClick={() => handleNextStep()}>
        Siguiente
      </Button>
    </div>
  )
}
