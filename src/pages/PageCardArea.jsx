import React from 'react'
import CardArea from '../components/CardArea/CardArea'

export default function PageCardArea() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3 bg-zinc-800">
      <p className="mt-4 py-9 text-3xl font-bold text-orange-800">
        Confira os cursos por área de conhecimento
      </p>
      <div className="flex flex-wrap gap-10">
        <CardArea />
        <CardArea />
        <CardArea />
        <CardArea />
      </div>
    </div>
  )
}
