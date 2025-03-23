import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const ParkingDetails = React.memo(({ parking, closeDetails }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHours, setSelectedHours] = useState([]);
  const [cost, setCost] = useState(0)
  const history = useNavigate(); 

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % parking.photos.length);
  };

  const handlePrev = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + parking.photos.length) % parking.photos.length
    );
  };

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
  };

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

  const generateHourlySlots = (hoursRange) => {
    const [start, end] = hoursRange.split(" - ").map((time) => time.split(":"));
    const startHour = parseInt(start[0]);
    const endHour = parseInt(end[0]);

    const slots = [];
    for (let i = startHour; i < endHour; i++) {
      slots.push(`${i}:00 - ${i + 1}:00`);
    }

    return slots;
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleHourSelect = (hour) => {
    setSelectedHours((prevSelected) => {
      const newSelected = prevSelected.includes(hour)
        ? prevSelected.filter((item) => item !== hour)
        : [...prevSelected, hour];
  
      setCost(newSelected.length * parking.price);
  
      return newSelected;
    });
  };
  

  const handleSave = () => {
    if (selectedHours.length > 0) {
      const checkoutData = {
        parkingId: parking.id,
        owner: parking.owner,
        price: parking.price,
        hours: selectedHours,
        totalCost: cost,
      };

      localStorage.setItem('checkoutData', JSON.stringify(checkoutData));

      history("/checkout");
    } else {
      alert("Te rog să selectezi cel puțin o oră.");
    }

    toggleModal();
  };

  return (
    <div className="z-999 absolute bottom-0 left-0 w-full bg-white p-4 shadow-lg h-1/2 flex">
      {/* Buton de incidere */}
      <div className="top-2 left-2" onClick={closeDetails}>
        <button className="text-2xl text-gray-800 focus:outline-none">
          ✖️
        </button>
      </div>
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
        <button
          onClick={toggleModal}
          className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-alb hover:text-albastru hover:border-green-600 transition border-2 border-transparent"
        >
          Cumpără
        </button>
      </div>

      {/* Modal pentru selectarea orei */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] h-[80%] max-w-[90%] md:max-w-[75%] lg:max-w-[60%] max-h-[80%] overflow-y-auto">
            <h2 className="text-xl text-center font-bold mb-4">Selectează o oră</h2>
            <div className="space-y-2 overflow-y-auto">
              {generateHourlySlots(parking.hours).map((hour, index) => (
                <button
                  key={index}
                  className={`w-full text-left px-4 py-2 rounded-lg hover:bg-green-200 transition ${
                    selectedHours.includes(hour) ? "bg-green-100" : "bg-gray-100"
                  }`}
                  onClick={() => handleHourSelect(hour)}
                >
                  {hour}
                </button>
              ))}
            </div>
            <div className="flex mt-2 justify-around px-5 flex-wrap sm:flex-col sm:items-center md:flex-row">
              <button
                className="bg-green-600 text-white px-6 py-2 rounded-lg"
                onClick={handleSave}
              >
                Salvează
              </button>
              <button
                className="bg-gray-600 text-white px-6 py-2 rounded-lg"
                onClick={toggleModal}
              >
                Închide
              </button>
              <p className="text-center self-center font-bold mt-2 sm:mt-4 md:mt-0">Cost {cost}.00RON</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
});

export default ParkingDetails;
