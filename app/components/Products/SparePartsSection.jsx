"use client";

import { useState, useEffect } from "react";
import "./Product.css";
import { client } from "../../../sanity/client";
import { urlFor } from "../../../sanity/lib/ImageUrlBuilder";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

import "swiper/css";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";    
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);

export default function SparePartsSection() {

  
  


  const idsInOrder = [
    "828192be-9b99-4d92-86b0-cc000c9f9d65", 
    "6d7bc084-d00c-4771-b2f9-c846f4680eec", 
    "65893765-13d9-4799-a181-049ed2591cd6", 
    "c3afc2f6-ee63-4546-bbbf-3d70124bef16"
  ];
  
 


  const [spareParts, setSpareParts] = useState([]);
  const [filteredSpareParts, setFilteredSpareParts] = useState(null);
  const [Categories, setCategories] = useState([]);

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

  const handleCategorieChange = (e) => {
    const selectedCategoryId = e.currentTarget.getAttribute("value");

    const filteredSpareParts = spareParts.filter((item) => {
      return item.categories.some(
        (category) => category._ref === selectedCategoryId
      );
    });
    setFilteredSpareParts(filteredSpareParts);
    const categoryFilters = document.querySelectorAll(".filter");
    categoryFilters.forEach((filter) => {
      filter.classList.remove("active-filter");
    });
    e.currentTarget.classList.add("active-filter");
  };

  function handleAllSpareParts(e) {
    setFilteredSpareParts(null);

    const categoryFilters = document.querySelectorAll(".filter");
    categoryFilters.forEach((filter) => {
      filter.classList.remove("active-filter");
    });
    e.currentTarget.classList.add("active-filter");
  }

  useEffect(() => {
    FetchSpareParts().then((data) => setSpareParts(data));
  }, []);

  useEffect(() => {
    FetchSpareCategorie().then((data) => {
      const sortedCategories = data.sort((a, b) => {
        return idsInOrder.indexOf(a._id) - idsInOrder.indexOf(b._id);
      });
      // Set the sorted categories in the state
      setCategories(sortedCategories);
    });
    setSpareParts([]); // Reset the spare parts list when categories change
  }, []);


  useEffect(() => {
    setTimeout(() => {
      const suspension = document.getElementById("suspension");
      suspension.click();    
      console.log("clicked")  
    }, 1000);
  }, [1]);

//GSAP animation

useGSAP(()=>{
  gsap.from('.spareParts-slider' , {opacity: 0, duration: 1, y: 100 , stagger: 0.1 , scrollTrigger: {
    trigger: ".sparePartSlider",
    start: "top 80%",
    end: "bottom 50%",
    toggleActions: "play stop play reverse",
}})
} , {})


  return (
    <section className="my-8">
      <div className="categoryFilter xl:justify-center flex gap-0 uppercase flex-row flex-nowrap whitespace-nowrap items-center flex-shrink-0 overflow-x-scroll xl:overflow-hidden">
       
        {Categories.map((item ,index) => {
          return (
            <div
            id={item.title}
              key={item._id}
              className={`filter border border-[rgba(255,255,255,0.40)] pr-[90px] flex-shrink-0 flex-grow-0 p-4 lg:w-[300px] cursor-pointer uppercase text-[14px] tracking-[2px] ${index === 0 ? 'active-filter' : ''}`}
              onClick={handleCategorieChange}
              value={item._id}
            >
              <h3 className="text-[rgba(255,255,255,0.40)]">{item.title}</h3>
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
              slidesPerView: 4,
              spaceBetween: 0,
            },
          }}
          className="sparePartSlider my-8 overflow-visible"
        >
          {filteredSpareParts == null ? (
            <>
              {spareParts.map((item) => {
                return (
                  <SwiperSlide
                    key={item._id}
                    className="spareParts-slider slider"
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
              {filteredSpareParts.map((item) => {
                return (
                  <SwiperSlide
                    key={item._id}
                    className="spareParts-slider slider"
                    style={{ width: "fit-content" }}
                  >
                    <div className="productCard flex flex-col justify-center items-center w-[75%] m-auto">
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
