import React from 'react';

export default function OurServicesComponent() {
  const services = [
    { icon: 'fa-x-ray', title: 'X-Ray', description: 'High-quality digital X-ray imaging for accurate diagnosis and treatment planning.' },
    { icon: 'fa-heartbeat', title: 'ECG', description: 'Advanced electrocardiogram (ECG) services to monitor heart health and detect abnormalities.' },
    { icon: 'fa-vial', title: 'Lab', description: 'Comprehensive laboratory tests to support medical diagnosis and treatment.' },
    { icon: 'fa-pills', title: 'Pharmacy', description: 'Well-stocked pharmacy with a range of essential medicines and health products.' },
    { icon: 'fa-user-md', title: 'Consultation', description: 'Expert medical consultation with experienced doctors for personalized care.' },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-100 to-blue-400 py-12 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <i className={`fa-solid ${service.icon} text-4xl text-blue-500 mb-4`}></i>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
