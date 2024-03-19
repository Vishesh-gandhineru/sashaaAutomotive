import { PortableText } from "@portabletext/react";
import { FetchSpecialOrders } from "../../../sanity/lib/FetchData";
import { urlFor } from "../../../sanity/lib/ImageUrlBuilder";
import { HiOutlineArrowLongRight } from "react-icons/hi2";


export default async function SpecialOrder() {
 const special= await FetchSpecialOrders();
 return (
 <section className="max-w-[1300px] p-5 m-auto">
 <div className="ImagesSection relative w-full">
    <img src={urlFor(special[0].mainImage).url()} className="h-[350px] w-full object-cover object-center lg:h-full lg:w-[50%] lg:ml-[80px]" />
    <img src={urlFor(special[0].secondImage).url()} className="hidden lg:block lg:absolute left-[15%] top-[80%]" />
    <img src={urlFor(special[0].thirdImage).url()} className="hidden lg:block lg:absolute lg:left-[80%] lg:top-[0]"/>
 </div>
 <div className="ml-8 p-8 glassmorphism-hero mt-[-150px] lg:w-[65%] lg:mt-[-200px] lg:float-end">
    <h3 className="text-[36px] leading-10 mb-5">
    {special[0].title}
    </h3>
    <div className="text-[16px] leading-7 mb-5"><PortableText value={special[0].body} /></div>
    <div className="flex justify-start items-center">
                    <button className="text-white px-6 py-3 border-[2px] border-r-0">
                    Enquire Now
                    </button>
                    <span className=" bg-white h-[52px] flex justify-center items-center py-3 px-4 text-[20px]">
                      <HiOutlineArrowLongRight />
                    </span>
                  </div>
 </div>
 
 </section>)
}