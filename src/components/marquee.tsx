'use client';

const texts = [
   { label: "Transformo suas ideias em realidade" },
   { label: "Desenvolvimento" },
   { label: "Design" },
   { label: "Data" },
   { label: "Transformo suas ideias em realidade" },
   { label: "Desenvolvimento" },
   { label: "Design" },
   { label: "Data" },
   { label: "Transformo suas ideias em realidade" },
   { label: "Desenvolvimento" },
   { label: "Design" },
   { label: "Data" },
   { label: "Transformo suas ideias em realidade" },
   { label: "Desenvolvimento" },
   { label: "Design" },
   { label: "Data" },
];

export default function Marquee() {
   return (
      <div className="mt-8 sm:mt-12 lg:mt-16 xl:mt-20 2xl:mt-24 overflow-x-hidden overflow-y-hidden">
         {/* Primeira Marquee com animação da esquerda para direita */}
         <div className="absolute z-10 w-full h-12 sm:h-14 lg:h-16 bg-black-600 flex space-x-2 sm:space-x-4 overflow-x-hidden skew-y-6 md:skew-y-3">
            <div className="animate-loop-scroll flex space-x-2 sm:space-x-4">
               {texts.map((item, index) => (
                  <div
                     key={index}
                     className="flex space-x-2 sm:space-x-4 items-center justify-center flex-shrink-0"
                  >
                     <span className="text-white text-sm sm:text-base lg:text-lg xl:text-xl uppercase font-light">
                        {item.label}
                     </span>
                     <div className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-white rounded-full"></div>
                  </div>
               ))}
               {/* Duplicar o conteúdo para um loop infinito */}
               {texts.map((item, index) => (
                  <div
                     key={index + texts.length}
                     className="flex space-x-2 sm:space-x-4 items-center justify-center flex-shrink-0"
                  >
                     <span className="text-white text-sm sm:text-base lg:text-lg xl:text-xl uppercase font-light">
                        {item.label}
                     </span>
                     <div className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-white rounded-full"></div>
                  </div>
               ))}
            </div>
         </div>

         {/* Segunda Marquee com animação da direita para esquerda */}
         <div className="absolute z-0 w-full h-12 sm:h-14 lg:h-16 bg-transparent text-black-700 border-2 sm:border-3 border-black-700 flex space-x-2 sm:space-x-4 overflow-x-hidden -skew-y-6 md:-skew-y-3">
            <div className="animate-loop-scroll-2 flex space-x-2 sm:space-x-4">
               {texts.map((item, index) => (
                  <div
                     key={index}
                     className="flex space-x-2 sm:space-x-4 items-center justify-center flex-shrink-0"
                  >
                     <span className="text-black-600 text-sm sm:text-base lg:text-lg xl:text-xl uppercase font-light">
                        {item.label}
                     </span>
                     <div className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-black-600 rounded-full"></div>
                  </div>
               ))}
               {/* Duplicar o conteúdo para um loop infinito */}
               {texts.map((item, index) => (
                  <div
                     key={index + texts.length}
                     className="flex space-x-2 sm:space-x-4 items-center justify-center flex-shrink-0"
                  >
                     <span className="text-black-600 text-sm sm:text-base lg:text-lg xl:text-xl uppercase font-light">
                        {item.label}
                     </span>
                     <div className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-black-600 rounded-full"></div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
