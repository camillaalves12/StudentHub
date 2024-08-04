import React from 'react'
import { useForm } from 'react-hook-form'

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <div className="w-96 text-white">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            id="name"
            {...register('name', { required: 'Nome é obrigatório' })}
            className="block w-full rounded border border-gray-300 p-2 outline-none"
            placeholder="Nome Completo"
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
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
          <input
            id="phone"
            type="tel"
            {...register('phone', { required: 'Celular é obrigatório' })}
            className="block w-full rounded border border-gray-300 p-2 text-black outline-none"
            placeholder="Celular"
          />
          {errors.phone && (
            <span className="text-red-500">{errors.phone.message}</span>
          )}
        </div>

        <div>
          <label>Cursos</label>
          <div className="space-y-2">
            <div>
              <label className="block">
                <input
                  type="checkbox"
                  {...register('courses')}
                  value="Enfermagem"
                />
                Enfermagem (Saúde)
              </label>
            </div>
            <div>
              <label className="block">
                <input
                  type="checkbox"
                  {...register('courses')}
                  value="Desenvolvimento de Software"
                />
                Desenvolvimento de Software (Tecnologia)
              </label>
            </div>
            <div>
              <label className="block">
                <input
                  type="checkbox"
                  {...register('courses')}
                  value="Pedagogia"
                />
                Pedagogia (Educação)
              </label>
            </div>
            <div>
              <label className="block">
                <input
                  type="checkbox"
                  {...register('courses')}
                  value="Engenharia Civil"
                />
                Engenharia Civil (Engenharias)
              </label>
            </div>
          </div>
        </div>

        <input
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white"
        />
      </form>
    </div>
  )
}
