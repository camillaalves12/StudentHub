import React from 'react'
import './App.css'
import PageHome from './pages/PageHome'
import PageCards from './pages/PageCards'
import PageCardArea from './pages/PageCardArea'
import PageRegister from './pages/PageRegister'

function App() {
  return (
    <div className="flex-col">
      <PageHome />
      <PageCards />
      <PageCardArea />
      <PageRegister />
    </div>
  )
}

export default App
