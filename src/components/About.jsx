import React from 'react'

export const About = () => {
  return (
    <div id="about" className='h-screen'>
      <div class="flex flex-col items-center justify-center h-screen">

        <div class="bg-white shadow-lg flex flex-col gap-6 items-center rounded-lg p-12 max-w-lg text-center">
          
          <div>
            <img class="w-40 h-40 object-cover rounded-full" src="/assets/Me.jpg" alt="god" />
          </div>
          
          <div className='flex flex-col gap-2'>
            <h1 class="text-4xl font-bold text-gray-800">Niv Ozer</h1>
            <h2 class="text-xl font-semibold text-gray-500">Fullstack & Mobile Developer</h2>
          </div>
          
          <div>
            <p class="text-lg text-gray-700 mb-6 flex-wrap flex">
              With 3 years of web development under my belt, I turn coffee into code faster than a Roman chariot race! 
              When I’m not battling bugs (or pretending I'm Caesar conquering new frontiers in JavaScript), you’ll find me on the slopes, 
              trying not to ski straight into a tree. Creative, passionate, and probably thinking about ancient Rome more than I should—who knew balancing code, skis, and the Roman Empire could be so much fun?
            </p>
            <div class="bg-romanBeige h-0.5 opacity-75"></div>
          </div>

          <div className='flex flex-col gap-6 items-center'>
            <p class="text-gray-700">
              Technologies I've worked with:
            </p>
            <div class="flex flex-wrap justify-center gap-4">
              <ion-icon name="logo-react" size="large"></ion-icon>
              <ion-icon name="logo-javascript" size="large"></ion-icon>
              <ion-icon name="logo-html5" size="large"></ion-icon>
              <ion-icon name="logo-css3" size="large"></ion-icon>
              <ion-icon name="logo-nodejs" size="large"></ion-icon>
              <ion-icon name="git-branch" size="large"></ion-icon>
              <ion-icon name="logo-figma" size="large"></ion-icon>
              <ion-icon name="logo-npm" size="large"></ion-icon>
              <ion-icon name="logo-python" size="large"></ion-icon>
            </div>
            <button
              onClick={() => window.open("https://drive.google.com/file/d/1Zmu21KentWjqJecFUGCfz-RvC5eL_g3Q/view?usp=sharing", "_blank")}
              className="w-1/2 py-2 px-4 text-lg rounded-lg shadow-md bg-amber-100 text-amber-900 hover:bg-amber-100 font-serif"
            >
                    Download CV
              </button>
          </div>


        </div>
      </div>

    </div>
  )
}
