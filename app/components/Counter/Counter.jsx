
import { FetchCounters } from "../../../sanity/lib/FetchData";
import { urlFor } from "../../../sanity/lib/ImageUrlBuilder";
import CounterSlider from "./CounterSlider";


export default async function Counter() {

    const counters = await FetchCounters();

    return (
        <section className="max-w-[1300px] p-5 m-auto mt-5 lg:flex">
            <img src={urlFor(counters[0].image).url()} alt="man seating inside car" className="lg:w-[318px]"/>
            <CounterSlider counters={counters} />
        </section>
    )
}



