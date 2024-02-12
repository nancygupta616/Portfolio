import React from "react";
import cpp from "../assets/Cpp.svg";
import html from "../assets/html.svg";
import css from "../assets/css-3-svgrepo-com.svg";
import js from "../assets/javascript.svg";
import git from "../assets/git.svg";
import github from "../assets/github.svg";
import react from "../assets/react-svgrepo-com.svg";
import tailwind from "../assets/tailwind.svg";
import figma from "../assets/figma.svg";

const Skills = () => {
  const tech = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-400",
    },
    {
      id: 3,
      src: js,
      title: "JavaScript",
      style: "shadow-yellow-400",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-400",
    },
    {
      id: 5,
      src: git,
      title: "Git",
      style: "shadow-orange-500",
    },
    {
      id: 6,
      src: github,
      title: "Github",
      style: "shadow-black",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-cyan-500",
    },
    {
      id: 8,
      src: figma,
      title: "Figma",
      style: "shadow-green-800",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-black to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center items-center w-full h-full text-white">
        <div>
          <h1 className="text-4xl text-red-600 font-extrabold border-b-4 border-red-600 p-2 inline">
            Skills
          </h1>
        </div>
        <div className="box-cont w-full grid mt-20 grid-cols-2 sm:grid-cols-3 gap-10 text-center py-1 px-12 sm:px-0">
          {tech.map(({ id, src, style, title }) => (
            <div
              key={id}
              className={`box shadow-md hover:scale-105 duration-500 h-[120%] justify-center flex flex-col bg-gray-800 bg-opacity-90 py-2 rounded-lg ${style}`}
            >
              <img className="h-20 w-20 mx-auto" src={src} alt="" />
              <p>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
