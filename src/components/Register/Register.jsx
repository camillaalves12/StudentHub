import React from 'react'
import InputMask from 'react-input-mask'
import { useForm } from 'react-hook-form'

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

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
            className="block w-full rounded border border-gray-300 p-2 text-black outline-none"
            placeholder="Cidade"
          />
          {errors.city && (
            <span className="text-red-500">{errors.city.message}</span>
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
