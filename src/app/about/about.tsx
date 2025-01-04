import { Button } from '@/components/button';
import Image from 'next/image';
import Link from 'next/link';
import { FiDownload } from 'react-icons/fi';

export default function About() {
   return (
      <section className="min-h-screen py-12 px-4 text-black-600">
         <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
            {/* Imagem principal */}
            <Image
               src="/profile.jpg"
               alt="Profile Picture"
               width={400}
               height={400}
               className="object-cover mx-auto w-[25rem] 2xl:w-[30rem]"
            />
            <Image
               src="/code.svg"
               alt="Profile Picture"
               width={400}
               height={400}
               className="absolute mx-auto invisible lg:visible lg:w-[12rem] lg:left-[22rem] lg:top-[28rem] 2xl:w-[15rem] 2xl:left-[31rem] 2xl:top-[33rem]"
            />

            {/* Texto e link */}
            <div className="flex flex-col space-y-3 2xl:space-y-8  lg:text-left lg:items-start">
               <header className="mb-4">
                  <h1 className="font-anton text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Sobre mim</h1>
               </header>
               <p className="text-sm sm:text-base lg:text-[15px] 2xl:text-lg lg:text-justify font-light text-black-400">
                  Com um pé na programação e o outro no design, sou técnica em Redes de Computadores,
                  estudante de <b className="font-semibold">Sistemas e Mídias Digitais</b> pela UFC e
                  <b className="font-semibold"> Ciência de Dados</b> pela Uninassau. Minha trajetória é movida pela
                  curiosidade e pela busca de equilíbrio entre criatividade e lógica, transformando ideias em
                  realidade. Já atuei na área de dados no Banco do Nordeste, além de desenvolver interfaces,
                  websites e APIs em startups como Container Digital Jr, Cuboh e Workonect. Amo desafios e acredito
                  que cada projeto é uma oportunidade para aprender algo novo e ir além.
               </p>

               <div>
                  <Link href="https://github.com/leticiar-io" target="_blank">
                     <Button
                        variant="stroke"
                        className="text-sm md:text-base px-6 md:px-8 py-2 md:py-3 sm:mt-3 2xl:mt-0 flex items-center justify-center hover:bg-gray-100 hover:border-gray-100 hover:px-10 transition-all duration-200"
                     >
                        <FiDownload className="mr-2 text-lg md:text-xl" />
                        <span>Baixar CV</span>
                     </Button>
                  </Link>
               </div>
            </div>
         </div>
      </section>
   );
}
