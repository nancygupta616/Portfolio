import React from 'react'
import project1 from '../assets/projects/project1.jpeg'
import project2 from '../assets/projects/project2.jpeg'
import project3 from '../assets/projects/project3.jpeg'
import project4 from '../assets/projects/project4.jpeg'
import project5 from '../assets/projects/project5.png'


const Projects = () => {

    const projects = [
        {
            id: 1,
            src: project1,
            demoSrc: "https://dice-roll-game-alpha.vercel.app/",
            codeSrc: "https://github.com/amank0259/diceRollGame",
        },
        {
            id: 2,
            src: project2,
            demoSrc: "https://amank0259.github.io/Netflix-Clone/",
            codeSrc: "https://github.com/amank0259/Netflix-Clone",
        },
        {
            id: 3,
            src: project3,
            demoSrc: "https://amank0259.github.io/Random-joke-Generator/",
            codeSrc: "https://github.com/amank0259/Random-joke-Generator",
        },
        {
            id: 4,
            src: project4,
            demoSrc: "https://amank0259.github.io/Product-Landing-Page/",
            codeSrc: "https://github.com/amank0259/Product-Landing-Page",
        },
        {
            id: 5,
            src: project5,
            demoSrc: "https://amank0259.github.io/gsap-animated-website/",
            codeSrc: "https://www.github.com/gsap-animated-website/",
        }
    ]


    return (
        <div name="projects" className='bg-gradient-to-b from-black to-black w-full text-white md:h-screen'>
            <div className='max-w-screen-lg mx-auto flex flex-col justify-center items-center w-full h-full'>
                <div className='mt-8'>
                    <h1 className='text-4xl text-red-600 font-extrabold border-b-4 border-red-600 p-2 inline'>Projects</h1>
                </div>
                <div className='grid sm:grid-cols-2 mt-20 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {projects.map(({ id, src, demoSrc, codeSrc }) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <a href={demoSrc}><img src={src} alt="" className='rounded-md duration-200 cursor-pointer hover:scale-105' /></a>
                            <div className='flex items-center justify-center'>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gray-800 rounded-xl'>
                                    <a href={demoSrc}>Demo</a>
                                </button>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gray-600 rounded-xl'>
                                    <a href={codeSrc}>Code</a>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects