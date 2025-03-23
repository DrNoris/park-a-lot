import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

function Statistics() {
  const radius = 40;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const ref = useRef(null);
  const controls = useAnimation();
  const [visibleIndex, setVisibleIndex] = useState(null);
  const [animatedValues, setAnimatedValues] = useState([0, 0]);

  const statistics = [
    {
      procentage: 89,
      text: "Dintre șoferi au dificultăți în găsirea unui loc de parcare.",
    },
    {
      procentage: 91,
      text: "Dintre șoferi ar plăti pentru un loc garantat și sigur.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleIndex(1);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (visibleIndex !== null) {
      statistics.forEach((stat, index) => {
        controls.start({
          strokeDashoffset:
            circumference - (circumference * stat.procentage) / 100,
          transition: { duration: 1.5, ease: "easeOut" },
        });

        let currentPercentage = 0;
        const interval = setInterval(() => {
          currentPercentage += 1;
          if (currentPercentage > stat.procentage) {
            clearInterval(interval);
          } else {
            setAnimatedValues((prev) => {
              const newValues = [...prev];
              newValues[index] = currentPercentage;
              return newValues;
            });
          }
        }, 15);
      });
    }
  }, [visibleIndex]);

  return (
    <div ref={ref} className="bg-albastru flex flex-col md:flex-row items-center justify-around gap-6 p-15">
      {statistics.map((value, index) => (
        <div data-aos="fade-up" key={index} className="flex flex-col items-center w-40 w-auto">
          {/* SVG-ul cercului */}
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {/* Background Circle */}
            <circle
              className="text-gray-200 stroke-current"
              strokeWidth={strokeWidth}
              cx="50"
              cy="50"
              r={radius}
              fill="transparent"
            ></circle>
            {/* Progress Circle */}
            <motion.circle
              className="text-indigo-500 stroke-current"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              cx="50"
              cy="50"
              r={radius}
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={circumference}
              transform="rotate(-90 50 50)"
              animate={controls}
            ></motion.circle>
            {/* Text pentru procentaj animat */}
            <text
              x="50"
              y="50"
              fontFamily="Verdana"
              fontSize="12"
              textAnchor="middle"
              alignmentBaseline="middle"
              fill="white"
            >
              {animatedValues[index] + "%"}
            </text>
          </svg>

          {/* Text descriptiv sub cerc */}
          <p className="font-bold text-xl text-alb text-center mt-2 w-60">
            {value.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Statistics;
