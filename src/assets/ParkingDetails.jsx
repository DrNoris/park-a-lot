import React, { useState } from "react";

const ParkingDetails = React.memo(({ parking }) => {
  // Setăm indexul curent al imaginii
  const [currentSlide, setCurrentSlide] = useState(0);

  // Funcție pentru navigare la următoarea imagine
  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % parking.photos.length);
  };

  // Funcție pentru navigare la imaginea anterioară
  const handlePrev = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + parking.photos.length) % parking.photos.length
    );
  };

  // Funcție pentru navigarea directă la un slide specificat
  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
  };

  // Funcție pentru anonimizarea numelui proprietarului
  const getName = (name) => {
    if (!name) return "Anonim";

    const names = name.split(" ");
    if (names.length === 1) {
      return names[0].substring(0, 3) + "***";
    }

    return (
      names[0].substring(0, Math.min(3, names[0].length)) +
      "*** " +
      names[1][0] +
      "***"
    );
  };

  return (
    <div className="z-999 absolute bottom-0 left-0 w-full bg-white p-4 shadow-lg h-1/2 flex">
      {/* Informații utilizator (Stânga) */}
      <div className="w-1/2 flex flex-col justify-between h-full m-3 bg-white rounded-xl shadow-lg p-5 border border-gray-200">
        {/* Titlu + Nume Anonimizat */}
        <h3 className="text-2xl font-bold text-gray-800">
          {getName(parking.owner)}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 text-gray-700 border-b pb-2">
          <span className="text-yellow-500 text-lg">⭐</span>
          <p className="text-lg">{parking.rating} / 5</p>
        </div>

        {/* Orar disponibilitate */}
        <div className="flex items-center gap-2 text-gray-600 border-b pb-2">
          <span className="text-blue-500 text-lg">🕒</span>
          <p className="text-md">{parking.hours}</p>
        </div>

        {/* Preț */}
        <div className="flex items-center gap-2 text-green-700 font-semibold text-lg border-b pb-2">
          <span className="text-green-500 text-xl">💰</span>
          <p>{parking.price} RON/oră</p>
        </div>
      </div>

      {/* Poza + Buton (Dreapta) */}
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="h-3/4 w-full flex justify-center items-center relative">
          {/* Slider */}
          <div className="relative w-full h-full flex justify-center">
            <img
              src={parking.photos[currentSlide]}
              alt={`Parking Photo ${currentSlide}`}
              className="w-full h-full object-cover rounded-xl blur-sm"
            />
          </div>

          {/* Butoane de navigare */}
          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={handlePrev}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>

          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={handleNext}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>

          {/* Indicatoare pentru imagini */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            {parking.photos.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? "bg-white" : "bg-gray-400"
                }`}
                onClick={() => handleIndicatorClick(index)}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Buton Cumpără */}
        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
          Cumpără
        </button>
      </div>
    </div>
  );
});

export default ParkingDetails;
