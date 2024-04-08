import LegacySlider from "./LegacySlider"
import { FetchLegacy } from "../../../sanity/lib/FetchData"
export default async function LegacySection() {
    const legacy = await FetchLegacy();
    return (
        <section id="legacy" className="max-w-[1300px] p-5 m-auto md:p-8">
        <LegacySlider legacy = {legacy} />
        </section>
    )
}