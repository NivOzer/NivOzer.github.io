import React from 'react';
import { Chrono } from 'react-chrono';

export const Experience = () => {
  const items = [
    {
      title: "Present",
      cardTitle: "Looking for a Job ;)",
      cardSubtitle: "Actively seeking new opportunities.",
      cardDetailedText: "Eager to leverage my full-stack and mobile development experience in new and exciting projects.",
      // media: {
      //   type: "IMAGE",
      //   source: {
      //     url: "/assets/JobSearch.webp"
      //   }
      // }
    },
    {
      title: "March 2023 – March 2024",
      cardTitle: "Field Operation Engineer at Catch",
      url: "https://www.linkedin.com/in/nivozer/",
      cardSubtitle: "Contributions to innovative designs and UI/UX.",
      cardDetailedText: "Worked on creating innovative designs and improving UI/UX. Led the implementation of front-end development using modern technologies.",
      // media: {
      //   type: "IMAGE",
      //   source: {
      //     url: "/assets/catchLogo.jpeg"
      //   }
      // }
    },
    {
      title: "2021 - Present",
      cardTitle: "Personal Projects",
      url: "https://github.com/nivozer",
      cardSubtitle: "Dynamic Automata Visualizer, English Tutoring App, Anime Binger",
      cardDetailedText: "Developed a dynamic automata visualizer with Next.js, an English tutoring app using React Native, and a Chrome extension for anime browsing, among other projects.",

    },
    {
      title: "2021 – 2024",
      cardTitle: "Computer Science B.Sc. at Holon Institute of Technology",
      url: "https://www.linkedin.com/in/nivozer/",
      cardSubtitle: "Expected Graduation: 2024",
      cardDetailedText: "Currently pursuing a B.Sc. in Computer Science with a focus on full-stack development and mobile apps. Key coursework includes Data Science, Machine Learning, and OOP.",
      // media: {
      //   type: "IMAGE",
      //   source: {
      //     url: "/assets/hitLogo.png"
      //   }
      // }
    }
  ];
  

  return (
    <div id="experience" className='min-h-screen w-full flex justify-center items-center'>
      <div className='w-1/2 xs:w-full '>
        <Chrono 
        items={items}
        disableNavOnKey
        disableToolbar= {true}
        mode="VERTICAL_ALTERNATING"
        theme={{
          primary: '#451a03',
          secondary: '#7f7563',
          cardBgColor: '#fffbeb',
          titleColor: 'black',
          titleColorActive: 'white',
        }}
        fontSizes={{
          cardSubtitle: '0.75rem',
          cardText: '0.5rem',
          cardTitle: '1rem',
          title: '1rem',
        }}
        />
      </div>
    </div>
  );
};
