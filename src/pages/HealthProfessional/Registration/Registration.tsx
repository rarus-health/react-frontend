import { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '@/components/ui/password-input'
import '@/styles/modal.css' // Import your custom styles

import RarusHealthLogoImg from '@/assets/rarus-logo-vertical.png'
import SpanError from '@/components/ui/SpanError'

import { useRegistration } from './utils/useRegistration'
import { RegistrationFormInputs } from './utils/types/RegistrationFormInputs'

export default function Registration() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormInputs>({
    mode: 'onChange',
  })

  const { registerUser, isRegistering, registerError, token } =
    useRegistration()

  const [policyAccepted, setPolicyAccepted] = useState(false)
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [showErrors, setShowErrors] = useState(false)
  const [termsError, setTermsError] = useState(false)

  const handleRegistration: SubmitHandler<RegistrationFormInputs> = ({
    email,
    password,
  }) => {
    const formError = errors.email || errors.password
    if (!formError && !termsError) {
      registerUser({
        email,
        password,
      })
    }
  }

  useEffect(() => {
    if (policyAccepted && termsAccepted) {
      setTermsError(false)
      return
    }
    setTermsError(true)
  }, [policyAccepted, termsAccepted])

  useEffect(() => {
    if (token) {
      navigate('/health-professional/onboarding')
      return
    }
  }, [token])

  return (
    <div className="flex md:justify-center flex-col items-center min-h-screen overflow-hidden">
      <div className="w-full mx-auto lg:max-w-6xl md:flex md:gap-20">
        <form onSubmit={handleSubmit(handleRegistration)}>
          <Card className="w-full sm:w-[312px] md:w-[400px] lg:w-[500px] flex flex-col overflow-hidden">
            <CardHeader className="space-y-1">
              <div className="flex items-center justify-center">
                <img
                  className="mb-[40px] h-[220px] md:h-[180px]"
                  src={RarusHealthLogoImg}
                  alt=""
                />
              </div>
              <CardTitle className="text-lg text-center">
                Registro para Profesionales de Salud
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Input
                  id="email"
                  type="email"
                  placeholder="Correo Electrónico"
                  {...register('email', {
                    required: 'El correo electrónico es requerido.',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'El correo electrónico es inválido.',
                    },
                  })}
                />
                {showErrors && errors.email && (
                  <SpanError text={errors.email.message || 'Error'} />
                )}
              </div>
              <div className="grid gap-2">
                <PasswordInput
                  id="current_password"
                  autoComplete="current-password"
                  {...register('password', {
                    required: 'La contraseña es requerida.',
                    minLength: {
                      value: 8,
                      message:
                        'La contraseña debe contener al menos 8 caracteres.',
                    },
                    validate: {
                      uppercase: (value) =>
                        /[A-Z]/.test(value) ||
                        'La contraseña debe contener al menos una mayúscula.',
                      lowercase: (value) =>
                        /[a-z]/.test(value) ||
                        'La contraseña debe contener al menos una minúscula.',
                      digit: (value) =>
                        /[0-9]/.test(value) ||
                        'La contraseña debe contener al menos un dígito.',
                      symbol: (value) =>
                        /[!@#\$%^&*()_+\-=\{\}\[\]:;"\'<>,.\/?~`]/.test(
                          value
                        ) ||
                        'La contraseña debe contener al menos un carácter especial.',
                    },
                  })}
                />
                {showErrors && errors.password && (
                  <SpanError text={errors.password.message || 'Error'} />
                )}
              </div>
              <div>
                <div className="text-left mt-4 flex items-center">
                  <input
                    className="mr-1 h-5 w-5"
                    type="checkbox"
                    id="agree"
                    name="agree"
                    checked={policyAccepted}
                    onChange={() => setPolicyAccepted((prev) => !prev)}
                  />
                  <label htmlFor="agree">
                    He leído y acepto
                    <a
                      href="https://s3.rarus.health/rarus/Politicas_de_Privacidad_Rarus_Health.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-normal text-gray-800"
                    >
                      la Política de privacidad
                    </a>
                  </label>
                </div>
                <div className="text-left mt-2 flex items-center">
                  <input
                    className="mr-1 h-5 w-5"
                    type="checkbox"
                    id="agree2"
                    name="agree2"
                    checked={termsAccepted}
                    onChange={() => setTermsAccepted((prev) => !prev)}
                  />
                  <label htmlFor="agree2">
                    He leído y acepto
                    <a
                      href="https://s3.rarus.health/rarus/Condiciones-de-servicio.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-normal text-gray-800"
                    >
                      las Condiciones del servicio
                    </a>
                  </label>
                </div>
              </div>
            </CardContent>
            {showErrors && termsError && (
              <div className="mb-5">
                <SpanError
                  text="Debes aceptar la política de privacidad y las condiciones
                    del servicio."
                />
              </div>
            )}
            <CardFooter className="flex flex-col">
              <Button
                className="w-full"
                onClick={() => setShowErrors(true)}
                type="submit"
                disabled={Boolean(isRegistering || token)}
              >
                Registrarse
              </Button>
              {!Boolean(isRegistering || token) && (
                <div className="mt-4 text-sm text-center ">
                  <Link to="/login" className="text-[#77858C] ">
                    <p className=" mt-4 hover:underline">Ingresar</p>
                  </Link>
                </div>
              )}
            </CardFooter>
          </Card>
          {registerError && (
            <div className="mb-5">
              <SpanError text={registerError} />
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
