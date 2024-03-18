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