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

export default function TeamSlider({ teams }) {
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
        className="teams-swiper"
      >
        {teams.map((team) => {
          return (
            <SwiperSlide key={team._id} className="text-center gap-4">
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
    </>
  );
}
