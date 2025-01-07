import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Hero = () => {
  return (
    <div className="relative">
      <Swiper slidesPerView={1} loop autoplay>
        <SwiperSlide>
          <div
            className="h-screen bg-cover bg-center flex items-center justify-center text-white"
            style={{ backgroundImage: "url('/Hotel_Booking/public/images/h2b.jpg')" }}
          >
            <div className="bg-black bg-opacity-50 p-6 text-center rounded">
              <h1 className="text-5xl font-bold">Welcome to Galaxy Lounge</h1>
              <p className="mt-4 text-lg">Luxury & Comfort at its Best</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-screen bg-cover bg-center flex items-center justify-center text-white"
            style={{ backgroundImage: "url('/public/images/h2b.jpg')" }}
          >
            <div className="bg-black bg-opacity-50 p-6 text-center rounded">
              <h1 className="text-5xl font-bold">Relax by the Pool</h1>
              <p className="mt-4 text-lg">Unwind with Style</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
