import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden px-6 lg:px-8 py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-pink-100 opacity-20 animate-gradient" />
      <div className="mx-auto max-w-7xl text-center relative">
        <div className="animate-fade-in [animation-delay:200ms]">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary mb-6">
            Revolutionizing Micro-Lending
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              with Identity-Backed Loans
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-secondary mb-8 animate-fade-in [animation-delay:400ms]">
            Secure, gas-free loans for everyone. Verified with Worldcoin.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in [animation-delay:600ms]">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105 flex items-center justify-center gap-2 group">
              Start Borrowing Now 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button disabled className="px-8 py-4 bg-gray-100 text-gray-400 rounded-full font-semibold cursor-not-allowed hover:bg-gray-200 transition-colors">
              Lend Now (Coming Soon)
            </button>
          </div>
          <p className="mt-6 text-sm text-secondary animate-fade-in [animation-delay:800ms]">Backed by Visionary Supporters</p>
        </div>

        <div className="relative mt-16 w-full max-w-[1200px] mx-auto">
          <div className="flex justify-center animate-float">
            <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="/lovable-uploads/5b500459-388e-4e0b-b627-375467e569aa.png"
                alt="Magnify Cash Dashboard Preview"
                className="w-full h-auto transform transition-transform duration-700 ease-out group-hover:scale-102"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;