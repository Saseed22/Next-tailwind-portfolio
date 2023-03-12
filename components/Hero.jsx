import React from "react";
import woman from "../public/about.webp";
import Image from "next/image";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="w-full h-screen mx-auto  ">
      <Image className="w-full h-screen " src={woman} alt="eva rose" />

      <div className="absolute w-full h-full top-[30%] px-6 md:px-16">
        <h1 className="text-3xl  text-gray-300 md:text-5xl font-serif">
          Hello, Im Eva Rose
        </h1>
        <h4 className="text-3xl  text-gray-300">
          <Typewriter
            options={{
              strings: ["UI & UX Designer", "Frontend Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h4>
        <div className="w-[80px] bg-black h-1 mt-6" />
        <p className="text-xl mt-6 text-gray-300 hover:text-rose-800">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
          ducimus voluptatem numquam dicta repellendus iste repudiandae
          necessitatibus. Consectetur sint, cupiditate dolore sunt veritatis
          obcaecati illum at earum excepturi eveniet ad!
        </p>
        <button className="border-2 border-black hover:scale-110 duration-300 px-6 py-3 rounded mt-8 font-bold">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Hero;
