import { FetchWhatWeDo } from "../../../sanity/lib/FetchData"
import ReelsSlider from "./ReelsSlider";



export default async function WhatWeDoSection () {

    const whatWeDo = await FetchWhatWeDo();
    const reels = whatWeDo[0].reel;

    return (
        <section id="whatWeDo" className="whatWeDo md:px-8 max-w-[1200px] px-5 m-auto my-[60px] lg:px-8 xl:px-5">
            <div className="mt-5">
             <ReelsSlider reels={reels}/>
            </div>
        </section>
    )
}
