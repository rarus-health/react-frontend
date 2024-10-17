interface Props {
  text: string
}

const Title = (props: Props) => {
  return (
    <h1 className="text-[22pt] text-[#202427] mb-[19px] text-center max-w-[777px]">
      {props.text}
    </h1>
  )
}

export default Title
