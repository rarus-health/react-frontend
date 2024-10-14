import { useState, useEffect } from "react";
import Step1 from "../pages/OnboardingForms/Step1";
import Step2 from "../pages/OnboardingForms/Step2";
import Step3 from "../pages/OnboardingForms/Step3";

function MultistepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    country: "",
    region: "",
    city: "",
    phonecode: "",
    phonenumber: "",
    gender: "",
    labor_state: "",
    cargos: [],
  });

  // const FormTitles = ["Sign Up", "Personal Info", "Other"];

  const PageDisplay = () => {
    if (currentStep === 0) {
      return <Step1 formData={formData} setFormData={setFormData} />;
    } else if (currentStep === 1) {
      return (
        <Step2
          formData={formData}
          setFormData={setFormData}
          page={currentStep}
        />
      );
    } else {
      return (
        <Step3
          formData={formData}
          setFormData={setFormData}
          page={currentStep}
        />
      );
    }
  };

  useEffect(() => {
    // Scroll to the top of the page whenever the page changes
    window.scrollTo(0, 0);
  }, [currentStep]);

  return (
    <div className="form">
      <div className="form-container bg-white p-2 rounded-2xl mx-4 md:mx-25 my-2 md:my-5 md:min-w-[620px]">
        <h1 className="font-semibold mb-4 text-md text-center leading-6">
          Datos de salud
        </h1>
        <div className="flex justify-center relative top-[-6px]">
          <div className="border border-[#7E99AC] w-[150px] h-[1px] absolute top-3"></div>
          <div className="z-10 flex gap-12">
            <button
              onClick={() => setCurrentStep(0)}
              className={`font-semibold text-xxs m-0 p-0 w-6 h-6 rounded-full border border-blue-600 ${currentStep === 0 ? "bg-blue-600 text-white" : "bg-white text-blue-600"}`}
            >
              1
            </button>
            <button
              onClick={() => setCurrentStep(1)}
              className={`font-semibold text-xxs m-0 p-0 w-6 h-6 rounded-full border border-blue-600 ${currentStep === 1 ? "bg-blue-600 text-white" : "bg-white text-blue-600"}`}
            >
              2
            </button>
            <button
              onClick={() => setCurrentStep(2)}
              className={`font-semibold text-xxs m-0 p-0 w-6 h-6 rounded-full border border-blue-600 ${currentStep === 2 ? "bg-blue-600 text-white" : "bg-white text-blue-600"}`}
            >
              3
            </button>
          </div>
        </div>
        <div className="header">{/* <h1>{FormTitles[page]}</h1> */}</div>
        <hr className="my-4 w-full" />
        <div className="body">{PageDisplay()}</div>
        {currentStep === 0 && (
          <div className="flex justify-center mt-[90px] mb-[49px]">
            <div className="inline-flex">
              <button
                onClick={() => {
                  setCurrentStep((currPage) => currPage + 1);
                }}
                className="bg-[#2738F5] text-[white] font-bold py-[7px] px-[8px] rounded-[8px] text-[10px] lg:text-[1.5rem]"
              >
                Continuar
              </button>
            </div>
          </div>
        )}
        {currentStep == 1 && (
          <div className="flex justify-center mt-[90px] mb-[49px]">
            <button
              className="text-[10px] bg-[white] text-[#2738F5] border-[1px] border-[#2738F5] font-bold py-[7px] px-4 rounded-l-xl mr-[0.31rem] lg:mr-[1.25rem] lg:text-[1.5rem]"
              onClick={() => {
                setCurrentStep((currPage) => currPage - 1);
              }}
            >
              Atrás
            </button>

            <button
              className="text-[10px] bg-[#2738F5] text-[white] font-bold py-[7px] px-4 rounded-r-xl lg:text-[1.5rem]"
              onClick={() => {
                setCurrentStep((currPage) => currPage + 1);
              }}
            >
              Continuar
            </button>
          </div>
        )}
        {currentStep == 2 && (
          <div className="flex justify-center mt-[90px] mb-[49px]">
            <button
              className="text-[10px] bg-[white] text-[#2738F5] border-[1px] border-[#2738F5] font-bold py-[7px] px-4 rounded-l-xl mr-[0.31rem] lg:mr-[1.25rem] lg:text-[1.5rem]"
              onClick={() => {
                setCurrentStep((currPage) => currPage - 1);
              }}
            >
              Atrás
            </button>

            <button
              className="text-[10px] bg-[#2738F5] text-[white] font-bold py-[7px] px-4 rounded-r-xl lg:text-[1.5rem]"
              onClick={() => {
                setCurrentStep((currPage) => currPage + 1);
              }}
            >
              Continuar
            </button>
          </div>
        )}
        {currentStep == 3 && (
          <div className="flex justify-center mt-[90px] mb-[49px]">
            <button
              className="text-[10px] bg-[white] text-[#2738F5] border-[1px] border-[#2738F5] font-bold py-[7px] px-4 rounded-l-xl mr-[0.31rem] lg:mr-[1.25rem] lg:text-[1.5rem]"
              onClick={() => {
                setCurrentStep((currPage) => currPage - 1);
              }}
            >
              Atrás
            </button>

            <button
              className="text-[10px] bg-[#2738F5] text-[white] font-bold py-[7px] px-4 rounded-r-xl lg:text-[1.5rem]"
              onClick={() => {
                setCurrentStep((currPage) => currPage + 1);
              }}
            >
              Continuar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MultistepForm;
