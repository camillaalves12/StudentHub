import React from 'react'

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center bg-zinc-400">
      <div className="flex w-full max-w-full items-center justify-between gap-8 space-x-8 px-4">
        <div className="clip-polygon w-3/5">
          {' '}
          {/* 40% para a imagem */}
          <img
            src="https://images.pexels.com/photos/8199169/pexels-photo-8199169.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Imagem de exemplo"
            className="h-auto w-full"
          />
        </div>

        <div className="flex w-3/5 flex-col items-center justify-center">
          {' '}
          {/* 60% para o texto */}
          <p className="w-full pb-5 text-5xl font-bold text-orange-800">
            Começar a sua graduação nunca foi tão simples
          </p>
          <p className="w-full pb-5 text-4xl font-bold leading-relaxed">
            Vem pra Anhanguera e dê o start na carreira por{' '}
            <span className="rounded-md bg-orange-600 p-1">R$ 59*</span> pelo
            Pague Fácil!
          </p>
          <div className="flex content-start gap-10">
            <button className="mt-5 rounded-3xl bg-orange-800 px-6 py-2 font-semibold text-white hover:bg-orange-700">
              EXPLORAR CURSOS
            </button>
            <button className="mt-5 rounded-3xl bg-orange-800 px-6 py-2 font-semibold text-white hover:bg-orange-700">
              INSCREVA-SE
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
