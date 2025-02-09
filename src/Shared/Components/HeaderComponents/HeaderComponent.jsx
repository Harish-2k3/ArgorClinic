import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 z-10 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Argor Clinic</h1>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          <i className="fa-solid fa-bars"></i>          </button>
        </div>
        <nav className={`absolute md:static z-20 bg-blue-600 md:bg-transparent top-16 left-0 w-full md:w-auto transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:flex`}>
          <ul className="flex flex-col md:flex-row md:space-x-4 p-4 md:p-0">
            <li><Link to={'/'} className="hover:underline block py-2 md:py-0">Home</Link></li>
            <li><Link to={'/gallary'} className="hover:underline block py-2 md:py-0">Gallary</Link></li>
            <li><Link to={'/contact'} className="hover:underline block py-2 md:py-0">Contact</Link></li>
            <li><Link to={'/appointment'} className='hover:underline block py-2 md:py-0'>Book Appointment</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
