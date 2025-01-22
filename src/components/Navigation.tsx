import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navigationItems = [
    { label: "Market Opportunity", path: "market-opportunity" },
    { label: "Ecosystem", path: "ecosystem" },
    { label: "Roadmap", path: "roadmap" },
    { label: "How Borrowing Works", path: "features" },
    { 
      label: "$MAG", 
      path: "https://www.coingecko.com/en/coins/magnify-cash",
      external: true 
    }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <img 
            src="/lovable-uploads/de5d4a5d-e923-4a4b-b925-1110eb80251f.png" 
            alt="Magnify Cash Logo" 
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-[20%]"
          />
          <span className="text-xl sm:text-2xl font-semibold">Magnify Cash</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
          {navigationItems.map((item) => (
            item.external ? (
              <a
                key={item.label}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors relative group cursor-pointer text-lg"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-pink-600 transition-all group-hover:w-full" />
              </a>
            ) : (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.path)}
                className="text-secondary hover:text-primary transition-colors relative group cursor-pointer text-lg"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-pink-600 transition-all group-hover:w-full" />
              </button>
            )
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="https://worldcoin.org/ecosystem/app_cfd0a40d70419e3675be53a0aa9b7e10"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block"
          >
            <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:opacity-90 transition-opacity hover:scale-105 px-6 py-5 text-base sm:text-lg font-semibold">
              Get Started
            </Button>
          </a>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border">
          <div className="px-4 py-6 space-y-4">
            {navigationItems.map((item) => (
              item.external ? (
                <a
                  key={item.label}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 text-secondary hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.path)}
                  className="block w-full text-left py-2 text-secondary hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              )
            ))}
            <a
              href="https://worldcoin.org/ecosystem/app_cfd0a40d70419e3675be53a0aa9b7e10"
              target="_blank"
              rel="noopener noreferrer"
              className="block pt-4"
            >
              <Button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:opacity-90 transition-opacity px-6 py-5 text-base font-semibold">
                Get Started
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;