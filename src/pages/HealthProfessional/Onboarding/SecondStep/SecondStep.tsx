import Header from '@/components/layout/Header'
import { useLocation, useNavigate } from 'react-router-dom'
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
import { useEffect, useState } from 'react'
import { useCreatePreferences } from './utils/hooks/useCreatePreferences'
import { useToken } from '../../utils/useToken'
import SpanError from '@/components/ui/SpanError'
import { HealthProfessionalPreferencesInputs } from './utils/types/healthProfessionalPreferences'

const OnboardingSecondStep = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const professionalIdQuery = queryParams.get('professionalId')

  const { createPreferences, isCreating, creationError, hasCreated } =
    useCreatePreferences()

  const professionalId = professionalIdQuery
    ? Number(professionalIdQuery)
    : null

  const [formData, setFormData] = useState<HealthProfessionalPreferencesInputs>(
    {
      clinicalTrialsInfo: false,
      geneticsKnowledge: false,
      collaborateWithSpecialists: false,
      createHealthNetwork: false,
      teamworkSkills: false,
      analyzeClinicalCases: false,
      latestResearchArticles: false,
      webinarsParticipation: false,
      applyAsSpeaker: false,
      patientHistoryAndSymptoms: false,
      treatmentGuide: false,
      improveKnowledgeCertification: false,
      allOptions: false,
      otherOption: '',
      healthProfessionalId: professionalId as number,
    }
  )

  const { getToken, token } = useToken()

  useEffect(() => {
    console.log(formData)
  }, [formData])

  const handleSelection = (key: keyof HealthProfessionalPreferencesInputs) => {
    setFormData((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  useEffect(() => {
    getToken()
  }, [])

  useEffect(() => {
    if (
      hasCreated ||
      creationError === 'El profesional de salud ya tiene preferencias'
    ) {
      navigate('/health-professional/patients')
    }
  }, [hasCreated, creationError])

  useEffect(() => {
    if (hasCreated) navigate('/health-professional/patients')
  }, [hasCreated])

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
              isSelected={formData.clinicalTrialsInfo}
              onClick={() => handleSelection('clinicalTrialsInfo')}
            />
            <ProfessionalActionBox
              name="geneticsKnowledge"
              imageSrc={GeneticsImg}
              text={'Desarrollar mis conocimientos sobre genética.'}
              isSelected={formData.geneticsKnowledge}
              onClick={() => handleSelection('geneticsKnowledge')}
            />
            <ProfessionalActionBox
              name="collaborateWithSpecialists"
              imageSrc={HandshakeImg}
              text={
                'Colaborar con otros especialistas de salud y cooperar con especialistas internacionales.'
              }
              isSelected={formData.collaborateWithSpecialists}
              onClick={() => handleSelection('collaborateWithSpecialists')}
            />
            <ProfessionalActionBox
              name="createHealthNetwork"
              imageSrc={WorldImg}
              text={
                'Generar y ser parte de una red especial para especialistas de la salud. Escribir y publicar artículos. Compartir experiencias con otros especialistas.'
              }
              isSelected={formData.createHealthNetwork}
              onClick={() => handleSelection('createHealthNetwork')}
            />
            <ProfessionalActionBox
              name="teamworkSkills"
              imageSrc={TeamImg}
              text={
                'Aprender a trabajar y comunicarse en un equipo interdisciplinario.'
              }
              isSelected={formData.teamworkSkills}
              onClick={() => handleSelection('teamworkSkills')}
            />
            <ProfessionalActionBox
              name="analyzeClinicalCases"
              imageSrc={ArticleImg}
              text={
                'Analizar casos clínicos reales. Utilizar los datos de casos clínicos para publicaciones.'
              }
              isSelected={formData.analyzeClinicalCases}
              onClick={() => handleSelection('analyzeClinicalCases')}
            />
            <ProfessionalActionBox
              name="latestResearchArticles"
              imageSrc={LabResearthImg}
              text={
                'Obtener los últimos artículos sobre enfermedades genéticas raras.'
              }
              isSelected={formData.latestResearchArticles}
              onClick={() => handleSelection('latestResearchArticles')}
            />
            <ProfessionalActionBox
              name="webinarsParticipation"
              imageSrc={VideoImg}
              text={
                'Participar en seminarios web y otros eventos dedicados a enfermedades genésticas raras.'
              }
              isSelected={formData.webinarsParticipation}
              onClick={() => handleSelection('webinarsParticipation')}
            />
            <ProfessionalActionBox
              name="applyAsSpeaker"
              imageSrc={BoardImg}
              text={'Postular como orador de algún curso o webinar.'}
              isSelected={formData.applyAsSpeaker}
              onClick={() => handleSelection('applyAsSpeaker')}
            />
            <ProfessionalActionBox
              name="patientHistoryAndSymptoms"
              imageSrc={SymptomsImg}
              text={
                'Conocer el historial clínico y los síntomas de mi paciente.'
              }
              isSelected={formData.patientHistoryAndSymptoms}
              onClick={() => handleSelection('patientHistoryAndSymptoms')}
            />
            <ProfessionalActionBox
              name="treatmentGuide"
              imageSrc={TreatmentImg}
              text={
                'Obtener una guía paso a paso para administrar tratamiento a mis pacientes.'
              }
              isSelected={formData.treatmentGuide}
              onClick={() => handleSelection('treatmentGuide')}
            />
            <ProfessionalActionBox
              name="improveKnowledgeCertification"
              imageSrc={CertificateImg}
              text={
                'Mejorar mis conocimientos y obtener un certificado que lo avale.'
              }
              isSelected={formData.improveKnowledgeCertification}
              onClick={() => handleSelection('improveKnowledgeCertification')}
            />
            <ProfessionalActionBox
              name="allOptions"
              imageSrc={BorderImg}
              text={'Todo lo anterior y más.'}
              isSelected={formData.allOptions}
              onClick={() => handleSelection('allOptions')}
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
              onChange={(e) =>
                setFormData({ ...formData, otherOption: e.target.value })
              }
            />
          </div>
          <div className="grid place-items-center mt-5">
            {creationError && (
              <div>
                <SpanError text={creationError} />
              </div>
            )}
            <Button
              className="mt-5"
              type="submit"
              disabled={Boolean(isCreating || !token)}
              onClick={() => createPreferences(formData, token as string)}
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
