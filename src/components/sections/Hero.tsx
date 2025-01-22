import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-12 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-pink-100 opacity-20 animate-gradient" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="mx-auto max-w-7xl relative">
        <div className="flex flex-col items-center space-y-8">
          {/* Live badge */}
          <a
            href="https://x.com/MagnifyCash/status/1879038868550459876"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full px-6 py-2.5 text-sm font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors animate-fade-in"
          >
            🚀 Now Live on World App Store
          </a>

          {/* Main heading */}
          <div className="text-center space-y-2 animate-fade-in [animation-delay:200ms] max-w-5xl">
            <h1 className="text-[2.5rem] sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-4">
              <span className="text-primary block sm:inline">
                Transforming
              </span>
              <span className="text-primary block sm:inline">
                Global
              </span>
              <span className="text-primary block sm:inline">
                Finance
              </span>
              <span className="bg-gradient-to-r from-[#4F6AF6] via-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent block sm:inline">
                Through
              </span>
              <span className="bg-gradient-to-r from-[#4F6AF6] via-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent block sm:inline">
                Identity-
              </span>
              <span className="bg-gradient-to-r from-[#4F6AF6] via-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent block sm:inline">
                Verified
              </span>
              <span className="bg-gradient-to-r from-[#4F6AF6] via-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent block sm:inline">
                Lending
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl text-center animate-fade-in [animation-delay:400ms] leading-relaxed">
            Magnify Cash is revolutionizing micro-lending by combining WorldID verification with gas-free transactions, making loans accessible to billions globally.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row w-full gap-4 max-w-xl animate-fade-in [animation-delay:600ms] justify-center">
            <a 
              href="https://worldcoin.org/ecosystem/app_cfd0a40d70419e3675be53a0aa9b7e10"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#4F6AF6] to-[#D946EF] text-white rounded-full font-semibold hover:opacity-90 transition-all text-center flex items-center justify-center gap-2 text-lg"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <button 
              disabled 
              className="w-full sm:w-auto px-8 py-4 bg-gray-100 text-gray-400 rounded-full font-semibold cursor-not-allowed hover:bg-gray-200 transition-colors relative group text-lg"
            >
              <span className="absolute -top-8 scale-0 group-hover:scale-100 transition-all bg-gray-800 text-white text-xs py-1 px-2 rounded">Coming Soon!</span>
              Become a Lender
            </button>
          </div>

          {/* Status indicator */}
          <div className="flex items-center justify-center gap-2 animate-fade-in [animation-delay:800ms] mt-8">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <p className="text-sm sm:text-base text-gray-500">
              Backed by Industry Leaders in Web3 and DeFi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;