import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden px-6 lg:px-8 py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-pink-100 opacity-20" />
      <div className="mx-auto max-w-7xl text-center relative">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary mb-6">
            Revolutionizing Micro-Lending
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
              with Identity-Backed Loans
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-secondary mb-8">
            Secure, gas-free loans for everyone. Verified with Worldcoin.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-accent text-primary rounded-full font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2">
              Start Borrowing Now <ArrowRight className="w-4 h-4" />
            </button>
            <button disabled className="px-8 py-4 bg-gray-100 text-gray-400 rounded-full font-semibold cursor-not-allowed">
              Lend Now (Coming Soon)
            </button>
          </div>
          <p className="mt-6 text-sm text-secondary">Backed by Visionary Supporters</p>
        </div>

        <div className="relative mt-16 animate-float">
          <div className="flex justify-center">
            <img
              src="https://antimetal.com/images/hero/preview.png"
              alt="Magnify Cash App Preview"
              className="rounded-3xl shadow-2xl max-w-[90%] w-auto h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;