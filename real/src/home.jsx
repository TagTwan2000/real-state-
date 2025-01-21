import React from 'react'
import Header from './pages/Header'
import Hero from './pages/Hero'
import SliderCountiner from './pages/SliderCountiner'
import Location from './pages/Loction'
import DeveleCou from './pages/DeveleCou'

function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <SliderCountiner/>
      <Location/>
      <DeveleCou/>
    </div>
    
  )
}

export default Home