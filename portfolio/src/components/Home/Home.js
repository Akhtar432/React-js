import React from 'react';
import Side_image from '../development-img.webp';

function Home() {
  return (
    <>
      <section className="flex flex-col md:flex-row justify-between items-center px-5 md:px-20 py-10 md:py-20 bg-gray-800 text-gray-100 space-y-10 md:space-y-0 mx-20">
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-start space-y-4 md:pr-10 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Hello, I am Akhtar
          </h1>
          <p className="text-sm sm:text-base md:text-lg tracking-tight leading-relaxed">
            I am a passionate full-stack developer skilled in crafting dynamic web applications using MERN Stack. I specialize in building responsive, user-centric solutions with seamless frontend-backend integration.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center items-center">
          <img 
            className="h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 rounded-lg object-cover" 
            src={Side_image} 
            alt="Developer_Image" 
          />
        </div>
      </section>
    </>
  );
}

export default Home;
