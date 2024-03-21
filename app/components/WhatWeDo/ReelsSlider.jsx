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
              slidesPerView: 2,
              
            },
            1024: {
              slidesPerView: 3,
          
            },
          }}
        className="reels-swiper overflow-visible" 
      >
        {
            reels.map (reel => {
                return (
                    <SwiperSlide onClick={handleMute} key={reel._key}>
                        <div className="">

                        <div>
                            <video autoPlay muted loop className="m-auto w-[250px] lg:w-[300px] rounded-[10px]">
                                <source src={`${buildFileUrl(getFileAsset(reel.video.asset, project), project)}`} />
                            </video>
                        </div>
                        <div className="reel-content text-center lg:text-center text-[20px] mt-[20px]">
                            <p>{reel.title}</p>
                            <p className="uppercase text-[14px] mt-2 tracking-[1px]">{reel.postDate}</p>
                        </div>
                        </div>
                    </SwiperSlide>
                );
            })
        }
        
      </Swiper>
        </div>
    )
}