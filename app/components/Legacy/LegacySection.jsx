import LegacySlider from "./LegacySlider"
import { FetchLegacy } from "../../../sanity/lib/FetchData"
export default async function LegacySection() {
    const legacy = await FetchLegacy();
    return (
        <section id="legacy" className="max-w-[1300px] px-5 m-auto md:px-8 my-[60px]">
        <LegacySlider legacy = {legacy} />
        </section>
    )
}