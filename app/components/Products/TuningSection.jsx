"use client";

import { useState, useEffect } from "react";
import "./Product.css";
import { client } from "../../../sanity/client";
import { urlFor } from "../../../sanity/lib/ImageUrlBuilder";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

import "swiper/css";

export default function TuningSection() {
    const [tuning, setTuning] = useState([]);
    const [filteredTuning, setFilteredTuning] = useState(null);
    const [tuningCategories, setTuningCategories] = useState([]);

    const FetchTuning = () => {
        const TUNING_QUERY = `*[_type == 'tuning']{title , categories , image , _id}`;
        const tuning = client.fetch(TUNING_QUERY);
        return tuning;
    };

    const FetchTuningCategories = () => {
        const TUNING_CATEGORIES_QUERY = `*[_type == 'tuningCategory']{title , _id}`;
        const tuningCategories = client.fetch(TUNING_CATEGORIES_QUERY);
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

    return (
        <section className="my-8">
            <div className="categoryFilter flex gap-0 uppercase flex-row flex-nowrap whitespace-nowrap items-center flex-shrink-0 overflow-x-scroll xl:overflow-hidden">
                <div
                    className="filter active-filter border border-[#CCCCCC] flex-shrink-0 flex-grow-0 p-4 pr-[90px] lg:w-[250px] cursor-pointer uppercase text-[14px] tracking-[2px]"
                    onClick={handleAllTuning}
                >
                    <h3 className="text-[#cccccc]">All</h3>
                </div>
                {tuningCategories.map((item) => {
                    return (
                        <div
                            key={item._id}
                            className="filter border border-[#CCCCCC] pr-[90px] flex-shrink-0 flex-grow-0 p-4 lg:w-[250px] cursor-pointer uppercase text-[14px] tracking-[2px]"
                            onClick={handleTuningCategoryChange}
                            value={item._id}
                        >
                            <h3 className="text-[#cccccc]">{item.title}</h3>
                        </div>
                    );
                })}
            </div>
            <div className="ProductGrid">
                <Swiper
                    grabCursor={true}
                    navigation={true}
                    modules={[Navigation]}
                    breakpoints={{
                        100: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    className="sparePartSlider my-8"
                >
                    {filteredTuning == null ? (
                        <>
                            {tuning.map((item) => {
                                return (
                                    <SwiperSlide
                                        key={item._id}
                                        className="tuningCard"
                                        style={{ width: "fit-content" }}
                                    >
                                        <div className="productCard flex flex-col justify-center items-center w-[75%] m-auto">
                                            <img src={urlFor(item.image).url()} alt={item.title} className="text-center"  />
                                            <h3 className="text-center mt-3 text-[14px]">
                                                {item.title}
                                            </h3>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </>
                    ) : (
                        <>
                            {filteredTuning.map((item) => {
                                return (
                                    <SwiperSlide
                                        key={item._id}
                                        className="tuningCard"
                                        style={{ width: "fit-content" }}
                                    >
                                        <div className="productCard">
                                            <img src={urlFor(item.image).url()} alt={item.title} />
                                            <h3 className="text-center mt-3 text-[14px]">
                                                {item.title}
                                            </h3>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </>
                    )}
                </Swiper>
            </div>
        </section>
    );
}
