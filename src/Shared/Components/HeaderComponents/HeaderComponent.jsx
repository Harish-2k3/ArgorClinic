import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const navRef = useRef(null);
  const location = useLocation();

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update active link based on route
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <header className="bg-blue-600 z-10 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Argor Clinic</h1>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        {/* Navigation */}
        <nav ref={navRef} className={`absolute md:static z-20 bg-blue-600 md:bg-transparent top-16 left-0 w-full md:w-auto transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:flex`}>
          <ul className="flex flex-col md:flex-row md:space-x-4 p-4 md:p-0">
            <li>
              <Link to="/" className={`hover:underline block py-2 md:py-0 ${activeLink === '/' ? 'text-yellow-400 font-semibold' : ''}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/gallary" className={`hover:underline block py-2 md:py-0 ${activeLink === '/gallary' ? 'text-yellow-400 font-semibold' : ''}`}>
                Gallary
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`hover:underline block py-2 md:py-0 ${activeLink === '/contact' ? 'text-yellow-400 font-semibold' : ''}`}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/appointment" className={`hover:underline block py-2 md:py-0 ${activeLink === '/appointment' ? 'text-yellow-400 font-semibold' : ''}`}>
                Book Appointment
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
