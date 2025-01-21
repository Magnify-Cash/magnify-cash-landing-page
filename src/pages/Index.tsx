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
    <div className="min-h-screen bg-gradient-to-b from-background via-white to-background dark:from-primary dark:via-primary/95 dark:to-primary">
      <Navigation />
      <main className="pt-20">
        <Hero />
        <div className="relative" id="market-opportunity">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/20 dark:via-blue-950/20 to-transparent" />
          <Problem />
          <div className="py-12">
            <Traction />
          </div>
        </div>
        <div className="py-12">
          <Features />
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-50/20 dark:via-pink-950/20 to-transparent" />
          <div className="py-12">
            <Ecosystem />
          </div>
          <div className="py-12">
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