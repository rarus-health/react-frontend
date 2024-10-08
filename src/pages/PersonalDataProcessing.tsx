import React from "react";
import { Button } from "@/components/ui/button";
import woman from "@/assets/second-onboarding/women.svg";
import children from "@/assets/second-onboarding/children.svg";
const PersonalDataIntro: React.FC = () => {
  return (
    <>
      <div className="flex-grow w-full flex flex-col justify-normal items-center md:bg-[#F7F9FA] bg-white">
        <h1 className="mt-28 md:mt-14 mb-10 font-montserrat font-medium text-[24px] leading-[150%] flex items-center text-[#072FAA]">
          Datos de salud
        </h1>
        <div>
          <p>
            Para crear un programa de asistencia personalizado para usted,
            rellene la información sobre su salud.
            <br />
            Cuanto más completo sea su perfil médico, más precisa será la ayuda
            que podamos proporcionarle. <br /> Rarus Health, consciente de la
            importancia y la sensibilidad de la información facilitada, trata
            sus datos con gran seriedad y responsabilidad.
          </p>
        </div>
      </div>
    </>
  );
};

export default PersonalDataIntro;
