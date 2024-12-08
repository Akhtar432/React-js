import React from 'react';
// import {faCss3,faHtml5,faJs,faPython,faReact,faBootstrap,faNodeJs,
// } from '@fortawesome/free-brands-svg-icons';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faC } from '@fortawesome/free-solid-svg-icons';
// import Skill_img from './Assets/skillimg.png';
// import mongo_img from './Assets/mongodb-logo.webp';
// import taliwindcss_img from './Assets/Tailwind_CSS_Logo.svg.png'
// import express_img from './Assets/express.png'
import AboutImg from './Assets/skillimg.png'
import { IoArrowForward } from "react-icons/io5";

// Add icons to the library
// library.add(faC, faPython, faHtml5, faCss3, faJs, faReact, faBootstrap, faNodeJs);

function About() {
  return (
    <>
      <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 "
    >
      <div>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores explicabo deserunt asperiores quasi, vitae blanditiis
                  perferendis quos consectetur ea harum! Libero aut qui
                  similique recusandae provident consectetur sed itaque alias
                  sint ipsa?
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores explicabo deserunt asperiores quasi, vitae blanditiis
                  perferendis
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