import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href: "https://www.linkedin.com/in/nancy-gupta-8b2349163/",
            style: 'bg-blue-500'
        },
        {
            id: 2, child: ( 
            <> 
            GitHub <FaGithub size={30}/> 
            </> 
            ), 
            href: "https://github.com/nancygupta616", 
            style: 'bg-black'
        },        
    ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
        {links.map(({id,child, href, style})=>(
                <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300' + " " + style}>
                <a href={href} className='flex justify-between items-center w-full text-white'
                target='_blank'>
                {child}
                </a>
            </li>
            ))};
        </ul>
    </div>
  )
}

export default SocialLinks