import React from 'react'

function HeroVideo() {
  return (
    <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div class="absolute inset-0">
            <img src="0319.gif" alt="Background Image" class="object-cover object-center w-full h-full" />
            <div class="absolute inset-0 bg-black opacity-50"></div>
        </div>
    
        <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h1 class="text-5xl font-bold leading-tight mb-4">Welcome to Park a Lort</h1>
            <p class="text-lg text-gray-300 mb-8">Parking made easier</p>
            <a href="#" class="bg-transparent border border-white text-white hover:bg-galben hover:border-transparent py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Get Started</a>
        </div>
    </div>
  )
}

export default HeroVideo
