import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Traction from "@/components/sections/Traction";
import Problem from "@/components/sections/Problem";
import Features from "@/components/sections/Features";
import Roadmap from "@/components/sections/Roadmap";
import Ecosystem from "@/components/sections/Ecosystem";
import CallToAction from "@/components/sections/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <Traction />
        <Problem />
        <Features />
        <Roadmap />
        <Ecosystem />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;