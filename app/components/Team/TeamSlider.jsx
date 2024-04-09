"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Teams.css"

// import required modules
import { Pagination } from "swiper/modules";

import { urlFor } from "../../../sanity/lib/ImageUrlBuilder";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";    
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);



export default function TeamSlider({ teams }) {

    //GSAP animation  
    useGSAP(() => {
        gsap.from('.team-swiper-slider' , {opacity: 0, duration: 1, y: 100 , stagger: 0.2 , scrollTrigger: {
            trigger: ".teams-swiper",
            start: "top 80%",
            end: "bottom 50%",
            toggleActions: "play stop play reverse",
          }});

          gsap.from (".team-heading-text" , {opacity: 0, duration: 1, y: 100 , stagger: 0.2 , scrollTrigger: {
            trigger: ".team-heading-text",
            start: "top 100%",
            end: "bottom 50%",
            toggleActions: "play stop play reverse",
          }})
      }, {});





  return (
    <>
    <h2 className="team-heading-text mb-10 uppercase text-[14px] text-center leading-[20px] tracking-[2px]">
                Heritage Driven Excellence</h2>   
                <div className="w-[100%] xl:w-[1000px] m-auto">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="teams-swiper"
      >
        {teams.map((team) => {
          return (
            <SwiperSlide  key={team._id} className="team-swiper-slider text-center gap-4">
              <img
                src={urlFor(team.image).url()}
                alt={team.name}
                className=" w-[300px] h-[360px] m-auto"
              />
              <h3 className="text-[18px] lg:text-[24px] text-white mt-3">{team.name}</h3>
            </SwiperSlide>
          );
        })}
      </Swiper>
                </div>
    </>
  );
}
