import { useState } from 'react'

import { Navbar, HeroSection, Footer, Features, Contact } from './components';
import { Skill } from './assets';

function App() {

  return (
    <>
    <Navbar />
      <main className='max-w-[1920px] min-h-screen mx-auto'>
        <HeroSection />
        <Features />
        <Features />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
