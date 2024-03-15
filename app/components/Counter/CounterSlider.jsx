"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import CountUp from 'react-countup';

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
        slidesPerView={1}
        breakpoints={{
            640: {
              slidesPerView: 1,
              
            },
            768: {
              slidesPerView: 3,
              
            },
            1024: {
              slidesPerView: 3,
          
            },
          }}
        className="counter-swiper"
      >
        <SwiperSlide className="text-center">
          <div>
            <h5 className="text-[46px] tracking-[2px]">
            <CountUp end={`${counters[0].parts}`} enableScrollSpy={true} />              
              <span className="block uppercase text-[20px] tracking-[2px]">
                parts
              </span>
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <div>
            <h5 className="text-[46px] tracking-[2px]">
            <CountUp end={`${counters[0].year}`} enableScrollSpy={true} />  
              <span className="block uppercase text-[20px] tracking-[2px]">
                year
              </span>
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <div>
            <h5 className="text-[46px] tracking-[2px]">
            <CountUp end={`${counters[0].brands}`} enableScrollSpy={true} />  
              <span className="block uppercase text-[20px] tracking-[2px]">
              brands
              </span>
            </h5>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
