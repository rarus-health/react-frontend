// Step2.tsx
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormData } from "../../stores/types";
import { RadioGroup, Radio } from "@nextui-org/radio"; // Импорт радио компонентов
import { Input } from "@/components/ui/input"; // Импорт кастомного инпута

const Step2: React.FC = () => {
  const {
    setValue,
    control,
    register,
    formState: { errors },
  } = useFormContext<FormData>();
  return (
    <div className="px-6 w-full bg-white max-w-3xl mx-auto">
      <div className="personal">
        <h3 className="font-semibold text-sm leading-5">
          Complete información sobre usted
        </h3>

        {/* Поле для медицинской институции */}
        <div className="flex flex-col">
          <label className="r-label mb-0" htmlFor="medicalInstitution">
            Institución médica principal
          </label>
          <span className="text-xs mb-2.5 text-[#717171]">
            Especifique la institución médica donde se le observa
          </span>
          <Input
            className="r-input"
            id="medicalInstitution"
            {...register("medicalInstitution", {
              required: "Este campo es obligatorio",
            })}
            type="text"
          />
          {errors.medicalInstitution && (
            <p className="text-red-500">{errors.medicalInstitution.message}</p>
          )}
        </div>

        {/* Поле для выбора генетического теста */}
        <div className="flex flex-col">
          <label className="r-label mb-0">Prueba genética</label>
          <span className="text-xs mb-2.5 text-[#717171]">
            Especifique si ha realizado pruebas genéticas y tiene archivos con
            resultados
          </span>
          <div>
            <input
              type="radio"
              value="true"
              {...register("geneticTest", {
                required: "Por favor, seleccione una opción",
              })}
            />
            <label className="ml-2">Yes</label>
          </div>
          <div>
            <input
              type="radio"
              value="false"
              {...register("geneticTest", {
                required: "Por favor, seleccione una opción",
              })}
            />
            <label className="ml-2">No</label>
          </div>
          {errors.geneticTest && (
            <p className="text-red-500">{errors.geneticTest.message}</p>
          )}
        </div>

        {/* Поле для диагноза */}
        <div className="flex flex-col">
          <label className="r-label mb-0">Diagnóstico</label>
          <span className="text-xs mb-2.5 text-[#717171]">
            ¿Conoce el diagnóstico de su hijo?
          </span>
          <div>
            <input
              type="radio"
              value="true"
              {...register("diagnosis", {
                required: "Por favor, seleccione una opción",
              })}
            />
            <label className="ml-2">Yes</label>
          </div>
          <div>
            <input
              type="radio"
              value="false"
              {...register("diagnosis", {
                required: "Por favor, seleccione una opción",
              })}
            />
            <label className="ml-2">No</label>
          </div>
          {errors.diagnosis && (
            <p className="text-red-500">{errors.diagnosis.message}</p>
          )}
        </div>

        {/* Поле для эпилепсии */}
        <div className="flex flex-col">
          <label className="r-label mb-0">Epilepsia</label>
          <span className="text-xs mb-2.5 text-[#717171]">
            Especifique si su hijo tiene síntomas de epilepsia
          </span>
          <div>
            <input
              type="radio"
              value="true"
              {...register("epilepsy", {
                required: "Por favor, seleccione una opción",
              })}
            />
            <label className="ml-2">Yes</label>
          </div>
          <div>
            <input
              type="radio"
              value="false"
              {...register("epilepsy", {
                required: "Por favor, seleccione una opción",
              })}
            />
            <label className="ml-2">No</label>
          </div>
          {errors.epilepsy && (
            <p className="text-red-500">{errors.epilepsy.message}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Step2
