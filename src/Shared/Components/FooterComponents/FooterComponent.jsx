import React from 'react';

export default function FooterComponent() {
  return (
    <footer className="w-full bg-black text-white text-center p-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold">Argor Clinic</h3>
          <p className="text-sm">Providing quality healthcare with care and compassion.</p>
        </div>
        <div className="text-sm space-y-1">
          <p>123 Health Street, Chennai, India</p>
          <p>Email: contact@argorclinic.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>
      <h1 className='font-bold text-[20px] mt-6'>Social</h1>
      <div className="flex justify-center space-x-6 mt-4 p-2">
        <a href="mailto:contact@argorclinic.com" className="text-white hover:text-blue-600 text-lg">
          <i className="fa-regular fa-envelope text-2xl"></i>
        </a>
        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500 text-lg">
          <i className="fa-brands fa-whatsapp text-2xl"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 text-lg">
          <i className="fa-brands fa-instagram text-2xl"></i>
        </a>
      </div>
      <p className="text-sm mt-4">&copy; 2025 Argor Clinic. All rights reserved.</p>
    </footer>
  );
}