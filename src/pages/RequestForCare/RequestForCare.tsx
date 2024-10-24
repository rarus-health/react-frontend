import puzzlePieces from '@/assets/care-manager/puzzle-pieces.svg'
import scienceIcon from '@/assets/care-manager/science.svg'
import trialsIcon from '@/assets/care-manager/trials.svg'
import photoElmira from '@/assets/care-manager/photo-elmira.svg'
import photoFernanda from '@/assets/care-manager/photo-fernanda.svg'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const RequestForCare = () => {
  return (
    <div className="bg-white pb-10 px-8 rounded-2xl md:mx-25 my-2 md:my-5 description">
      <div className="flex flex-row justify-between items-start">
        <h1 className="section-title font-semibold m-0 mb-4 text-md text-center leading-6">
          Asesor personal
        </h1>
      </div>

      <div className="flex gap-5 flex-col md:mb-20 mb-10">
        <p className="section-item">
          Considere consultar a su asesor personal si usted:
        </p>
        <div className="flex items-center gap-3">
          <img src={puzzlePieces} alt="puzzle" />
          <p className="section-item">
            No comprende la terminología en los resultados de su prueba genética
          </p>
        </div>
        <div className="flex items-center gap-3">
          <img src={scienceIcon} alt="science" />
          <p className="section-item">
            Busca respuestas científicas basadas en evidencia con respecto a su
            enfermedad
          </p>
        </div>
        <div className="flex items-center gap-3">
          <img src={trialsIcon} alt="trials" />
          <p className="section-item">
            Desea información sobre nuevos medicamentos y ensayos clínicos para
            su diagnóstico
          </p>
        </div>
      </div>

      <p className="section-item md:mb-5 mb-4">
        Puede elegir <strong> uno de nuestros especialistas </strong> que
        revisará cuidadosamente su información médica y preguntas, elaborará un
        plan de cuidado personal claro y brindará apoyo durante los próximos
        tres meses por una tarifa: <strong>por una tarifa:</strong>
      </p>

      <div className="flex flex-col gap-5">
        {/* Elmira Section */}
        <div className="flex ml-2 items-center gap-4">
          <div className="hidden md:block w-16 h-16">
            <img className="w-full" src={photoElmira} alt="Elmira Safarova" />
          </div>
          <div>
            <div className="flex items-center gap-4">
              <div className="md:hidden w-16 h-16">
                <img
                  className="w-full"
                  src={photoElmira}
                  alt="Elmira Safarova"
                />
              </div>
              <p className="manager-title">Elmira Safarova</p>
            </div>
            <ul className="mt-2 ml-4 manager-list">
              <li className="manager-item">
                PhD en Biología Molecular y Farmacología
              </li>
              <li className="manager-item">
                Fundadora y líder científica de Rarus Health SpA
              </li>
              <li className="manager-item">
                Más de 25 años de experiencia en desarrollo de medicamentos
                científicos
              </li>
              <li className="manager-item">
                Idioma de consulta: inglés (preferiblemente), español y ruso
              </li>
            </ul>
          </div>
        </div>

        {/* Fernanda Section */}
        <div className="flex ml-2 items-center gap-4">
          <div className="hidden md:block w-16 h-16">
            <img className="w-full" src={photoFernanda} alt="Fernanda Perez" />
          </div>
          <div>
            <div className="flex items-center gap-4">
              <div className="md:hidden w-16 h-16">
                <img
                  className="w-full"
                  src={photoFernanda}
                  alt="Fernanda Perez"
                />
              </div>
              <p className="manager-title">Fernanda Perez</p>
            </div>
            <ul className="mt-2 ml-4 manager-list">
              <li className="manager-item">Líder del área médica para LATAM</li>
              <li className="manager-item">
                Enfermera profesional con especialización en patologías
                neuromusculares, dolor y genética clínica
              </li>
              <li className="manager-item">
                Docente universitaria en diversas escuelas de salud
              </li>
              <li className="manager-item">
                Líder del área académica de la FECHER
              </li>
              <li className="manager-item">
                Idioma: español (nativo) e inglés
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="md:hidden flex flex-col gap-3 justify-center mt-5">
        <Link to="/get-care-manager">
          <Button variant="mobile">Obtener su asesor personal</Button>
        </Link>
        <Link to="/">
          <Button variant="mobile"> Talvez después</Button>
        </Link>
      </div>

      <div className="hidden md:flex flex-col gap-3 justify-center mt-5">
        <Link to="/get-care-manager">
          <Button>Obtener su asesor personal</Button>
        </Link>
        <Link to="/">
          <Button> Talvez después</Button>
        </Link>
      </div>

      {/* <div className=" mt-7 flex flex-col md:flex-row-reverse md:self-end ml-3">
        <Button className="mr-3 ml-0 r-btn r-btn-main">
          Obtener su asesor personal
        </Button>
        <Button
          className="ml-3 mr-0 r-btn r-btn-txt Button-later"
          style={{ marginTop: '-14px' }}
        >
          Talvez después
        </Button>
      </div> */}
    </div>
  )
}

export default RequestForCare
