import { FetchGallery } from "../../../sanity/lib/FetchData";
import LogoGallerySlider from "./LogoGallerySlider";


export default async function PartnersGallery() {

    const galleryList = await FetchGallery();

    return (
        <section className="md:p-8 pt-0 pb-8 lg:p-5 max-w-[1300px] m-auto lg:px-8 xl:px-5">
            <div className="mt-5">
                <LogoGallerySlider galleryList={galleryList} /> 
                </div>
        </section>
    );
}