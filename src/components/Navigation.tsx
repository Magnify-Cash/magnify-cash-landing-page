import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <img 
            src="/lovable-uploads/de5d4a5d-e923-4a4b-b925-1110eb80251f.png" 
            alt="Magnify Cash Logo" 
            className="h-10 w-10"
          />
          <span className="text-2xl font-semibold">Magnify Cash</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-10">
          {[
            { label: "Features", path: "features" },
            { label: "Market Opportunity", path: "market-opportunity" },
            { label: "Roadmap", path: "roadmap" },
            { label: "Ecosystem", path: "ecosystem" },
            { label: "How Borrowing Works", path: "features" }
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.path)}
              className="text-secondary hover:text-primary transition-colors relative group cursor-pointer text-lg"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-pink-600 transition-all group-hover:w-full" />
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-6">
          <a
            href="https://worldcoin.org/ecosystem/app_cfd0a40d70419e3675be53a0aa9b7e10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:opacity-90 transition-opacity hover:scale-105 px-8 py-6 text-lg font-semibold">
              Get Started
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;