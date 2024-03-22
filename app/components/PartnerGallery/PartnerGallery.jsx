import { FetchGallery } from "../../../sanity/lib/FetchData";
import LogoGallerySlider from "./LogoGallerySlider";


export default async function PartnersGallery() {

    const galleryList = await FetchGallery();

    return (
        <section className="mt-5 py-5 lg:p-5 max-w-[1300px] m-auto lg:px-8 xl:px-5">
            <div>
                <h2 className="uppercase text-[14px] text-center leading-[20px] tracking-[2px]">Our partners</h2>
            </div>
            <div className="mt-5">
                <LogoGallerySlider galleryList={galleryList} /> 
                </div>
        </section>
    );
}