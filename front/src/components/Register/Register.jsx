import React from 'react'
import InputMask from 'react-input-mask'
import { useForm } from 'react-hook-form'
import axios from 'axios'

export default function Register() {
  const {
    register,
    handleSubmit,
    reset,
    setValue, // Import setValue para manipular os valores manualmente
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3001/students', data)
      console.log('Aluno cadastrado:', response.data)

      // Limpa todos os campos
      reset({
        name: '',
        cpf: '',
        email: '',
        phone: '',
        city: '',
        course: '',
      })

      // Limpa os campos com máscara manualmente
      setValue('cpf', '')
      setValue('phone', '')
    } catch (error) {
      console.error('Erro ao cadastrar aluno:', error)
    }
  }

  return (
    <div className="h-auto w-96 rounded-sm p-5 text-black shadow-lg shadow-gray-500/50">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            id="name"
            {...register('name', {
              required: 'Nome e Sobrenome é obrigatório',
            })}
            className="block w-full rounded border border-gray-300 p-2 text-black outline-none"
            placeholder="Nome e Sobrenome"
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>

        <div>
          <InputMask
            mask="999.999.999-99"
            defaultValue=""
            {...register('cpf', { required: 'CPF é obrigatório' })}
          >
            {(inputProps) => (
              <input
                {...inputProps}
                id="cpf"
                className="block w-full rounded border border-gray-300 p-2 text-black outline-none"
                placeholder="CPF"
              />
            )}
          </InputMask>
          {errors.cpf && (
            <span className="text-red-500">{errors.cpf.message}</span>
          )}
        </div>

        <div>
          <input
            id="email"
            type="email"
            {...register('email', { required: 'Email é obrigatório' })}
            className="block w-full rounded border border-gray-300 p-2 text-black outline-none"
            placeholder="Email"
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>

        <div>
          <InputMask
            mask="(99) 99999-9999"
            defaultValue=""
            {...register('phone', {
              required: 'Número de celular é obrigatório',
            })}
          >
            {(inputProps) => (
              <input
                {...inputProps}
                id="phone"
                className="block w-full rounded border border-gray-300 p-2 text-black outline-none"
                placeholder="Número de Celular"
              />
            )}
          </InputMask>
          {errors.phone && (
            <span className="text-red-500">{errors.phone.message}</span>
          )}
        </div>
        <div>
          <input
            id="city"
            type="tel"
            {...register('city', { required: 'Cidade é obrigatório' })}
            className="block w-full rounded border border-gray-300 p-1 text-black outline-none"
            placeholder="Cidade"
          />
          {errors.city && (
            <span className="text-red-500">{errors.city.message}</span>
          )}
        </div>
        <div>
          <select
            id="course"
            {...register('course', { required: 'Curso é obrigatório' })}
            className="block w-full rounded border border-gray-300 p-2 text-black outline-none"
          >
            <option value="">Selecione um curso</option>

            <optgroup label="Saúde">
              <option value="Medicina">Medicina</option>
              <option value="Fisioterapia">Fisioterapia</option>
              <option value="Enfermagem">Enfermagem</option>
              <option value="Nutrição">Nutrição</option>
            </optgroup>

            <optgroup label="Tecnologia">
              <option value="Ciência da Computação">
                Ciência da Computação
              </option>
              <option value="Engenharia de Software">
                Engenharia de Software
              </option>
              <option value="Sistemas de Informação">
                Sistemas de Informação
              </option>
              <option value="Redes de Computadores">
                Redes de Computadores
              </option>
            </optgroup>

            <optgroup label="Negócios">
              <option value="Administração">Administração</option>
              <option value="Marketing">Marketing</option>
              <option value="Economia">Economia</option>
              <option value="Gestão de Recursos Humanos">
                Gestão de Recursos Humanos
              </option>
            </optgroup>

            <optgroup label="Humanas">
              <option value="Psicologia">Psicologia</option>
              <option value="Pedagogia">Pedagogia</option>
              <option value="Direito">Direito</option>
              <option value="Sociologia">Sociologia</option>
            </optgroup>
          </select>
          {errors.course && (
            <span className="text-red-500">{errors.course.message}</span>
          )}
        </div>

        <input
          type="submit"
          className="w-full cursor-pointer rounded bg-blue-600 px-4 py-1 font-semibold text-white hover:bg-blue-700"
          value="Cadastrar"
        />
      </form>
    </div>
  )
}
