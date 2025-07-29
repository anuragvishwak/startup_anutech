import React from "react";
import img1 from "./dark logo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <div className="w-full text-start text-white
     p-5 sm:p-10 bg-[#333333]">
     <div className="grid mb-8 sm:mb-20 sm:grid-cols-4 gap-5 sm:gap-10">
       <div className="">
        <img src={img1} className="h-7 sm:h-10" />
        <p className="text-sm sm:text-base">Smart web tools for students,</p>
        <p className="text-sm sm:text-base">Startups, and small Businesses.</p>
      </div>

      <div>
        <p className="font-bold">Contact Us</p>
        <p className="text-sm sm:text-base">anuragvishwakarma4132@gmail.com</p>
        <p className="text-sm sm:text-base">+91 9327855861</p>
      </div>

    <div>
        <p  className="font-bold">Follow Us</p>
      <div className="flex items-center space-x-2">
        <FaInstagram />
        <FaFacebook />
        <FaLinkedin />
        <FaTwitter />
      </div>
    </div>

      <div>
        <p className="font-bold">Legal Links</p>
        <p className="text-sm sm:text-base">Privacy & Policy</p>
      </div>
     </div>

      <hr className="my-2 sm:my-4"/>
      <p className="text-sm sm:text-base text-gray-400">@ 2025 All rights reserved.</p>
    </div>
  );
}

export default Footer;
