import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-pink-100 opacity-20 animate-gradient" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="mx-auto max-w-7xl text-center relative">
        <div className="animate-fade-in [animation-delay:200ms]">
          <a
            href="https://x.com/MagnifyCash/status/1879038868550459876"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full px-6 py-2 text-base font-medium bg-blue-100 text-blue-800 mb-8 animate-fade-in hover:bg-blue-200 transition-colors"
          >
            🚀 Now Live on World App Store
          </a>
          <h1 className="text-4xl sm:text-display font-bold tracking-tight text-primary mb-8 leading-[1.1]">
            Transforming
            <br />
            Global
            <br />
            Finance
            <br />
            <span className="bg-gradient-to-b from-[#9b87f5] via-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
              Through
              <br />
              Identity-
              <br />
              Verified
              <br />
              Lending
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg sm:text-body-lg text-secondary mb-10 leading-relaxed animate-fade-in [animation-delay:400ms] px-4">
            Magnify Cash is revolutionizing micro-lending by combining WorldID verification with gas-free transactions, making loans accessible to billions globally.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in [animation-delay:600ms] px-4">
            <a 
              href="https://worldcoin.org/ecosystem/app_cfd0a40d70419e3675be53a0aa9b7e10"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105 flex items-center justify-center gap-2 relative overflow-hidden w-full sm:w-auto"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative">Start Your Journey</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative" />
            </a>
            <button 
              disabled 
              className="px-8 py-4 bg-gray-100 text-gray-400 rounded-full font-semibold cursor-not-allowed hover:bg-gray-200 transition-colors relative group w-full sm:w-auto"
            >
              <span className="absolute -top-8 scale-0 group-hover:scale-100 transition-all bg-gray-800 text-white text-xs py-1 px-2 rounded">Coming Soon!</span>
              Become a Lender
            </button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-8 animate-fade-in [animation-delay:800ms]">
            <p className="text-sm sm:text-small text-muted flex items-center gap-2">
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