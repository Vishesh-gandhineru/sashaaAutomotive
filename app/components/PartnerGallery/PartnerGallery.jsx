import { FetchGallery } from "../../../sanity/lib/FetchData";
import LogoGallerySlider from "./LogoGallerySlider";


export default async function PartnersGallery() {

    const galleryList = await FetchGallery();

    return (
        <section className="xl:my-[50px] my-[60px]  max-w-[1300px] m-auto lg:px-8">
            <div className="mt-5">
                <LogoGallerySlider galleryList={galleryList} /> 
                </div>
        </section>
    );
}