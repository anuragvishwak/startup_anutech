import React from "react";
import Navbar from "./Navbar";
import img1 from "./4-6-1024x683.webp";
import { FaArrowRight } from "react-icons/fa";
import firebaseLogo from "./firebase.png";
import reactogo from "./react icons.png";
import githubLogo from "./github.png";
import vercelLogo from "./Vercel-Logo.jpg";
import tailwindLogo from "./tailwind.png";
import postmanLogo from "./postman.webp";
import vscode from "./vs code.png";
import figmalogo from "./figma.png";
import Footer from "./Footer";
import { FaQ } from "react-icons/fa6";
import FAQ from "./FAQ";

function LandingPage() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <div className="my-14 sm:my-36">
          <div>
            <p className="text-center font-semibold text-3xl sm:text-8xl text-[#333333]">
              Build Smarter Tools
            </p>
            <p className="text-[#fad02c] text-center font-semibold text-3xl sm:text-8xl">
              for Smarter People
            </p>
          </div>
          <div className="flex justify-center">
            <p className="sm:text-center text-[#333333] my-5 sm:my-10 text-sm sm:text-lg w-80 text-justify sm:w-8/12">
              We build a suite of smart, scalable web products designed for
              students, startups, and small businesses. Each tool is crafted to
              solve real-world problems with simplicity, speed, and impact—so
              you can focus on growing, not struggling.
            </p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <button className="py-1 px-3 sm:px-5 text-sm sm:text-base rounded bg-[#333333] text-white shadow font-semibold">
              Explore Products
            </button>
            <button className="py-1 px-3 sm:px-5 text-sm sm:text-base rounded bg-[#fad02c] text-[#333333] shadow font-semibold">
              Book a Demo
            </button>
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-2 justify-center">
            <p className="text-xl sm:text-4xl font-semibold text-[#fad02c]">
              Our
            </p>
            <p className="text-xl sm:text-4xl font-semibold text-[#333333]">
              Products
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 py-5 sm:py-10 px-5 sm:px-20">
            <div
              className="text-start shadow border border-gray-300 rounded-xl p-5
                "
            >
              <img src={img1} className="h-40 sm:h-60" />

              <div className="my-10">
                <p className="text-lg text-[#fad02c] mb-2 font-bold">
                  Anumed's Medical EMR
                </p>
                <p className="text-[#333333] text-sm sm:text-base mb-5">
                  Capture and prioritize ideas and align everyone with product
                  roadmaps - all in one single Jira platform.
                </p>
              </div>

              <div className="flex items-center space-x-2 text-[#333333] hover:text-[#fad02c] cursor-pointer">
                <p className="font-semibold sm:text-lg">Learn More</p>
                <FaArrowRight />
              </div>
            </div>

            <div
              className="text-start shadow border border-gray-300 rounded-xl p-5
                "
            >
              <img src={img1} className="h-40 sm:h-60" />

              <div className="my-10">
                <p className="text-lg mb-2 text-[#fad02c] font-bold">
                  Anumed's Medical EMR
                </p>
                <p className="text-sm sm:text-base text-[#333333]">
                  Capture and prioritize ideas and align everyone with product
                  roadmaps - all in one single Jira platform.
                </p>
              </div>

              <div className="flex items-center space-x-2 text-[#333333] hover:text-[#fad02c] cursor-pointer">
                <p className="font-semibold sm:text-lg">Learn More</p>
                <FaArrowRight />
              </div>
            </div>

            <div
              className="text-start shadow border border-gray-300 rounded-xl p-5
                "
            >
              <img src={img1} className="h-40 sm:h-60" />

              <div className="my-10">
                <p className="text-lg mb-2 text-[#fad02c] font-bold">
                  Anumed's Medical EMR
                </p>
                <p className="text-sm sm:text-base text-[#333333]">
                  Capture and prioritize ideas and align everyone with product
                  roadmaps - all in one single Jira platform.
                </p>
              </div>

              <div className="flex items-center space-x-2 text-[#333333] hover:text-[#fad02c] cursor-pointer">
                <p className="font-semibold sm:text-lg">Learn More</p>
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>

        <div className="my-10 sm:my-20">
          <div className="flex items-center space-x-2 justify-center">
            <p className="text-xl sm:text-4xl font-semibold  text-[#333333] ">
              How we
            </p>
            <p className="text-xl sm:text-4xl font-semibold text-[#fad02c]">
              build our Products
            </p>
          </div>

          <div className="grid grid-cols-1  sm:grid-cols-4 gap-y-8 sm:gap-20 py-5 sm:py-10 px-10 sm:px-20">
            <div>
              <p className="text-xl sm:text-2xl font-semibold">Plan</p>
              <p className="text-center">
                We define the problem clearly and outline real user needs.
              </p>
            </div>

            <div>
              <p className="text-xl sm:text-2xl font-semibold">Design</p>
              <p className="text-center">
                UI/UX mockups, user journeys, and mobile-first thinking.
              </p>
            </div>

            <div>
              <p className="text-xl sm:text-2xl font-semibold">Code / Test</p>
              <p className="text-center">
                Developed with modern stacks like React & Firebase.
              </p>
            </div>

            <div>
              <p className="text-xl sm:text-2xl font-semibold">Deploy</p>
              <p className="text-center">
                Instant global hosting with Firebase + Vercel.
              </p>
            </div>
          </div>
        </div>

        <div className="my-10 sm:my-20 mx-5 sm:mx-10">
          <div className="flex items-center space-x-2 mb-10 justify-center">
            <p className="text-xl sm:text-4xl font-semibold text-[#fad02c]">
              Build with
            </p>
            <p className="text-xl sm:text-4xl font-semibold text-[#333333]">
              powerful, Modern Tools
            </p>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-10 justify-items-center">
              <img className=" h-16 sm:h-32" src={firebaseLogo} />
              <img className="h-16 sm:h-32" src={githubLogo} />
              <img className="h-16 sm:h-32" src={vercelLogo} />
              <img className="h-16 sm:h-32" src={reactogo} />
              <img className="h-16 sm:h-32" src={postmanLogo} />
              <img className="h-16 sm:h-32" src={vscode} />
              <img className="h-20 sm:h-40" src={tailwindLogo} />
              <img className="h-16 sm:h-36" src={figmalogo} />
            </div>
          </div>
        </div>

        <div className="my-10 sm:my-20  sm:mx-10">
          <div className="flex items-center space-x-2 justify-center">
            <p className="text-xl sm:text-4xl font-semibold  text-[#333333] ">
              Frequently Asked Questions
            </p>
            <p className="text-xl sm:text-4xl font-semibold text-[#fad02c]">
              FAQs
            </p>
          </div>

          <FAQ />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default LandingPage;
