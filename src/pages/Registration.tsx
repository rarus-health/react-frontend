import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { LanguageSwitcher } from "@/components/ui/language-switcher.tsx";
import "../styles/modal.css"; // Import your custom styles
import axios from "axios";
import useAuthStore from "@/stores/authStore.ts";

type FormInputs = {
  email: string;
  password: string;
};

export default function AuthenticationPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: "onChange",
  });
  const registerUser = async (data: {
    email: string;
    password: string;
    confirmedPassword: string;
  }) => {
    const response = await axios.post(
      "https://rarus-health-qa.uc.r.appspot.com/users",
      data
    );
    console.log("response:", response);
    if (response.status === 200) {

      setSuccess(true);
    }
    return response.data;
  };
  const [success, setSuccess] = useState(false);
  const [termsError, setTermsError] = useState(false);
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    const { email, password } = data;
    if (termsAccepted && policyAccepted) {
      setTermsError(false);
      registerUser({
        email: email,
        password: password,
        confirmedPassword: password,
        //12345aA!a
      });
    } else {
      setTermsError(true);
    }
  };

  const [policyAccepted, setPolicyAccepted] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const handleRegistration = () => {};
  const videoLink =
    "https://www.youtube.com/embed/JiUQ9pIUObQ?si=Dr3K3dZ_v8ANfN_P";
  return (
    <div className=" relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
      <div className="absolute top-4 right-0">
        <LanguageSwitcher />
      </div>
      <div className="w-full m-auto lg:max-w-6xl md:flex md:gap-20">
        {success ? (
          <div className="flex w-[312px] text-center flex-col justify-center items-center min-h-screen overflow-hidden">
            <p className="text-green-600">
              {" "}
              Se ha enviado un correo electrónico a la dirección de correo
              electrónico que proporcionó. Haga clic en el enlace para confirmar
              el registro de su cuenta.{" "}
            </p>
            <div className="mt-4 text-sm text-center ">
              <Link to="/login" className="text-[#77858C] ">
                <p className=" mt-4 hover:underline">Accesar</p>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="flex md:hidden">
              <div className="modal flex flex-col justify-between w-full">
                <iframe
                  src={videoLink}
                  className="w-full h-full video-desktop p-4"
                  title="Video"
                />
              </div>{" "}
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Card className="min-w-[312px]">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-lg text-center">
                    Registro de usuario
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid gap-2">
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <span className="text-red-500">
                        {errors.email.message || "Error"}
                      </span>
                    )}{" "}
                  </div>
                  <div className="grid gap-2">
                    <PasswordInput
                      id="current_password"
                      autoComplete="current-password"
                      required
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message: "Password must be at least 8 characters",
                        },
                        validate: {
                          uppercase: (value) =>
                            /[A-Z]/.test(value) ||
                            "Password must contain at least one uppercase letter",
                          lowercase: (value) =>
                            /[a-z]/.test(value) ||
                            "Password must contain at least one lowercase letter",
                          symbol: (value) =>
                            /[^A-Za-z0-9]/.test(value) ||
                            "Password must contain at least one special character",
                        },
                      })}
                    />{" "}
                    {errors.password && (
                      <span className="text-red-500">
                        {errors.password.message || "Error"}
                      </span>
                    )}{" "}
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
                        He leído y acepto{" "}
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
                        He leído y acepto{" "}
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
                {termsError && (
                  <span className="text-red-500">
                    You must accept terms and policy before registering.
                  </span>
                )}{" "}
                <CardFooter className="flex flex-col">
                  <Button
                    className="w-full"
                    onClick={handleRegistration}
                    type="submit"
                  >
                    Inscribirse
                  </Button>
                  <div className="mt-4 text-sm text-center ">
                    <Link to="/login" className="text-[#77858C] ">
                      <p className=" mt-4 hover:underline">Accesar</p>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </form>

            <div className="hidden md:flex max-w-lg w-full mt-10 md:m-0">
              <div className="modal-desktop flex flex-col justify-between w-full">
                <iframe
                  src={videoLink}
                  className="w-full h-full video-desktop border rounded-xl"
                  title="Video"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
