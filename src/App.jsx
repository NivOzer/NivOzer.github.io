import { useState } from 'react'
import './App.css'
import './index.css'
// Import your images
import pillars from './assets/pillars.svg';
import pillarsEnd from './assets/pillarsEnd.svg';
import godImage from './assets/godImage.webp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container relative min-h-screen'>
      <div className='pillars absolute inset-0 flex justify-between z-0'>
      <img className="w-1/6" src={pillars} alt='LeftPillar'/>
        <img className="w-1/6" src={pillarsEnd} alt='RightPillar'/>
      </div>
      <div className='content relative z-10 flex justify-center items-center min-h-screen'>
        <img className="w-1/5" src={godImage} alt='god'/>
      </div>
    </div>
  )
}

export default App
