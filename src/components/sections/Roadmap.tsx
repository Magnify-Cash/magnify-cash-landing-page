import { Rocket, Users, Crown } from "lucide-react";

const Roadmap = () => {
  const milestones = [
    {
      icon: <Rocket className="w-8 h-8 text-blue-600" />,
      quarter: "Q1 2025",
      title: "Launch V2",
      description: "Advanced liquidity pools and performance optimizations.",
    },
    {
      icon: <Users className="w-8 h-8 text-pink-600" />,
      quarter: "Q2 2025",
      title: "Scale User Base",
      description: "Expand borrower base and deepen Worldcoin integration.",
    },
    {
      icon: <Crown className="w-8 h-8 text-purple-600" />,
      quarter: "Q3 2025",
      title: "Token Utilities",
      description: "Expand MAG token utilities for governance and rewards.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-background px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
          Our Vision for Scaling Financial Inclusion
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-pink-600 hidden md:block" />
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`relative flex items-center gap-8 mb-12 last:mb-0 animate-fade-in`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12 md:ml-auto'}`}>
                <div className="p-6 rounded-2xl bg-white border border-border hover:border-accent transition-colors">
                  <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
                    {milestone.icon}
                    <span className="text-lg font-semibold text-blue-600">{milestone.quarter}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-secondary">{milestone.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-secondary italic">
          We're building the future of micro-lending, one step at a time.
        </p>
      </div>
    </section>
  );
};

export default Roadmap;