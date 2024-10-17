import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Introduction from '@/pages/HealthProfessional/Introducction'
import Registration from '@/pages/HealthProfessional/Registration'

export const healthProfessionalRoutes = [
  {
    path: '/health-professional/introduction',
    element: (
      <div className="w-full h-full flex flex-col max-w-7xl mx-auto">
        <Introduction />
      </div>
    ),
  },
  {
    path: '/health-professional/login',
    element: (
      <div className="w-screen h-screen flex flex-col max-w-screen-2xl mx-auto">
        <Header />
        <div className="flex-grow">
          <main className="flex-grow">LOGIN</main>
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: '/health-professional/registration',
    element: <Registration />,
  },
  {
    path: '/health-professional/onboarding',
    element: (
      <div className="w-full h-full flex flex-col max-w-7xl mx-auto">
        <main className="flex-grow">REGISTRATION</main>
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
