"use client"

import { useState , useEffect } from "react";
import './Product.css'
import { client } from "../../../sanity/client";
import { urlFor } from "../../../sanity/lib/ImageUrlBuilder";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
 

export default function SparePartsSection (){
    const [spareParts, setSpareParts] = useState([]);
    const [QueryString, setQueryString] = useState("")
    const [Categories, setCategories] = useState([])

    const FetchSpareParts = () => {
        const SPAREPARTS_QUERY = `*[_type == 'spareParts']{title , categories , image , _id}`;
        const SpareParts = client.fetch(SPAREPARTS_QUERY);
        return SpareParts;
    };

    const FetchSpareCategorie = () => {
        const CATEGORIES_QUERY = `*[_type == 'sparePartCategory']{title , _id}`;
        const Categories = client.fetch(CATEGORIES_QUERY);
        return Categories;
    };

    useEffect(() => {
        FetchSpareParts().then(data => setSpareParts(data))
    }, []);

    useEffect(() => {
        FetchSpareCategorie().then(data => setCategories(data))
    }, []);

    return (
        <section className="my-8">
            <div className="categoryFilter flex gap-3 uppercase flex-row flex-nowrap items-center whitespace-nowrap overflow-x-scroll xl:overflow-hidden">
                {Categories.map(item => {
                    return (
                        <div key={item._id} className="border p-4">
                            <h3>{item.title}</h3>
                        </div>
                    )
                })}
            </div>
            <div className="ProductGrid">
            <Swiper 
                breakpoints={{
                    100: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
            className="sparePartSlider my-8">
                {spareParts.map(item => {
                    return (
                        <SwiperSlide key={item._id} className="slider" style={{width:"fit-content"}}>
                        <div  className="productCard">
                            <img src={urlFor(item.image).url()} alt={item.title} />
                            <h3 className="text-center mt-3 text-[14px]">{item.title}</h3>
                        </div>

                        </SwiperSlide>
                    )
                })}

            </Swiper>
            </div>
        </section>
    )

}