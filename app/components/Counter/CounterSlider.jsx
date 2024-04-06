"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { urlFor } from "../../../sanity/lib/ImageUrlBuilder";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP,ScrollTrigger);


import CountUp from 'react-countup';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Counter.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function CounterSlider({ counters }) {

    //GSAP animation

    useGSAP(() => {
      gsap.from('.counter-slider' , {opacity: 0, duration: 1, y: 100 ,stagger:0.2, scrollTrigger:{
        trigger: ".counter-swiper",
        start: "top 100%",
        end: "bottom 10%",
        toggleActions: "play stop play reverse",
      }})


      gsap.from('.counterCarImage', {opacity: 0, duration: 1, y: 100, scrollTrigger:{
        trigger: ".counter-swiper",
        start: "top 100%",
        end: "bottom 10%",
        toggleActions: "play stop play reverse",
      }})
    }, {});




  return (
    <>
    <img src={urlFor(counters[0].image).url()} alt="man seating inside car" className="counterCarImage lg:w-[318px]"/>
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
        <SwiperSlide className="counter-slider text-center">
          <div>
            <h5 className="text-[46px] tracking-[2px]">
            <CountUp end={`${counters[0].parts}`} enableScrollSpy={true} className="text-[#C4CBD0]"/>              
              <span className="block uppercase text-[14px] tracking-[2px]">
                parts
              </span>
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide className="counter-slider text-center">
          <div>
            <h5 className="text-[46px] tracking-[2px]">
            <CountUp end={`${counters[0].year}`} enableScrollSpy={true} className="text-[#C4CBD0]"/>  
              <span className="block uppercase text-[14px] tracking-[2px]">
                years
              </span>
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide className="counter-slider text-center">
          <div>
            <h5 className="text-[46px] tracking-[2px]">
            <CountUp end={`${counters[0].brands}`} enableScrollSpy={true} className="text-[#C4CBD0]"/>  
              <span className="block uppercase text-[14px] tracking-[2px]">
              brands
              </span>
            </h5>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
