import React from 'react'
import CardArea from '../components/CardArea/CardArea'

export default function PageCardArea() {
  return (
    <div className="flex h-[calc(100vh-68px)] flex-col items-center justify-center gap-3 bg-zinc-800">
      <p className="py-5 text-3xl font-bold text-orange-800">
        Confira os cursos por área de conhecimento
      </p>
      <div className="flex  gap-10">
        <CardArea />
        <CardArea />
        <CardArea />
        <CardArea />
      </div>
    </div>
  )
}
