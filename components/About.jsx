import React from "react";
import woman from "../public/about.webp";
import Image from "next/image";
import { AiOutlineGift } from "react-icons/Ai";
import { BsBook, BsPin } from "react-icons/bs";
import { TbWorld, TbBrandPinterest } from "react-icons/tb";

const About = () => {
  return (
    <div className='max-w-[1240px]  m-auto p-6 '>
      <div className='p-6 md:p-16 flex items-center gap-2 '>
        <h1 className="text-2xl  md:text-4xl font-bold">About Me</h1>
        <div className="w-[40px] bg-black h-1 mt-2 " />
      </div>
      <div className="grid lg:grid-cols-2 px-6 md:px-16">
        <Image className="rounded-lg mb-4" src={woman} alt="eva rose" />
        <div>
          <div className="flex flex-col justify-center md:mx-24">
            <div className="grid grid-cols-3 items-center gap- mt-4">
              {" "}
              <h1 className="flex items-center justify-start gap-x-4 font-bold">
                <AiOutlineGift className="text-red-500" size={20} />
                Birthday
              </h1>{" "}
              <pre className="text-gray-500">: 27.09.1998</pre>{" "}
            </div>
            <div className="grid grid-cols-3 items-center gap- mt-4">
              {" "}
              <h1 className="flex items-center justify-start gap-x-4 font-bold">
                <BsBook className="text-red-500 mr-3" size={20} />
                Study
              </h1>{" "}
              <pre className="text-gray-500">: Univercity of chicago</pre>{" "}
            </div>
            <div className="grid grid-cols-3 items-center gap- mt-4">
              {" "}
              <h1 className="flex items-center justify-start gap-x-4 font-bold">
                <TbWorld className="text-red-500" size={20} />
                Website{" "}
              </h1>{" "}
              <pre className="text-gray-500">: www.dummy.com</pre>
            </div>
            <div className="grid grid-cols-3 items-center gap- mt-4">
              {" "}
              <h1 className="flex items-center justify-start gap-x-4 font-bold">
                <TbBrandPinterest className="text-red-500" size={20} />
                Interest
              </h1>{" "}
              <pre className="text-gray-500">: Hiking, Music</pre>{" "}
            </div>
            <div className="grid grid-cols-3 items-center gap- mt-4">
              {" "}
              <h1 className="flex items-center justify-start gap-x-4 font-bold">
                <BsPin className="text-red-500" size={20} />
                Location{" "}
              </h1>{" "}
              <pre className="text-gray-500">: 4610 Riverwood Drive</pre>
            </div>
          </div>
          <div className="md:px-16">
            <h1 className="my-10 font-bold text-xl md:text-2xl">
              Im Eva and Frontend Developer
            </h1>
            <p className="italic text-gray-500 text-md">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
              aut quasi consequatur quibusdam. Adipisci sed minima reiciendis,
              animi earum quasi.Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Delectus aut quasi consequatur quibusdam.
              Adipisci sed minima reiciendis, animi earum quasi.
            </p>
            <button className="border-2 border-black text-white hover:scale-110 duration-300 px-6 py-3 bg-teal-400 rounded mt-8 font-bold">
              Contact{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
