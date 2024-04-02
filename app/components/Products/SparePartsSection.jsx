"use client";

import { useState, useEffect } from "react";
import "./Product.css";
import { client } from "../../../sanity/client";
import { urlFor } from "../../../sanity/lib/ImageUrlBuilder";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

import "swiper/css";

export default function SparePartsSection() {
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
    FetchSpareCategorie().then((data) => setCategories(data));
    setSpareParts([]); // Reset the spare parts list when categories change
  }, []);

  return (
    <section className="my-8">
      <div className="categoryFilter flex gap-0 uppercase flex-row flex-nowrap whitespace-nowrap items-center flex-shrink-0 overflow-x-scroll xl:overflow-hidden">
        <div
          className="filter active-filter border border-[#CCCCCC] flex-shrink-0 flex-grow-0 p-4 pr-[90px] lg:w-[250px] cursor-pointer uppercase text-[14px] tracking-[2px]"
          onClick={handleAllSpareParts}
        >
          <h3 className="text-[#cccccc]">All</h3>
        </div>
        {Categories.map((item) => {
          return (
            <div
              key={item._id}
              className="filter border border-[#CCCCCC] pr-[90px] flex-shrink-0 flex-grow-0 p-4 lg:w-[250px] cursor-pointer uppercase text-[14px] tracking-[2px]"
              onClick={handleCategorieChange}
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
              slidesPerView: 4,
              spaceBetween: 0,
            },
          }}
          className="sparePartSlider my-8"
        >
          {filteredSpareParts == null ? (
            <>
              {spareParts.map((item) => {
                return (
                  <SwiperSlide
                    key={item._id}
                    className="slider"
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
                    className="slider"
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
