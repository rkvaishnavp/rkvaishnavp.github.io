import React from "react";
import Vaishnav from "./../assets/Vaishnav.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left"
        src={Vaishnav}
        alt="Vaishnav"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Vaishnav
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[500, "Engineer", 500, "Tech Enthusiast"]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "1em",
                paddingLeft: "5px",
              }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a href="https://linkedin.com/in/rkvaishnavp">
              <FaLinkedin className="cursor-pointer" size={20} />
            </a>
            <a href="https://www.instagram.com/rkvaishnavp">
              <FaInstagram className="cursor-pointer" size={20} />
            </a>
            <a href="https://github.com/rkvaishnavp/">
              <FaGithub className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
