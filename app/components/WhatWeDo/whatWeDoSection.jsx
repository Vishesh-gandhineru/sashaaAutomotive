import { FetchWhatWeDo } from "../../../sanity/lib/FetchData"
import ReelsSlider from "./ReelsSlider";



export default async function WhatWeDoSection () {

    const whatWeDo = await FetchWhatWeDo();
    const reels = whatWeDo[0].reel;

    return (
        <section className="max-w-[1300px] p-5 m-auto lg:mt-[50px]">
            <div>
            <h2 className="text-[28px] text-[#C4CBD0] lg:text-[36px] lg:text-center lg:mb-5">What we do</h2>
            <p className="text-[16px] leading-7 lg:w-[60%] lg:text-center lg:m-auto lg:mb-[30px]">Welcome to the one-stop shop for premium European auto components. We specialise in a myriad of OEM-manufactured spare parts, available for both wholesale and retail.<br/> <br/>
            Our offerings extend beyond the basics to encompass cutting-edge tuning and accessory solutions, ensuring your vehicle reaches the pinnacle of performance and style. And with over six decades of industry experience, we're your go-to source for automotive excellence.</p>
            </div>
            <div className="mt-8 lg:mt-[50px]">
             <ReelsSlider reels={reels}/>
            </div>
        </section>
    )
}
