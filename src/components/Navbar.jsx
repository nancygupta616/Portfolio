import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "skills",
    },
    {
      id: 4,
      link: "projects",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  const SocialLinks = [
    {
        id: 1,
        child: (
            <>
             <FaLinkedin size={30}/>
            </>
        ),
        href: "https://www.linkedin.com/in/nancy-gupta-8b2349163/",
        style: 'bg-blue-500'
    },
    {
        id: 2, 
        child: ( 
           <> 
            <FaGithub size={30}/> 
           </> 
        ), 
        href: "https://github.com/nancygupta616", 
        style: 'bg-black'
    },        
]

  return (
    <div className="flex justify-evenly items-center w-full h-20 px-4 text-white bg-black opacity-90 fixed gap-40 z-20">
      <div>
        <Link
          to="home"
          smooth
          duration={500}
          className="text-5xl font-signature cursor-pointer ml-4">
          N<span className="text-red-600">ancy</span>
        </Link>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ link, id }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize text-white title-font font-bold font-large hover:scale-125 duration-200 mb-0 md:mb-0 ml-2 text-xl"
            style={{ borderBottom: '0px solid transparent' }}>
          <Link
           to={link}
           smooth
           duration={500}
           className="border-b-4 border-transparent hover:border-red-600 transition inline-block"
           style={{ paddingBottom: '6px' }}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 textgray-300">
          <h1 className="text-5xl font-signature ml-2 mb-20">
            N<span className="text-red-600">ancy</span>
          </h1>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => {
                  setNav(!nav);
                }}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
          {SocialLinks.map(({id,child, href})=>(
                <li key={id} className={'flex justify-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300'}>
                <a href={href} className='flex justify-center w-full text-white'
                target='_blank'>
                {child}
                </a>
            </li>
            ))};
        </ul>
      )}
    </div>
  );
};

export default Navbar;
