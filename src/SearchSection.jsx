import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"; 
import { setHours, setMinutes } from 'date-fns';
import { Input } from "@material-tailwind/react";

export default function SearchSection() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedStartTime, setSelectedStartTime] = useState(setHours(setMinutes(new Date(), 0), 9));
  const [selectedEndTime, setSelectedEndTime] = useState(setHours(setMinutes(new Date(), 0), 17));

  const toggleDropdown = () => {
    console.log("salut");
    setIsDropdownVisible((prevState) => !prevState);
  };

  const searchParkingLot = () => {
    console.log("selected date " + selectedDate, "selected StartTime " + selectedStartTime, "selected EndTime " + selectedEndTime)
  };

  return (
    <div className="min-h-80 bg-albastru flex items-center justify-center relative">
      <div data-aos="fade-up" className="w-4/5 p-6 rounded-md">
        <h1 className="text-center text-alb text-2xl font-bold mb-6">Caută un loc de parcare</h1>

        <div className="flex flex-col justify-between p-4 md:flex-row md:items-center md:space-x-4">
          {/* Input pentru locație */}
          <Input variant="outlined" placeholder="Locatie" className="bg-white md:mb-0 w-full md:w-4/5" />

          {/* Butonul pentru selecția orei */}
          <button
            onClick={toggleDropdown}
            className="z-100 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full md:w-1/4 mt-3 md:mt-0"
            type="button"
          >
            Alege ora
            {/* <svg className="w-2.5 h-2.5 ms-1.5" aria-hidden="true" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg> */}
          </button>

          {/* Butonul de căutare */}
          <button
            onClick={searchParkingLot}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full md:w-1/4 mt-3 md:mt-0"
            type="button"
          >
            Caută
          </button>
        </div>
      </div>

      {isDropdownVisible && (
          <div className="z-50 absolute top-full left-1/2 flex flex-col items-center transform -translate-x-1/2 mt-2 z-20 bg-alb rounded-lg shadow-lg p-4 w-80">
            <div className="grid grid-cols-2 gap-4 mb-2">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Start time:</label>
                <input
                  type="time"
                  value={selectedStartTime.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
                  onChange={(e) => {
                    const time = e.target.value.split(":");
                    setSelectedStartTime(setMinutes(setHours(new Date(), time[0]), time[1]));
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  min="09:00"
                  max="18:00"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">End time:</label>
                <input
                  type="time"
                  value={selectedEndTime.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
                  onChange={(e) => {
                    const time = e.target.value.split(":");
                    setSelectedEndTime(setMinutes(setHours(new Date(), time[0]), time[1]));
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  min="09:00"
                  max="18:00"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-900">Alege data:</label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                inline
                className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 w-full"
              />
            </div>
          </div>
        )}
    </div>
  );
}
