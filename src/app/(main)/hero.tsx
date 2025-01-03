'use client';

import { useState } from 'react';

export default function Hero() {
   const [hovered, setHovered] = useState<string | null>(null);

   const handleMouseEnter = (title: string) => {
      setHovered(title);
   };

   const handleMouseLeave = () => {
      setHovered(null);
   };

   return (
      <main className="flex flex-col items-center justify-center sm:-space-y-6 mt-28 sm:mt-20 lg:mt-22">
         <span className="font-light text-sm xs:text-base sm:text-lg lg:text-xl text-black-200">
            👋, me chamo Letícia Rodrigues e eu sou
         </span>
         <div className="flex flex-col -space-y-5 xs:-space-y-10 sm:-space-y-14 lg:-space-y-16 items-center text-[3rem] xs:text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[9.5rem] 2xl:text-[12.5rem] font-anton">
            <h1
               onMouseEnter={() => handleMouseEnter('web')}
               onMouseLeave={handleMouseLeave}
               className={`inline-block tracking-tighter ${
                  hovered === 'uiux' ? 'text-stroke-2' : ''
               } ${hovered === 'uiux' ? 'text-transparent' : 'text-black-600'} transition-all duration-150`}
            >
               Web Developer
            </h1>

            <h1
               onMouseEnter={() => handleMouseEnter('uiux')}
               onMouseLeave={handleMouseLeave}
               className={`tracking-tighter ${
                  hovered === 'uiux' ? 'text-black-600' : 'text-stroke-2'
               } ${hovered === 'web' ? 'text-stroke-2' : ''} transition-all duration-150`}
            >
               <span className="font-playball">&</span> UI/UX Designer
            </h1>
         </div>
      </main>
   );
}
