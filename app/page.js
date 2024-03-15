import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";
import HeroSlider from "./components/HeroSlider/HeroSlider";
import './globals.css';

export default function Home() {
  return (
    <main>
      <Header/>
      <HeroSlider />
      <Counter />
    </main>
  );
}
