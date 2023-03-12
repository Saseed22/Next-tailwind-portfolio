import React from "react";

const Skills = () => {
  return (
    <div  className="max-w-[1140px] h-screen m-auto p-6 md:p-16">
      <div className="p-6 md:p-16 flex items-center gap-2 ">
        <h1 className="text-2xl md:text-4xl font-bold">My Skills</h1>
        <div className="w-[40px] h-1 bg-black mt-1" />
      </div>
      <p className="text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
        blanditiis qui, praesentium doloribus officiis odio architecto velit
        dolorem maiores ipsum voluptas ex quibusdam possimus quae.
      </p>
      <div className="grid md:grid-cols-2 gap-x-10 my-8">
        <div className="my-4">
          <p>React.js</p>
          <div className="bg-gray-200 h-2 mt-2 relative">
            <div className="absolute bg-teal-400 w-[90%] h-2"></div>
          </div>
        </div>
        <div className="my-4">
          <p>Next.js</p>
          <div className="bg-gray-200 h-2 mt-2 relative">
            <div className="absolute bg-teal-400 w-[50%] h-2"></div>
          </div>
        </div>
        <div className="my-4">
          <p>Tailwind</p>
          <div className="bg-gray-200 h-2 mt-2 relative">
            <div className="absolute bg-teal-400 w-[95%] h-2"></div>
          </div>
        </div>
        <div className="my-4">
          <p>Bootstrap</p>
          <div className="bg-gray-200 h-2 mt-2 relative">
            <div className="absolute bg-teal-400 w-[85%] h-2"></div>
          </div>
        </div>
        <div className="my-4">
          <p>Firebase</p>
          <div className="bg-gray-200 h-2 mt-2 relative">
            <div className="absolute bg-teal-400 w-[40%] h-2"></div>
          </div>
        </div>
        <div className="my-4">
          <p>CSS</p>
          <div className="bg-gray-200 h-2 mt-2 relative">
            <div className="absolute bg-teal-400 w-full h-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
