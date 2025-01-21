const Features = () => {
  return (
    <section id="how-it-works" className="py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-6">How Borrowing Works</h2>
        <p className="text-secondary text-center mb-16 max-w-2xl mx-auto text-lg">
          Magnify Cash is a revolutionary micro-lending platform offering identity-backed, gas-free loans through your Worldcoin account.
        </p>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              title: "1. Verify Identity",
              description: "Connect your Worldcoin account and verify with World ID",
              icon: "🔐",
            },
            {
              title: "2. Apply for Loan",
              description: "Choose your loan amount based on your verification level",
              icon: "📝",
            },
            {
              title: "3. Receive Funds",
              description: "Get instant gas-free transfer to your wallet",
              icon: "💸",
            },
            {
              title: "4. Manage Repayments",
              description: "Make flexible repayments through our simple interface",
              icon: "✅",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-border shadow-lg hover:border-accent transition-all duration-300 hover:scale-105 group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-6xl mb-6 group-hover:animate-bounce">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-secondary">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;