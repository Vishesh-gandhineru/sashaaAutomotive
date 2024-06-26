"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import {SlideNextButton, SlidePrevButton} from "./swiperNextBtn";
import {customNext , sliderPrev} from "./swiperNextBtn";
import { ChevronRight, ChevronLeft } from 'lucide-react';



import { getFileAsset , buildFileUrl } from "@sanity/asset-utils";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP,ScrollTrigger);


import "swiper/css";
import 'swiper/css/navigation';
import './reelsSlider.css'

export default function ReelsSlider({reels}) {


    //GSAP animation  
    useGSAP(() => {


      

        gsap.from('.reel-swiper-slider' , {opacity: 0, duration: 1, y: 100 , stagger: 0.2 , scrollTrigger: {
            trigger: ".reels-swiper",
            start: "top 80%",
            end: "bottom 50%",
            toggleActions: "play stop play reverse",
          }});

          gsap.from('.whatWeDoSection' , {opacity: 0, duration: 0.5, y: 100 , stagger: 0.2 , scrollTrigger: {
            trigger: ".whatWeDoSection",
            start: "top 100%",
            end: "bottom 50%",
            toggleActions: "play stop play reverse",
          }});
      }, {});


    const project = {   
        projectId: "zllfluo3",
  dataset: "production",
    }


    const handleMute = (e) => {
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            if (video !== e.target) {
                video.muted = true;
            }
        });
        e.target.muted = !e.target.muted;
    }


    return (
        <div className="w-full">
          <div className="whatWeDoSection lg:flex lg:justify-center mb-9">
            <h2 className="whatWeDoText text-[28px] text-[#C4CBD0] lg:text-[36px] lg:text-center lg:mb-5 lg:w-[40%] ">What we do</h2>
            <p className="whatWeDoBody text-[16px] leading-[24px] lg:w-[60%] lg:text-left lg:m-auto lg:mb-[30px]  ">Welcome to the one-stop shop for premium European auto components. We specialise in a myriad of OEM-manufactured spare parts, available for both wholesale and retail.<br/> <br/>
            Our offerings extend beyond the basics to encompass cutting-edge tuning and accessory solutions, ensuring your vehicle reaches the pinnacle of performance and style. And with over six decades of industry experience, we&apos;re your go-to source for automotive excellence.</p>
            </div>
            <div className="relative w-[100%] md:w-[80%] xl:w-[1000px] m-auto">
      
        <Swiper
        grabCursor={true}
        slidesPerView={1} 
        breakpoints={{
            640: {
              slidesPerView: 1,
              
            },
            768: {
              slidesPerView: 2,
              
            },
            1200: {
              slidesPerView: 3,
          
            },
          }}
        className="reels-swiper overflow-visible" 
      >
      <SlidePrevButton/>
        {
            reels.map (reel => {
                return (
                    <SwiperSlide className="reel-swiper-slider" onClick={handleMute} key={reel._key}>
                        <div className="">

                        <div className="block">
                            <video autoPlay muted loop className="m-auto w-[250px] lg:w-[300px] rounded-[10px]">
                                <source src={`${buildFileUrl(getFileAsset(reel.video.asset, project), project)}`} />
                            </video>
                        </div>
                        <div className="reel-content text-center lg:text-center text-[20px] mt-[20px]">
                            <p>{reel.title}</p>
                        </div>
                        </div>
                    </SwiperSlide>
                );
            })
        }
      <SlideNextButton/>   
        
      </Swiper>    

          <button onClick={()=> (document.getElementById('slider-prev').click())} className="p-2 border absolute top-[40%] left-[-10px]  md:left-[-50px] xl:left-[-60px] z-50"><ChevronLeft/></button>
          <button onClick={()=> (document.getElementById('slider-next').click())} className="p-2 border absolute top-[40%] right-[-10px]  md:right-[-50px] xl:right-[-60px] z-50"><ChevronRight/></button>
            </div>
        </div>
    )
}