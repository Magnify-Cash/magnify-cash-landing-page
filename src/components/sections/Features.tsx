const Features = () => {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-16">Why Magnify Cash?</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              title: "Identity-Backed Loans",
              description: "Secure loans verified with Worldcoin identity",
              icon: "🔒",
            },
            {
              title: "Gas-Free Transactions",
              description: "Borrow and repay without worrying about high fees",
              icon: "⚡",
            },
            {
              title: "Multi-Token Support",
              description: "Use WLD, USDC, or ETH for repayments",
              icon: "💱",
            },
            {
              title: "MAG Token Rewards",
              description: "Earn rewards for repayments and staking",
              icon: "🎁",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-background border border-border hover:border-accent transition-colors"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;