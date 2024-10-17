interface Props {
  text: string
}

const SpanError = (props: Props) => {
  return (
    <div className="flex justify-center">
      <span className="text-red-500 text-center">{props.text}</span>
    </div>
  )
}

export default SpanError
