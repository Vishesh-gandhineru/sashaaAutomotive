"use client";

import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import { EffectCreative } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import 'swiper/css/navigation';
import "./slider.css";
import "swiper/css/effect-creative";

import { FetchHeroSlider } from "./FetchHeroSlider";

import { urlFor } from "../../../sanity/lib/ImageUrlBuilder";

import { RxArrowRight } from "react-icons/rx";

export default function HeroSlider() {
  const [SlideData, setSlideDate] = useState();
  const [SlideDataready, setSlideDataready] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const heroSlider = await FetchHeroSlider();
        setSlideDate(heroSlider);
        setSlideDataready(true);
      } catch (error) {
        console.error("Error fetching hero slider:", error);
      }
    };

    fetchData();
  }, [1]);

  return (
    <>
      <Swiper 
      navigation={true}
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative , Navigation]}
        className="mySwiper"
      >
        {SlideDataready &&
          SlideData.map((slider) => {

            const isMobile = window.innerWidth <= 767; // Adjust this value based on your mobile breakpoint
            const windowWidth = window.innerWidth;

            return (
                <SwiperSlide key={slider._id} style={{
                    backgroundImage: isMobile ? `url(${urlFor(
                        slider.mobileCoverImage
                      ).url()})` : `url(${urlFor(
                        slider.coverImage
                      ).url()})`,
                  }} className="background-cover h-full  w-full bg-no-repeat bg-bottom bg-cover">
                    <div className="h-full max-w-[1300px] w-full m-auto">
                        <div className="glassmorphism-hero w-full lg:w-[50%] h-[52%] lg:h-full absolute z-10 left-0"></div>
                <div className="relative p-5 lg:p-3 pb-10 h-[50%] w-full text-center flex flex-col justify-end z-10 items-start gap-4 lg:gap-8 lg:w-[50%] lg:h-full lg:justify-center">
                  <h1 className="text-white text-[46px] text-left  leading-[46px] lg:text-[56px] lg:leading-[66px]">
                    {slider.title}
                  </h1>
                  <div className="flex justify-center items-center">
                    <button className="text-white px-6 py-3 border-[2px] border-r-0">
                      Have a Question
                    </button>
                    <span className=" bg-white h-full flex justify-center items-center py-3 px-4 text-[20px]">
                      <RxArrowRight />
                    </span>
                  </div>
                </div>
                <div className="z-2 bg-gradient-to-t h-[200px] m-auto from-[#1B1B1B] left-0 absolute bottom-0" style={{width:windowWidth}}></div>
                <div className="z-2 bg-gradient-to-t h-[200px] m-auto from-[#0000] to-[#1B1B1B] left-0 absolute top-0" style={{width:windowWidth}}></div>
                <div className="z-2 text-white uppercase border-b-[1px] left-0 w-[90%] lg:w-[80%] text-right border-[#E33A3D] pb-1 absolute bottom-10">{slider.carName}</div>
                    </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
