import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiMysql, SiNodedotjs, SiExpress, SiTailwindcss  } from "react-icons/si";
import ennovation_img from './Assets/ennovationimg.png'
import codesoft_img from './Assets/codesoft.png'
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 title="HTML5" color="#E34F26" size={40} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 title="CSS3" color="#1572B6" size={40} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs title="Javascript" color="#F7DF1E" size={40} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact title="React.js" color="#61DAFB" size={40} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiTailwindcss  title="Tailwindcss" color="#61DAFB" size={40} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb title="MongoDB" color="#47A248" size={40} />
          </span>
          
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMysql title="MySql" color="#FF4438" size={40} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiNodedotjs title="Node.js" color="#FF4438" size={40} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiExpress title="Express.js" color="#FF4438" size={40} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaDatabase title="Sql" color="#FF4438" size={40} />
          </span>
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <img className="h-12 w-20" src={ennovation_img} alt="" />
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer , Ennovations Techserv Pvt Ltd</h2>
              <p className="text-sm leading-tight font-thin">
                Oct 2024 - Present
              </p>
              <ul className="text-sm p-2">
                <li>- Work as FullStack developer</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <img className="h-12 w-20" src={codesoft_img} alt="" />
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer, CodSoft </h2>
              <p className="text-sm leading-tight font-thin">
                March 2024 - April 2024
              </p>
              <ul className="text-sm p-2">
                <li>- Work as Web Development Intern</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;