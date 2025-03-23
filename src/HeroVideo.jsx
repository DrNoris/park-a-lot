import React from 'react'

function HeroVideo() {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
            <img src="0319.gif" alt="Background Image" className="object-cover object-center w-full h-full" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
    
        <div data-aos="fade-up" className="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h1 className="text-5xl font-bold leading-tight mb-4 p-1">Bine ați venit la Park a Lot</h1>
            <p className="text-lg text-gray-300 mb-8">Cel mai tare din parcare - Prima aplicație de park sharing peer to peer</p>
            <a href="#" className="bg-transparent border border-white text-white hover:bg-galben hover:border-transparent py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Hai să pornim!</a>
        </div>
    </div>
  )
}

export default HeroVideo
