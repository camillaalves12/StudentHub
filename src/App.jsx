import React from 'react'
import './App.css'
import PageHome from './pages/PageHome'
import PageCards from './pages/PageCards'

function App() {
  return (
    <div className="flex-col">
      <PageHome />
      <PageCards />
    </div>
  )
}

export default App
