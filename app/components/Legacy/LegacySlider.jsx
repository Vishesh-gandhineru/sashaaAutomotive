"use client";

import { useState , useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination , Autoplay } from "swiper/modules";
import { EffectFade } from "swiper/modules";

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
        <>
        <h3 className="text-[32px] leading-[42px] capitalize my-3 text-[#C4CBD0]">
                    The Sashaa <br />Automotive Legacy
                    </h3>
                    <h6 className="text-[18px] uppercase tracking-[2px] mb-3">
                      Six decades of Trust & Credibility
                    </h6>       
        <Swiper
          scrollbar={{
            show: true,
          }}
          // autoplay={{ delay: 5000 }}
          loop={true}
          effect={"fade"} 
          modules={[Scrollbar , Autoplay , EffectFade]}
          >
          {legacy.map((item) => {
            return (
              <SwiperSlide key={item._id}>
                <div
                  className="h-[550px] lg:h-[450px] bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${urlFor(item.mobileimage).url()})`,
                  }}
                >
                  <div className="glassmorphism-hero p-5 lg:w-[50%] lg:h-full lg:p-[40px]">                    
                    <div className="text-[14px] leading-[24px] lg:mt-[30px] py-[20px]">
                      <PortableText value={item.body} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        </>
      ) : (
        <>
      <Swiper
        direction={'vertical'}
        pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          effect={"fade"}  
          modules={[Pagination , Autoplay , EffectFade]}
        className="legacy-swiper"
      >
        {legacy.map((item) => {
            return (
              <SwiperSlide key={item._id}>
                <div
                  className="h-[650px] md:h-[550px] bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${urlFor(item.image).url()})`,
                  }}
                >
                  <div className="glassmorphism-hero p-5 md:w-[60%] md:h-full md:flex md:flex-col md:justify-center">
                    <h3 className="text-[38px] leading-[48px] capitalize my-3">
                    The Sashaa <br />Automotive Legacy
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
