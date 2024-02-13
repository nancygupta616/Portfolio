import React from "react";
import "./line.css";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-black to-black text-white"
    >
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col items-center w-full h-full">
        <div>
          <h1 className="text-4xl text-red-600 font-extrabold inline border-b-4 border-red-600">
            About
          </h1>
        </div>
        <div className="text-xl text-pretty my-10">
          <p>
            As a Web Developer and fervent Tech Enthusiast, I am driven by the
            exploration of the boundless opportunities within the realm of Web
            Development. 🌐🚀
            I'm an Experienced Web Developer with a strong focus on Front-End development. 
            Proficiency in HTML, CSS, JavaScript, C++ with a deep understanding of modern web standards and best practices..
            As a Web Developer and fervent Tech Enthusiast, I am driven by the exploration of the boundless opportunities within 
            the realm of Web Development. 🌐🚀
          </p>
          <br />
          <p>
            My passion lies in pushing the boundaries of innovation and
            continuously enhancing my skills. Obsessed with the notion of
            self-improvement, I am on the lookout for a platform that fosters
            growth and acceleration in the ever-evolving landscape of #WebDev
            and #JavaScript.
            Eager to contribute to cutting-edge projects and motivated by the pursuit of excellence, 
            I bring a dynamic blend of academic knowledge and practical experience to any development team.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default About;
