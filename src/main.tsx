import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Root from "./routes/root";
import ResetPasswordRequest from "./pages/ResetPassswordRequest";
import ResetPasswordConfirmation from "./pages/ResetPassswordConfirmation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/reset-password-request",
    element: <ResetPasswordRequest />,
  },
  {
    path: "/reset-password",
    element: <ResetPasswordConfirmation />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
