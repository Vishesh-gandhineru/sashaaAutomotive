
import { FetchCounters } from "../../../sanity/lib/FetchData";
import { urlFor } from "../../../sanity/lib/ImageUrlBuilder";
import CounterSlider from "./CounterSlider";


export default async function Counter() {

    const counters = await FetchCounters();

    return (
        <section className="max-w-[1300px] p-5 m-auto mt-5">
            <img src={urlFor(counters[0].image).url()} alt="man seating inside car" />
            {/* {counters.map((counter) => (
                <div key={counter._id}>
                    <h5 className="text-[46px]">{counter.parts}<span className="block uppercase text-[20px] tracking-[3px]">parts</span></h5>
                    <h5>{counter.year}</h5>
                    <h5>{counter.brands}</h5>
                </div>
            ))} */}
            <CounterSlider counters={counters} />
        </section>
    )
}



