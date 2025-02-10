import React from 'react';

export default function FooterComponent() {
  return (
    <footer className="w-full bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        
        {/* First Row - Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          
          {/* Clinic Info */}
          <div>
  <h3 className="text-lg font-bold pb-5">Argor Clinic</h3>
  <p className="text-sm">Providing quality healthcare with care and compassion.</p>
  <p className="text-sm">We offer expert consultations and advanced diagnostic services.</p>
</div>


          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold pb-5">Contact Us</h3>
            <p className="text-sm">Street No 2, Ma Po Si Nagar, Pallikaranai, Chennai,<br /> Tamil Nadu 600100</p>
            <p>Email: <a href="mailto:Argorclinic2025@gmail.com" className="underline">Argorclinic2025@gmail.com</a></p>
            <p>Phone: <a href="tel:+919384880999" className="underline">+91 93848 80999</a></p>
          </div>

          {/* Google Map */}
          <div className="flex justify-center md:justify-end">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.441678118966!2d80.20339217620342!3d12.943565082950645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d63df98a685%3A0x7617f340208c75c!2sARGOR%20CLINIC!5e0!3m2!1sen!2sin!4v1739160593242!5m2!1sen!2sin"
              width="80%"
              height="120"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>

        </div>

        {/* Second Row - Full Width */}
        <div className="mt-6 border-t border-white/20 pt-4 text-center">
          <h1 className="font-bold text-xl">Follow Us</h1>
          <div className="flex justify-center space-x-6 mt-4">
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
        </div>

      </div>
    </footer>
  );
}
