import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/index.css'
import './styles/modal.css'
import './styles/textStyles.css'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/UserAuth/Login'
import Registration from './pages/UserAuth/Registration'
import Root from './routes/root'
import ResetPasswordRequest from './pages/UserAuth/ResetPassswordRequest'
import ResetPasswordConfirmation from './pages/UserAuth/ResetPassswordConfirmation'
import WhoNeedsHelp from './pages/OnboardingForms/WhoNeedsHelp'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import PersonalDataIntro from './pages/OnboardingForms/PersonalDataIntro'
import HeaderUserAuth from './components/layout/HeaderUserAuth'
import MultistepForm from './components/MultistepForm'
import { NextUIProvider } from '@nextui-org/react'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/login',
    element: (
      <div className="w-screen h-screen flex flex-col max-w-screen-2xl mx-auto">
        <HeaderUserAuth />
        <Login />
      </div>
    ),
  },
  {
    path: '/registration',
    element: (
      <div className="w-screen h-screen flex flex-col max-w-screen-2xl mx-auto">
        <HeaderUserAuth />
        <Registration />
      </div>
    ),
  },
  {
    path: '/reset-password-request',
    element: (
      <div className="w-screen h-screen flex flex-col max-w-screen-2xl mx-auto">
        <HeaderUserAuth />
        <ResetPasswordRequest />
      </div>
    ),
  },
  {
    path: '/reset-password',
    element: (
      <div className="w-screen h-screen flex flex-col max-w-screen-2xl mx-auto">
        <HeaderUserAuth />
        <ResetPasswordConfirmation />
      </div>
    ),
  },
  {
    path: '/onboarding/who-needs-help',
    element: (
      <div className="w-screen h-screen flex flex-col max-w-screen-2xl mx-auto">
        <Header />
        <WhoNeedsHelp />
        <Footer />
      </div>
    ),
  },
  {
    path: '/onboarding/personal-data-intro',
    element: (
      <div className="w-screen h-screen flex flex-col max-w-screen-2xl mx-auto">
        <Header />
        <div className="flex-grow">
          <PersonalDataIntro />
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: '/onboarding/form',
    element: (
      <div className="w-screen h-screen flex flex-col max-w-screen-2xl mx-auto">
        <Header />
        <div className="flex-grow">
          <MultistepForm />
        </div>
        <Footer />
      </div>
    ),
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NextUIProvider locale="es-ES">
      <RouterProvider router={router} />
    </NextUIProvider>
  </StrictMode>
)
