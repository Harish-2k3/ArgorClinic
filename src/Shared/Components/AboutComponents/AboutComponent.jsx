import React from 'react';

export default function AboutUs() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
        {/* Left Side: Content */}
        <div className="flex flex-col py-5 justify-center text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 text-lg mb-4 text-justify">
            We are a passionate team dedicated to providing the best solutions for our clients. Our mission is to innovate and create products that make a difference.
          </p>
          <p className="text-gray-600 text-lg text-justify">
            With years of experience in the industry, we have built a reputation for quality and excellence. Our team is committed to continuous learning and improvement.
          </p>
        </div>

        {/* Right Side: Overlapping Images */}
        <div className="grid grid-cols-2 justify-center items-center w-full md:h-[400px] px-30 md:px-0">
          <img 
            src="/bg.jpg" 
            alt="About Us 1" 
            className="w-[150px] h-[180px] md:w-[250px] md:h-[300px] object-cover rounded-lg shadow-md relative z-0" 
          />
          <img 
            src="/bg3.jpg" 
            alt="About Us 2" 
            className="w-[150px] h-[180px] md:w-[250px] md:h-[300px] object-cover rounded-lg shadow-md relative md:-top-12  md:-left-[18px]"
            />
        </div>
      </div>
    </div>
  );
}
