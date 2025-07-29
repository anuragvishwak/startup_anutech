import React from "react";
import img1 from "./dark logo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <div className="w-full text-start text-white
     p-10 bg-[#333333]">
     <div className="grid mb-20 grid-cols-4 gap-10">
       <div className="">
        <img src={img1} className="h-10" />
        <p>Smart web tools for students,</p>
        <p>Startups, and small Businesses.</p>
      </div>

      <div>
        <p>Contact Us</p>
        <p>anuragvishwakarma4132@gmail.com</p>
        <p>+91 9327855861</p>
      </div>

    <div>
        <p>Follow Us</p>
      <div className="flex items-center space-x-2">
        <FaInstagram />
        <FaFacebook />
        <FaLinkedin />
        <FaTwitter />
      </div>
    </div>

      <div>
        <p className="font-semibold">Legal Links</p>
        <p>Privacy & Policy</p>
      </div>
     </div>

      <hr className="my-4"/>
      <p className="text-gray-400">@ 2025 All rights reserved.</p>
    </div>
  );
}

export default Footer;
