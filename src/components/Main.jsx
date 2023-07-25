import React from "react";
import { TypeAnimation } from "react-type-animation";
import {FaTwitter, FaFacebook, FaInstagram, FaTelegram} from 'react-icons/fa'

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[550px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">I'm Nguyen Duc Manh</h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800 justify-center items-center">
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Coder",
                1000,
                "Frontend Developer",
                1000,
              ]}
              wrapper="div"
              speed={50}
              cursor={true}
              style={{ fontSize: "1em",  paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-around pt-6 max-x-[200px] w-full">
            <FaFacebook className="cursor-pointer" size={20} />
            <FaInstagram className="cursor-pointer" size={20} />
            <FaTelegram className="cursor-pointer" size={20} />
            <FaTwitter className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
