const Features = () => {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-4">How Borrowing Works</h2>
        <p className="text-secondary text-center mb-16 max-w-2xl mx-auto">
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
              className="p-6 rounded-2xl bg-background border border-border hover:border-accent transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-secondary">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;