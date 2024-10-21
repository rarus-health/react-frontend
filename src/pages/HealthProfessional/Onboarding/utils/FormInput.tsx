import { Input } from '@/components/ui/input'

interface FormInputProps {
  label: string
  id: string
  register: any
  name?: string
  type?: string
  required?: boolean
}

export const FormInput = ({
  name,
  label,
  id,
  register,
  type = 'text',
  required = false,
}: FormInputProps) => {
  if (!name) name = label
  const validations = required
    ? { required: `El campo ${name} es requerido.` }
    : {}

  return (
    <div>
      <label
        className="r-label inline-block m-0 p-0 leading-tight md:whitespace-nowrap"
        htmlFor={id}
      >
        {required ? `${label}*` : label}
      </label>
      <Input id={id} type={type} {...register(id, validations)} />
    </div>
  )
}
