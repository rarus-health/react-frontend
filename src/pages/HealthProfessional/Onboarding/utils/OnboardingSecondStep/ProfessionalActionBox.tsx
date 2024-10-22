import { useState } from 'react'

type Props = {
  imageSrc: string
  text: string
  onClick: (isSelected: boolean) => void
}

export const ProfessionalActionBox = (props: Props) => {
  const [isSelected, setIsSelected] = useState(false)

  const handleClick = () => {
    setIsSelected(!isSelected)
    if (props.onClick) props.onClick(!isSelected)
  }

  return (
    <div
      onClick={handleClick}
      className={`flex items-center p-2 md:p-3 border rounded-lg ${isSelected ? 'border-blue-500 bg-blue-100 text-blue-700 shadow-lg' : 'bg-white'} cursor-pointer transition-all duration-300 ease-in-out`}
    >
      <img
        src={props.imageSrc}
        alt={props.text}
        className="w-8 h-8 mr-4 sm:w-10 sm:h-7 lg:w-8 lg:h-9 select-none"
      />
      <span
        className={`text-xs sm:text-sm md:text-base lg:text-lg ${isSelected ? 'font-bold' : 'font-normal'} select-none`}
      >
        {props.text}
      </span>
    </div>
  )
}
