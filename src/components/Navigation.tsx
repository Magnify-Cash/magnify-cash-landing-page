import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold hover:opacity-80 transition-opacity">
          Magnify Cash
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {["Features", "Pricing", "About"].map((item, index) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-secondary hover:text-primary transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-pink-600 transition-all group-hover:w-full" />
            </Link>
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