import { useState } from 'react'
import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container relative min-h-screen'>
      <div className='pillars absolute inset-0 flex justify-between z-0'>
      <img className="w-1/6" src="/assets/pillars.svg" alt='LeftPillar' />
        <img className="w-1/6" src="/assets/pillarsEnd.svg" alt='RightPillar' />
      </div>
      <div className='content relative z-10 flex justify-center items-center min-h-screen'>
        <img className="w-1/5" src="/assets/godImage.webp" alt='god' />
        <img className="w-1/5" src="/assets/godImage.webp" alt='god' />
      </div>
    </div>
  )
}

export default App
