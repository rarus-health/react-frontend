import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import countries from "@/locales/es.json";
import { RadioGroup, Radio } from "@nextui-org/radio"; // путь к вашему es.json
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { DatePicker } from "@nextui-org/date-picker";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Step2 = () => {
  const [isTestsDone, setTestsDone] = useState(false);

  const handleTestsDoneCheckboxChange = () => {
    setTestsDone(!isTestsDone);
  };
  const [date, setDate] = React.useState<Date>();
  const sortedCountries = Object.entries(countries.countries)
    .sort(([, a], [, b]) => (a > b ? 1 : -1))
    .map(([country]) => country);
  const formatDate = (date: Date | null) => {
    return date ? format(date, "dd/MM/yyyy", { locale: es }) : "";
  };
  return (
    <div className="px-6 w-full bg-white max-w-3xl mx-auto">
      <div className="personal">
        <h3 className="font-semibold text-sm leading-5">
          Complete información sobre usted
        </h3>
        <div className="name flex-col">
          <div className="flex flex-col">
            <label className="r-label mb-0" htmlFor="medicalInstitution">
              Institución médica principal
            </label>
            <span className="text-xs mb-2.5 text-[#717171]">
              Especifique la institución médica donde se le observa
            </span>
            <Input className="r-input" id="medicalInstitution" type="text" />
          </div>
          <div className="flex flex-col">
            <label className="r-label mb-0" htmlFor="medicalInstitution">
              Prueba genética
            </label>
            <span className="text-xs mb-2.5 text-[#717171]">
              Especifique si ha realizado pruebas genéticas y tiene archivos con
              resultados
            </span>
            <RadioGroup>
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
            </RadioGroup>
          </div>
          <div className="flex flex-col">
            <label className="r-label mb-0" htmlFor="medicalInstitution">
              Diagnóstico
            </label>
            <span className="text-xs mb-2.5 text-[#717171]">
              ¿Conoce el diagnóstico de su hijo?
            </span>
            <RadioGroup>
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
            </RadioGroup>
          </div>
          <div className="flex flex-col">
            <label className="r-label mb-0" htmlFor="medicalInstitution">
              Epilepsia
            </label>
            <span className="text-xs mb-2.5 text-[#717171]">
              Especifique si su hijo tiene síntomas de epilepsia
            </span>
            <RadioGroup>
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
