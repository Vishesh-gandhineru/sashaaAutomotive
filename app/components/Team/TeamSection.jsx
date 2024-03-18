import { FetchTeams } from "../../../sanity/lib/FetchData";
import TeamSlider from "./TeamSlider";



export default async function TeamSection() {

    const TeamList = await FetchTeams();

    return (
        <section className="mt-5 p-5 lg:p-5 max-w-[1100px] m-auto">          
                <h2 className="uppercase text-[14px] text-center mb-6 leading-[20px] tracking-[2px]">
                Heritage Driven Excellence</h2>         
            
             <TeamSlider teams={TeamList} />
              
        </section>
    );
}