import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-auto bg-gray-500">
      <div className="max-w-[900px] h-full text-center md:grid grid-cols-2 mx-auto p-6">
        <h1 className="text-white mt-4">All rights reserved. 2020</h1>
        <div className="flex justify-between items-center mt-4 px-6">
          <FaFacebook size={20} />
          <FaInstagram size={20} />
          <FaLinkedin size={20} />
          <FaTwitter size={20} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
