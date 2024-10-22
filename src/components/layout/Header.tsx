import { useNavigate } from 'react-router-dom'
import logo from '@/assets/rarus-logo-horizontal.svg'
import { LanguageSwitcher } from '../ui/language-switcher'

type Props = {
  title?: string
  subtitle?: string
}

const Header = (props: Props) => {
  const navigate = useNavigate()

  return (
    <header className="px-10 md:px-36 relative z-10 flex justify-between items-center bg-white">
      <div className="flex gap-5 sm:gap-10 items-center">
        <div>
          <img
            alt="logo"
            src={logo}
            onClick={() => navigate('/')}
            className="cursor-pointer h-14 my-7 min-h-[56px] min-w-[100px] md:min-w-[120px]"
          />
        </div>
        <div className="flex flex-col">
          {props.title && (
            <h1 className="whitespace-nowrap text-sm md:text-lg lg:text-xl font-bold text-black mb-2">
              {props.title}
            </h1>
          )}
          {props.subtitle && (
            <p className="whitespace-nowrap text-xs md:text-sm lg:text-base text-[#7E99AC] max-w-[777px]">
              {props.subtitle}
            </p>
          )}
        </div>
      </div>

      <div className="flex">
        <LanguageSwitcher />
      </div>
    </header>
  )
}

export default Header
