"use client";

import { useState, useEffect } from "react";
import "./Product.css";
import { client } from "../../../sanity/client";
import { urlFor } from "../../../sanity/lib/ImageUrlBuilder";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

import "swiper/css";
import { PortableText } from "@portabletext/react";

export default function TuningSection() {
    const [tuning, setTuning] = useState([]);
    const [filteredTuning, setFilteredTuning] = useState(null);
    const [tuningCategories, setTuningCategories] = useState([]);
    console.log(filteredTuning)
    const FetchTuning = () => {
        const TUNING_QUERY = `*[_type == 'tuning']{title , categories , body , image , _id}`;
        const tuning = client.fetch(TUNING_QUERY ,{ next: { revalidate: 10 } });
        return tuning;
    };

    const FetchTuningCategories = () => {
        const TUNING_CATEGORIES_QUERY = `*[_type == 'tuningCategory']{title , _id} | order(title asc)`;
        const tuningCategories = client.fetch(TUNING_CATEGORIES_QUERY ,{ next: { revalidate: 10 } });
        return tuningCategories;
    };

    const handleTuningCategoryChange = (e) => {
        const selectedCategoryId = e.currentTarget.getAttribute("value");

        const filteredTuning = tuning.filter((item) => {
            return item.categories.some(
                (category) => category._ref === selectedCategoryId
            );
        });
        setFilteredTuning(filteredTuning);
        const categoryFilters = document.querySelectorAll(".filter");
        categoryFilters.forEach((filter) => {
            filter.classList.remove("active-filter");
        });
        e.currentTarget.classList.add("active-filter");
    };

    function handleAllTuning(e) {
        setFilteredTuning(null);

        const categoryFilters = document.querySelectorAll(".filter");
        categoryFilters.forEach((filter) => {
            filter.classList.remove("active-filter");
        });
        e.currentTarget.classList.add("active-filter");
    }

    useEffect(() => {
        FetchTuning().then((data) => setTuning(data));
    }, []);

    useEffect(() => {
        FetchTuningCategories().then((data) => setTuningCategories(data));
        setTuning([]); // Reset the tuning list when categories change
    }, []);

    useEffect(() => {
        setTimeout(() => {
          const Aerodynamics = document.getElementById("Aerodynamics");
          Aerodynamics.click();    
          console.log("clicked")  
        }, 1000);
      }, [1]);

    return (
        <section className="my-8">
            <div className="categoryFilter xl:justify-center flex gap-0 uppercase flex-row flex-nowrap whitespace-nowrap items-center flex-shrink-0 overflow-x-scroll xl:overflow-hidden">
                {tuningCategories.map((item, index) => {
                    return (
                        <div
                            id={item.title}
                            key={item._id}
                            className={`filter border border-[rgba(255,255,255,0.40)] pr-[90px] flex-shrink-0 flex-grow-0 p-4 lg:w-[300px] cursor-pointer uppercase text-[14px] tracking-[2px] ${index === 0 ? 'active-filter' : ''}`}
                            onClick={handleTuningCategoryChange}
                            value={item._id}
                        >
                            <h3 className="text-[rgba(255,255,255,0.40)]">{item.title}</h3>
                        </div>
                    );
                })}
            </div>
            <div className="ProductGrid">
                
                    {filteredTuning == null ? (
                        <>
                            {tuning.slice(0, 1).map((item , index) => {
                                return (
                                   
                                        <div key={item._id} className="productCardTuning flex flex-row justify-center items-center w-[75%] m-auto">
                                            <img src={urlFor(item.image).url()} alt={item.title} className="text-center md:w-[50%]"  />
                                            <div className="text-left mt-3 text-[14px]">
                                               <PortableText value={item.body} /> 
                                            </div>
                                        </div>
                                   
                                );
                            })}
                        </>
                    ) : (
                        <>
                            {filteredTuning.map((item) => {
                                return (
                                   
                                    <div  key={item._id} className="productCardTuning flex flex-row justify-center items-center w-[75%] m-auto">
                                    <img src={urlFor(item.image).url()} alt={item.title} className="text-center md:w-[50%]"  />
                                    <div className="text-left mt-3 text-[14px]">
                                       <PortableText value={item.body} /> 
                                    </div>
                                </div>
                                   
                                );
                            })}
                        </>
                    )}
            </div>
        </section>
    );
}