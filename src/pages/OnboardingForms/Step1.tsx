import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormData } from "../../stores/types";
import countries from "@/locales/es.json"; // путь к вашему es.json
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

interface Step1Props {
  formData: any;
  adult: boolean;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const Step1: React.FC<Step1Props> = ({ adult }) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  const sortedCountries = Object.entries(countries.countries)
    .sort(([, a], [, b]) => (a > b ? 1 : -1))
    .map(([country]) => country);

  return (
    /*     <div>
      <h2>Step 1: Personal Information</h2>
      <input
        {...register("name", { required: "Name is required" })}
        placeholder="Name"
      />
      {errors.name && <span>{errors.name.message}</span>}
      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
        placeholder="Email"
      />
      {errors.email && <span>{errors.email.message}</span>}
    </div> */

    <div className="px-6 w-full bg-white max-w-3xl mx-auto">
      <div>
        <h3 className="font-semibold text-sm leading-5">
          {adult
            ? "Complete información sobre usted"
            : "Complete información sobre su hijo"}
        </h3>
        <div className="name flex-col">
          <div className="flex flex-col">
            <label className="r-label" htmlFor="surname">
              Apellido
            </label>
            <Input
              {...register("surname", { required: "surname is required" })}
            />
            {errors.surname && <span>{errors.surname.message}</span>}
          </div>
          <div className="flex flex-col">
            <label className="r-label" htmlFor="name">
              Nombre
            </label>
            <Input
              className="r-input"
              {...register("name", { required: "name is required" })}
            />
            {errors.name && <span>{errors.name.message}</span>}
          </div>
        </div>
        <div className="info flex-col">
          <div className="flex flex-col">
            <label className="r-label" htmlFor="citizenship">
              Ciudadanía
            </label>
            <Controller
              name="citizenship"
              render={({ field }) => (
                <Select {...field}>
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
              )}
            />
          </div>
          <div className="flex flex-col">
            <label className="r-label" htmlFor="gender">
              Gender
            </label>
            <Controller
              name="gender"
              render={({ field }) => (
                <Select {...field}>
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
              )}
            />
          </div>
          <div className="date flex-col flex">
            <label className="r-label" htmlFor="dateOfBirth">
              Fecha de nacimiento
            </label>
            <div className="w-full max-w-xl flex flex-row gap-4 ">
              <Controller
                name="dateOfBirth"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    variant="bordered"
                    showMonthAndYearPickers
                    value={field.value}
                    onChange={(date) => field.onChange(date)}
                  />
                )}
              />{" "}
            </div>
          </div>
          <div className="flex flex-col">
            <label className="r-label" htmlFor="placeOfResidence">
              Lugar de residencia
            </label>
            <Controller
              name="placeOfResidence"
              render={({ field }) => (
                <Select {...field}>
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
              )}
            />
          </div>
          {adult && (
            <div className="flex flex-col">
              <label className="r-label" htmlFor="whatsapp">
                Número de WhatsApp (es necesario para que nuestro asesor se
                comunique con ti)
              </label>
              <Input
                className="r-input"
                {...register("whatsapp", { required: "whatsapp is required" })}
              />
              {errors.whatsapp && <span>{errors.whatsapp.message}</span>}
            </div>
          )}
        </div>
      </div>
      {!adult && (
        <div className="personal">
          <h3 className="font-semibold text-sm leading-5 mt-8">
            Complete información sobre usted
          </h3>
          <div className="name flex-col">
            <div className="flex flex-col">
              <label className="r-label" htmlFor="representativeSurname">
                Apellido
              </label>
              <Input
                className="r-input"
                {...register("representativeSurname", {
                  required: "surname is required",
                })}
              />
              {errors.surname && <span>{errors.surname.message}</span>}
            </div>
            <div className="flex flex-col">
              <label className="r-label" htmlFor="representativeName">
                Nombre
              </label>
              <Input
                className="r-input"
                {...register("representativeName", {
                  required: "name is required",
                })}
              />
              {errors.name && <span>{errors.name.message}</span>}
            </div>
          </div>
          <div className="info flex-col">
            <div className="flex flex-col">
              <label className="r-label" htmlFor="representativeCitizenship">
                Ciudadanía
              </label>
              <Controller
                name="representativeCitizenship"
                render={({ field }) => (
                  <Select {...field}>
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
                )}
              />
            </div>
            <div className="flex flex-col">
              <label className="r-label" htmlFor="representativeGender">
                Gender
              </label>
              <Controller
                name="representativeGender"
                render={({ field }) => (
                  <Select {...field}>
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
                )}
              />
            </div>
            <div className="date flex-col flex">
              <label className="r-label" htmlFor="representativeDateOfBirth">
                Fecha de nacimiento
              </label>
              <div className="w-full max-w-xl flex flex-row gap-4 ">
                <Controller
                  name="representativeDateOfBirth"
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      variant="bordered"
                      showMonthAndYearPickers
                      value={field.value}
                      onChange={(date) => field.onChange(date)}
                    />
                  )}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label
                className="r-label"
                htmlFor="representativePlaceOfResidence"
              >
                Lugar de residencia
              </label>
              <Controller
                name="representativePlaceOfResidence"
                render={({ field }) => (
                  <Select {...field}>
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
                )}
              />
            </div>
            <div className="flex flex-col">
              <label className="r-label" htmlFor="whatsapp">
                Número de WhatsApp (es necesario para que nuestro asesor se
                comunique con ti)
              </label>
              <Input
                className="r-input"
                {...register("whatsapp", { required: "whatsapp is required" })}
              />
              {errors.whatsapp && <span>{errors.whatsapp.message}</span>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Step1;
