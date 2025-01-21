const CallToAction = () => {
  return (
    <section className="py-24 bg-primary text-white px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl sm:text-5xl font-bold mb-8 animate-fade-in">Join the Future of Decentralized Finance</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
          Be part of a revolutionary platform that's making financial inclusion a reality for billions worldwide.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in [animation-delay:400ms]">
          <a 
            href="https://worldcoin.org/ecosystem/app_cfd0a40d70419e3675be53a0aa9b7e10" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105 animate-pulse"
          >
            Get started
          </a>
          <button className="px-8 py-4 glass rounded-full font-semibold hover:bg-white/20 transition-all hover:scale-105">
            Join Our Community
          </button>
        </div>
        <form className="mt-8 max-w-md mx-auto animate-fade-in [animation-delay:600ms]">
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter your email for updates" 
              className="flex-1 px-6 py-3 rounded-l-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent hover:bg-white/20 transition-colors" 
            />
            <button 
              type="submit" 
              className="px-8 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-r-full hover:opacity-90 transition-opacity font-semibold hover:scale-105"
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