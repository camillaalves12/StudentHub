import React from 'react'

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex w-full max-w-6xl items-center justify-between space-x-8 px-4">
        <div className="">
          <img
            src="https://images.pexels.com/photos/8199169/pexels-photo-8199169.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Imagem de exemplo"
            className="h-auto w-full"
          />
        </div>

        <div className="flex w-4/5  flex-col items-center justify-center">
          <p className="w-full pb-5  text-5xl font-bold text-orange-600">
            Começar a sua graduação nunca foi tão simples
          </p>

          <p className="w-full text-3xl font-bold leading-relaxed">
            Vem pra Anhanguera e dê o start na carreira por{' '}
            <span className="rounded-md bg-zinc-700 p-1">R$ 59*</span> pelo
            Pague Fácil!
          </p>
        </div>
      </div>
    </div>
  )
}
