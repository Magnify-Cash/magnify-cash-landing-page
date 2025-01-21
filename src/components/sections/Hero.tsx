import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Hero = () => {
  return (
    <section className="relative overflow-hidden px-6 lg:px-8 py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-pink-100 opacity-20 animate-gradient" />
      <div className="mx-auto max-w-7xl text-center relative">
        <div className="animate-fade-in [animation-delay:200ms]">
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
              className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105 flex items-center justify-center gap-2 group"
            >
              Start Your Journey 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <button disabled className="px-8 py-4 bg-gray-100 text-gray-400 rounded-full font-semibold cursor-not-allowed hover:bg-gray-200 transition-colors">
              Become a Lender (Coming Soon)
            </button>
          </div>
          <p className="mt-6 text-small text-muted animate-fade-in [animation-delay:800ms]">
            Backed by Industry Leaders in Web3 and DeFi
          </p>
        </div>

        <div className="relative mt-16 w-full max-w-[400px] mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-50" />
                  <img
                    src="/lovable-uploads/9108462a-763c-4f43-b522-d5e1cdf26014.png"
                    alt="Magnify Cash Welcome Screen"
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-50" />
                  <img
                    src="/lovable-uploads/ab4c71b6-a5a6-4315-bd97-679d96b0a46e.png"
                    alt="Magnify Cash Loan Eligibility"
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-50" />
                  <img
                    src="/lovable-uploads/058d4598-911c-44ec-a352-614d4fae40e5.png"
                    alt="Magnify Cash Loan Application"
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-4" />
            <CarouselNext className="hidden sm:flex -right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Hero;