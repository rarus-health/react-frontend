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

import { LoginFormInputs } from './utils/loginFormInputs'
import { useLogin } from './utils/useLogin'

export default function Login() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    mode: 'onChange',
  })

  const { login, isLogging, loginError, token } = useLogin()

  const [showErrors, setShowErrors] = useState(false)

  const handleLogin: SubmitHandler<LoginFormInputs> = ({ email, password }) => {
    const formError = errors.email || errors.password
    if (!formError) {
      login({
        email,
        password,
      })
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/health-professional/onboarding')
      return
    }
  }, [token])

  return (
    <div className="flex md:justify-center flex-col items-center min-h-screen overflow-hidden">
      <div className="w-full mx-auto lg:max-w-6xl md:flex md:gap-20">
        <form onSubmit={handleSubmit(handleLogin)}>
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
                Ingreso para Profesionales de Salud
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
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button
                className="w-full"
                onClick={() => setShowErrors(true)}
                type="submit"
                disabled={Boolean(isLogging || token)}
              >
                Ingresar
              </Button>

              {!Boolean(isLogging || token) && (
                <>
                  <div className="mt-4 text-sm text-center ">
                    <Link
                      to="/reset-password-request"
                      className="text-[#77858C] "
                    >
                      <p className=" mt-4 hover:underline">
                        Reestablecer contraseña
                      </p>
                    </Link>
                  </div>
                  <div className="mt-4 text-sm text-center ">
                    <Link
                      to="/health-professional/registration"
                      className="text-[#77858C] "
                    >
                      <p className=" mt-4 hover:underline">Registrarse</p>
                    </Link>
                  </div>
                </>
              )}
            </CardFooter>
          </Card>
          {loginError && (
            <div className="mb-5">
              <SpanError text={loginError} />
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
