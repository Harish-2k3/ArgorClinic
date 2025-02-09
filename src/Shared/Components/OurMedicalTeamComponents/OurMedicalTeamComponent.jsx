import React from 'react';

export default function OurMedicalTeamComponent() {
  const team = [
    { image: 'doctor.png', name: 'Dr. John Doe', role: 'Doctor', social: { facebook: '#', twitter: '#', instagram: '#' } },
    { image: 'labtech.png', name: 'Dr. Jane Smith', role: 'Lab Technician', social: { facebook: '#', twitter: '#', instagram: '#' } },
    { image: 'xraytech-removebg-preview.png', name: 'Dr. Emily Johnson', role: 'Xray Technician', social: { facebook: '#', twitter: '#', instagram: '#' } },
    { image: 'receptionist.png', name: 'Dr. Michael Brown', role: 'Receptionist', social: { facebook: '#', twitter: '#', instagram: '#' } },
  ];

  return (
    <div className="bg-gray-100 py-12 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Medical Team</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <img src={member.image} alt={member.name} className="w-50 h-50 bg-top bg-cover rounded-full mb-4 object-cover" />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{member.role}</p>
            <div className="flex space-x-4">
              <a href={member.social.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <i className="fa-brands fa-facebook text-xl"></i>
              </a>
              <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                <i className="fa-brands fa-twitter text-xl"></i>
              </a>
              <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
                <i className="fa-brands fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
