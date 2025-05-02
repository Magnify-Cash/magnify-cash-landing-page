
import { Rocket, Users, Crown, Shield, Globe, Package, MapPin, Brain, PiggyBank, BadgeCheck, CircleDollarSign, CalendarDays } from "lucide-react";

const Roadmap = () => {
  const milestones = [
    {
      icon: <BadgeCheck className="w-8 h-8 text-purple-600" />,
      quarter: "April 24, 2025",
      title: "Magnify Cash V3 Launch",
      description: "Soulbound Credit NFTs and three-tiered liquidity pools now live on World App",
      isLive: true,
    },
    {
      icon: <CalendarDays className="w-8 h-8 text-blue-600" />,
      quarter: "April 29, 2025",
      title: "V3 Borrowing Goes Live",
      description: "All three vaults begin issuing loans based on credit tiers",
      isUpcoming: true,
    },
    {
      icon: <CircleDollarSign className="w-8 h-8 text-green-600" />,
      quarter: "Q2 2025",
      title: "Yield Analytics Platform",
      description: "Live analytics dashboard for lenders via Dune and Merkl",
      isUpcoming: true,
    },
    {
      icon: <Package className="w-8 h-8 text-purple-600" />,
      quarter: "February 2025",
      title: "Magnify.Cash V2 App",
      description: "Improved UX for users - Now completed",
      isCompleted: true,
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      quarter: "Q1 2025",
      title: "Launch & Security",
      description: "WorldID integration and security audits complete",
      isCompleted: true,
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      quarter: "March 2025",
      title: "Magnify.Cash AI Agent",
      description: "AI Agent for optimizing risk on loans/repaying",
      isCompleted: true,
    },
    {
      icon: <PiggyBank className="w-8 h-8 text-blue-600" />,
      quarter: "March 2025",
      title: "Lending Pools Launch",
      description: "Liquidity pools for Magnify.Cash borrowers",
      isCompleted: true,
    },
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      quarter: "Q3 2025", 
      title: "Asia/South America Expansion",
      description: "Launch in key Asian and South American markets",
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
                <div className={`p-6 rounded-2xl ${milestone.isLive ? 'bg-green-50/50 border-green-200' : milestone.isUpcoming ? 'bg-blue-50/50 border-blue-200' : milestone.isCompleted ? 'bg-gray-50/50 border-gray-200' : 'bg-white/50 border-border'} backdrop-blur-sm border hover:border-accent transition-all duration-300 hover:scale-105`}>
                  <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
                    {milestone.icon}
                    <div className="flex items-center">
                      <span className={`text-lg font-semibold ${milestone.isLive ? 'text-green-600' : milestone.isUpcoming ? 'text-blue-600' : milestone.isCompleted ? 'text-gray-500' : 'text-blue-600'}`}>{milestone.quarter}</span>
                      {milestone.isLive && (
                        <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-green-100 text-green-800 rounded-full">LIVE</span>
                      )}
                      {milestone.isUpcoming && (
                        <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">UPCOMING</span>
                      )}
                      {milestone.isCompleted && (
                        <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">COMPLETED</span>
                      )}
                    </div>
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
