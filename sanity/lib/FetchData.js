import { client } from "../client";

 export function FetchCounters () {

    const COUNTER_QUERY = `*[_type == 'counters'] {brands , parts , year}`;
    const Counters = client.fetch(COUNTER_QUERY);
    return Counters;
}


