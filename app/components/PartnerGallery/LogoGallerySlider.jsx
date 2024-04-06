"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './PartnerGallery.css';

import { urlFor } from "../../../sanity/lib/ImageUrlBuilder";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";    
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(useGSAP,ScrollTrigger);



export default function LogoGallerySlider({ galleryList }) {


    //GSAP animation
  useGSAP(() => {
    gsap.from('.gallery-swiper-slider' , {opacity: 0, duration: 1, y: 100 , stagger: 0.1 , scrollTrigger: {
        trigger: ".gallery-swiper",
        start: "top 80%",
        end: "bottom 50%",
        toggleActions: "play stop play reverse",
    }})
  } , {}); 

  return (
    <>
    <div className="mb-8">
                <h2 className="uppercase text-[14px] text-center leading-[20px] tracking-[2px]">Our partners</h2>
            </div>
      <Swiper
        grabCursor={true}
        slidesPerView={3}
        autoplay={{
          delay: 3000,
        }}
        modules={[Autoplay]}
        breakpoints={{
            640: {
              slidesPerView: 3,
              
            },
            768: {
              slidesPerView: 5,
              
            },
            1024: {
              slidesPerView: 9,
          
            },
          }}
        className="gallery-swiper"
      >
        {
            galleryList[0].gallery.map((image) => { 
                return (
                    <SwiperSlide className="gallery-swiper-slider" key={image._key}>
                        <img src={urlFor(image).url()} className="aspect-[3/5] object-contain"/>
                    </SwiperSlide>
                )
            })
        }
      </Swiper>
    </>
  );
}
