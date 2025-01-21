import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden px-6 lg:px-8 py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-pink-100 opacity-20 animate-gradient" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="mx-auto max-w-7xl text-center relative">
        <div className="animate-fade-in [animation-delay:200ms]">
          <a
            href="https://x.com/MagnifyCash/status/1879038868550459876"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-blue-100 text-blue-800 mb-6 animate-fade-in hover:bg-blue-200 transition-colors"
          >
            🚀 Now Live on World App Store
          </a>
          <h1 className="text-display font-bold tracking-tight text-primary mb-6">
            Transforming Global Finance
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Through Identity-Verified Lending
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-body-lg text-secondary mb-8 leading-relaxed animate-fade-in [animation-delay:400ms]">
            Magnify Cash is revolutionizing micro-lending by combining WorldID verification with gas-free transactions, making loans accessible to billions globally.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in [animation-delay:600ms]">
            <a 
              href="https://worldcoin.org/ecosystem/app_cfd0a40d70419e3675be53a0aa9b7e10"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105 flex items-center justify-center gap-2 relative overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative">Start Your Journey</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative" />
            </a>
            <button 
              disabled 
              className="px-8 py-4 bg-gray-100 text-gray-400 rounded-full font-semibold cursor-not-allowed hover:bg-gray-200 transition-colors relative group"
            >
              <span className="absolute -top-8 scale-0 group-hover:scale-100 transition-all bg-gray-800 text-white text-xs py-1 px-2 rounded">Coming Soon!</span>
              Become a Lender (Coming Soon)
            </button>
          </div>
          <div className="mt-6 flex items-center justify-center gap-8 animate-fade-in [animation-delay:800ms]">
            <p className="text-small text-muted flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Backed by Industry Leaders in Web3 and DeFi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;