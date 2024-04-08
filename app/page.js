

import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";
import HeroSlider from "./components/HeroSlider/HeroSlider";
import PartnersGallery from "./components/PartnerGallery/PartnerGallery";
import TeamsSection from "./components/Team/TeamSection";
import WhatWeDoSection from "./components/WhatWeDo/whatWeDoSection";
import LegacySection from "./components/Legacy/LegacySection";
import SpecialOrder from "./components/SpecialOrder/SpecialOrder";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
import './globals.css';

export default function Home() {
  return (
    <main>
      <Header/>
      <HeroSlider />

      <Counter />
      <WhatWeDoSection />
      <PartnersGallery />
      <LegacySection />
      <TeamsSection />  
      <Products />
      <SpecialOrder />
      <Footer />
    </main>
  );
}
