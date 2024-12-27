'use client';
import Link from 'next/link';
import React from 'react';

interface ProjectProps {
   index: number;
   title: string;
   category: string;
   link: string;
   setModal: (modal: { active: boolean; index: number }) => void;
}

export default function Projeto({ index, title, category, link, setModal }: ProjectProps) {
   return (
      <Link
         href={link}
         onMouseEnter={() => setModal({ active: true, index })}
         onMouseLeave={() => setModal({ active: false, index })}
         className="text-gray-300 hover:text-black-600 flex w-full justify-between items-center  py-[3.125rem] border-t border-gray-300 cursor-pointer transition-all duration-200"
      >
         <h2 className="text-[3.25rem] 2xl:text-[5.25rem] font-medium uppercase m-0 transition-all duration-400 hover:translate-x-[-0.625rem]">{title}</h2>
         <p className="font-light transition-all duration-400 text-lg 2xl:text-2xl hover:translate-x-[10px]">{category}</p>
      </Link>
   );
}
