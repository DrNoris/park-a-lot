import React from 'react'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

function CardSwitcher() {
    const [activeIndex, setActiveIndex] = useState(0);

    const cards = [
        {
            title:"Card 1",
            description:"Descriere 1",
            color: "bg-albastru",
            text_color: "text-alb",
        },
        {
            title:"Card 2",
            description:"Descriere 2",
            color: "bg-alb",
            text_color: "text-albastru",
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            switchCards(1);
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);
    

    const switchCards = (direction) => {
        setActiveIndex((prevIndex) => (prevIndex + direction) % cards.length);
    }

  return (
    <div className='flex flex-col items-center justify-center h-140 w-full bg-alb'>
        {/* Carduri */}
        <div className="relative w-96 h-100">
        {cards.map((card, index) => {
          const isActive = index === activeIndex;
          const isPrevious = index !== activeIndex;
          return (
            <motion.div
              key={index}
              initial={{ x: isActive ? 0 : 150, y: isActive ? 0 : -50, opacity: 0 }}
              animate={{
                opacity: isActive ? 1 : 0.3,
                scale: isActive ? 1 : 0.8,
                zIndex: isActive ? 10 : 1,
                x: isActive ? 0 : isPrevious ? 100 : -100, // Mișcare spre dreapta/stânga
                y: isActive ? 0 : -50,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={`absolute inset-0 flex flex-col items-center justify-center p-6 rounded-lg shadow-lg transform ${card.color}`}
            >
              <h2 className={`text-2xl font-bold ${card.text_color}`}>
                {card.title}
              </h2>
              <p className={`text-center ${card.text_color}`}>{card.description}</p>
            </motion.div>
          );
        })}
        </div>
        
        {/* Butoane */}
        <div className="mt-6 flex space-x-4">
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
  )
}

export default CardSwitcher
