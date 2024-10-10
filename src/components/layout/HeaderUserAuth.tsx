import React from "react";
import { useNavigate } from "react-router-dom";
import { LanguageSwitcher } from "../ui/language-switcher";

const HeaderUserAuth: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="mb-10 md:-mb-20 px-10 md:px-36 relative z-10 flex justify-between items-center bg-white ">
      <div className="gap-6 bg-white  h-14 my-7">
        <div className="hidden md:block"></div>
      </div>
      <div className="flex h-14 my-7 items-end justify-end">
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default HeaderUserAuth;
