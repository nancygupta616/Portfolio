import React from 'react'
import { projects } from "../data";


const Projects = () => {

    return (

    <section id="projects" className="text-white bg-black">
    <div className="container px-5 py-10 mx-auto text-center lg:px-40">
      <div className="mb-20 mt-8">
        <h1 className="text-4xl text-red-600 font-extrabold border-b-4 border-red-600 p-2 inline">
        Projects
        </h1>
      </div>
      <div className="flex flex-wrap -m-4">
      {projects.map((project) => (
       <a key={project.image} className="sm:w-1/2 w-full p-4">
        <div className="flex relative">
          <img
           alt="gallery"
           className="absolute inset-0 w-full h-full object-cover object-center"
           src={project.image}
           />
         <div className="text-white px-8 py-10 relative z-10 w-full border-4 border-gray-600 bg-black opacity-0 hover:opacity-100">
          <h2 className="text-white tracking-widest title-font text-lg font-extrabold mb-1">
            {project.title}
          </h2>
          <h1 className="title-font font-medium text-white mb-3">
            {project.subtitle}
          </h1>
          <p className="leading-relaxed">{project.description}</p>
            <button className='w-1/2 px-6 py-1 m-3 duration-200 hover:scale-105 bg-blue-500 rounded-xl'>
            <a href={project.link} target= "_blank">Demo</a>
            </button>
            <button className='w-1/2 px-6 py-1 m-3 duration-200 hover:scale-105 bg-red-800 rounded-xl'>
              <a href={project.codeLink} target= "_blank">Code</a>
            </button>
      </div>   
  </div>
</a>
))}
      </div>
    </div>
  </section>
    );
};

export default Projects;