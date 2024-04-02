import { FetchWhatWeDo } from "../../../sanity/lib/FetchData"
import ReelsSlider from "./ReelsSlider";



export default async function WhatWeDoSection () {

    const whatWeDo = await FetchWhatWeDo();
    const reels = whatWeDo[0].reel;

    return (
        <section id="whatWeDo" className="whatWeDo max-w-[1200px] p-5 m-auto lg:mt-[50px] lg:px-8 xl:px-5">
            <div className="mt-5">
             <ReelsSlider reels={reels}/>
            </div>
        </section>
    )
}
