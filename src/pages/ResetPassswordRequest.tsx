import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LanguageSwitcher } from "@/components/ui/language-switcher.tsx";

export default function ResetPassswordRequest() {
  const [success, setSuccess] = useState(false);

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
              Se envió un correo electrónico a la dirección de correo
              electrónico que especificó. Haga clic en el enlace para
              restablecer su contraseña.{" "}
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
                <Input id="email" type="email" placeholder="Email" />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button className="w-full" onClick={handleRecoverPassword}>
                Recuperar contraseña
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
