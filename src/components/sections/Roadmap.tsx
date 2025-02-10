
import { Rocket, Users, Crown, Shield, Globe, Bot } from "lucide-react";

const Roadmap = () => {
  const milestones = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      quarter: "Q1 2025",
      title: "Launch & Security",
      description: "WorldID integration and security audits complete",
    },
    {
      icon: <Bot className="w-8 h-8 text-purple-600" />,
      quarter: "February 2025",
      title: "Launch Magnify.Cash V2 App",
      description: "AI-powered lending strategy advisor to optimize loan utilization",
    },
    {
      icon: <Rocket className="w-8 h-8 text-blue-600" />,
      quarter: "Q2 2025",
      title: "Market Expansion",
      description: "Launch in key emerging markets with local partnerships",
    },
    {
      icon: <Users className="w-8 h-8 text-pink-600" />,
      quarter: "Q3 2025",
      title: "Community Growth",
      description: "Launch lending pools and governance framework",
    },
    {
      icon: <Crown className="w-8 h-8 text-purple-600" />,
      quarter: "Q4 2025",
      title: "Full Decentralization",
      description: "Complete transition to DAO governance",
    },
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      quarter: "2026",
      title: "Global Scale",
      description: "Expand to 50+ countries with localized solutions",
    },
  ];

  return (
    <section id="roadmap" className="py-24 bg-gradient-to-b from-white to-background px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
          Growth Strategy
        </h2>
        <p className="text-center text-secondary text-lg mb-16 max-w-2xl mx-auto">
          Our strategic roadmap to revolutionize global micro-lending through technology and community.
        </p>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-pink-600 hidden md:block" />
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`relative flex items-center gap-8 mb-12 last:mb-0 animate-fade-in`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12 md:ml-auto'}`}>
                <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-border hover:border-accent transition-all duration-300 hover:scale-105">
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
      </div>
    </section>
  );
};

export default Roadmap;
