import { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { IntroBlock } from '../components/IntroBlock'
import { About } from '../components/About'
import { Experience } from '../components/Experience'
import { Projects } from '../components/Projects'
import { Contact } from '../components/Contact'

export const Fullstack = () => {
  return (
    <div className='flex flex-col'>
        <IntroBlock />
        <Navbar/>
        <About />
        <Experience />
        <Projects />
        <Contact />
    </div>
  )
}
