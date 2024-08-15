/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({
  course,
  typeCourse,
  numberPeriod,
  modality,
  price,
  shift,
}) {
  return (
    <div className="flex h-96 w-80 flex-col justify-center gap-7 rounded-3xl border-2 border-white p-4 text-white">
      <div>
        <p className="text-2xl font-bold">{course}</p>
        <p className="text-lg">
          {typeCourse} - {numberPeriod} Períodos
        </p>
      </div>
      <p className="mt-3 w-5/12 rounded-3xl border-2 border-orange-700  text-center text-lg font-semibold text-white hover:bg-orange-700">
        {modality}
      </p>
      <div>
        <p className="text-4xl font-bold text-orange-700">R$ {price}</p>
        <p className="text-lg">Turno: {shift} </p>
      </div>
      <button className="mt-3 rounded-3xl border-2 border-orange-700 px-10 py-1 text-lg font-semibold text-white hover:bg-orange-700">
        <Link to="/register">INSCREVA-SE</Link>
      </button>
    </div>
  )
}
