
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HomeHero from "@/components/HomeHero";
import FeaturesSection from "@/components/FeaturesSection";
import EmergencyContactsSection from "@/components/EmergencyContactsSection";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <HomeHero />
        <FeaturesSection />
        <EmergencyContactsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
