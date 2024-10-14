import React from "react";
import { Button } from "@/components/ui/button";
const Step2: React.FC = () => {
  return (
    <div className="px-6 w-full bg-white max-w-3xl mx-auto  mt-28">
      <div className="mb-24">
        <h1 className="md:text-heading-mobile md:text-heading md:mt-14 mb-3 text-left ">
          Datos de salud
        </h1>
        <div>
          <p className="text-body">
            Para crear un programa de asistencia personalizado para usted,
            rellene la información sobre su salud.
            <br />
            <br />
            Cuanto más completo sea su perfil médico, más precisa será la ayuda
            que podamos proporcionarle. <br />
            <br /> Rarus Health, consciente de la importancia y la sensibilidad
            de la información facilitada, trata sus datos con gran seriedad y
            responsabilidad.
          </p>
        </div>
      </div>
      <Button className="md:hidden" variant="mobile">
        Continuar
      </Button>
      <Button className="hidden md:block">Continuar</Button>
    </div>
  );
};

export default Step2;
