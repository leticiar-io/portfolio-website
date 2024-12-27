"use client";

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { menuSlide } from '../../lib/animations'
import LinkItem from './link'
import Curve from './curve'

const navItems = [
   { title: 'Home', href: '/' },
   { title: 'Projetos', href: '/project' },
   { title: 'Sobre', href: '/about' },
   { title: 'Contato', href: '/contact' },
]

const Nav = () => {
   const pathname = usePathname()
   const [selectedIndicator, setSelectedIndicator] = useState(pathname)

   return (
      <motion.div
         variants={menuSlide}
         initial="initial"
         animate="enter"
         exit="exit"
         className="absolute z-20 fixed top-0 right-0 w-screen h-screen bg-black-700 text-white font-light lg:w-1/2"
      >
         <div className="h-full p-12 lg:p-[6.25rem] flex flex-col justify-between">
            <div
               onMouseLeave={() => setSelectedIndicator(pathname)}
               className="flex flex-col gap-3 mt-20 text-3xl lg:text-6xl "
            >
               <div className="tracking-wide text-sm font-light text-black-100 border-b border-black-400 uppercase mb-10">
                  <p>Navegação</p>
               </div>
               {navItems.map((data, index) => (
                  <LinkItem
                     key={index}
                     data={{ ...data, index }}
                     isActive={selectedIndicator === data.href}
                     setSelectedIndicator={setSelectedIndicator}
                  />
               ))}
            </div>
            <div className="flex justify-between text-start text-black-100 text-sm">
               <a href='www.linkedin.com/in/leticiar-io' target='_blank' className='hover:text-white transition-colors duration-200'>LinkedIn</a>
               <a href='https://github.com/leticiar-io' target='_blank' className='hover:text-white transition-colors duration-200'>Github</a>
               <a href='https://www.behance.net/8dfb8b5e' target='_blank' className='hover:text-white transition-colors duration-200'>Behance</a>
               <a href='https://dribbble.com/leticiaar-io' target='_blank' className='hover:text-white transition-colors duration-200'>Dribble</a>
            </div>
         </div>
         <Curve />
      </motion.div>
   )
}

export default Nav