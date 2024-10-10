import React from "react";
import { Button } from "@/components/ui/button";

import heropic from "../assets/women ai.png";
import { RiMentalHealthLine } from "react-icons/ri";
import { FaUserDoctor } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Services from "./Services";
import Blog from "./Blog";
import Team from "./Team";
import About from "./About";
import { FaRobot } from "react-icons/fa";




const HomePage = () => {


  return (
<div className="py-10">
  {/* Main Content Section */}
  <div className="container mx-auto flex flex-col md:flex-row items-center text-white bg-gradient-to-r from-[#2D88C5] to-[#85BADD] rounded-md p-6 md:p-10">
    {/* Left Content */}
    <div className="flex-1 text-center md:text-left mb-10 md:mb-0">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Precision Health Solutions With Food Dx
      </h1>
      <p className="max-w-lg mx-auto md:mx-0 mb-6">
        Food Dx AI provides cutting-edge AI healthcare services to monitor your well-being, offer consultations, and maintain medical records, ensuring compliance with global healthcare standards.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center justify-center md:justify-start">
        <FaUserDoctor className="w-[50px] h-[50px] " />
        <RiMentalHealthLine  className="w-[50px] h-[50px] " />
        <FaRobot  className="w-[50px] h-[50px] "/>
        <span className="text-lg">Trusted Healthcare Providers</span>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <Link to="/services">
          <Button variant="outline" className="border-white text-black">
            Explore Healthcare Services
          </Button>
        </Link>
        <Link to="/chatbot">
          <Button variant="primary" className="bg-white text-blue-600">
            Use Food Dx Chat Bot 
          </Button>
        </Link>
      </div>
    </div>

    {/* Right Hero Image */}
    <div className="flex justify-center md:justify-end w-full md:w-auto overflow-hidden">
      <img src={heropic} alt="Doctor with Phone" className="w-64 h-64 md:w-96 md:h-96 object-contain" />
    </div>
  </div>

  {/* Additional Sections */}
  <Services />
  <Blog />
  <Team />
  <About />
</div>
  );
};

export default HomePage;
