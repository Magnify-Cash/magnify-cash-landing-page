
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-pink-100 opacity-20 animate-gradient" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="mx-auto max-w-7xl relative">
        <div className="flex flex-col items-center space-y-12 max-w-[1200px] mx-auto">
          {/* Live badge */}
          <div className="animate-fade-in scale-90 sm:scale-100">
            <a
              href="https://worldcoin.org/ecosystem/app_cfd0a40d70419e3675be53a0aa9b7e10"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors ring-1 ring-blue-700/10"
            >
              🚀 Now Live on World App Store
            </a>
          </div>

          {/* Main heading */}
          <div className="text-center max-w-5xl mx-auto animate-fade-in [animation-delay:200ms]">
            <h1 className="text-[2.5rem] sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.2] mb-8">
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
                Transforming Global Finance Through
              </span>
              <br className="hidden sm:block" />
              <span className="inline-block bg-gradient-to-r from-[#4F6AF6] via-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent mt-2 sm:mt-4">
                Identity-Verified Lending
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl text-center animate-fade-in [animation-delay:400ms] leading-relaxed px-4">
            Magnify Cash is revolutionizing micro-lending by combining WorldID verification with gas-free transactions, making loans accessible to billions globally.
          </p>

          {/* Social Proof Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 w-full max-w-4xl mx-auto animate-fade-in [animation-delay:500ms]">
            {[
              { value: "4,520+", label: "Verified Users" },
              { value: "45.5K+", label: "Active Sessions" },
              { value: "$7K+", label: "Total Volume" },
              { value: "90%+", label: "Repayment Rate" },
            ].map((metric, index) => (
              <div key={index} className="text-center p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200 hover:border-blue-300 transition-all hover:scale-105">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-xl mx-auto animate-fade-in [animation-delay:600ms]">
            <a 
              href="https://worldcoin.org/ecosystem/app_cfd0a40d70419e3675be53a0aa9b7e10"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#6366F1] hover:bg-[#5558F0] text-white rounded-full font-semibold transition-all text-center flex items-center justify-center gap-2 text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <button 
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-gray-700 rounded-full font-semibold transition-all text-lg hover:bg-gray-50 relative group overflow-hidden border border-gray-200 hover:border-blue-300"
            >
              <span className="relative z-10">Become a Lender</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-pink-600 opacity-0 group-hover:opacity-10 transition-opacity" />
            </button>
          </div>

          {/* Status indicator */}
          <div className="flex items-center justify-center gap-2 animate-fade-in [animation-delay:800ms] mt-2">
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
