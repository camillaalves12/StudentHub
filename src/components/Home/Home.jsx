import React from 'react'
import Card from '../Card/Card'

export default function Home() {
  return (
    <div className="flex h-full items-center justify-center bg-zinc-800 px-20">
      <div className="flex w-full max-w-full items-center justify-between gap-10 px-4">
        <div className="clip-polygon w-2/5">
          {' '}
          {/* 40% para a imagem */}
          <img
            src="https://images.pexels.com/photos/8199169/pexels-photo-8199169.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200"
            alt="Imagem de exemplo"
            className="h-auto w-full"
          />
        </div>

        <div className="flex w-3/5 flex-col justify-start">
          {' '}
          {/* 60% para o texto */}
          <p className="w-full pb-5 text-5xl font-bold text-orange-800">
            Começar a sua graduação nunca foi tão simples
          </p>
          <p className="w-full pb-5 text-4xl font-bold leading-relaxed text-white">
            Vem pra Anhanguera e dê o start na carreira por{' '}
            <span className="rounded-md bg-orange-700 p-1">R$ 59*</span> pelo
            Pague Fácil!
          </p>
          <div className="flex gap-10">
            <button className="mt-5 rounded-3xl bg-orange-800 px-6 py-2 font-semibold text-white hover:bg-orange-700">
              EXPLORAR CURSOS
            </button>
            <button className="mt-5 rounded-3xl bg-orange-800 px-6 py-2 font-semibold text-white hover:bg-orange-700">
              INSCREVA-SE
            </button>
          </div>
          <Card />
        </div>
      </div>
    </div>
  )
}
