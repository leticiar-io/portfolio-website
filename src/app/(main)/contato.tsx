'use client';

import { Button } from "@/components/button";

import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import Image from "next/image";
import Link from "next/link";

export default function Contato() {
   return (
      <footer className="flex flex-col gap-12 justify-center bg-black-600 min-h-[calc(100vh-200px)] text-white overflow-hidden">
         <div className="relative px-[6.9375rem] 2xl:min-w-full 2xl:px-[5.9375rem]">
            <div className="text-start">
               <h1 className="font-bold text-5xl 2xl:text-6xl lg:w-2/3 2xl:w-full">Vamos trabalhar juntos</h1>
               <p className="font-light text-lg lg:text-2xl text-black-100 mt-2 mb-6">
                  Entre em contato comigo!
               </p>
            </div>

            {/* Linha Divisória */}
            <div className="h-[1px] w-full max-w-8xl bg-black-400"></div>

            {/* Imagem */}
            <div className="absolute w-[15.625rem] h-[15.625rem] 2xl:w-[25rem] 2xl:h-[25rem] right-24 -top-12 2xl:-top-16">
               <Image
                  src="/code.svg" // Caminho corrigido para assets públicos
                  alt="Contato"
                  layout="fill"
                  objectFit="cover"
                  className="animate-spin"
               />
            </div>

            {/* Links de Contato */}
            <div className="flex mt-12 items-center gap-4">
               <Link
                  href="mailto:leticia.rodrigues20021@gmail.com"
               >
                  <Button
                     variant="whiteStroke"
                     className="text-xl"
                  >
                     <MdOutlineEmail className="mr-4 text-xl"/>
                     leticia.rodrigues20021@gmail.com
                  </Button>
               </Link>
               <Link
                  href="https://github.com/leticiar-io"
                  target="_blank"
               >
                  <Button
                     variant="whiteStroke"
                     className="text-xl"
                  >
                     <FaLinkedinIn className="mr-4 text-xl"/>
                     leticiar-io
                  </Button>
               </Link>
            </div>
         </div>
      </footer>
   );
}
