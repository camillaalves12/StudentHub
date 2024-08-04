import React from 'react'

export default function Home() {
  return (
    <div className="flex h-full items-center justify-center bg-zinc-800 px-20">
      <div className="flex w-full max-w-full items-center justify-between gap-10 px-4">
        <div className="clip-polygon w-3/5">
          {' '}
          {/* 40% para a imagem */}
          <img
            src="https://images.pexels.com/photos/8199169/pexels-photo-8199169.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200"
            alt="Imagem de exemplo"
            className="h-auto w-full"
          />
        </div>

        <div className="flex w-4/5 flex-col justify-start">
          {' '}
          {/* 60% para o texto */}
          <p className="w-full pb-5 text-5xl font-bold text-orange-800">
            Começar a sua graduação nunca foi tão simples
          </p>
          <p className="w-full pb-5 text-4xl font-bold leading-relaxed text-white">
            Vem pra Student Hub e dê o start na sua carreira a partir de{' '}
            <span className="rounded-md bg-orange-700 p-1">R$ 59*</span>
          </p>
          <div className="mt-5 flex gap-10">
            <button className="rounded-3xl bg-orange-700 p-3 text-base font-bold text-white hover:bg-orange-800">
              EXPLORAR CURSOS
            </button>
            <button className="rounded-3xl bg-orange-700 p-3 text-base font-bold text-white hover:bg-orange-800">
              INSCREVA-SE
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
