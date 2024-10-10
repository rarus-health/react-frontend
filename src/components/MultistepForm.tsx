import { useState, useEffect } from "react";
import PersonalInfoForm from "../pages/application-form/PersonalInfoForm";
import InformacionProfesionalForm from "../pages/application-form/InformacionProfesionalForm";
import PerfilLaboralForm from "../pages/application-form/PerfilLaboralForm";
import JobTypeForm from "../pages/application-form/JobTypeForm";
import WorkingExperience from "../pages/application-form/WorkingExperience";
import swal from "sweetalert";

function MultistepForm() {
  const [page, setPage] = useState(0);
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
    if (page === 0) {
      return <PersonalInfoForm formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return (
        <InformacionProfesionalForm
          formData={formData}
          setFormData={setFormData}
          page={page}
        />
      );
    } else if (page === 2) {
      return (
        <PerfilLaboralForm formData={formData} setFormData={setFormData} />
      );
    } else if (page === 3) {
      return (
        <WorkingExperience formData={formData} setFormData={setFormData} />
      );
    } else {
      return <JobTypeForm formData={formData} setFormData={setFormData} />;
    }
  };

  useEffect(() => {
    // Scroll to the top of the page whenever the page changes
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="form">
      <div className="form-container">
        <div className="header">{/* <h1>{FormTitles[page]}</h1> */}</div>
        <div className="body">{PageDisplay()}</div>

        {page === 0 && (
          <div className="flex justify-center mt-[90px] mb-[49px]">
            <div className="inline-flex">
              <button
                onClick={() => {
                  setPage((currPage) => currPage + 1);
                }}
                className="bg-[#2738F5] text-[white] font-bold py-[7px] px-[8px] rounded-[8px] text-[10px] lg:text-[1.5rem]"
              >
                Continuar
              </button>
            </div>
          </div>
        )}
        {page == 1 && (
          <div className="flex justify-center mt-[90px] mb-[49px]">
            <button
              className="text-[10px] bg-[white] text-[#2738F5] border-[1px] border-[#2738F5] font-bold py-[7px] px-4 rounded-l-xl mr-[0.31rem] lg:mr-[1.25rem] lg:text-[1.5rem]"
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Atrás
            </button>

            <button
              className="text-[10px] bg-[#2738F5] text-[white] font-bold py-[7px] px-4 rounded-r-xl lg:text-[1.5rem]"
              onClick={() => {
                setPage((currPage) => currPage + 1);
              }}
            >
              Continuar
            </button>
          </div>
        )}
        {page == 2 && (
          <div className="flex justify-center mt-[90px] mb-[49px]">
            <button
              className="text-[10px] bg-[white] text-[#2738F5] border-[1px] border-[#2738F5] font-bold py-[7px] px-4 rounded-l-xl mr-[0.31rem] lg:mr-[1.25rem] lg:text-[1.5rem]"
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Atrás
            </button>

            <button
              className="text-[10px] bg-[#2738F5] text-[white] font-bold py-[7px] px-4 rounded-r-xl lg:text-[1.5rem]"
              onClick={() => {
                setPage((currPage) => currPage + 1);
              }}
            >
              Continuar
            </button>
          </div>
        )}
        {page == 3 && (
          <div className="flex justify-center mt-[90px] mb-[49px]">
            <button
              className="text-[10px] bg-[white] text-[#2738F5] border-[1px] border-[#2738F5] font-bold py-[7px] px-4 rounded-l-xl mr-[0.31rem] lg:mr-[1.25rem] lg:text-[1.5rem]"
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Atrás
            </button>

            <button
              className="text-[10px] bg-[#2738F5] text-[white] font-bold py-[7px] px-4 rounded-r-xl lg:text-[1.5rem]"
              onClick={() => {
                setPage((currPage) => currPage + 1);
              }}
            >
              Continuar
            </button>
          </div>
        )}
        {page === 4 && (
          <div className="flex justify-center mt-[90px] mb-[49px]">
            <button
              className="text-[10px] bg-[white] text-[#2738F5] border-[1px] border-[#2738F5] font-bold py-[7px] px-4 rounded-l-xl mr-[0.31rem] lg:mr-[1.25rem] lg:text-[1.5rem]"
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Atrás
            </button>

            <button
              className="text-[10px] bg-[#2738F5] text-[white] font-bold py-[7px] px-4 rounded-r-xl lg:text-[1.5rem]"
              onClick={() => {
                swal({
                  text: "FELICIDADES HAS COMPLETADO EL FORMULARIO EXITOSAMENTE",
                  icon: "success",
                  className: "swal-text",
                });
              }}
            >
              Enviar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MultistepForm;
