'use client';

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/button";
import clsx from "clsx";
import gsap from "gsap";
import { AiOutlineMenu } from "react-icons/ai";
import { RiGalleryView2 } from "react-icons/ri";

import Projeto from '../../components/modal/project';
import Modal from '../../components/modal/modal';
import Footer from "@/components/footer";

const ProjectsPage = () => {
  const [filter, setFilter] = useState("Todos");
  const [viewMode, setViewMode] = useState<"list" | "gallery">("list");

  const items = [
    { id: 1, category: "Web Developer", image: "/images/dtmoney.png", title: "DT Money", link: "https://github.com/leticiar-io/dt-money-ignite", src: "dtmoney.png", color: "#EFE8D3" },
    { id: 2, category: "Jogos", image: "/images/filo.png", title: "Fuja Filó", link: "https://github.com/leticiar-io/fuja-filo-game", src: "filo.png", color: "#f8e2f5" },
    { id: 3, category: "Web Developer", image: "/images/habits.png", title: "Habits", link: "https://github.com/leticiar-io/NlwSetup_TrilhaIgnite", src: "habits.png", color: "#FFD89B" },
    { id: 4, category: "Design UI/UX", image: "/images/project1.png", title: "Paynow", link: "https://www.behance.net/gallery/223096151/Paynow-%28Web-Landing-Page%29", src: "project1.png", color: "#C3B1E1" },
    { id: 5, category: "Web Developer", image: "/images/travellian.jpg", title: "Travellian", link: "https://github.com/codijr/Travellian", src: "travellian.jpg", color: "#F9CCCA" },
    { id: 6, category: "Design UI/UX", image: "/images/paynowapp.jpg", title: "Paynow App", link: "https://www.behance.net/gallery/223095947/Paynow-%28Mobile-UI%29", src: "paynowapp.jpg", color: "#FFE4B2" },
    { id: 7, category: "Web Developer", image: "/images/igniteshop.png", title: "Ignite Shop", link: "https://github.com/leticiar-io/ignite-shop", src: "igniteshop.png", color: "#B8E0D2" },
    { id: 8, category: "Web Developer", image: "/images/letmeask.svg", title: "Let me ask", link: "https://github.com/leticiar-io/nlw-letmeask", src: "letmeask.svg", color: "#D3C09F" },
    { id: 9, category: "Web Developer", image: "/images/timer.svg", title: "Timer", link: "https://github.com/leticiar-io/ignite-timer", src: "timer.svg", color: "#AFCBFF" },
    { id: 10, category: "Web Developer", image: "/images/todo.png", title: "Todo", link: "https://github.com/leticiar-io/todo-challenge", src: "todo.png", color: "#FFC1A1" },
    { id: 11, category: "Web Developer", image: "/images/ignitefeed.png", title: "Ignite Feed", link: "https://github.com/leticiar-io/ignite-feed", src: "ignitefeed.png", color: "#FAE1DD" },
    { id: 12, category: "Web Developer", image: "/images/twitter.png", title: "Twt Demo", link: "https://github.com/leticiar-io/ui-twitter", src: "twitter.png", color: "#d6eafa" },
    { id: 13, category: "Web Developer", image: "/images/modoke.jpg", title: "Modoke", link: "https://github.com/borealis-smd/modoke-web", src: "modoke.jpg", color: "#c3f3d3" }
  ];

  const filteredItems =
    filter === "Todos" ? items : items.filter((item) => item.category === filter);

  const buttonRefs = useRef<(HTMLAnchorElement | null)[]>([]);

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

  const [modal, setModal] = useState<{ active: boolean; index: number }>({ active: false, index: 0 });

  return (
    <>
    <section className="min-h-screen mb-12 py-12 px-4 text-black-600 md:w-[75%] mx-auto ">
      <header className="lg:mt-12">
        <h1 className="font-anton text-5xl sm:text-4xl lg:text-[4rem]">Projetos</h1>
      </header>

      <div className="flex items-center md:justify-between ld:mt-8 md:mt-2 mt-6 mb-8 flex-wrap 2xl:mt-2 lg:py-10">
        <div className="flex items-center space-x-1 lg:space-x-4">
          {["Todos", "Design UI/UX", "Web Developer", "Jogos"].map((category) => (
            <Button
              variant={filter === category ? "default" : "stroke"}
              key={category}
              onClick={() => setFilter(category)}
              className={clsx(
                "text-[14px] md:min-w-[5rem] p-2  sm:max-h-12 lg:p-6 md:text-base lg:text-lg",
                filter === category ? "hover:bg-black-600 lg:hover:px-10" : "hover:bg-black-100 hover:border-black-100 ld:px-4 md:px-2 lg:hover:px-10"
              )}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="space-y-2 space-x-1 lg:space-x-4">
          <Button
            variant={viewMode === "list" ? "default" : "stroke"}
            className="rounded-full p-4 hover:p-4"
            onClick={() => setViewMode("list")}
          >
            <AiOutlineMenu className="text-2xl" />
          </Button>

          <Button
            variant={viewMode === "gallery" ? "default" : "stroke"}
            className="rounded-full p-4 hover:p-4"
            onClick={() => setViewMode("gallery")}
          >
            <RiGalleryView2 className="text-2xl" />
          </Button>
        </div>
      </div>

      {viewMode === "list" ? (
        <div className="flex flex-col items-center justify-center overflow-x-hidden">
          <div className="w-full flex flex-col gap-8 sm:gap-12 lg:gap-16 items-center justify-center">
            {filteredItems.map((item, index) => (
              <Projeto
                index={index}
                title={item.title}
                category={item.category}
                setModal={setModal}
                key={item.id}
                link={item.link}
                className="border-b"
              />
            ))}
          </div>
          <Modal modal={modal} projects={filteredItems} />
        </div>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-lg group"
              onMouseMove={(e) => handleMouseMove(e, index)}
            >
              <div 
                className="w-full h-[15rem] sm:h-[18rem] md:h-[15rem] 2xl:h-[30rem] ld:h-[25rem] flex items-center"
                style={{ backgroundColor: item.color }}
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="px-8 w-full h-[12rem] sm:h-[18rem] ld:h-[18rem] md:h-[8rem] 2xl:h-[20rem] object-cover transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <a
                  ref={(el) => {
                    buttonRefs.current[index] = el;
                  }}
                  href={item.link}
                  className="w-32 h-32 sm:w-28 sm:h-28 bg-yellow text-black rounded-full flex items-center justify-center shadow transition-all"
                >
                  Visualizar
                </a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>

    <Footer />
    </>
  );
};

export default ProjectsPage;
