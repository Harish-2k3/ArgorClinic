import React from "react";

export default function BookAppointment() {
  return (
    <div className="bg-gradient-to-b from-gray-200 px-2 to-gray-500 py-16 flex items-center justify-center">
      <div className="bg-white/20 backdrop-blur-lg border border-white/30 p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-black text-center mb-6">
          Book an Appointment
        </h2>
        <p className="text-black text-center mb-6">
          Schedule your visit with us easily by filling the details below.
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-lg bg-white/30 text-black placeholder-black outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-white/30 text-black placeholder-black outline-none"
          />
          <input
            type="date"
            className="w-full p-3 rounded-lg bg-white/30 text-black placeholder-black outline-none"
          />
          <input
            type="time"
            className="w-full p-3 rounded-lg bg-white/30 text-black outline-none placeholder-black"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-black font-semibold py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Confirm Appointment
          </button>
        </form>
      </div>
    </div>
  );
}
