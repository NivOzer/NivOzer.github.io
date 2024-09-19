import React from 'react'

export const IntroBlock = () => {
  return (
    <div id="home" className='flex flex-col gap-8 pt-8 h-screen'>
        <div className='flex flex-row gap-12 h-screen'>
            <div className="flex flex-col gap-4 item justify-center font-cinzel">
            <img className="w-64 h-64 mb-4 rounded-full" src="/assets/godImage.webp" alt='god' />
                <h1 className="text-4xl font-bold">Niv Ozer</h1>
                <h2 className="text-2xl font-bold">Fullstack & Mobile Developer</h2>
                <p className="text-xl flex-wrap flex">
                    Fullstack developer who transforms ideas into stunning web and mobile applications by day
                    <br/>
                    and yes as you can tell im into ancient rome :D
                </p>
              <div className='bg-romanBeige h-0.5 opacity-75 mt-4'></div>
            </div>
        </div>
    </div>
  )
}
