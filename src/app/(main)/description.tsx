import Link from 'next/link';
import { useRef } from 'react';

export default function Description() {
   const phrase = "Transformo código e design em soluções digitais que unem lógica e criatividade.";
   const description = useRef<HTMLDivElement>(null);

   return (
      <div ref={description} className="mt-32 flex justify-center">
         <div className="flex gap-12 relative max-w-[57rem] 2xl:max-w-full 2xl:px-[5.9375rem]">
            <p className="text-2xl leading-snug flex flex-wrap gap-2 2xl:text-3xl">
               {phrase.split(" ").map((word, index) => (
                  <span key={index} className="relative inline-flex overflow-hidden">
                     {word}
                  </span>
               ))}
            </p>
            <p className="2xl:text-lg font-light w-4/5 text-right">
               Meu foco é criar experiências que conectam pessoas e causam impacto real.
            </p>
            <div className="absolute z-0 top-24 left-[calc(100%-200px)] w-44 h-44 bg-black-600 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow hover:text-xl transition-all duration-300 hover:w-48 hover:h-48 2xl:left-[calc(100%-300px)]"> 
               <Link href="/about" className='text-md font-light relative z-10'>
                  Sobre mim
               </Link> 
            </div>
         </div>
      </div>
   );
}
