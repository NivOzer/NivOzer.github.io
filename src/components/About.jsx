import React from 'react'

export const About = () => {
  return (
    <div id="about" className='min-h-screen'>
      <div class="flex flex-col items-center justify-center min-h-screen">

        <div class="xs:p-2 xs:max-h-screen  justify-start xs:w-full leading-6 border-2 border-dashed shadow-stitched border-romanBeige  bg-white flex flex-col xs:gap-4 gap-6 items-center rounded-lg lg:p-12  w-1/5 text-center">
          <div>
            <img className="xs:w-28 xs:h-28 w-40 h-40 object-cover rounded-full" src="/assets/Me.jpg" alt="god" />
          </div>
          
          <div className='flex flex-col gap-2'>
            <h1 class="xs:text-lg text-4xl font-bold text-gray-800">Niv Ozer</h1>
            <h2 class="xs:text-sm text-xl font-semibold text-gray-500">Fullstack & Mobile Developer</h2>
          </div>
          
          <div className=''>
            <p class="xs:text-xs xs:mb-4 text-lg text-gray-700 mb-6 flex-wrap flex">
            With 3 years of web development experience, I build software like the Romans built their empire - structured, scalable, and built to last. From React to Node, I design applications with the same attention to architecture as the Colosseum.
            Whether it’s coding or debugging, I approach every project with strategy and precision.
            Hire me, and your projects will stand the test of time - because just like Rome, great apps need solid architecture!</p>
            <div class="bg-romanBeige h-0.5 opacity-75"></div>
          </div>

          <div className='flex flex-col gap-6 xs:gap-4 items-center'>
            <p class="xs:text-xs text-gray-700">
              Technologies I've worked with:
            </p>
            <div className="flex flex-wrap justify-center gap-4 xs:gap-2">
              <ion-icon name="logo-react" style={{ fontSize: window.innerWidth <= 480 ? '20px' : '40px' }}></ion-icon>
              <ion-icon name="logo-javascript" style={{ fontSize: window.innerWidth <= 480 ? '20px' : '40px' }}></ion-icon>
              <ion-icon name="logo-html5" style={{ fontSize: window.innerWidth <= 480 ? '20px' : '40px' }}></ion-icon>
              <ion-icon name="logo-css3" style={{ fontSize: window.innerWidth <= 480 ? '20px' : '40px' }}></ion-icon>
              <ion-icon name="logo-nodejs" style={{ fontSize: window.innerWidth <= 480 ? '20px' : '40px' }}></ion-icon>
              <ion-icon name="git-branch" style={{ fontSize: window.innerWidth <= 480 ? '20px' : '40px' }}></ion-icon>
              <ion-icon name="logo-figma" style={{ fontSize: window.innerWidth <= 480 ? '20px' : '40px' }}></ion-icon>
              <ion-icon name="logo-npm" style={{ fontSize: window.innerWidth <= 480 ? '20px' : '40px' }}></ion-icon>
              <ion-icon name="logo-python" style={{ fontSize: window.innerWidth <= 480 ? '20px' : '40px' }}></ion-icon>
            </div>
            <button
              onClick={() => window.open("https://drive.google.com/file/d/1Zmu21KentWjqJecFUGCfz-RvC5eL_g3Q/view?usp=sharing", "_blank")}
              className="xs:w-full xs:p-1 w-1/2 py-2 px-4 text-lg rounded-lg shadow-md bg-gold-gradient text-amber-50 hover:bg-amber-100 font-serif"
            >
                    Download CV
              </button>
          </div>
          


        </div>
      </div>

    </div>
  )
}
