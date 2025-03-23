import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

function CardSwitcher() {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      title: "Ai un loc de parcare?",
      description:
        "Câștigă bani pasiv închiriindu-l când nu îl folosești. \nControlezi cine îl folosește și când.\nTotul este transparent și sigur prin aplicație.",
      avantaje:"Mi-e teamă să închiriez locul, nu știu cine îl va folosi.\nTrebuie să mă cert cu cineva pentru locul meu\nProprietatea mea nu este în siguranță",
      color: "bg-albastru",
      text_color: "text-alb",
    },
    {
      title: "Cauți un loc de parcare?",
      description:
        "Rezervi un loc rapid, fără riscul de a fi ridicată mașina.\nVezi disponibilitatea în timp real.\nAi datele proprietarului direct în aplicație.",
      avantaje:"Mașina mea va fi ridicată.\nÎntârzii pentru că nu găsesc parcare\nTrebuie să parchez pe trotuar sau într-un loc riscant",
      color: "bg-alb",
      text_color: "text-albastru",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      switchCards(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const switchCards = (direction) => {
    setActiveIndex(
      (prevIndex) => (prevIndex + direction + cards.length) % cards.length
    );
  };

  return (
    <div className="flex flex-col items-center justify-center p-10 w-full bg-alb">
      {/* Carduri */}
      <div className="relative w-70 sm:w-86 md:w-120 md:h-157 h-140">
        {cards.map((card, index) => {
          const isActive = index === activeIndex;
          return (
            <motion.div
              key={index}
              className={`w-full p-4 ${card.color} border border-gray-200 rounded-lg shadow-sm sm:p-8 absolute top-0 left-0`}
              initial={{ opacity: 0, y: 50 }} // initial position and opacity
              animate={{
                opacity: isActive ? 1 : 0,
                y: isActive ? 0 : 50, // slide effect
                transition: { duration: 0.5 },
              }}
              exit={{ opacity: 0, y: 50 }} // exit animation
            >
              <h5
                className={`mb-4 text-4xl md:text-5xl font-medium ${card.text_color}`}
              >
                {card.title}
              </h5>

              <ul role="list" className="space-y-5 my-7">
                {card.description.split("\n").map((line, lineIndex) => (
                  <li key={lineIndex} className="flex items-center">
                    <svg
                      className="shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base text-1xl md:text-2xl font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      {line}
                    </span>
                  </li>
                ))}
                {card.avantaje.split("\n").map((line, lineIndex) => (
                  <li key={lineIndex} className="flex line-through decoration-gray-500 items-center">
                    <svg
                    className="shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                    <span className="text-base text-1xl md:text-2xl font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      {/* Butoane */}
      <div className="mt-1 sm:mt-6 flex space-x-4">
        <button
          className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600"
          onClick={() => switchCards(-1)}
        >
          <ChevronLeft size={24} />
        </button>

        <button
          className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600"
          onClick={() => switchCards(1)}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

export default CardSwitcher;
