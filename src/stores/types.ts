import { DateValue } from "@nextui-org/react";

export interface FormData {
  surname: string;
  representativeSurname: string;
  whatsapp: string;
  name: string;
  representativeName: string;
  citizenship: string;
  representativeCitizenship: string;
  gender: string;
  representativeGender: string;
  dateOfBirth: DateValue;
  representativeDateOfBirth: DateValue;
  placeOfResidence: string;
  representativePlaceOfResidence: string;
  email: string;
  age: string;
  occupation: string;
  interests: string;
  medicalInstitution: string;
  geneticTest: boolean;
  diagnosis: boolean;
  epilepsy: boolean;
  agreeConsent: boolean;
}
