import React from "react";
import { MapPin } from "lucide-react"; // Importing location icon

export default function TimeLocationComponents() {
  return (
    <div className="py-6 flex flex-col items-center">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 w-full max-w-4xl text-center">
        <h2 className="text-3xl py-5 font-bold text-black mb-4">Clinic Timings & Location</h2>

        {/* Timings Section */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          {/* Timings Box */}
          <div className="bg-white/20 backdrop-blur-md p-4 rounded-xl shadow-md w-full max-w-xs">
            <h3 className="text-lg font-semibold text-black mb-2">Clinic Hours</h3>
            <p className="text-gray-900 font-medium">Monday - Sunday</p>
            <p className="text-gray-700">9:00 AM - 8:00 PM</p>
          </div>

          {/* Location Section */}
          <div className="bg-white/20 backdrop-blur-md p-4 rounded-xl shadow-md w-full max-w-xs flex items-center justify-center gap-2">
            <MapPin size={24} className="text-red-600" />
            <p className="text-gray-900 font-medium h-20 items-center justify-center flex">Chennai</p>
          </div>
        </div>
      </div>
    </div>
  );
}
