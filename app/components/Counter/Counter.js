import { FetchCounters } from "../../../sanity/lib/FetchData";


export default async function Counter() {

    const counters = await FetchCounters();
    console.log(counters);
    return (
        <section>
            {counters.map((counter) => (
                <div key={counter._id}>
                    <h1>{counter.brands}</h1>
                    <h1>{counter.parts}</h1>
                    <h1>{counter.year}</h1>
                </div>
            ))}
        </section>
    )
}