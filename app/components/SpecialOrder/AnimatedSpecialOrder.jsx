"use client"

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP,ScrollTrigger);

import { PortableText } from "@portabletext/react";
import { urlFor } from "../../../sanity/lib/ImageUrlBuilder";
import PopupButton from "../PopupButton";

export default function AnimatedSpecialOrder({ special }) {

    //GSAP animation

    useGSAP(() => {
        gsap.from('.ImagesSection' , {opacity: 0, duration: 1, y: 100 , stagger: 0.1 , scrollTrigger: {
            trigger: ".mainSection",
            start: "top 80%",
            end: "bottom 50%",
            toggleActions: "play stop play reverse",
        }})
        gsap.from('.glassmorphism-content' , {opacity: 0, duration: 1, y: 100 , stagger: 0.1 , scrollTrigger: {
            trigger: ".mainSection",
            start: "top 80%",
            end: "bottom 50%",
            toggleActions: "play stop play reverse",
        }})
    }, {});


    return (
        <div className="mainSection">
        
        <div className="ImagesSection relative w-full">
    <img src={urlFor(special[0].mainImage).url()} className=" h-[200px] sm:h-[300px] w-full object-cover object-left-top lg:h-full lg:w-[70%]" />
 </div>
 <div className="lg:ml-8 p-8 glassmorphism-hero glassmorphism-content mt-[-50px] w-[100%] lg:w-[60%]  xl:w-[50%] lg:mt-[-200px] lg:float-end">
    <h3 className="text-[36px] leading-10 mb-5">
    {special[0].title}
    </h3>
    <div className="text-[16px] leading-[24px] mb-5"><PortableText value={special[0].body} /></div>
    
                  <PopupButton buttonText={"Enquire Now"} className={"inline-flex"}/>
 </div>
        </div>
    )
}