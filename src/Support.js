import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong, FaArrowUpRightDots } from "react-icons/fa6";
import Footer from "./Footer";

function Support() {
  return (
    <div className="w-full">
      <Navbar />
      <div>
        <div className="flex py-10 sm:py-20 bg-yellow-50 justify-center">
          <div className="">
           <div className="flex items-center space-x-2 sm:space-x-4 justify-center">
             <p className="text-2xl sm:text-6xl text-[#333333] font-bold mb-5 sm:mb-10">Hi, how can we</p>
            <p className="text-2xl sm:text-6xl text-[#fad02c] font-bold mb-5 sm:mb-10">
               help?
            </p>
           </div>
            <input
              placeholder="Search products, pricing, and more...."
              className="w-64 sm:w-[800px] p-2 sm:text-xl rounded border border-[#fad02c] shadow-lg"
            ></input>
            <p className="text-center mt-3 text-sm w-60 sm:w-auto sm:text-xl text-[#333333]">
              Search our help center or get in touch with our support team.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 my-5 sm:my-10 mx-10 sm:mx-20">
          

          <div className="border bg-purple-50 border-purple-500 shadow p-4 rounded">
            <p className="font-bold text-xl text-[#fad02c]">Medical EMR</p>
            <div className="text-[#333333] my-5">
              <li>Admin Section Walkthrough</li>
              <li>Patient Section Walkthorugh</li>
              <li>All CMS Sections.</li>
            </div>

            <div className="flex text-[#fad02c] justify-end">
              <button>
                <FaArrowRightLong size={25} />
              </button>
            </div>
          </div>


           <div className="border bg-green-50 border-green-500 shadow p-4 rounded">
            <p className="font-bold text-xl text-[#fad02c]">Medical EMR</p>
            <div className="text-[#333333] my-5">
              <li>Admin Section Walkthrough</li>
              <li>Patient Section Walkthorugh</li>
              <li>All CMS Sections.</li>
            </div>

            <div className="flex text-[#fad02c] justify-end">
              <button>
                <FaArrowRightLong size={25} />
              </button>
            </div>
          </div>


           <div className="border bg-pink-50 border-pink-500 shadow p-4 rounded">
            <p className="font-bold text-xl text-[#fad02c]">Medical EMR</p>
            <div className="text-[#333333] my-5">
              <li>Admin Section Walkthrough</li>
              <li>Patient Section Walkthorugh</li>
              <li>All CMS Sections.</li>
            </div>

            <div className="flex text-[#fad02c] justify-end">
              <button>
                <FaArrowRightLong size={25} />
              </button>
            </div>
          </div>

           <div className="border bg-blue-50 border-blue-500 shadow p-4 rounded">
            <p className="font-bold text-xl text-[#fad02c]">Medical EMR</p>
            <div className="text-[#333333] my-5">
              <li>Admin Section Walkthrough</li>
              <li>Patient Section Walkthorugh</li>
              <li>All CMS Sections.</li>
            </div>

            <div className="flex text-[#fad02c] justify-end">
              <button>
                <FaArrowRightLong size={25} />
              </button>
            </div>
          </div>

           <div className="border bg-orange-50 border-orange-500 shadow p-4 rounded">
            <p className="font-bold text-xl text-[#fad02c]">Medical EMR</p>
            <div className="text-[#333333] my-5">
              <li>Admin Section Walkthrough</li>
              <li>Patient Section Walkthorugh</li>
              <li>All CMS Sections.</li>
            </div>

            <div className="flex text-[#fad02c] justify-end">
              <button>
                <FaArrowRightLong size={25} />
              </button>
            </div>
          </div>

          <div className="border bg-gray-50 border-gray-500 shadow p-4 rounded">
            <p className="font-bold text-xl text-[#fad02c]">Medical EMR</p>
            <div className="text-[#333333] my-5">
              <li>Admin Section Walkthrough</li>
              <li>Patient Section Walkthorugh</li>
              <li>All CMS Sections.</li>
            </div>

            <div className="flex text-[#fad02c] justify-end">
              <button>
                <FaArrowRightLong size={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Support;
