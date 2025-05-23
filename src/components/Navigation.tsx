
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Menu, X, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import { Image } from "./ui/image";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [logoError, setLogoError] = useState(false);

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

  const navigationItems = [
    {
      label: "Market Opportunity",
      path: "market-opportunity"
    },
    {
      label: "Ecosystem",
      path: "ecosystem"
    },
    {
      label: "Roadmap",
      path: "roadmap"
    },
    {
      label: "How Borrowing Works",
      path: "features"
    },
    {
      label: "Lending Pool",
      path: "https://miniappv2.magnify.cash/lending",
      external: true
    },
    {
      label: "$MAG",
      path: "https://www.coingecko.com/en/coins/magnify-cash",
      external: true
    }
  ];

  const logoUrl = "https://xomvanapvfsycnvwcows.supabase.co/storage/v1/object/public/website-assets//photo_2025-03-28%2014.44.50.jpeg";
  
  return <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-4 hover:opacity-90 transition-all group">
            <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12">
              <img 
                alt="Magnify Cash Logo" 
                className="h-full w-full object-contain transition-transform group-hover:scale-105 rounded-[10%]"
                src={logoUrl}
                onError={() => setLogoError(true)}
              />
              {logoError && (
                <div className="h-full w-full bg-gradient-to-r from-blue-600 to-pink-600 flex items-center justify-center rounded-[10%]">
                  <span className="text-white font-bold">MC</span>
                </div>
              )}
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent whitespace-nowrap">Magnify Cash</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navigationItems.map(item => item.external ? 
              <a 
                key={item.label} 
                href={item.path} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-3 py-2 text-secondary hover:text-primary transition-colors relative group cursor-pointer text-sm lg:text-base hover-lift"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-pink-600 transition-all duration-300 group-hover:w-full" />
              </a> 
              : 
              <button 
                key={item.label} 
                onClick={() => scrollToSection(item.path)} 
                className={`px-3 py-2 text-sm lg:text-base transition-all relative group cursor-pointer hover-lift ${activeSection === item.path ? 'font-medium' : ''}`}
              >
                <span className={`relative z-10 ${activeSection === item.path ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent' : 'text-secondary hover:text-primary'}`}>{item.label}</span>
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-pink-600 transition-all duration-300 ${activeSection === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </button>
            )}
          </div>

          <div className="flex items-center space-x-6">
            <div className="hidden sm:block ml-6">
              <a 
                href="https://miniappv2.magnify.cash/lending" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:opacity-90 transition-all hover:scale-105 px-4 py-5 text-base font-semibold shadow-lg hover:shadow-xl rounded-full">
                  Access Lending Pool
                </Button>
              </a>
            </div>
            
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
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">{item.label}</span>
              </a> 
              : 
              <button 
                key={item.label} 
                onClick={() => scrollToSection(item.path)} 
                className={`block w-full text-left py-2 transition-colors hover-lift ${activeSection === item.path ? 'text-primary font-medium' : 'text-secondary hover:text-primary'}`}
              >
                <span className={activeSection === item.path ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent' : ''}>{item.label}</span>
              </button>
            )}
            <a 
              href="https://miniappv2.magnify.cash/lending" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block pt-4"
            >
              <Button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:opacity-90 transition-all px-6 py-5 text-base font-semibold shadow-lg hover:shadow-xl rounded-full">
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
