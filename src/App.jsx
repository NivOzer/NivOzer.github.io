import { useState } from 'react'
import './App.css'
import './index.css'
import { Navbar } from './components/Navbar'
import { IntroBlock } from './components/IntroBlock'
import { Contact } from './components/Contact'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>

      <Navbar/>

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
            <img className="" src="/assets/leftPillar.svg" alt='LeftPillar' />
            <img className="rotate-180 transform scale-x-[-1]" src="/assets/leftPillar.svg" alt='LeftPillarRotated' />
            <img className="" src="/assets/leftPillar.svg" alt='LeftPillar' />
            <img className="rotate-180 transform scale-x-[-1]" src="/assets/leftPillar.svg" alt='LeftPillarRotated' />
            <img className="" src="/assets/leftPillar.svg" alt='LeftPillar' />
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
                <img className="" src="/assets/rightPillar.svg" alt='RightPillar' />
                <img className="rotate-180 transform scale-x-[-1]" src="/assets/rightPillar.svg" alt='RightPillarRotated' />
                <img className="" src="/assets/rightPillar.svg" alt='RightPillar' />
                <img className="rotate-180 transform scale-x-[-1]" src="/assets/rightPillar.svg" alt='RightPillarRotated' />
                <img className="" src="/assets/rightPillar.svg" alt='RightPillar' />
              </div>
            <img className="" src="/assets/rightPillarBottom.svg" alt='RightPillar' />
          </div>
        </div>

        <IntroBlock />
        <Contact />
        <h1>tester</h1>
      </div>
    </div>
  )
}

export default App
