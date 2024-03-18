"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';

import { getFileAsset , buildFileUrl } from "@sanity/asset-utils";



import "swiper/css";
import 'swiper/css/navigation';
import './reelsSlider.css'

export default function ReelsSlider({reels}) {

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
        <Swiper
        grabCursor={true}
        navigation={true}
        modules={[Navigation]}
        slidesPerView={1}
        breakpoints={{
            640: {
              slidesPerView: 1,
              
            },
            768: {
              slidesPerView: 1,
              
            },
            1024: {
              slidesPerView: 3,
          
            },
          }}
        className="reels-swiper" 
      >
        {
            reels.map (reel => {
                return (
                    <SwiperSlide onClick={handleMute}>
                        
                        <div>
                            <video autoPlay muted loop className="m-auto w-[250px] lg:w-[300px] rounded-[10px]">
                                <source src={`${buildFileUrl(getFileAsset(reel.video.asset, project), project)}`} />
                            </video>
                        </div>
                        <div className="text-center text-[18px] mt-5">
                            <p>{reel.title}</p>
                            <p className="uppercase text-[16px] mt-2">{reel.postDate}</p>
                        </div>
                    </SwiperSlide>
                );
            })
        }
        
      </Swiper>
        </div>
    )
}