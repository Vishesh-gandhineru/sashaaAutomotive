import { FetchCounters } from "../../../sanity/lib/FetchData";
import { urlFor } from "../../../sanity/lib/ImageUrlBuilder";
import CounterSlider from "./CounterSlider";


export default async function Counter() {
        

    const counters = await FetchCounters();

    return (
        <section className=" CounterSection max-w-[1300px] p-5 m-auto mt-5 lg:flex lg:px-8 xl:px-5">
            <CounterSlider counters={counters} />
        </section>
    )
}



