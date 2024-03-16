import { client } from "../client";

 export function FetchCounters () {

    const COUNTER_QUERY = `*[_type == 'counters'] {brands , parts , year, image}`;
    const Counters = client.fetch(COUNTER_QUERY);
    return Counters;
}



export function FetchGallery () {    
        const GALLERY_QUERY = `*[_type == 'partnersLogo'] {gallery}`;
        const Gallery = client.fetch(GALLERY_QUERY);
        return Gallery;
}