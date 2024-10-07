import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { LanguageSwitcher } from "@/components/ui/language-switcher.tsx";
import { useNavigate } from "react-router-dom";
import { PasswordInput } from "@/components/ui/password-input";

export default function ResetPassswordConfirmation() {
  const [success, setSuccess] = useState(false);

  console.log("success:", success);
  const handleRecoverPassword = () => {
    setSuccess(true);
  };
  return (
    <div className=" relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
      <div className="absolute top-4 right-0">
        <LanguageSwitcher />
      </div>
      <div className="w-full m-auto lg:max-w-lg">
        {success ? (
          <div className="flex w-[312px] text-center flex-col justify-center items-center min-h-screen overflow-hidden">
            <p className="text-green-600">
              {" "}
              La contraseña se ha cambiado correctamente, ahora puede iniciar
              sesión.{" "}
            </p>
            <div className="mt-4 text-sm text-center ">
              <Link to="/login" className="text-[#77858C] ">
                <p className=" mt-4 hover:underline">Accesar</p>
              </Link>
            </div>
          </div>
        ) : (
          <Card className="min-w-[312px]">
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <PasswordInput
                  id="current_password"
                  autoComplete="current-password"
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button className="w-full" onClick={handleRecoverPassword}>
                Guardar contraseña
              </Button>
              <div className="mt-4 text-sm text-center ">
                <Link to="/login" className="text-[#77858C] ">
                  <p className=" mt-4 hover:underline">Accesar</p>
                </Link>
              </div>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
}
