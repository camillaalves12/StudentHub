import React from 'react'
import Register from '../components/Register/Register'

export default function PageRegister() {
  return (
    <div className="flex h-[calc(100vh-68px)] items-center justify-center gap-12 bg-white">
      <div className="w-3/12">
        <p className="text-right text-4xl font-semibold leading-snug text-orange-700">
          INSCREVA-SE COM O MELHOR PREÇO E DESCONTOS IMPERDÍVEIS
        </p>
        <p className="text-right text-xl font-semibold leading-snug">
          VEM POR AQUI COMEÇAR SUA FACULDADE
        </p>
      </div>
      <Register />
    </div>
  )
}
