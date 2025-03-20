import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"; // Import pentru stiluri
import { setHours, setMinutes } from 'date-fns'; // Utilizăm date-fns pentru manipularea orei

export default function SearchSection() {
  // Stare pentru dropdown-ul de ora
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  // Stare pentru data selectată
  const [selectedDate, setSelectedDate] = useState(new Date());
  // Stare pentru ora selectată
  const [selectedStartTime, setSelectedStartTime] = useState(setHours(setMinutes(new Date(), 0), 9)); // Ora 09:00
  const [selectedEndTime, setSelectedEndTime] = useState(setHours(setMinutes(new Date(), 0), 17)); // Ora 17:00

  // Funcția care se declanșează la click pe butonul de dropdown
  const toggleDropdown = () => {
    setIsDropdownVisible((prevState) => !prevState);
  };

  // Funcția care se declanșează la click pe butonul de salvare a orei
  const handleSaveTime = () => {
    setIsDropdownVisible(false);  // Ascunde dropdown-ul după salvarea orei
  };

  return (
    <div className="min-h-80 bg-albastru flex items-center justify-center">
      <div className="w-4/5 p-6 rounded-md">
        <h1 className="text-center text-alb text-2xl font-bold mb-6">Caută un loc de parcare</h1>

        <div className="text-center">
          {/* Butonul care declanșează dropdown-ul pentru ora */}
          <button
            onClick={toggleDropdown}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            Alege ora
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>

          {/* Dropdown-ul care conține selecția orei */}
          {isDropdownVisible && (
            <div id="dropdownTimepicker" className="z-10 bg-transparent rounded-lg shadow-sm w-auto bg-transparent p-3 mt-2">
              <div className="max-w-[16rem] mx-auto grid grid-cols-2 gap-4 mb-2">
                <div>
                  <label htmlFor="start-time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Start time:
                  </label>
                  <input
                    type="time"
                    id="start-time"
                    value={selectedStartTime.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
                    onChange={(e) => {
                      const time = e.target.value.split(":");
                      setSelectedStartTime(setMinutes(setHours(new Date(), time[0]), time[1]));
                    }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    min="09:00"
                    max="18:00"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="end-time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    End time:
                  </label>
                  <input
                    type="time"
                    id="end-time"
                    value={selectedEndTime.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
                    onChange={(e) => {
                      const time = e.target.value.split(":");
                      setSelectedEndTime(setMinutes(setHours(new Date(), time[0]), time[1]));
                    }}
                    className="bg-gray-50 sparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    min="09:00"
                    max="18:00"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="date-picker" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Alege data:
                </label>
                {/* Calendarul */}
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  inline
                  className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 w-full"
                />
              </div>

              {/* Butonul care salvează ora și data */}
              <button
                onClick={handleSaveTime}
                id="saveTimeButton"
                type="button"
                className="text-blue-700 dark:text-blue-500 text-sm hover:underline p-0"
              >
                Salvează
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
