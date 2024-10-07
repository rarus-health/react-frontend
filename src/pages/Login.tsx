import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
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
import logo from "../assets/rarus-logo-vertical.png";
import { LanguageSwitcher } from "@/components/ui/language-switcher.tsx";
import useStore from "../stores/firstOnboardingStore";
import FirstOnboarding from "@/pages/FirstOnboarding";
import useAuthStore from "@/stores/authStore";
type FormInputs = {
  email: string;
  password: string;
};
export default function LoginAccount() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: "onChange",
  });
  const { firstOnboardingComplited } = useStore();
  const { login, isLoggedIn } = useAuthStore();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    const { email, password } = data;
    login(email, password);
    navigate("/");
    console.log("logged in");
    if (isLoggedIn) {
      console.log("logged in");
      navigate("/"); // Навигация только при успешном логине
    } else {
      console.log("Неверный email или пароль."); // Обработка ошибки
    }
  };

  //12345aA!a
  return (
    <>
      {!firstOnboardingComplited ? (
        <FirstOnboarding />
      ) : (
        <div className=" relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
          <div className="absolute top-4 right-0">
            <LanguageSwitcher />
          </div>
          <div className="w-full m-auto lg:max-w-lg">
            <div className="flex ">
              <img alt="logo" className="h-30 m-auto" src={logo} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Card className="min-w-[312px]">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-lg text-center">Log in</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid gap-2">
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="Email"
                      {...register("email", {
                        required: "Email is required",
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
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />
                    {errors.password && (
                      <span className="text-red-500">
                        {errors.password.message || "Error"}
                      </span>
                    )}{" "}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <Button className="w-full" type="submit">
                    Login
                  </Button>
                  <div className="mt-4 text-sm text-center ">
                    <Link
                      to="/reset-password-request"
                      className="text-[#77858C] "
                    >
                      <p className=" hover:underline">Password recovery</p>
                    </Link>
                    <Link to="/registration" className="text-[#77858C] ">
                      <p className=" mt-4 hover:underline">Registration</p>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
