import React from 'react'

export const Socials = () => {
  return (
    <div className="icons flex gap-4 ">
        <a href="https://github.com/NivOzer" className='text-amber-950
        hover:animate-bounce-twice'>
            <ion-icon name="logo-github" className="" size="large"/>
        </a>
        <a href="https://www.linkedin.com/in/nivozer/" className='text-amber-950
        hover:animate-bounce-twice'>
            <ion-icon name="logo-linkedin" className="" size="large"/>
        </a>
        <a href="https://www.tiktok.com/@nivozer" className='text-amber-950
        hover:animate-bounce-twice'>
            <ion-icon name="logo-tiktok" className="" size="large"/>
        </a>
        <a href="https://www.instagram.com/niv_ozer/" className='text-amber-950
        hover:animate-bounce-twice'>
            <ion-icon name="logo-instagram" className="" size="large"/>
        </a>
    </div>
  )
}
