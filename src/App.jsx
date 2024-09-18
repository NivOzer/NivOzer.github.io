import { useState } from 'react'
import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container relative min-h-screen'>
      <div className='pillars absolute inset-0 flex justify-between z-0'>
        <img className="w-1/6" src="src/assets/pillars.svg" />
        <img className="w-1/6" src="src/assets/pillarsEnd.svg" />
      </div>
      <div className='content relative z-10 flex justify-center items-center min-h-screen'>
        <img className="w-1/5" src="src/assets/godImage.webp"/>
      </div>
    </div>
  )
}

export default App
