import {React} from 'react'
import { Link } from 'react-router-dom';
export const DualIntroBlock = () => {
  return (
    <div id="home" className=' flex flex-col xs:gap-4 gap-8 pt-8 min-h-screen items-center justify-center'>
      
      <img className="xs:w-32 xs:h-32 w-64 h-64 xs:m-0 mb-4 rounded-full
      hover:animate-spin-once
      " src="/assets/godImage.webp" alt='god' />
        <div className='flex flex-row gap-12'>
            <div className="flex flex-col gap-4 item justify-center font-cinzel">
                <h1 className="text-4xl font-bold">Niv Ozer</h1>
                <h2 className="text-2xl font-bold">Unity & Fullstack Developer</h2>

                <Link to="/Unity">
                  <button className="w-full text-lg bg-gradient-to-b from-amber-100 to-zinc-100 text-gray-900 
                  font-bold py-2 px-4 border-yellow-900 rounded-xl shadow-sm
                  hover:from-amber-50 hover:to-zinc-50 duration-200">
                  Unity
                  </button>
                </Link>

                <Link to="/Fullstack">
                  <button className="w-full text-lg bg-gradient-to-b from-amber-100 to-zinc-100 text-gray-900 
                  font-bold py-2 px-4 border-yellow-900 rounded-xl shadow-sm
                  hover:from-amber-50 hover:to-zinc-50 duration-200">
                  Fullstack
                </button>
                </Link>
              <div className='bg-romanBeige h-0.5 opacity-75 mt-4'></div>
            </div>
        </div>
        {/* <div className='pb-128'></div> */}
    </div>
  )
}
