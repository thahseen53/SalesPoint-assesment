import Contact from "./components/Contact";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import PartnerShip from "./components/PartnerShip";
import StandoutPresence from "./components/StandoutPresence";

const HomePage = () => {
  return (
    <main className="mt-3 py-10">
      <HeroSection />
      <PartnerShip />
      <Features />
      <StandoutPresence />
      <Contact />
    </main>
  );
};

export default HomePage;
