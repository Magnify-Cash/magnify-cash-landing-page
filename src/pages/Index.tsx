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
      <main className="pt-16">
        <Hero />
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 dark:via-blue-950/30 to-transparent" />
          <Problem />
          <Traction />
        </div>
        <Features />
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-50/30 dark:via-pink-950/30 to-transparent" />
          <Ecosystem />
          <Roadmap />
        </div>
        <CallToAction />
      </main>
      <CommunityWidget />
      <Footer />
    </div>
  );
};

export default Index;