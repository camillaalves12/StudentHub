import React from 'react'
import Header from '../components/Header/Header'
import Home from '../components/Home/Home'

export default function PageHome() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="grow">
        <Home />
      </div>
    </div>
  )
}
