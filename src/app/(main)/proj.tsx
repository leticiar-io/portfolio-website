'use client';
import { useState } from 'react';
import Projeto from '../../components/modal/project';
import Modal from '../../components/modal/modal';
import { Button } from '@/components/button';
import Link from 'next/link';

const projects = [
   {
      title: "Paynow",
      src: "project1.png",
      color: "#000000",
      category: "Design UI/UX",
      link: "#",
   },
   {
      title: "Let me ask",
      src: "project1.png",
      color: "#8C8C8C",
      category: "Web Development",
      link: "#",
   },
   {
      title: "Modoke",
      src: "project1.png",
      color: "#EFE8D3",
      category: "Design UI/UX & Web Development",
      link: "#",
   },
];

export default function Project() {
   const [modal, setModal] = useState<{ active: boolean; index: number }>({ active: false, index: 0 });

   return (
      <main className="flex flex-col items-center justify-center mt-20 sm:mt-32 lg:mt-80 2xl:mt-80 overflow-x-hidden">
         <span className="text-start font-light text-black-500 w-full px-4 sm:px-8 lg:px-[5.9375rem] text-sm sm:text-base lg:text-lg">
            PROJETOS RECENTES
         </span>
         <div className="w-full px-4 sm:px-8 lg:px-[5.9375rem] flex flex-col gap-8 sm:gap-12 lg:gap-16 items-center justify-center">
            {projects.map((project, index) => (
               <Projeto
                  index={index}
                  title={project.title}
                  category={project.category}
                  setModal={setModal}
                  key={index}
                  link={project.link}
               />
            ))}
         </div>
         <Modal modal={modal} projects={projects} />

         <Link href="/projects" className="mt-10 mb-20 sm:mb-32 lg:mb-48 2xl:mb-56">
            <Button variant="stroke" className="text-sm sm:text-base lg:text-lg">
               Mais projetos
            </Button>
         </Link>
      </main>
   );
}
