"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Counter.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function CounterSlider({ counters }) {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="counter-swiper"
      >
        <SwiperSlide className="text-center">
          <div>
            <h5 className="text-[46px]">
              {counters[0].parts}
              <span className="block uppercase text-[20px] tracking-[3px]">
                parts
              </span>
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </>
  );
}
