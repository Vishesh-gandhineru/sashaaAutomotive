import { FetchTeams } from "../../../sanity/lib/FetchData";
import TeamSlider from "./TeamSlider";

export default async function TeamSection() {
  const TeamList = await FetchTeams();

  return (
    <section className="mt-8 p-5 lg:p-5 max-w-[1100px] m-auto">
      <TeamSlider teams={TeamList} />
    </section>
  );
}
