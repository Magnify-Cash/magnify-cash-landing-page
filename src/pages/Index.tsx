
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Traction from "@/components/sections/Traction";
import Problem from "@/components/sections/Problem";
import Features from "@/components/sections/Features";
import Roadmap from "@/components/sections/Roadmap";
import Ecosystem from "@/components/sections/Ecosystem";
import CallToAction from "@/components/sections/CallToAction";
import CommunityWidget from "@/components/CommunityWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <div className="relative" id="market-opportunity">
          <Problem />
          <div className="py-12">
            <Traction />
          </div>
        </div>
        <div className="py-12" id="features">
          <Features />
        </div>
        <div className="relative overflow-hidden">
          <div className="py-12" id="ecosystem">
            <Ecosystem />
          </div>
          <div className="py-12" id="roadmap">
            <Roadmap />
          </div>
        </div>
        <div className="mt-12">
          <CallToAction />
        </div>
      </main>
      <CommunityWidget />
      <Footer />
    </div>
  );
};

export default Index;
