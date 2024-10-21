interface Props {
  text: string
}

const SpanError = (props: Props) => {
  return (
    <div className="flex justify-center">
      <span className="text-red-500 text-center text-xs sm:text-sm md:text-sm lg:text-base xl:text-base">
        {props.text}
      </span>
    </div>
  )
}

export default SpanError
