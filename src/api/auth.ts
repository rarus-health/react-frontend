// api/authService.ts
import axios from "axios";

export const registerUser = async (
  email: string,
  password: string,
  confirmedPassword: string
) => {
  const response = await axios.post("https://rarus-health-qa.uc.r.appspot.com/register", {
    email,
    password,
    confirmedPassword,
  });
  return response.data;
};

export const loginUser = async (email: string, password: string) => {
  const response = await axios.post("https://rarus-health-qa.uc.r.appspot.com/users/login", {
    email,
    password,
  });
  return response.data;
};
