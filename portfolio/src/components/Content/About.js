import React from 'react';
import AboutImg from './Assets/skillimg.png'
import { IoArrowForward } from "react-icons/io5";

function About() {
  return (
    <>
      <div
        id="About"
        className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 ">
        <div>
          <div className="md:flex flex-wrap flex-col md:flex-row items-center gap-32">
            <img className="md:h-80" src={AboutImg} alt="About img" />

            <ul>
              <div className="flex gap-3 py-4">
                <IoArrowForward size={30} className="mt-1" />
                <span className="w-96">
                  <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                    Frontend developer
                  </h1>
                    <ul className="text-sm md:text-md leading-tight">
                      <li>Expertise in modern frontend technologies like ReactJS and Redux for efficient state management.</li>
                      <li>Proficiency in crafting pixel-perfect designs using HTML, CSS, and UI frameworks like Material-UI and Bootstrap.</li>
                    </ul>
                </span>
              </div>
              <div className="flex gap-3 py-4">
                <IoArrowForward size={30} className="mt-1" />
                <span className="w-96">
                  <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                    Backend developer
                  </h1>
                  <p className="text-sm md:text-md leading-tight">
                    Skilled Backend Developer with expertise in Node.js, REST APIs, Firebase, database management, and seamless backend integrations for robust applications.
                  </p>
                </span>
              </div>
              <div className="flex gap-3 py-4">
                <IoArrowForward size={30} className="mt-1" />
                <span className="w-96">
                  <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                    Database developer
                  </h1>
                  <p className="text-sm md:text-md leading-tight">
                    Experienced Database Developer skilled in MongoDB, MySQL, and SQL, specializing in designing, optimizing, and managing robust database solutions.
                  </p>
                </span>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;