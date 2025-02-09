import React from "react";
import { Link } from "react-router-dom";

export default function HomeAppointmentComponent() {
  return (
    <div
      className="relative bg-cover bg-center py-20 flex flex-col items-center justify-center text-white text-center"
      style={{ backgroundImage: "url('AppointmentBG.jpg')" }} // Replace with your image path
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/70"></div>

      
      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Book Your Appointment
        </h1>
        <p className="text-lg mb-6 max-w-xl">
          Schedule a visit with our expert team and receive the best medical care at your convenience.
        </p>
        <Link  to={'/appointment'} className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
          Book Now
        </Link>
      </div>
    </div>
  );
}
