import Header from '@/components/layout/Header'
import { useLocation } from 'react-router-dom'
import { StepIndicator } from '../utils/StepIndicator'

import LabResearthImg from '@/assets/healthProfessional/onboarding/onboardingSecondStep/lab-research.svg'
import GeneticsImg from '@/assets/healthProfessional/onboarding/onboardingSecondStep/genetics.svg'
import HandshakeImg from '@/assets/healthProfessional/onboarding/onboardingSecondStep/handshake.svg'
import WorldImg from '@/assets/healthProfessional/onboarding/onboardingSecondStep/world.svg'
import TeamImg from '@/assets/healthProfessional/onboarding/onboardingSecondStep/people-team.svg'
import ArticleImg from '@/assets/healthProfessional/onboarding/onboardingSecondStep/article-search.svg'
import VideoImg from '@/assets/healthProfessional/onboarding/onboardingSecondStep/video.svg'
import BoardImg from '@/assets/healthProfessional/onboarding/onboardingSecondStep/board-teacher.svg'
import SymptomsImg from '@/assets/healthProfessional/onboarding/onboardingSecondStep/symptoms.svg'
import TreatmentImg from '@/assets/healthProfessional/onboarding/onboardingSecondStep/treatment.svg'
import CertificateImg from '@/assets/healthProfessional/onboarding/onboardingSecondStep/certificate.svg'
import BorderImg from '@/assets/healthProfessional/onboarding/onboardingSecondStep/border.svg'

import { ProfessionalActionBox } from './utils/ProfessionalActionBox'
import { Button } from '@/components/ui/button'

const OnboardingSecondStep = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const professionalId = queryParams.get('professionalId')

  const handleSelection = (isSelected: boolean) => {
    console.log('Selected:', isSelected)
  }

  return (
    <div className="w-screen min-h-screen flex flex-col bg-gray-100">
      <Header title="Queremos saber de usted" />

      <div className="w-screen flex flex-col max-w-screen-2xl mx-auto p-5">
        <h1 className="mt-5 text-sm md:text-base text-center">
          Por favor complete la información.
        </h1>

        <StepIndicator activeStep={2} />

        <div className="flex flex-col items-center max-w-screen-2xl mx-auto">
          <h1 className="mt-5 text-sm md:text-base text-center">
            Podemos ofrecerte las siguientes acciones en nuestra plataforma,
            ¿Cuáles te interesan?
          </h1>
          <h2 className="mt-3 text-sm md:text-base text-center">
            Puedes elegir varias respuestas.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            <ProfessionalActionBox
              name="clinicalTrialsInfo"
              imageSrc={LabResearthImg}
              text={
                'Más información sobre como realizar ensayos clínicos y participar en ellos.'
              }
              onClick={handleSelection}
            />
            <ProfessionalActionBox
              name="geneticsKnowledge"
              imageSrc={GeneticsImg}
              text={'Desarrollar mis conocimientos sobre genética.'}
              onClick={handleSelection}
            />
            <ProfessionalActionBox
              name="collaborateWithSpecialists"
              imageSrc={HandshakeImg}
              text={
                'Colaborar con otros especialistas de salud y cooperar con especialistas internacionales.'
              }
              onClick={handleSelection}
            />
            <ProfessionalActionBox
              name="createHealthNetwork"
              imageSrc={WorldImg}
              text={
                'Generar y ser parte de una red especial para especialistas de la salud. Escribir y publicar artículos. Compartir experiencias con otros especialistas.'
              }
              onClick={handleSelection}
            />
            <ProfessionalActionBox
              name="teamworkSkills"
              imageSrc={TeamImg}
              text={
                'Aprender a trabajar y comunicarse en un equipo interdisciplinario.'
              }
              onClick={handleSelection}
            />
            <ProfessionalActionBox
              name="analyzeClinicalCases"
              imageSrc={ArticleImg}
              text={
                'Analizar casos clínicos reales. Utilizar los datos de casos clínicos para publicaciones.'
              }
              onClick={handleSelection}
            />
            <ProfessionalActionBox
              name="latestResearchArticles"
              imageSrc={LabResearthImg}
              text={
                'Obtener los últimos artículos sobre enfermedades genéticas raras.'
              }
              onClick={handleSelection}
            />
            <ProfessionalActionBox
              name="webinarsParticipation"
              imageSrc={VideoImg}
              text={
                'Participar en seminarios web y otros eventos dedicados a enfermedades genésticas raras.'
              }
              onClick={handleSelection}
            />
            <ProfessionalActionBox
              name="applyAsSpeaker"
              imageSrc={BoardImg}
              text={'Postular como orador de algún curso o webinar.'}
              onClick={handleSelection}
            />
            <ProfessionalActionBox
              name="patientHistoryAndSymptoms"
              imageSrc={SymptomsImg}
              text={
                'Conocer el historial clínico y los síntomas de mi paciente.'
              }
              onClick={handleSelection}
            />
            <ProfessionalActionBox
              name="treatmentGuide"
              imageSrc={TreatmentImg}
              text={
                'Obtener una guía paso a paso para administrar tratamiento a mis pacientes.'
              }
              onClick={handleSelection}
            />
            <ProfessionalActionBox
              name="improveKnowledgeCertification"
              imageSrc={CertificateImg}
              text={
                'Mejorar mis conocimientos y obtener un certificado que lo avale.'
              }
              onClick={handleSelection}
            />
            <ProfessionalActionBox
              name="allOptions"
              imageSrc={BorderImg}
              text={'Todo lo anterior y más.'}
              onClick={handleSelection}
            />
          </div>
          <div className="mt-5 w-full">
            <label
              htmlFor="otherOption"
              className="block text-xs sm:text-sm md:text-base lg:text-lg font-medium text-gray-700"
            >
              Otro (a):
            </label>
            <input
              type="text"
              id="otherOption"
              name="otherOption" // Add a descriptive name attribute
              placeholder="Escribe tu opción aquí"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-xs sm:text-sm md:text-base lg:text-lg"
            />
          </div>
          <div className="grid place-items-center mt-5">
            <Button
              className="mt-5"
              type="submit"
              // disabled={Boolean(isCreating || professionalId)}
            >
              Continuar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnboardingSecondStep
