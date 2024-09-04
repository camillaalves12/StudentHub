import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { scroller } from 'react-scroll'

export default function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const offset = -120

  const handleNavigation = (section) => {
    const scrollOptions = {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: section === 'courses' ? offset : 0,
    }

    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        scroller.scrollTo(section, scrollOptions)
      }, 400)
    } else {
      scroller.scrollTo(section, scrollOptions)
    }
  }

  return (
    <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-orange-800 p-3">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold text-white">Student Hub</h1>
      </div>
      <nav className="flex items-center gap-10 text-lg">
        <button
          onClick={() => handleNavigation('home')}
          className="cursor-pointer text-lg font-semibold text-white"
        >
          Home
        </button>
        <button
          onClick={() => handleNavigation('courses')}
          className="cursor-pointer text-lg font-semibold text-white"
        >
          Cursos
        </button>
        <button
          onClick={() => handleNavigation('coursesArea')}
          className="cursor-pointer text-lg font-semibold text-white"
        >
          Áreas
        </button>
        <button className="rounded-3xl bg-orange-800 px-6 py-2 font-semibold text-white hover:bg-orange-700">
          <Link to="/register">INSCREVA-SE</Link>
        </button>
      </nav>
    </header>
  )
}
