import React from 'react';

export default function AboutUs() {
  return (
    <div className="py-30 flex items-center justify-center bg-gray-100 px-4 sm:px-8 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-6xl w-full items-center">
        
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
        <div className="relative flex justify-center items-center md:h-[400px] w-full pl-30">
          <img 
            src="/injection.png" 
            alt="About Us 1" 
            className="w-[140px] h-[170px] sm:w-[180px] sm:h-[220px] md:w-[200px] md:h-[350px] object-cover rounded-lg shadow-md relative z-0"
          />
          <img 
            src="/Sethescope.jpg" 
            alt="About Us 2" 
            className="w-[140px] h-[170px] sm:w-[180px] sm:h-[220px] md:w-[200px] md:h-[350px] object-cover rounded-lg shadow-md absolute top-10 left-10 md:top-12 md:left-12"
          />
        </div>

      </div>
    </div>
  );
}
