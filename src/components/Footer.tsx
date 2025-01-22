import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-pink-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold">About Us</h3>
            <p className="text-white/90 leading-relaxed text-sm sm:text-base">
              We are dedicated to providing secure, gas-free loans for everyone.
            </p>
            <Link to="/about" className="inline-block text-white/90 hover:text-white transition-colors">
              Learn More
            </Link>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold">Support</h3>
            <div className="flex flex-col space-y-3">
              <Link to="/faq" className="text-white/90 hover:text-white transition-colors text-sm sm:text-base">
                FAQ
              </Link>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold">Connect With Us</h3>
            <div className="flex flex-col space-y-3">
              <a 
                href="https://x.com/magnifycash" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/90 hover:text-white transition-colors text-sm sm:text-base"
              >
                X.com
              </a>
              <a 
                href="https://www.linkedin.com/company/magnifylabs/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/90 hover:text-white transition-colors text-sm sm:text-base"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/magnify-cash" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/90 hover:text-white transition-colors text-sm sm:text-base"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 sm:mt-20 pt-8 text-center text-white/80 border-t border-white/20 text-sm sm:text-base">
          &copy; {new Date().getFullYear()} Magnify Cash. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;