import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { scroller } from 'react-scroll'

export default function Home() {
  const navigate = useNavigate()

  const handleNavigation = (section) => {
    const scrollOptions = {
      duration: 400,
      delay: 0,
      smooth: 'easeInOutQuart',
    }

    if (window.location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        scroller.scrollTo(section, scrollOptions)
      }, 100) // Ajuste o tempo de delay conforme necessário
    } else {
      scroller.scrollTo(section, scrollOptions)
    }
  }
  return (
    <div className="flex h-screen items-center justify-center bg-zinc-800 px-20">
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
            <button
              onClick={() => handleNavigation('coursesArea')}
              className="rounded-3xl bg-orange-700 p-3 text-base font-bold text-white hover:bg-orange-800"
            >
              EXPLORAR CURSOS
            </button>
            <button className="rounded-3xl bg-orange-700 p-3 text-base font-bold text-white hover:bg-orange-800">
              <Link to="/register">INSCREVA-SE</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
