import React from 'react'

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between bg-orange-800 p-3">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold text-white">Student Hub</h1>
      </div>
      <nav className="flex items-center gap-10 ">
        <a href="#" className="font-semibold text-white">
          Home
        </a>
        <a href="#" className="font-semibold text-white">
          Cursos
        </a>
        <a href="#" className="font-semibold text-white">
          Contato
        </a>
        <button className=" rounded-3xl bg-orange-800 px-6 py-2 font-semibold text-white hover:bg-orange-700">
          INSCREVA-SE
        </button>
      </nav>
    </header>
  )
}
