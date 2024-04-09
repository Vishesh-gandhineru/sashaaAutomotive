import { client } from '../../../sanity/client';

 export function FetchHeroSlider () {

    const HERO_SLIDER_QUERY = `*[_type == 'hero-slider'] | order(_createdAt asc) {_id,title,carName ,coverImage,mobileCoverImage}`;
    const hero_Slider = client.fetch(HERO_SLIDER_QUERY ,{ next: { revalidate: 10 } });
    return hero_Slider;
}


