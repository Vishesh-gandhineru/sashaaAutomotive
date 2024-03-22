import { PortableText } from "@portabletext/react";
import { FetchSpecialOrders } from "../../../sanity/lib/FetchData";
import { urlFor } from "../../../sanity/lib/ImageUrlBuilder";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import RightIcon from "../rightIcon";
import PopupButton from "../PopupButton";


export default async function SpecialOrder() {
 const special= await FetchSpecialOrders();
 return (
 <section id="specialOrder" className="max-w-[1300px] p-5 m-auto  lg:h-[600px]">
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
    
                  <PopupButton buttonText={"Enquire Now"} className={"inline-flex"}/>
 </div>
 
 </section>)
}