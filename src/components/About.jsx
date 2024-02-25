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
          As a seasoned Web Developer and ardent Tech Enthusiast, I am deeply passionate 
          about navigating the vast opportunities within the realm of Web Development. 
          With a dedicated focus on Front-End development, I possess a mastery of HTML, CSS, JavaScript, Angular, and React, 
          complemented by an extensive grasp of contemporary web standards and best practices.
          </p>
          <br />
          <p>
          My fervor lies in relentlessly pushing the boundaries of innovation and perpetually honing my craft. 
          Driven by an insatiable thirst for self-improvement, I actively seek out platforms that foster growth and propel 
          advancement in the dynamic domains of #WebDev and #JavaScript.
          Eager to make meaningful contributions to cutting-edge projects, I am propelled by an unwavering commitment to excellence. 
          I bring to the table a dynamic fusion of academic prowess and hands-on experience, thriving amidst challenges and 
          embracing them as catalysts for personal and professional growth.
          </p>          
        </div>
      </div>
    </div>
  );
};

export default About;
