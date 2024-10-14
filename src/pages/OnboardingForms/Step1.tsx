import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import countries from "@/locales/es.json"; // путь к вашему es.json
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

const Step1 = () => {
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
            <label className="r-label" htmlFor="surname">
              Apellido
            </label>
            <Input className="r-input" id="surname" type="text" />
          </div>
          <div className="flex flex-col">
            <label className="r-label" htmlFor="name">
              Nombre
            </label>
            <Input className="r-input" id="name" type="text" />
          </div>
        </div>
        <div className="info flex-col">
          <div className="flex flex-col">
            <label className="r-label" htmlFor="citizenship">
              Ciudadanía
            </label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {sortedCountries.map((country: string, i: number) => (
                    <SelectItem key={`country-${i}`} value={country}>
                      {countries.countries[country] || country}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col">
            <label className="r-label" htmlFor="gender">
              Gender
            </label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="male">Hombre</SelectItem>
                  <SelectItem value="female">Mujer</SelectItem>
                  <SelectItem value="other">Otro</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="date flex-col flex">
            <label className="r-label" htmlFor="dateOfBirth">
              Fecha de nacimiento
            </label>
            {/*             <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[240px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className=" w-auto p-0">
                <Calendar
                  mode="single"
                  captionLayout="dropdown-buttons"
                  selected={date}
                  onSelect={setDate}
                  fromYear={1960}
                  toYear={2030}
                />
              </PopoverContent>
            </Popover> */}
            <div className="w-full max-w-xl flex flex-row gap-4 ">
              <DatePicker variant="bordered" showMonthAndYearPickers />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="r-label" htmlFor="placeOfResidence">
              Lugar de residencia
            </label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {sortedCountries.map((country: string, i: number) => (
                    <SelectItem key={`country-${i}`} value={country}>
                      {countries.countries[country] || country}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
