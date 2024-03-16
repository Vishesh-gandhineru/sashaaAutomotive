"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './PartnerGallery.css';

import { urlFor } from "../../../sanity/lib/ImageUrlBuilder";

export default function LogoGallerySlider({ galleryList }) {
  return (
    <>
      <Swiper
        grabCursor={true}
        slidesPerView={3}
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
                    <SwiperSlide key={image._key}>
                        <img src={urlFor(image).url()} className="aspect-[3/5] object-contain"/>
                    </SwiperSlide>
                )
            })
        }
      </Swiper>
    </>
  );
}
