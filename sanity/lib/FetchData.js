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


export function FetchTeams () {
    const TEAM_QUERY = `*[_type == 'team-member']{name , bio , image , _id}`;
    const Teams = client.fetch(TEAM_QUERY);
    return Teams;
}


export function FetchWhatWeDo () {
    const WHATWEDO_QUERY = `*[_type == 'whatWeDo']{title  , reel , _id}`;
    const WhatWeDo = client.fetch(WHATWEDO_QUERY);
    return WhatWeDo;
}

export function FetchLegacy () {
    const LEGACY_QUERY = `*[_type == 'legacy']{title , subtitle , body , image , _id}`;
    const Legacy = client.fetch(LEGACY_QUERY);
    return Legacy;
}

export function FetchSpecialOrders () {
    const SPECIALORDERS_QUERY = `*[_type == 'specialOrders']{title , body , mainImage , secondImage , thirdImage , _id}`;
    const SpecialOrders = client.fetch(SPECIALORDERS_QUERY);
    return SpecialOrders;
}