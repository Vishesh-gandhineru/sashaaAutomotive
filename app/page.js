import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";
import HeroSlider from "./components/HeroSlider/HeroSlider";
import PartnersGallery from "./components/PartnerGallery/PartnerGallery";
import TeamsSection from "./components/Team/TeamSection";
import './globals.css';

export default function Home() {
  return (
    <main>
      <Header/>
      <HeroSlider />
      <Counter />
      <PartnersGallery />
      <TeamsSection />  
    </main>
  );
}
