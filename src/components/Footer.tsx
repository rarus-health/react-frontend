import React from "react";
import instagram from "@/assets/footer/instagram.svg";
import facebook from "@/assets/footer/facebook.svg";
import linkedin from "@/assets/footer/linkedin.svg";
import mail from "@/assets/footer/mail.svg";

const DoctorFooter: React.FC = () => {
  return (
    <footer className="hidden md:flex px-10 md:px-36  justify-between items-center py-[30px] w-full relative z-10">
      <p className="font-montserrat font-medium text-[16px] leading-[120%] text-[#576CBE]">
        Av. Apoquindo 2930, Piso 2, Las Condes, Región Metropolitana, Santiago,
        Chile
      </p>
      <div className="flex gap-4 ">
        <img src={instagram} alt="Instagram" className="w-8 h-8" />
        <img src={facebook} alt="Facebook" className="w-8 h-8" />
        <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
        <img src={mail} alt="Mail" className="w-8 h-8" />
      </div>
    </footer>
  );
};

export default DoctorFooter;
