// Step3.tsx
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { FormData } from "../../stores/types";
import playIcon from "@/assets/forms/play-icon.svg";
import { Button } from "@/components/ui/button";

const Step3: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <div className="px-6 w-full bg-white max-w-3xl mx-auto ">
      <div className="flex justify-between gap-2 flex-col">
        <h3 className="font-semibold text-sm leading-5 text-center">
          Para finalizar el proceso de inscripción, debe firmar el formulario de
          consentimiento
        </h3>
        <div>
          <h3 className="my-3 text-sm">
            Una vez hecho esto, formarás parte de nuestro banco de datos Rarus y
            disfrutarás de todas las ventajas de nuestra plataforma
          </h3>
          <a
            className="block my-4 underline text-bold text-sm"
            target="_blank"
            rel="noopener noreferrer"
            href="https://s3.rarus.health/rarus/Rarus-consentimiento-informado.pdf"
          >
            Lea el texto del consentimiento para el procesamiento de datos
            personales
          </a>
          <div className="my-4 flex items-center">
            <div className="flex items-center justify-center">
              <input
                className="mr-8 h-4 w-4"
                type="radio"
                value="false"
                {...register("agreeConsent", {
                  required: "Consent is required",
                })}
              />
              {errors.agreeConsent && (
                <p className="text-red-500">{errors.agreeConsent.message}</p>
              )}
            </div>
            <label
              htmlFor="agreeConsent"
              className="text-sm flex-1 whitespace-pre-line"
            >
              Soy padre o tutor legal de una persona en cuestión. He leído
              atentamente el documento y doy mi consentimiento para el
              procesamiento de mis datos personales y los datos personales de la
              persona en cuestión.{" "}
            </label>
          </div>
        </div>
        <Button
          className="w-6 h-6 max-w-6 hidden"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <img src={playIcon} alt="play" className="w-6 h-6 max-w-6" />
        </Button>
      </div>
    </div>
  );
};

export default Step3;
