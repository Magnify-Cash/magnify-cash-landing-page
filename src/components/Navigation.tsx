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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <img 
            src="/lovable-uploads/de5d4a5d-e923-4a4b-b925-1110eb80251f.png" 
            alt="Magnify Cash Logo" 
            className="h-8 w-8"
          />
          <span className="text-xl font-semibold">Magnify Cash</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {[
            { label: "Features", path: "features" },
            { label: "Roadmap", path: "roadmap" },
            { label: "Ecosystem", path: "ecosystem" },
            { label: "How it Works", path: "how-it-works" }
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.path)}
              className="text-secondary hover:text-primary transition-colors relative group cursor-pointer"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-pink-600 transition-all group-hover:w-full" />
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:opacity-90 transition-opacity hover:scale-105">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;