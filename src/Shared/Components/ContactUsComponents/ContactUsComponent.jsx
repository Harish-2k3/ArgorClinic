import React from 'react';

export default function ContactUsComponent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-200 px-2 to-gray-500 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">Name</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your name" required />
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your email" required />
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">Message</label>
            <textarea className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Write your message" rows="4" required></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Send Message</button>
        </form>
      </div>
    </div>
  );
}
