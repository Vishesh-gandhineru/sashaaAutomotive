"use client";

import { useState , useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import { Scrollbar } from "swiper/modules";
import { urlFor } from "../../../sanity/lib/ImageUrlBuilder";
import { PortableText } from "@portabletext/react";
import "./Legacy.css";

export default function LegacySlider({ legacy }) {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    // Check initially
    checkIfMobile();

    // Add event listener to update when window size changes
    window.addEventListener('resize', checkIfMobile);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []); 


  return (
    <>
      {isMobile ? (
        <Swiper
          scrollbar={{
            show: true,
          }}
          modules={[Scrollbar]}
        >
          {legacy.map((item) => {
            return (
              <SwiperSlide key={item._id}>
                <div
                  className="h-[650px] lg:h-[450px] bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${urlFor(item.image).url()})`,
                  }}
                >
                  <div className="glassmorphism-hero p-5 lg:w-[50%] lg:h-full lg:p-[40px]">
                    <h3 className="text-[32px] leading-[42px] capitalize my-3 text-[#C4CBD0]">
                      {item.title}
                    </h3>
                    <h6 className="text-[18px] uppercase tracking-[2px] mb-3">
                      {item.subtitle}
                    </h6>
                    <div className="text-[16px] leading-[24px] lg:mt-[30px]">
                      <PortableText value={item.body} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <>
      <Swiper
        direction={'vertical'}
        pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        className="legacy-swiper"
      >
        {legacy.map((item) => {
            return (
              <SwiperSlide key={item._id}>
                <div
                  className="h-[650px] lg:h-[450px] bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${urlFor(item.image).url()})`,
                  }}
                >
                  <div className="glassmorphism-hero p-5 lg:w-[50%] lg:h-full lg:p-[40px] lg:flex lg:flex-col lg:justify-center">
                    <h3 className="text-[38px] leading-[48px] capitalize my-3">
                      {item.title}
                    </h3>
                    <h6 className="text-[16px] uppercase tracking-[2px] mb-3">
                      {item.subtitle}
                    </h6>
                    <div className="text-[16px] leading-[24px] lg:mt-[25px]">
                      <PortableText value={item.body} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
      )}
    </>
  );
}
