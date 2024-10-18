import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import woman from "@/assets/second-onboarding/women.svg";
import children from "@/assets/second-onboarding/children.svg";

interface ButtonProps {
  adult: boolean;
  children: React.ReactNode;
}

const WhoNeedsHelp: React.FC = () => {
  return (
    <>
      <div className="flex-grow w-full flex flex-col justify-normal items-center  bg-white">
        <h1 className="mt-28 md:mt-14 mb-10 font-montserrat font-medium text-[24px] leading-[150%] flex items-center text-[#072FAA]">
          ¿Quién necesita ayuda?
        </h1>
        <div className="gap-4 hidden md:flex">
          <div className="bg-[#E8EBF6] rounded-[32px] flex flex-col items-center relative">
            <img
              src={woman}
              alt="woman"
              className="px-14 pt-6 pb-28 md:pb-0 "
            />
            <Link
              to="/onboarding/personal-data-intro"
              className="absolute bottom-6 w-full max-w-48"
              state={{ adult: true }}
            >
              <Button className="w-full ">Yo</Button>
            </Link>
          </div>
          <div className="bg-[#E8EBF6] rounded-[32px] flex flex-col items-center relative">
            <img src={children} alt="children" className="px-14 pt-6 pb-28 " />
            <Link
              to="/onboarding/personal-data-intro"
              className="absolute bottom-6 w-full max-w-48"
              state={{ adult: false }}
            >
              <Button className="absolute bottom-6 w-48">Mi niño</Button>
            </Link>
          </div>
        </div>
        <div className="flex md:hidden gap-2 mt-28">
          <Link to="/onboarding/personal-data-intro" state={{ adult: true }}>
            <Button className="w-36">Yo</Button>
          </Link>
          <Link to="/onboarding/personal-data-intro" state={{ adult: false }}>
            <Button className="w-36"> Mi niño</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default WhoNeedsHelp;
