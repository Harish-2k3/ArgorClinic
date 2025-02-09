import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import StatsComponent from '../StatsComponents/StatsComponent';
export default function HomeComponents() {
  return (
    <div className="bg-gray-900 relative">
      {/* Slideshow Section (Moves Up by -10) */}
      <div className="h-[40vh] md:h-[70vh] flex items-center justify-center relative -mb-10">
        <Swiper
          rewind={true}
          navigation={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Navigation, Autoplay]}
          className="w-3/4 h-2/3 shadow-lg"
        >
          <SwiperSlide className="flex items-center justify-center">
            <img src="/bg.jpg" alt="Slide 1" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <img src="/bg2.jpg" alt="Slide 2" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <img src="/bg3.jpg" alt="Slide 3" className="w-full h-full object-cover" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Stats Section (Stays at Bottom) */}
      <div className=" py-10 md:py-0 md:absolute bottom-0 w-full sm:z-[10]">
        <h1 className="text-2xl md:hidden text-center py-10 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Our Achievements
        </h1>
        <StatsComponent />
      </div>
    </div>
  );
}
