import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-pink-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="text-white/70">
              We are dedicated to providing secure, gas-free loans for everyone.
            </p>
            <Link to="/about" className="text-white/70 hover:text-white transition-colors">
              Learn More
            </Link>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <Link to="/faq" className="text-white/70 hover:text-white transition-colors">
              FAQ
            </Link>
            <Link to="/contact" className="text-white/70 hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect With Us</h3>
            <div className="flex flex-col space-y-2">
              <a 
                href="https://x.com/magnifycash" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/70 hover:text-white transition-colors"
              >
                X.com
              </a>
              <a 
                href="https://www.linkedin.com/company/magnifylabs/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/70 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/magnify-cash" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/70 hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center text-white/70">
          &copy; {new Date().getFullYear()} Magnify Cash. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
