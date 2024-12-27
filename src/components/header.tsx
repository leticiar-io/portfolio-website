'use client';

import Link from "next/link";
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';

import Nav from './nav';
import { Button } from "@/components/button";

const headerLinks = [
  { label: "Sobre", href: "/about" },
  { label: "Projetos", href: "/projects" },
];

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Variável para controlar o tamanho da tela
  const pathname = usePathname();

  useEffect(() => {
    // Resetar a visibilidade quando o caminho mudar
    if (pathname) {
      setIsVisible(false);
    }
  }, [pathname]);

  useEffect(() => {
    // Verificar a largura da tela
    const handleResize = () => {
      if (window.innerWidth < 1024) { // Para telas menores que 'lg'
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // Adicionar evento de resize
    window.addEventListener('resize', handleResize);
    
    // Verificar diretamente no início
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Verificar a posição da rolagem para telas grandes
      if (!isMobile) {
        if (window.scrollY > 80) {
          if (!isVisible) {
            gsap.to('.nav', {
              opacity: 1,    // Visibilidade do menu
              y: 0,          // Reseta a posição Y
              duration: 0.5,
              ease: 'power1.in',  // Ease para entrada
            });
            setIsVisible(true);
          }
        } else {
          if (isVisible) {
            gsap.to('.nav', {
              opacity: 0,    // Invisibilidade do menu
              y: -50,        // Desloca o menu para cima
              duration: 0.5,
              ease: 'power1.inOut',
            });
            setIsVisible(false);
          }
        }
      }
    };

    // Adicionar o listener de scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup do eventListener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible, isMobile]);

  return (
    <>
      {/* Renderiza o cabeçalho apenas quando o menu não estiver visível e em telas grandes */}
      {!isVisible && !isMobile && (
        <header className="h-20 w-full py-9 px-1 lg:px-[5.9375rem] flex justify-between items-center">
          <Link href="/" className="font-anton text-4xl">
            <span className="text-yellow">Le</span>folio
          </Link>
          <ul className="font-poppins font-light flex space-x-12 items-center">
            {headerLinks.map((item, index) => (
              <li key={index} className="text-[#454546] h-full leading-2 hidden text-lg lg:block">
                <a href={item.href} className="flex hover:pb-2 hover:text-black-800 transition-all duration-150">{item.label}</a>
              </li>
            ))}
            <li>
              <Link href="/signin">
                <Button
                  type="button"
                  variant="default"
                  className="text-white"
                >
                  Fale Comigo!
                </Button>
              </Link>
            </li>
          </ul>
        </header>
      )}

      {/* Navegação animada com rolagem, ou sempre visível para telas pequenas */}
      <AnimatePresence>
        {isMobile || isVisible ? ( // O nav será sempre visível se for mobile
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="nav"
          >
            <Nav />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
