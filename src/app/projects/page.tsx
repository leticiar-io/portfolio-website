'use client';

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/button"; // Supondo que o componente Button já esteja configurado
import clsx from "clsx";
import gsap from "gsap";

const ProjectsPage = () => {
  const [filter, setFilter] = useState("Todos");

  const items = [
    { id: 1, category: "Web Developer", image: "/images/dtmoney.png", name: "DT Money" },
    { id: 2, category: "Jogos", image: "/images/filo.png", name: "Fuja Filó" },
    { id: 3, category: "Web Developer", image: "/images/habits.png", name: "Habits" },
    { id: 4, category: "Design UI/UX", image: "/images/project1.png", name: "Paynow" },
    { id: 5, category: "Web Developer", image: "/images/travellian.jpg", name: "Travellian" },
    { id: 6, category: "Design UI/UX", image: "/images/paynowapp.jpg", name: "Paynow App" },
    { id: 7, category: "Web Developer", image: "/images/igniteshop.png", name: "Ignite Shop" },
    { id: 8, category: "Web Developer", image: "/images/letmeask.svg", name: "Let me ask" },
    { id: 9, category: "Web Developer", image: "/images/timer.svg", name: "Timer" },
    { id: 10, category: "Web Developer", image: "/images/todo.png", name: "Todo" },
    { id: 11, category: "Web Developer", image: "/images/ignitefeed.png", name: "Ignite Feed" },
  ];

  const filteredItems =
    filter === "Todos" ? items : items.filter(item => item.category === filter);

  // Criando um array de refs para os botões
  const buttonRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // Função para lidar com o movimento do mouse e animar o botão
  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const elementRef = buttonRefs.current[index];
    if (elementRef) {
      const { left, top, width, height } = elementRef.getBoundingClientRect();
      const mouseX = e.clientX - left;
      const mouseY = e.clientY - top;

      gsap.to(elementRef, {
        x: mouseX - width / 2,
        y: mouseY - height / 2,
        ease: "power2.out",
        duration: 0.3,
      });
    }
  };

  return (
    <section className="py-12 px-4 max-w-full lg:px-[4.625em] text-black-600 lg:w-[75%] lg:mx-auto">
      <header className="mb-10 lg:mt-12">
        <h1 className="lg:text-[5.5rem] 2xl:text-[4rem] font-anton text-4xl">Projetos</h1>
      </header>

      <div className="flex space-x-1 lg:space-x-4 mb-8 flex-wrap 2xl:mt-[3.125rem] lg:py-10">
        {["Todos", "Design UI/UX", "Web Developer", "Jogos"].map(category => (
          <Button
            variant={filter === category ? "default" : "stroke"}
            key={category}
            onClick={() => setFilter(category)}
            className={clsx(
              "min-w-[5rem] sm:text-sm p-1 sm:p-2 lg:p-8 lg:text-lg 2xl:text-xl",
              filter === category ? "hover:bg-black-600" : "hover:bg-black-100 hover:border-black-100"
            )}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4"
      >
        {filteredItems.map((item, index) => {
          return (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: 1.05 }} // Animação de crescimento no hover
              className="relative overflow-hidden rounded-lg group"
              onMouseMove={(e) => handleMouseMove(e, index)} // Passando o índice para o movimento do mouse
            >
              {/* Imagem do projeto */}
              <div className="bg-black-600 w-full h-[15rem] sm:h-[18rem] md:h-[40rem] flex items-center">
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="px-8 w-full h-[15rem] sm:h-[18rem] md:h-[15rem] object-cover transition-transform duration-300 "
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Overlay com nome e botão "Visualizar" */}
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <a
                  ref={(el) => {
                    buttonRefs.current[index] = el
                  }}
                  href="#"
                  className="w-32 h-32 sm:w-28 sm:h-28 bg-yellow text-black rounded-full flex items-center justify-center shadow transition-all"
                >
                  Visualizar
                </a>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default ProjectsPage;
