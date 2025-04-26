
const CallToAction = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
      <div className="mx-auto max-w-7xl text-center relative">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 animate-fade-in leading-tight text-white max-w-3xl mx-auto">
          Join Magnify V3's Shared Lending Pool and Start Earning Up to 20% APY Today
        </h2>
        <div className="flex flex-col gap-4 animate-fade-in [animation-delay:200ms] max-w-md mx-auto">
          <a 
            href="https://miniappv2.magnify.cash/lending" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full px-6 py-4 bg-gradient-to-r from-[#4F6AF6] to-[#D946EF] text-white rounded-full font-semibold hover:opacity-90 transition-all text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Access Shared Lending Pool
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
              className="px-8 py-4 bg-gradient-to-r from-[#4F6AF6] to-[#D946EF] text-white rounded-full hover:opacity-90 transition-opacity font-semibold whitespace-nowrap shadow-lg hover:shadow-xl"
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
