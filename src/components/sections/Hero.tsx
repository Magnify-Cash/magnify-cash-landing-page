import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-12 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-pink-100 opacity-20 animate-gradient" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="mx-auto max-w-7xl relative">
        <div className="flex flex-col items-center space-y-8 max-w-[1200px] mx-auto">
          {/* Live badge */}
          <div className="animate-fade-in">
            <a
              href="https://worldcoin.org/ecosystem/app_cfd0a40d70419e3675be53a0aa9b7e10"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
            >
              🚀 Now Live on World App Store
            </a>
          </div>

          {/* Main heading */}
          <div className="text-center animate-fade-in [animation-delay:200ms]">
            <h1 className="text-[2.5rem] sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-8">
              <span className="inline-block mr-2">Transforming</span>
              <span className="inline-block mr-2">Global</span>
              <span className="inline-block mr-2">Finance</span>
              <span className="inline-block mr-2">Through</span>
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[#4F6AF6] via-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent inline-block mr-2">
                Identity-Verified
              </span>
              <span className="bg-gradient-to-r from-[#4F6AF6] via-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent inline-block">
                Lending
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl text-center animate-fade-in [animation-delay:400ms] leading-relaxed">
            Magnify Cash is revolutionizing micro-lending by combining WorldID verification with gas-free transactions, making loans accessible to billions globally.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xl mx-auto animate-fade-in [animation-delay:600ms] mt-4">
            <a 
              href="https://worldcoin.org/ecosystem/app_cfd0a40d70419e3675be53a0aa9b7e10"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#6366F1] hover:bg-[#5558F0] text-white rounded-full font-semibold transition-all text-center flex items-center justify-center gap-2 text-lg"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <button 
              className="w-full sm:w-auto px-8 py-4 bg-gray-100 text-gray-500 rounded-full font-semibold transition-colors text-lg hover:bg-gray-200"
            >
              Become a Lender
            </button>
          </div>

          {/* Status indicator */}
          <div className="flex items-center justify-center gap-2 animate-fade-in [animation-delay:800ms] mt-8">
            <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
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