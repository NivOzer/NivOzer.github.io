import { useState } from 'react'
import './App.css'
import './index.css'
import { Navbar } from './components/Navbar'
import { IntroBlock } from './components/IntroBlock'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col'>
      <Navbar/>
      <img src='./assets/decor1.svg'
        className='absolute bottom-0 left-52 opacity-5 size-96 -z-20
        animate-bounce-twice
        xs:absolute xs:left-0 xs:opacity-5 xs:size-96 xs:-z-20
        '/>
      <img src='./assets/decor2.svg'
        className='absolute top-24 -right-32 opacity-5 size-[600px] -z-20 rotate-180
        xs:absolute xs:right-0 xs:opacity-5 xs:size-[300px] xs:-z-20 xs:rotate-180
        '/>

      <div className='Content pl-24 pr-24'>


        <div className='pillars z-0 ml-20'>
        <div className='left-pillar absolute left-0'>
          <img className="" src="/assets/leftPillarTop.svg" alt='LeftPillarTop' />

          <div className='reaccuring'>
            <img className="" src="/assets/leftPillar.svg" alt='LeftPillar' />
            <img className="rotate-180 transform scale-x-[-1]" src="/assets/leftPillar.svg" alt='LeftPillarRotated' />
            <img className="" src="/assets/leftPillar.svg" alt='LeftPillar' />
            <img className="rotate-180 transform scale-x-[-1]" src="/assets/leftPillar.svg" alt='LeftPillarRotated' />
            <img className="" src="/assets/leftPillar.svg" alt='LeftPillar' />
            <img className="rotate-180 transform scale-x-[-1]" src="/assets/leftPillar.svg" alt='LeftPillarRotated' />
          </div>

          <img className="" src="/assets/leftPillarBottom.svg" alt='LeftPillarBottom' />
        </div>
          <div className='right-pilar absolute right-0'>
            <img className="" src="/assets/rightPillarTop.svg" alt='RightPillar' />
              <div className='reaccuring'>
                <img className="" src="/assets/rightPillar.svg" alt='RightPillar' />
                <img className="rotate-180 transform scale-x-[-1]" src="/assets/rightPillar.svg" alt='RightPillarRotated' />
                <img className="" src="/assets/rightPillar.svg" alt='RightPillar' />
                <img className="rotate-180 transform scale-x-[-1]" src="/assets/rightPillar.svg" alt='RightPillarRotated' />
                <img className="" src="/assets/rightPillar.svg" alt='RightPillar' />
                <img className="rotate-180 transform scale-x-[-1]" src="/assets/rightPillar.svg" alt='RightPillarRotated' />
              </div>
            <img className="" src="/assets/rightPillarBottom.svg" alt='RightPillar' />
          </div>
        </div>


        <IntroBlock />
        <About />
        <Experience />
        <Projects />
        <Contact />

      </div>
    </div>
  )
}

export default App
