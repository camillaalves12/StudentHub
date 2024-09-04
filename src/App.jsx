import React from 'react'
// import './App.css'
import PageHome from './pages/PageHome'
// import PageCards from './pages/PageCards'
// import PageCardArea from './pages/PageCardArea'
import PageRegister from './pages/PageRegister'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PageCourse from './pages/PageCourse'
// import Course from './components/Course/Course'

function App() {
  return (
    <div className="flex-col">
      <Router>
        <Routes>
          <Route path="/" element={<PageHome />} />
          {/* <Route path="/courses" element={<PageCards />} /> */}
          <Route path="/course" element={<PageCourse />} />
          <Route path="/register" element={<PageRegister />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
