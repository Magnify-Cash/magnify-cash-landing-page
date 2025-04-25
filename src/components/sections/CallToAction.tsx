const CallToAction = () => {
  return (
    <section className="py-16 sm:py-24 bg-black text-white px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-2xl sm:text-4xl font-bold mb-6 animate-fade-in leading-tight text-white">
          Join Magnify V3 and Start Earning Up to 20% APY Today
        </h2>
        <div className="flex flex-col gap-4 animate-fade-in [animation-delay:200ms] max-w-md mx-auto">
          <a 
            href="https://worldcoin.org/ecosystem/app_cfd0a40d70419e3675be53a0aa9b7e10" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full px-6 py-4 bg-gradient-to-r from-[#4F6AF6] to-pink-500 text-white rounded-full font-semibold hover:opacity-90 transition-all text-lg"
          >
            Access High-Yield Pools
          </a>
          <a 
            href="https://discord.gg/magnifycash" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all text-lg"
          >
            Join Our Community
          </a>
        </div>
        <form className="mt-8 max-w-md mx-auto animate-fade-in [animation-delay:400ms]">
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email for updates" 
              className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4F6AF6] hover:bg-white/20 transition-colors" 
            />
            <button 
              type="submit" 
              className="px-8 py-4 bg-gradient-to-r from-[#4F6AF6] to-pink-500 text-white rounded-full hover:opacity-90 transition-opacity font-semibold whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CallToAction;
