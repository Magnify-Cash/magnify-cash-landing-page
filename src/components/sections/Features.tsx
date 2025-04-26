
const Features = () => {
  return (
    <section id="features" className="py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-6 animate-fade-in">Experience Magnify V3</h2>
        <p className="text-secondary text-center mb-16 max-w-2xl mx-auto text-lg animate-fade-in [animation-delay:200ms]">
          Join our shared lending pool with up to 20% APY, powered by World ID verification and gas-free transactions.
        </p>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              title: "1. Verify Identity",
              description: "Connect your World ID for instant pool access",
              icon: "🔐",
              status: "live"
            },
            {
              title: "2. Choose Your Pool",
              description: "Access our shared lending pool",
              icon: "💰",
              status: "live"
            },
            {
              title: "3. Start Earning",
              description: "Earn up to 20% APY with gas-free transactions",
              icon: "💸",
              status: "live"
            },
            {
              title: "4. Grow Together",
              description: (
                <>
                  Earn{' '}
                  <a 
                    href="https://www.coingecko.com/en/coins/magnify-cash" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    $MAG
                  </a>{' '}
                  rewards and participate in governance
                </>
              ),
              icon: "⭐",
              status: "live"
            },
          ].map((step, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm hover:border-blue-300 transition-all duration-300 hover:scale-105 group animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="text-5xl group-hover:animate-bounce">{step.icon}</div>
                {step.status === "live" && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Live
                  </span>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
