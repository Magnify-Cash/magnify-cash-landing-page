import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Menu, X, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 500);

      const sections = ["market-opportunity", "ecosystem", "roadmap", "features"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection || "");
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navigationItems = [{
    label: "Market Opportunity",
    path: "market-opportunity"
  }, {
    label: "Ecosystem",
    path: "ecosystem"
  }, {
    label: "Roadmap",
    path: "roadmap"
  }, {
    label: "How Borrowing Works",
    path: "features"
  }, {
    label: "Lending Pool",
    path: "https://miniappv2.magnify.cash/lending",
    external: true
  }, {
    label: "$MAG",
    path: "https://www.coingecko.com/en/coins/magnify-cash",
    external: true
  }];

  return <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity hover-lift">
            <img alt="Magnify Cash Logo" className="h-8 w-8 sm:h-10 sm:w-10 rounded-[20%]" src="/lovable-uploads/new-logo.png" />
            <span className="text-xl sm:text-2xl font-semibold">Magnify Cash</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navigationItems.map(item => item.external ? 
              <a 
                key={item.label} 
                href={item.path} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-3 py-2 text-secondary hover:text-primary transition-colors relative group cursor-pointer text-lg hover-lift"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-pink-600 transition-all group-hover:w-full" />
              </a> 
              : 
              <button 
                key={item.label} 
                onClick={() => scrollToSection(item.path)} 
                className={`px-3 py-2 text-lg transition-colors relative group cursor-pointer hover-lift ${activeSection === item.path ? 'text-primary font-medium' : 'text-secondary hover:text-primary'}`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-pink-600 transition-all ${activeSection === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </button>
            )}
          </div>

          <div className="flex items-center space-x-6">
            <a 
              href="https://miniappv2.magnify.cash/lending" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hidden sm:block"
            >
              <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:opacity-90 transition-opacity hover:scale-105 px-6 py-5 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl">
                Access Lending Pool
              </Button>
            </a>
            
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <div className={`md:hidden fixed inset-0 bg-background/80 backdrop-blur-xl transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{
        top: '5rem'
      }}>
          <div className="px-4 py-6 space-y-4">
            {navigationItems.map(item => item.external ? 
              <a 
                key={item.label} 
                href={item.path} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block py-2 text-secondary hover:text-primary transition-colors hover-lift"
              >
                {item.label}
              </a> 
              : 
              <button 
                key={item.label} 
                onClick={() => scrollToSection(item.path)} 
                className={`block w-full text-left py-2 transition-colors hover-lift ${activeSection === item.path ? 'text-primary font-medium' : 'text-secondary hover:text-primary'}`}
              >
                {item.label}
              </button>
            )}
            <a 
              href="https://miniappv2.magnify.cash/lending" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block pt-4"
            >
              <Button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:opacity-90 transition-opacity px-6 py-5 text-base font-semibold shadow-lg hover:shadow-xl">
                Access Lending Pool
              </Button>
            </a>
          </div>
        </div>
      </nav>

      <button onClick={scrollToTop} className={`fixed bottom-6 right-6 p-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`} aria-label="Scroll to top">
        <ChevronUp className="w-5 h-5 text-gray-600" />
      </button>
    </>;
};

export default Navigation;
