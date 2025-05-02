
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-purple-50/80 to-pink-50/80 opacity-60 animate-gradient" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="mx-auto max-w-7xl relative">
        <div className="flex flex-col items-center space-y-10 sm:space-y-14 max-w-[1200px] mx-auto">
          {/* Live badge */}
          <div className="animate-fade-in scale-90 sm:scale-100">
            <a
              href="https://miniappv2.magnify.cash/lending"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full px-5 py-2 text-sm font-medium bg-gradient-to-r from-blue-50 to-pink-50 text-primary hover:from-blue-100 hover:to-pink-100 transition-colors ring-1 ring-primary/10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse mr-2"></span>
              Live Shared Lending Pool
            </a>
          </div>

          {/* Main heading */}
          <div className="text-center max-w-5xl mx-auto animate-fade-in [animation-delay:200ms]">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
                Unlock Financial Freedom
              </span>
              <br className="hidden sm:block" />
              <span className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mt-4 sm:mt-6">
                Get a loan just by being you
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl text-center animate-fade-in [animation-delay:400ms] leading-relaxed px-4 font-light">
            Experience the future of decentralized finance: Identity-verified pools, 
            <span className="font-medium bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"> 20% max APY</span>, 
            and seamless gasless transactions—all in one platform.
          </p>

          {/* Social Proof Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 w-full max-w-4xl mx-auto animate-fade-in [animation-delay:500ms]">
            {[
              { value: "7.7K+", label: "ORB Verified Users" },
              { value: "5.8M+", label: "Total Impressions" },
              { value: "1.5K+", label: "Issued Loans" },
              { value: "$10.1K+", label: "Total Volume" },
            ].map((metric, index) => (
              <div 
                key={index} 
                className="text-center p-5 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-blue-300 transition-all hover:scale-105 shadow-md group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:animate-pulse">{metric.value}</div>
                <div className="text-sm text-gray-600 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 w-full max-w-xl mx-auto animate-fade-in [animation-delay:600ms] mt-4">
            <a 
              href="https://miniappv2.magnify.cash/lending"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-80 px-12 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-semibold transition-all text-center flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 group"
            >
              Become a Micro-lender
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="https://worldcoin.org/ecosystem/app_cfd0a40d70419e3675be53a0aa9b7e10"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-80 px-12 py-5 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full font-semibold transition-all text-lg hover:bg-white relative group overflow-hidden border border-gray-200 hover:border-blue-300 shadow-md hover:shadow-lg hover:-translate-y-1 flex items-center justify-center"
            >
              <span className="relative z-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Get a Micro-loan</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-pink-600 opacity-0 group-hover:opacity-5 transition-opacity" />
            </a>
          </div>

          {/* Status indicator */}
          <div className="flex items-center justify-center gap-2 animate-fade-in [animation-delay:800ms] mt-2">
            <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <p className="text-sm sm:text-base text-gray-500">
              Backed by Cutting-Edge Web3 Innovation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
