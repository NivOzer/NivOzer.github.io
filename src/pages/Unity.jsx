import React from 'react'
import {Socials} from "../components/Socials.jsx"
import { Link, Outlet } from "react-router-dom";
export const Unity = () => {
  const projects = [
    {
      title: "Pass Through",
      image: "/images/PassThroughThumbnail.png",
      description: "Aerial Combat Simulator",
      link: "/Unity/pass-through" // Absolute path to a separate page
    },
    {
      title: "Falling Swords",
      image: "/images/FallingSwordsThumbnail.jpg",
      description: "Epic Battle Royale",
      link: "/Unity/falling-swords"
    },
    {
      title: "Chicken Invaders Remastered",
      image: "/images/ChickenInvadersRemasteredThumbnail.jpg",
      description: "Space Combat",
      link: "/Unity/chicken-invaders"
    },
  ];
    
      return (
        <div>
          {/* Header */}
          <div className="p-8">
            <div href="/" className="inline-block">
              <h1 className="font-serif text-2xl tracking-wide 0">NIV OZER</h1>
              <p className="font-serif tracking-widest text-sm">UNITY DEVELOPER</p>
            </div>
    
            <div
              onClick={() => window.open("https://drive.google.com/file/d/1qqLCvy27G6bIsntPr7KsY_lU4oMz-Vx-/view?usp=sharing", "_blank")}
              className="sm:my-4 flex md:float-right lg:float-right px-6 py-2  border border-zinc-800 hover:bg-yellow-900 hover:text-stone-50 duration-300 uppercase font-serif"
            >
                Resume
            </div>
          </div>
    
          {/* Title */}
          <div className="text-center my-20">
            <h2 className="font-serif text-3xl tracking-[0.1em]">MY GAMES</h2>
          </div>
    
          {/* Projects Grid */}
          <div className="container mx-auto  border-2 border-amber-950 py-1 px-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 ">
              {projects.map((project, index) => (
                <Link key={index} to={project.link} className="group relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className=" border-2 border-amber-950 object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  
                  />
    
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                      <h3 className="text-zinc-200 font-serif text-xl tracking-wider mb-2">{project.title}</h3>
                      <div className="h-px w-12 bg-amber-500/50 mb-2"></div>
                      <p className="text-zinc-200/70 text-sm tracking-wide font-serif">{project.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
            

          <div className='py-8 flex justify-center'>
              <Socials/>
          </div>
          <div className='flex justify-center'>
            <div
                onClick={() => window.open("https://drive.google.com/file/d/1qqLCvy27G6bIsntPr7KsY_lU4oMz-Vx-/view?usp=sharing", "_blank")}
                className="sm:w-3/4 md:w-1/2 lg:w-1/6 flex justify-center px-6 py-2 border border-zinc-800 hover:bg-yellow-900 hover:text-stone-50 duration-300 uppercase font-serif"
              >
                Resume
            </div>
          </div>
          </div>
      )
          
}
