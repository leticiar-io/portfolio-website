import Link from 'next/link';
import { useRef } from 'react';

export default function Description() {
   const description = useRef<HTMLDivElement>(null);

   return (
      <div ref={description} className="mt-1 sm:mt-24 lg:mt-32 flex justify-center">
         <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 relative max-w-[30rem] sm:max-w-[40rem] lg:max-w-[57rem] 2xl:max-w-full 2xl:px-[5.9375rem] justify-center items-center px-8 md:px-0 ">
            <p className="text-base sm:text-lg lg:text-2xl 2xl:text-3xl leading-relaxed sm:leading-snug flex flex-wrap gap-1 sm:gap-2 text-center sm:text-left">
               <span className="relative  overflow-hidden">
                  Transformo código e design em soluções digitais que unem lógica e criatividade
               </span>
            </p>
            <p className="text-sm sm:text-base lg:text-lg font-light text-center sm:text-right lg:w-4/5">
               Meu foco é criar experiências que conectam pessoas e causam impacto real.
            </p>
            <Link href="/about">
            <div className="md:absolute z-0 lg:top-22 top-36 left-[calc(100%-150px)] sm:left-[calc(100%-180px)] lg:left-[calc(100%-200px)] 2xl:left-[calc(100%-300px)] w-32 sm:w-36 lg:w-44 h-32 sm:h-36 lg:h-44 bg-black-600 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow hover:text-base sm:hover:text-lg lg:hover:text-xl transition-all duration-300 hover:w-36 sm:hover:w-40 lg:hover:w-48 hover:h-36 sm:hover:h-40 lg:hover:h-48">
               <div className="text-sm sm:text-md font-light relative z-10">
                  Sobre mim
               </div>
            </div>
            </Link>
         </div>
      </div>
   );
}
