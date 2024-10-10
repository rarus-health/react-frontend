import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import "./styles/modal.css";
import "./styles/textStyles.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Root from "./routes/root";
import ResetPasswordRequest from "./pages/ResetPassswordRequest";
import ResetPasswordConfirmation from "./pages/ResetPassswordConfirmation";
import WhoNeedsHelp from "./pages/WhoNeedsHelp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PersonalDataIntro from "./pages/PersonalDataIntro";

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
  {
    path: "/onboarding/who-needs-help",
    element: (
      <div className="w-screen h-screen flex flex-col max-w-screen-2xl mx-auto">
        <Header />
        <WhoNeedsHelp />
        <Footer />
      </div>
    ),
  },
  {
    path: "/onboarding/personal-data-intro",
    element: (
      <div className="w-screen h-screen flex flex-col max-w-screen-2xl mx-auto">
        <Header />
        <div className="flex-grow">
          <PersonalDataIntro />
        </div>
        <Footer />
      </div>
    ),
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
