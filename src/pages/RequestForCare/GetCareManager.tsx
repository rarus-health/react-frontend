import puzzlePieces from '@/assets/care-manager/puzzle-pieces.svg'
import scienceIcon from '@/assets/care-manager/science.svg'
import trialsIcon from '@/assets/care-manager/trials.svg'
import photoElmira from '@/assets/care-manager/photo-elmira.svg'
import photoFernanda from '@/assets/care-manager/photo-fernanda.svg'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import schemeEsp from '@/assets/care-manager/scheme-esp.svg'

const GetCareManager = () => {
  return (
    <div className="bg-white pb-10 px-8 rounded-2xl md:mx-25 my-2 md:my-5 description">
      <h1 className="font-semibold m-0 mb-4 text-md text-center leading-6">
        Etapas del servicio del gerente de cuidado
      </h1>

      <div className="mb-12 md:mb-0">
        <img src={schemeEsp} alt="scheme" />
      </div>

      {/* Buttons */}
      <div className="md:hidden flex flex-col gap-3 justify-center mt-5">
        <Link to="/onboarding/form">
          <Button variant="mobile">Continuar</Button>
        </Link>
      </div>

      <div className="hidden md:flex flex-col gap-3 justify-center mt-5">
        <Link to="/onboarding/form">
          <Button> Continuar</Button>
        </Link>
      </div>
    </div>
  )
}

export default GetCareManager
