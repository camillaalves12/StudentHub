/* eslint-disable react/prop-types */
import React from 'react'

export default function Card({
  course,
  typeCourse,
  numberPeriod,
  modality,
  price,
  shift,
}) {
  return (
    <div className="flex h-72 w-80 flex-col justify-center gap-4 rounded-3xl border-2 border-white p-4 text-white">
      <div>
        <p className="text-xl font-bold">{course}</p>
        <p className="text-base">
          {typeCourse} - {numberPeriod} Períodos
        </p>
      </div>
      <p className="mt-3 w-5/12 rounded-3xl border-2 border-orange-700  text-center text-base font-semibold text-white hover:bg-orange-700">
        {modality}
      </p>
      <div>
        <p className="text-2xl font-bold">R$ {price}</p>
        <p className="text-base">Turno: {shift} </p>
      </div>
      <button className="mt-3 rounded-3xl border-2 border-orange-700  px-10 py-1 font-semibold text-white hover:bg-orange-700">
        INSCREVA-SE
      </button>
    </div>
  )
}
