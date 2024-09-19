import { useState } from 'react'
import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col pl-24'>
      <div className='pillars z-0'>
        <img className="absolute left-0 " src="/assets/pillars.svg" alt='LeftPillar' />
        <img className="absolute right-0" src="/assets/pillarsEnd.svg" alt='RightPillar' />
      </div>


      <nav className='w-full z-10 flex items-center p-4 text-brown-800 gap-8'>
        <div className='logo'>
          <img src="https://cdn.worldvectorlogo.com/logos/roma-3.svg" alt='Rome Logo' className='h-10' />
        </div>
        <ul className='nav-links flex space-x-4'>
          <li><a href='#home' className='hover:text-yellow-500'>Home</a></li>
          <li><a href='#about' className='hover:text-yellow-500'>About</a></li>
          <li><a href='#contact' className='hover:text-yellow-500'>Contact</a></li>
        </ul>
      </nav>

      <div className='content w-full z-1 flex items-center'>
        <img className="w-64 h-64" src="/assets/godImage.webp" alt='god' />
      </div>

    </div>
  )
}

export default App
