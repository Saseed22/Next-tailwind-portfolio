import React from "react";
import work1 from "../public/photo-15.webp";
import work2 from "../public/photo-16.webp";
import work3 from "../public/photo-18.webp";
import work4 from "../public/photo-19.webp";
import work5 from "../public/photo-20.webp";
import Image from "next/image";

const MyWorks = () => {
  return (
    <div className="max-w-[1140px]  m-auto mt-6 p-6 md:p-16">
      <div className="flex items-center py-10 px-8 gap-x-4">
        <h1 className="text-2xl md:text-4xl font-bold">My Works</h1>
        <div className="w-[40px] bg-black h-1 mt-2 " />
      </div>
      <div class="grid lg:grid-cols-3 gap-8 justify-center items-center">
        <div class="row-span-2 w-full h-full hover:scale-105 duration-200 ">
          <Image class=" w-full h-full object-cover" src={work5} alt="/" />
        </div>
        <div className="col-span-1 w-full h-full hover:scale-105 duration-200 ">
          <Image className="w-full h-full object-cover" src={work1} alt="/" />
        </div>
        <div className="col-span-1 w-full h-full hover:scale-105 duration-200 ">
          <Image className="w-full h-full object-cover" src={work3} alt="/" />
        </div>
        <div className="col-span-1 w-full h-full hover:scale-105 duration-200 ">
          <Image className="w-full h-full object-cover" src={work4} alt="/" />
        </div>
        <div className="col-span-1 w-full h-full hover:scale-105 duration-200 ">
          <Image className="w-full h-full object-cover" src={work2} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default MyWorks;
