import React from 'react'

export const Navbar = () => {
  return (
    <div>
        <nav className='w-full z-10 flex items-center p-2 text-brown-800 gap-8 '>
            <div className='logo'>
            <img src="https://cdn.worldvectorlogo.com/logos/roma-3.svg" alt='Rome Logo' className='h-10' />
            </div>
            <ul className='nav-links flex gap-1.5'>
            <li>
                <a>
                <button className="bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 px-4 py-2 rounded-lg font-serif shadow-sm transition duration-200">
                    <span className="text-lg font-sans">Scriptum</span>
                </button>
                </a>
            </li>

            <li>
                <a>
                <button className="bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 px-4 py-2 rounded-lg font-serif shadow-sm transition duration-200">
                    <span className="text-lg font-sans">About</span>
                </button>
                </a>
            </li>

            <li>
                <a>
                <button className="bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 px-4 py-2 rounded-lg font-serif shadow-sm transition duration-200">
                    <span className="text-lg font-sans">Experience</span>
                </button>
                </a>
            </li>

            <li>
                <a>
                <button className="bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 px-4 py-2 rounded-lg font-serif shadow-sm transition duration-200">
                    <span className="text-lg font-sans">Projects</span>
                </button>
                </a>
            </li>

            <li>
                <a>
                <button className="bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 px-4 py-2 rounded-lg font-serif shadow-sm transition duration-200">
                    <span className="text-lg font-sans">Contact</span>
                </button>
                </a>
            </li>

            </ul>
        </nav>
        <img className="h-2 w-full object-cover" src="/assets/bar.svg"/>
    
    </div>
  )
}
