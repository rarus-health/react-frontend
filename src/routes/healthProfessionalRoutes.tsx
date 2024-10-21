import Introduction from '@/pages/HealthProfessional/Introduction/Introducction'
import Login from '@/pages/HealthProfessional/Login/Login'
import OnboardingFirstStep from '@/pages/HealthProfessional/Onboarding/OnboardingFirstStep'
import Patients from '@/pages/HealthProfessional/Patients/Patients'
import Registration from '@/pages/HealthProfessional/Registration/Registration'

export const healthProfessionalRoutes = [
  {
    path: '/health-professional/introduction',
    element: <Introduction />,
  },
  {
    path: '/health-professional/login',
    element: <Login />,
  },
  {
    path: '/health-professional/registration',
    element: <Registration />,
  },
  {
    path: '/health-professional/onboarding',
    element: <OnboardingFirstStep />,
  },
  {
    path: '/health-professional/patients',
    element: <Patients />,
  },
]
