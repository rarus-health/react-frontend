import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/rarus-logo-horizontal.svg";
import { LanguageSwitcher } from "../ui/language-switcher";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="px-10 md:px-36 relative z-10 flex justify-between items-center bg-white ">
      <div className="flex gap-6">
        <img
          alt="logo"
          src={logo}
          onClick={() => navigate("/")}
          className="cursor-pointer h-14 my-7"
        />
        <div className="hidden md:block"></div>
      </div>
      <div className="flex">
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
