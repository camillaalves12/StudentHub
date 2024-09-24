import React from 'react'
import Header from '../components/Header/Header'
import Home from '../components/Home/Home'
import PageCards from './PageCards'
import PageCardArea from './PageCardArea'

export default function PageHome() {
  return (
    <div className="flex flex-col">
      <Header />
      <div id="home">
        <Home />
      </div>
      <div id="courses">
        <PageCards />
      </div>
      <div id="coursesArea">
        <PageCardArea />
      </div>
    </div>
  )
}
