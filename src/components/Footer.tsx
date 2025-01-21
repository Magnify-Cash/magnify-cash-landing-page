import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-pink-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">About Us</h3>
            <p className="text-white/80">
              We are dedicated to providing secure, gas-free loans for everyone.
            </p>
            <Link to="/about" className="text-white/80 hover:text-white transition-colors">
              Learn More
            </Link>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Support</h3>
            <div className="flex flex-col space-y-4">
              <Link to="/faq" className="text-white/80 hover:text-white transition-colors">
                FAQ
              </Link>
              <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Connect With Us</h3>
            <div className="flex flex-col space-y-4">
              <a 
                href="https://x.com/magnifycash" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transition-colors"
              >
                X.com
              </a>
              <a 
                href="https://www.linkedin.com/company/magnifylabs/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/magnify-cash" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center text-white/80">
          &copy; {new Date().getFullYear()} Magnify Cash. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;