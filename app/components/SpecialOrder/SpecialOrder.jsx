import { PortableText } from "@portabletext/react";
import { FetchSpecialOrders } from "../../../sanity/lib/FetchData";
import { urlFor } from "../../../sanity/lib/ImageUrlBuilder";
import PopupButton from "../PopupButton";
import AnimatedSpecialOrder from "./AnimatedSpecialOrder";

export default async function SpecialOrder() {
 const special= await FetchSpecialOrders();
 return (
 <section id="specialOrder" className="max-w-[1300px] p-5 m-auto  lg:h-[600px]">
 <AnimatedSpecialOrder special={special} />
 
 </section>)
}