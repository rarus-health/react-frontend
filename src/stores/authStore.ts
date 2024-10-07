import { create } from "zustand";
import { persist } from "zustand/middleware";
import { registerUser, loginUser } from "../api/auth"; // Импорт сервиса

interface AuthStore {
  token: string | null;
  isLoggedIn: boolean;
  register: (
    email: string,
    password: string,
    confirmedPassword: string
  ) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  setToken: (token: string) => void;
}

const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      token: null,
      isLoggedIn: false,
      setToken: (token: string) => {
        set({ token, isLoggedIn: true });
        localStorage.setItem("accessToken", token); // Сохраняем токен в localStorage
      },
      register: async (
        email: string,
        password: string,
        confirmedPassword: string
      ) => {
        try {
          const { token } = await registerUser(
            email,
            password,
            confirmedPassword
          );
          if (token) {
            localStorage.setItem("accessToken", token);
            set({ token, isLoggedIn: true });
          }
        } catch (error) {
          console.error("Ошибка регистрации:", error);
        }
      },
      login: async (email: string, password: string) => {
        try {
          const { token } = await loginUser(email, password);
          if (token) {
            localStorage.setItem("accessToken", token);
            set({ token, isLoggedIn: true });
          }
        } catch (error) {
          console.error("Ошибка логина:", error);
        }
      },
      logout: () => {
        set({ token: null, isLoggedIn: false });
        localStorage.removeItem("accessToken");
      },
    }),
    {
      name: "authStore",
    }
  )
);

export default useAuthStore;
