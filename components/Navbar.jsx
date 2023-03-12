import Link from "next/link";
import { useState } from "react";
import React from "react";
import {
  AiOutlineMenuFold,
  AiOutlineClose,
  AiOutlineCloudDownload,
} from "react-icons/Ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full h-24 mx-auto z-10 fixed p-6">
      <div className="max-w-[1140px] mx-auto z-10  flex justify-between items-center border-b-[1px] pb-2 ">
        <h1 className="text-2xl md:text-4xl font-bold md:pl-10">Eva Rose</h1>
        <div className="z-20" onClick={handleNav}>
          {nav ? (
            <AiOutlineClose size={25} className="sm:hidden cursor-pointer" />
          ) : (
            <AiOutlineMenuFold
              size={25}
              className="sm:hidden  cursor-pointer"
            />
          )}
        </div>
        <div className="hidden sm:flex items-center justify-center gap-x-8">
          <Link className="font-bold" href="/">
            Home
          </Link>
          <Link className="font-bold" href="/about">
            About
          </Link>
          <Link className="font-bold" href="/portfolio">
            Portfolio
          </Link>
          <Link className="font-bold" href="/blog">
            Blog
          </Link>
          <Link className="font-bold" href="/contact">
            Contact
          </Link>
        </div>
        <button className="hidden lg:flex px-6 py-4 font-bold bg-teal-400 rounded hover:bg-teal-500">
          <Link className="flex items-center text-white justify-center gap-2" href="/">
            Download CV <AiOutlineCloudDownload size={20} />
          </Link>
        </button>
      </div>

      <div
        className={
          nav
            ? "absolute left-[0] sm:hidden z-10 top-0 transition-all duration-300"
            : "absolute -left-[100%] z-10 top-0 transition-all duration-300"
        }
      >
        <ul className="w-full h-full fixed flex flex-col justify-center items-center p-16 gap-10 bg-slate-600/95">
          <li onClick={handleNav}>
            <Link className="font-bold text-2xl border-b-[1px] pb-4" href="/">
              Home
            </Link>
          </li>
          <li onClick={handleNav}>
            <Link
              className="font-bold text-2xl border-b-[1px] pb-4"
              href="/about"
            >
              About
            </Link>
          </li>
          <li onClick={handleNav}>
            <Link
              className="font-bold text-2xl border-b-[1px] pb-4"
              href="/portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li onClick={handleNav}>
            <Link
              className="font-bold text-2xl border-b-[1px] pb-4"
              href="/blog"
            >
              Blog
            </Link>
          </li>
          <li onClick={handleNav}>
            <Link
              className="font-bold text-2xl border-b-[1px] pb-4"
              href="/contact"
            >
              Contact
            </Link>
          </li>
          <button onClick={handleNav} className="w-full px-6 py-4 font-bold bg-teal-400 rounded hover:bg-teal-500">
            <Link className="flex items-center justify-center gap-2" href="/">
              Download CV <AiOutlineCloudDownload size={20} />
            </Link>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
