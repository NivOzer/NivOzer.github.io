import {React,useState, useEffect} from 'react'

import { logoGithub, logoLinkedin, logoTwitter, logoInstagram } from 'ionicons/icons'; // Import icons


export const Navbar = () => {

    
    const [navBar, setNavBar] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setNavBar(true);  // Set navBar to true for large screens
            } else {
                setNavBar(false); // Set navBar to false for small screens
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
    <div  id="navbar" className='
    z-50
    fixed w-full flex flex-wrap 
    xs:flex xs-flex-wrap 
    sm:flex'>
        <nav className='w-full z-10 flex p-2 text-brown-800 gap-8 lg:items-center
        xs:flex xs:flex-wrap xs:gap-4
        sm:flex sm:flex-wrap'>
            <ul className='nav-links flex flex-wrap gap-1.5 ml-32 
            xs:m-0 xs:flex xs:flex-wrap xs:justify-center xs:w-full xs:gap-3
            sm:m-0'>
                <li className='xs:w-full lg:hidden text-center text-stone-50 shadow-lg'>
                    {navBar ? <ion-icon name="caret-up" size="large" onClick={() => setNavBar(!navBar)}/> : <ion-icon name="menu" size="large" onClick={() => setNavBar(!navBar)}/>}
                </li>
            {navBar && (
                <>
                <li className='xs:w-1/2 '>
                    <a href="#home">
                    <button className="bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 px-4 py-2 rounded-2xl shadow-sm transition duration-200 xs:w-full">
                        <span className="text-xl font-bold font-cinzel">home</span>
                    </button>
                    </a>
                </li>

                <li className='xs:w-1/2'>
                    <a href="#about">
                    <button className="bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 px-4 py-2 rounded-2xl shadow-sm transition duration-200 xs:w-full">
                        <span className="text-xl font-bold font-cinzel">about</span>
                    </button>
                    </a>
                </li>

                <li className='xs:w-1/2'>
                    <a href="#experience">
                    <button className="bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 px-4 py-2 rounded-2xl shadow-sm transition duration-200 xs:w-full">
                        <span className="text-xl font-bold font-cinzel">experience</span>
                    </button>
                    </a>
                </li>

                <li className='xs:w-1/2'>
                    <a href="#projects">
                    <button className="bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 px-4 py-2 rounded-2xl shadow-sm transition duration-200 xs:w-full">
                        <span className="text-xl font-bold font-cinzel">projects</span>
                    </button>
                    </a>
                </li>

                <li className='xs:w-1/2'>
                    <a href="#contact">
                    <button className="bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 px-4 py-2 rounded-2xl shadow-sm transition duration-200 xs:w-full">
                        <span className="text-xl font-bold font-cinzel">contact</span>
                    </button>
                    </a>
                </li>
                </>
            )}
            </ul>
            {navBar && (
                <>
            {/* Icons Section */}
            <div className="icons flex gap-4 ml-auto mr-auto sm:m-0">
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
            </>
            )}
        </nav>
        {navBar && (
                <>
        <img className="h-2 w-full object-cover" src="/assets/bar.svg"/>
        </>
            )}
    </div>
  )
}
