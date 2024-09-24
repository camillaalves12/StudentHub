import React from 'react'

export default function CardArea() {
  return (
    <div className="box-border flex h-auto w-80 flex-col gap-3 rounded-3xl border-2 border-white text-white">
      <img
        className="w-full rounded-t-3xl"
        src="https://img.freepik.com/fotos-gratis/medico-e-paciente-alegre-com-papeis_23-2147763774.jpg?ga=GA1.1.1125524108.1713916092&semt=ais_hybrid"
        alt="Imagem do Card"
      />
      <div className="p-4 pb-5">
        <p className="text-3xl font-bold text-orange-700">Saúde</p>
        <p className="box-border cursor-pointer border-b-2 border-slate-600 py-3 hover:font-bold">
          Enfermagem
        </p>
        <p className="box-border cursor-pointer border-b-2 border-slate-600 py-3  hover:font-bold">
          Medicina
        </p>
        <p className="box-border cursor-pointer border-b-2 border-slate-600 py-3">
          Nutrição
        </p>
        <p className="box-border cursor-pointer border-b-2 border-slate-600 py-3">
          Odontologia
        </p>
      </div>
    </div>
  )
}
