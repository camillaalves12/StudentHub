import React from 'react'
import Course from '../components/Course/Course'
import Header from '../components/Header/Header'

export default function PageCourse() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 bg-zinc-800">
      <Header />
      <Course />
    </div>
  )
}
