import React from 'react'

export default function Card() {
  return (
    <div className="flex h-72 w-80 flex-col justify-center gap-4 rounded-3xl border-2 border-white p-4 text-white">
      <div>
        <p className="text-xl font-bold">Sistemas de Informação</p>
        <p className="text-base">Bacharelado - 8 Períodos</p>
      </div>
      <p className="mt-3 w-10 rounded-3xl border-2 border-orange-700  text-base font-semibold text-white hover:bg-orange-700">
        Presencial
      </p>
      <div>
        <p className="text-2xl font-bold">R$ 200,00</p>
        <p className="text-base">Turno: Manhã </p>
      </div>
      <button className="mt-3 rounded-3xl border-2 border-orange-700  px-10 py-1 font-semibold text-white hover:bg-orange-700">
        INSCREVA-SE
      </button>
    </div>
  )
}
