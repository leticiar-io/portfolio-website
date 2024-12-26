'use client'
import { useState } from 'react';
import Nav from './menu';
import { AnimatePresence, motion } from 'framer-motion';

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="relative">
        <div className="fixed top-0 right-0 z-10 p-8">
          <div 
            onClick={() => setIsActive(!isActive)} 
            className="w-14 h-14 lg:w-32 lg:h-32 rounded-full bg-yellow flex items-center justify-center cursor-pointer overflow-x-hidden"
          >
            {/* Botão Hamburger com 3 Barras */}
            <div className="relative w-8 h-8 lg:w-14 lg:h-16 flex flex-col gap-2 lg:gap-5 justify-center items-center">
              <div
                className={`w-full h-1 bg-white transition-transform duration-300 ease-in-out ${isActive && 'rotate-45 translate-y-1 lg:translate-y-3'}`}
              />
              <div
                className={`w-full h-1 bg-white transition-transform duration-300 ease-in-out ${isActive && '-rotate-45 -translate-y-2 lg:-translate-y-3'}`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Menu animado */}
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Nav />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
