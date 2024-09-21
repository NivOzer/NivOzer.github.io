import React from 'react'

import { logoGithub, logoLinkedin, logoTwitter, logoInstagram } from 'ionicons/icons'; // Import icons


export const Navbar = () => {
  return (
    <div  id="navbar" className='fixed w-full flex flex-wrap'>
        <nav className='w-full z-10 flex items-center p-2 text-brown-800 gap-8 '>

            <ul className='nav-links flex gap-1.5 ml-32'>
            <li>
                <a href="#home">
                <button className=" bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 px-4 py-2 rounded-2xl shadow-md transition duration-200">
                    <span className="text-xl font-bold font-cinzel">home</span>
                </button>
                </a>
            </li>

            <li>
                <a href="#about">
                <button className=" bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 px-4 py-2 rounded-2xl shadow-md transition duration-200">
                    <span className="text-xl font-bold font-cinzel">about</span>
                </button>
                </a>
            </li>

            <li>
                <a href="#experience">
                <button className=" bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 px-4 py-2 rounded-2xl shadow-md transition duration-200">
                    <span className="text-xl font-bold font-cinzel">experience</span>
                </button>
                </a>
            </li>

            <li>
                <a href="#projects">
                <button className=" bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 px-4 py-2 rounded-2xl shadow-md transition duration-200">
                    <span className="text-xl font-bold font-cinzel">projects</span>
                </button>
                </a>
            </li>

            <li>
                <a href="#contact">
                <button className=" bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 px-4 py-2 rounded-2xl shadow-md transition duration-200">
                    <span className="text-xl font-bold font-cinzel">contact</span>
                </button>
                </a>
            </li>
            </ul>          

            {/* Icons Section */}
            <div className="icons flex gap-4 ml-auto mr-32">
                <a href="https://github.com/NivOzer" className='text-amber-950'>
                    <ion-icon name="logo-github" className="" size="large"/>
                </a>
                <a href="https://www.linkedin.com/in/nivozer/" className='text-amber-950'>
                    <ion-icon name="logo-linkedin" className="" size="large"/>
                </a>
                <a href="https://www.tiktok.com/@nivozer" className='text-amber-950'>
                    <ion-icon name="logo-tiktok" className="" size="large"/>
                </a>
                <a href="https://www.instagram.com/niv_ozer/" className='text-amber-950'>
                    <ion-icon name="logo-instagram" className="" size="large"/>
                </a>
            </div>

        </nav>
        <img className="h-2 w-full object-cover" src="/assets/bar.svg"/>
    </div>
  )
}
