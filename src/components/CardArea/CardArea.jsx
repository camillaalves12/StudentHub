import React from 'react'

export default function CardArea() {
  return (
    <div className="box-border flex h-96 w-80 flex-col justify-center gap-7 rounded-3xl border-2 border-white p-4 text-white">
      <img
        className="h-auto w-full rounded-t-lg"
        src="https://img.freepik.com/fotos-gratis/medico-e-paciente-alegre-com-papeis_23-2147763774.jpg?ga=GA1.1.1125524108.1713916092&semt=ais_hybrid"
        alt="Imagem do Card"
      />
      <p className="text-3xl font-bold text-orange-700">Saúde</p>
      <p className="box-border cursor-pointer border-b-2 border-slate-600 py-2">
        Enfermagem
      </p>
      {/* <p className="box-border cursor-pointer border-b-2 border-slate-600 py-2">
        Nutrição
      </p> */}
    </div>
  )
}
