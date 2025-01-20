const CallToAction = () => {
  return (
    <section className="py-24 bg-primary text-white px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl sm:text-5xl font-bold mb-8">Join Us in Transforming Micro-Lending</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 bg-accent text-primary rounded-full font-semibold hover:bg-accent/90 transition-colors">
            Get Started Now
          </button>
          <button className="px-8 py-4 glass rounded-full font-semibold hover:bg-white/20 transition-colors">
            Download the App
          </button>
        </div>
        <form className="mt-6">
          <input type="email" placeholder="Sign up for updates" className="px-4 py-2 rounded-l-md" />
          <button type="submit" className="px-4 py-2 bg-accent text-primary rounded-r-md">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default CallToAction;