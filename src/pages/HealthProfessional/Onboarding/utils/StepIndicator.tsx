type Props = {
  activeStep: number
}

export const StepIndicator = (props: Props) => {
  return (
    <div className="flex space-x-4 justify-center mt-5">
      <div
        className={`flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full border 
            ${props.activeStep === 1 ? 'bg-blue-800 text-white' : 'border-blue-800 text-blue-800 bg-white'}`}
      >
        <span className="text-xs sm:text-sm font-semibold">1</span>
      </div>
      <div
        className={`flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full border 
            ${props.activeStep === 2 ? 'bg-blue-800 text-white' : 'border-blue-800 text-blue-800 bg-white'}`}
      >
        <span className="text-xs sm:text-sm font-semibold">2</span>
      </div>
    </div>
  )
}
