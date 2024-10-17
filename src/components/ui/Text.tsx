interface Props {
  text: string
}

const Text = (props: Props) => {
  return (
    <p className="text-[14pt] text-[#7E99AC] text-center max-w-[777px] mb-[30px]">
      {props.text}
    </p>
  )
}

export default Text
