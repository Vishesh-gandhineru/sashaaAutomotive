"use client";
import gsap from "gsap";
import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import { EffectFade } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import "./slider.css";
import "swiper/css/effect-fade";

import RightIcon from "../rightIcon";
import PopupButton from "../PopupButton";

import { useGSAP } from "@gsap/react";


import { FetchHeroSlider } from "./FetchHeroSlider";

import { urlFor } from "../../../sanity/lib/ImageUrlBuilder";

import { RxArrowRight } from "react-icons/rx";
import "react-icons/rx";
import { set } from "sanity";

export default function HeroSlider() {


  //GSAP animation
  useGSAP(() => {
    // gsap code here...
    let tl = gsap.timeline();
    tl.from('.herosliderSection', {opacity: 0, duration: 1, y: 100})
    tl.to('.herosliderSection', {opacity: 1, duration: 1, y: 0})


  }, {});



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

  const handleSliderButtonPosition = () => {
    const sliderCarName = document.querySelector(".slider-carName");
    if (sliderCarName) {
      const carNameWidth = sliderCarName.offsetWidth;
      const prevButton = document.querySelector(".mySwiper .swiper-button-prev");
      if (prevButton) {
        prevButton.style.left = `${carNameWidth + 50}px`;
      }
    }
  };

  useEffect(() => {
    handleSliderButtonPosition();
    window.addEventListener("resize", handleSliderButtonPosition);
    return () => {
      window.removeEventListener("resize", handleSliderButtonPosition);
    };
  }, []);


  return (
    <section className="herosliderSection">
      <Swiper 
      navigation={true}
        grabCursor={true}
        effect={"fade"}        
        modules={[ Navigation , EffectFade]}
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
                  }} className="background-cover h-full  w-full bg-no-repeat bg-bottom bg-cover lg:bg-center">
                    <div className="h-full max-w-[1300px] w-full m-auto">
                        <div className="glassmorphism-hero w-full md:w-[70%] xl:w-[50%] h-[52%] md:h-full absolute z-10 left-0"></div>
                <div className="relative p-5 lg:p-3 pb-10 h-[50%] w-full md:w-[70%] lg:w-[60%] xl:w-[50%] text-center flex flex-col justify-end z-10 items-start gap-4 lg:gap-8  md:h-full md:justify-center lg:pl-8 ">
                  <h1 className="sliderText text-white text-[36px] text-left  leading-[46px] lg:text-[56px] lg:leading-[66px]">
                  One Stop Shop for Premium European Spare Parts
                  </h1>
                  
                  <PopupButton buttonText={"Have a Question"}/>
                </div>
                <div className="z-2 bg-gradient-to-t h-[200px] m-auto from-[#1B1B1B] left-0 absolute bottom-0" style={{width:windowWidth}}></div>
                <div className="z-2 bg-gradient-to-t h-[200px] m-auto from-[#0000] to-[#1B1B1B] left-0 absolute top-0" style={{width:windowWidth}}></div>
                <div className="z-[100] text-white uppercase border-b-[1px] left-0  w-[90%] lg:w-[80%] text-right border-[#E33A3D] pb-1 absolute bottom-10 tracking-[2px]"><span className="slider-carName">{slider.carName}</span></div>
                    </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
}
