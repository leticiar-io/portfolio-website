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
   }
];

export default function Project() {
   const [modal, setModal] = useState<{ active: boolean; index: number }>({ active: false, index: 0 });

   return (
      <main className="flex flex-col items-center justify-center h-screen mt-80 2xl:mt-0 overflow-x-hidden">
         <span className='text-start font-light text-black-500 w-full px-[5.9375rem]'>PROJETOS RECENTES</span>
         <div className="w-screen px-[5.9375rem] flex flex-col items-center justify-center">
            {projects.map((project, index) => (
               <Projeto index={index} title={project.title} category={project.category} setModal={setModal} key={index} link={project.link} />
            ))}
         </div>
         <Modal modal={modal} projects={projects} />

         <Link href="/projects" className="mb-72 2xl:mb-1">
            <Button
               variant="stroke"
               className="mt-10"
            >
               Mais projetos
            </Button>
         </Link>
      </main>
   );
}
