'use client';

import { Button } from "@/components/button";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
   return (
      <footer className="flex flex-col gap-12 justify-center bg-black-600 min-h-[calc(100vh-200px)] text-white overflow-hidden">
         <div className="relative">
            <div className="text-start w-[90%] mx-auto md:w-[75%] ">
               <h1 className="pb-2 font-bold tracking-tighter text-5xl sm:text-4xl 2xl:text-[4rem] lg:w-2/3 ">
                  Vamos trabalhar juntos
               </h1>
               <p className="font-light text-lg sm:text-base lg:text-2xl text-black-100 mt-2 mb-6">
                  Entre em contato comigo!
               </p>
            </div>

            {/* Linha Divisória */}
            <div className="h-[1px] w-[90%] mx-auto md:w-[75%] md:max-w-8xl bg-black-400"></div>

            {/* Imagem */}
            <div className="absolute w-[15.625rem] h-[15.625rem] sm:w-[12rem] sm:h-[12rem] lg:w-[16rem] lg:h-[16rem] 2xl:w-[22rem] 2xl:h-[22rem] right-20 -top-12 2xl:-top-16">
               <Image
                  src="/code.svg" // Caminho corrigido para assets públicos
                  alt="Contato"
                  layout="fill"
                  objectFit="cover"
                  className="animate-spin invisible md:visible"
               />
            </div>

            {/* Links de Contato */}
            <div className="w-[90%] mx-auto flex flex-col sm:flex-row mt-12  md:w-[75%] md:items-center gap-4 sm:gap-6">
               <Link href="mailto:leticia.rodrigues20021@gmail.com">
                  <Button variant="whiteStroke" className="text-sm sm:text-sm">
                     <MdOutlineEmail className="hover:px-10 mr-2 sm:mr-4 text-lg sm:text-base" />
                     <span className="truncate">leticia.rodrigues20021@gmail.com</span>
                  </Button>
               </Link>
               <Link href="https://www.linkedin.com/in/leticiar-io/" target="_blank">
                  <Button variant="whiteStroke" className="text-sm sm:text-base">
                     <FaLinkedinIn className="hover:px-10 mr-2 sm:mr-4 text-lg sm:text-base" />
                     <span className="truncate">leticiar-io</span>
                  </Button>
               </Link>
            </div>
         </div>
      </footer>
   );
}
