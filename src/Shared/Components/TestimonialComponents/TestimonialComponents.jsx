import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialComponents() {
  const testimonials = [
    { name: "John Doe", feedback: "Amazing service! The doctors and staff were very friendly and professional.", image: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Sarah Smith", feedback: "The best clinic I’ve ever visited. Quick and efficient medical care.", image: "https://randomuser.me/api/portraits/women/45.jpg" },
    { name: "Michael Johnson", feedback: "I felt well cared for and comfortable. Highly recommended!", image: "https://randomuser.me/api/portraits/men/12.jpg" },
    { name: "Emily Davis", feedback: "Excellent service and great doctors. Thank you for your kindness!", image: "https://randomuser.me/api/portraits/women/30.jpg" },
    { name: "David Wilson", feedback: "Very clean and well-organized clinic. The treatment was top-notch.", image: "https://randomuser.me/api/portraits/men/55.jpg" },
  ];

  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - (visibleCards - 1)));
    }, 3000);
    return () => clearInterval(interval);
  }, [visibleCards]);

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - visibleCards : prevIndex - 1));
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - (visibleCards - 1)));
  };

  return (
    <div className="py-10 bg-gradient-to-b from-blue-100 to-blue-400 flex justify-center items-center min-h-[50vh]">
      <div className="bg-white/10 backdrop-blur-lg shadow-lg rounded-2xl p-6 w-full max-w-6xl text-center relative overflow-hidden">
        <h2 className="text-3xl font-bold text-black mb-6">What Our Patients Say</h2>

        {/* Testimonials Slider */}
        <div className="relative w-full flex items-center">
          {/* Left Arrow */}
          <button onClick={prevSlide} className="absolute left-0 p-2 bg-white/30 hover:bg-white/50 rounded-full z-10">
            <ChevronLeft size={30} />
          </button>

          {/* Testimonial Cards */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${index * (100 / visibleCards)}%)` }}
            >
              {testimonials.map((testimonial, i) => (
                <div key={i} className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33.33%] px-6">
                  <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-md flex flex-col items-center">
                    <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full border-2 border-white shadow-md" />
                    <p className="text-black text-center mt-4 text-lg">{testimonial.feedback}</p>
                    <h3 className="mt-3 text-yellow-300 font-semibold text-lg">{testimonial.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button onClick={nextSlide} className="absolute right-0 p-2 bg-white/30 hover:bg-white/50 rounded-full z-10">
            <ChevronRight size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}
