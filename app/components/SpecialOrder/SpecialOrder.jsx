import { PortableText } from "@portabletext/react";
import { FetchSpecialOrders } from "../../../sanity/lib/FetchData";
import { urlFor } from "../../../sanity/lib/ImageUrlBuilder";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import RightIcon from "../rightIcon";


export default async function SpecialOrder() {
 const special= await FetchSpecialOrders();
 return (
 <section className="max-w-[1300px] p-5 m-auto  lg:h-[600px]">
 <div className="ImagesSection relative w-full">
    <img src={urlFor(special[0].mainImage).url()} className="h-[300px] w-full object-cover object-center lg:h-full lg:w-[500px] lg:ml-[80px]" />
    <video autoPlay muted loop src="https://cdn.sanity.io/files/zllfluo3/production/7d7b4b27f89255bd852e5077d00c0164abde0800.mp4" className="w-[150px] absolute top-[70%] left-[200px]"/>
    <img src={urlFor(special[0].thirdImage).url()} className="hidden lg:block lg:absolute lg:left-[80%] lg:top-[0] lg:w-[180px]"/>
 </div>
 <div className="ml-8 p-8 glassmorphism-hero mt-[-150px] lg:w-[65%] lg:mt-[-200px] lg:float-end">
    <h3 className="text-[36px] leading-10 mb-5">
    {special[0].title}
    </h3>
    <div className="text-[16px] leading-[24px] mb-5"><PortableText value={special[0].body} /></div>
    <div className="inline-flex justify-start items-center m-auto mb-5 hover:scale-[1.1] transition-all ease-in-out">
                    <button className="text-white px-6 py-3 border-[2px] border-r-0">
                    Enquire Now
                    </button>
                    <span className=" bg-white h-[52px] flex justify-center items-center py-3 px-4 text-[20px]">
                    <RightIcon />
                    </span>
                  </div>
 </div>
 
 </section>)
}