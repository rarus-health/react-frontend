import Introduction from '@/pages/HealthProfessional/Introduction/Introducction'
import Login from '@/pages/HealthProfessional/Login/Login'
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
    element: (
      <div className="w-full h-full flex flex-col max-w-7xl mx-auto">
        <main className="flex-grow">ONBOARDING</main>
      </div>
    ),
  },
  {
    path: '/health-professional/patients',
    element: (
      <div className="w-full h-full flex flex-col max-w-7xl mx-auto">
        <main className="flex-grow">PATIENTS</main>
      </div>
    ),
  },
]
