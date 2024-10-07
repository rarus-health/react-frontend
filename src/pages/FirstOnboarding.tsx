import React, { useState } from "react";
import imageStep1 from "../assets/onboarding/first-1.svg";
import imageStep2 from "../assets/onboarding/first-2.svg";
import imageStep3 from "../assets/onboarding/first-3.svg";
import imageStep4 from "../assets/onboarding/first-4.svg";
import useStore from "../stores/firstOnboardingStore";
import { Link } from "react-router-dom";
type Step = {
  id: number;
  title: string;
  description: string;
  image: string;
  done: boolean;
  active: boolean;
};

const FirstOnboarding: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const {
    firstOnboardingComplited,
    completeOnboarding,
  } = useStore();
  console.log("completeOnboarding:", completeOnboarding);
  console.log("firstOnboardingComplited:", firstOnboardingComplited);

  const steps: Step[] = [
    {
      id: 0,
      title: "¡Bienvenido a Rarus Health!",
      description:
        "Su asistente personal en la vida con necesidades de salud especiales. Apoyo desde los primeros síntomas hasta el tratamiento de la enfermedad",
      image: imageStep1,
      done: true,
      active: true,
    },
    {
      id: 1,
      title: "",
      description:
        "Mantenga su información más importante segura y siempre a la mano",
      image: imageStep2,
      done: false,
      active: false,
    },
    {
      id: 2,
      title: "",
      description:
        "Ayudarlo a tomar las decisiones correctas que proporcionan la información completa",
      image: imageStep3,
      done: false,
      active: false,
    },
    {
      id: 3,
      title: "",
      description:
        "Prepare a su familia para una visita efectiva al consultorio del médico.",
      image: imageStep4,
      done: false,
      active: false,
    },
  ];

  const step = steps[currentStep];
  console.log("currentStep:", currentStep);

  const nextStep = (stepIndex: number) => {
    if (stepIndex >= steps.length) {
      console.log("stepIndex:", stepIndex);
      console.log("steps:", steps.length);
      setCurrentStep(0);
      completeOnboarding();
      // Handle completion logic here
    } else {
      setCurrentStep(stepIndex);
    }
  };

  return (
    <div className="flex h-screen items-center">
      <div className="flex flex-col items-center m-4">
        <div>
          <img
            className="mb-[40px] h-[220px] md:h-[180px]"
            src={step.image}
            alt=""
          />
        </div>
        {step.title && (
          <p className="text-[22pt] text-[#202427] mb-[19px] text-center max-w-[777px]">
            {step.title}
          </p>
        )}
        <p className="text-[14pt] text-[#7E99AC] text-center max-w-[777px] mb-[30px]">
          {step.description}
        </p>

        {/* OnboardingSteps component goes here */}

        <div className="buttons md:flex bottom-8 md:bottom-0">
          {currentStep < 3 && (
            <button
              className="r-btn r-btn-ghost mr-2"
              onClick={() => nextStep(4)}
            >
              Skip
            </button>
          )}
          <button
            className="r-btn r-btn-main"
            onClick={() => nextStep(currentStep + 1)}
          >
            {currentStep < 3 ? "Next" : "Continue"}
          </button>
        </div>
      </div>
      <div className="flex-grow" />
    </div>
  );
};

export default FirstOnboarding;
