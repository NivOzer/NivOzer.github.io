import React from 'react'

export const Projects = () => {
  const projects = [
    {
      title: "Dynamic Automata Visualizer",
      description: "Built a dynamic React application with Next.js to visualize automata using the OpenAI REST API."
    },
    {
      title: "English Tutoring App",
      description: "Designed and built a React Native application for private English tutors, focusing on captivating UI/UX. Used Tailwind CSS for styling."
    },
    {
      title: "Anime 'Binger' Chrome Extension",
      description: "Created a TypeScript-based Chrome extension using React and Tailwind CSS for a seamless experience browsing and watching anime in Hebrew."
    },
    {
      title: "Brainy: Android Math Tutoring App",
      description: "Made with Kotlin in Android Studio, using Firebase for data management. Brainy offers interactive math exercises for children, making learning fun and effective."
    },
    {
      title: "Password Manager: Kotlin App in Android Studio",
      description: "An application for secure password storage and management."
    }    
  ]
  return (
    <div id="projects" className='min-h-screen content-center'>
      <div className="font-serif">
      <div className="bg-amber-50">
      <div className="bg-gold-gradient text-yellow-200 py-6 xs:py-4 text-center">
          <h1 className="text-4xl xs:text-xl font-cinzel">key projects</h1>
        </div>
        <div className="p-8 space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="flex space-x-4 border-b-2 border-yellow-400 pb-4 last:border-b-0 items-center">
              {window.innerWidth > 480 && (
                <ion-icon 
                  name="folder" 
                  style={{ fontSize: '24px', color: '#FBC901' }}
                ></ion-icon>
              )}
              <div className="pl-4 xs:p-0">
                <h2 className="text-xl xs:text-sm font-semibold text-amber-900 mb-2">{project.title}</h2>
                <p className="text-[#5D4037] text-lg xs:text-sm italic">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
    </div>
  )
}