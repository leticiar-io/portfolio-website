"use client";

import { useState } from 'react';

export default function Home() {
  const [hovered, setHovered] = useState<string | null>(null);

  const handleMouseEnter = (title: string) => {
    setHovered(title);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <>
      <main className="flex flex-col items-center justify-center mt-[111px]">
        <span>👋, me chamo Letícia Rodrigues e eu sou</span>
        <div className="flex flex-col -space-y-16 items-center text-[180px] font-anton">
          <h1
            onMouseEnter={() => handleMouseEnter('web')}
            onMouseLeave={handleMouseLeave}
            className={`inline-block tracking-tighter ${hovered === 'uiux' ? 'text-stroke-2' : ''} ${hovered === 'uiux' ? 'text-transparent' : 'text-black'} transition-all duration-150`}
          >
            Web Developer
          </h1>

          <h1
            onMouseEnter={() => handleMouseEnter('uiux')}
            onMouseLeave={handleMouseLeave}
            className={`tracking-tighter ${hovered === 'uiux' ? 'text-black' : 'text-stroke-2'} ${hovered === 'web' ? 'text-stroke-2' : ''} transition-all duration-150`} // Começa com stroke
          >
            <span className="font-playball">&</span> UI/UX Designer
          </h1>
        </div>
      </main>
    </>
  );
}
