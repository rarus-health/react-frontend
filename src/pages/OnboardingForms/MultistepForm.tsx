import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import useFormStore from '../../stores/formStore'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import { FormData } from '../../stores/types'
import { Button } from '@/components/ui/button'
import { useLocation } from 'react-router-dom'

const MultistepForm: React.FC = () => {
  const { step, nextStep, prevStep, formData, setFormData } = useFormStore()
  const methods = useForm<FormData>({
    defaultValues: formData,
  })

  const onSubmit = (data: FormData) => {
    setFormData(data)
    if (step < 3) {
      nextStep()
    } else {
      console.log('Form submitted:', data)
    }
  }
  const location = useLocation()
  const { adult } = location.state || {}
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <h1 className="font-semibold mb-4 text-md text-center leading-6">
          Datos de salud
        </h1>
        <div className="flex justify-center relative top-[-6px]">
          <div className="border border-[#7E99AC] w-[150px] h-[1px] absolute top-3"></div>
          <div className="z-10 flex gap-12">
            <div
              className={`text-center font-semibold text-xxs m-0 p-0 w-6 h-6 rounded-full border border-blue-600 ${step === 1 ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}
            >
              1
            </div>
            <div
              className={`text-center font-semibold text-xxs m-0 p-0 w-6 h-6 rounded-full border border-blue-600 ${step === 2 ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}
            >
              2
            </div>
            <div
              className={`text-center font-semibold text-xxs m-0 p-0 w-6 h-6 rounded-full border border-blue-600 ${step === 3 ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}
            >
              3
            </div>
          </div>
        </div>
        {step === 1 && <Step1 adult={adult} />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}

        <div className="flex justify-center  mt-8 mb-[49px] gap-2">
          {step > 1 && step !== 3 && <Button onClick={prevStep}>Atras</Button>}
          <Button type="submit">
            {step < 3 ? 'Continuar' : 'Guardar y continuar'}
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}

export default MultistepForm
