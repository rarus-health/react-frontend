import './styles/customOnboardingStyles.css'

export const ProfessionSelect = ({ register }: any) => {
  const professions = [
    { value: 'dentist', label: 'Dentista' },
    { value: 'nurse', label: 'Enfermero(a)' },
    { value: 'speech_therapist', label: 'Fonoaudiólogo(a)' },
    { value: 'physiotherapist', label: 'Fisioterapeuta' },
    { value: 'pharmacist', label: 'Farmacéutico(a)' },
    { value: 'doctor', label: 'Médico' },
    { value: 'nutritionist', label: 'Nutricionista' },
    { value: 'occupational_therapist', label: 'Terapeuta Ocupacional' },
    { value: 'optometrist', label: 'Optometrista' },
    { value: 'paramedic', label: 'Paramédico' },
    { value: 'psychologist', label: 'Psicólogo(a)' },
    { value: 'medical_technologist', label: 'Tecnólogo Médico' },
  ]

  return (
    <div>
      <label className="r-label" htmlFor="profession">
        Seleccione su profesión*
      </label>
      <select
        id="profession"
        {...register('profession', {
          required: 'La profesión es requerida.',
        })}
        className="input-class w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 custom-select"
      >
        <option value="">Seleccione una opción</option>
        {professions.map((profession) => (
          <option key={profession.value} value={profession.value}>
            {profession.label}
          </option>
        ))}
      </select>
    </div>
  )
}
