import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins, Wallet, PiggyBank, Bot } from "lucide-react";

const Ecosystem = () => {
  const ecosystemCards = [
    {
      title: (
        <>
          <span className="text-[#4F6AF6]">$MAG</span> Token & Staking
        </>
      ),
      description: "Participate in governance and earn rewards through our native token ecosystem.",
      icon: <Coins className="w-8 h-8 text-[#4F6AF6]" />,
      cta: {
        text: "Start staking now →",
        href: "https://staking.magnify.cash/",
      },
      disabled: false
    },
    {
      title: "WorldID-Verified Borrowing",
      description: "Quick, secure loans backed by your WorldID verification",
      icon: <Wallet className="w-8 h-8 text-pink-500" />,
      cta: {
        text: "Verify with WorldID →",
        href: "https://worldcoin.org/ecosystem/app_cfd0a40d70419e3675be53a0aa9b7e10",
      },
      disabled: false
    },
    {
      title: "Shared Lending Pool",
      description: "Earn yield by providing liquidity to micro-loans backed by World ID",
      icon: <PiggyBank className="w-8 h-8 text-gray-400" />,
      disabled: true,
      comingSoon: true
    },
    {
      title: "AI Risk Assessment",
      description: "Advanced borrower analysis and risk management",
      icon: <Bot className="w-8 h-8 text-gray-400" />,
      disabled: true,
      comingSoon: true
    }
  ];

  return (
    <section id="ecosystem" className="py-16 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-8">
          {ecosystemCards.map((card, index) => (
            <Card 
              key={index}
              className={`transition-all duration-300 backdrop-blur-sm bg-white/5 border border-white/10 animate-fade-in ${
                card.disabled ? 'opacity-50' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="space-y-4 text-center p-6">
                <div className="flex justify-center">{card.icon}</div>
                <CardTitle className="text-2xl font-semibold">
                  {card.title}
                  {card.comingSoon && (
                    <div className="text-sm text-gray-400 mt-1">
                      Coming Soon
                    </div>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center px-6 pb-6">
                <p className="text-gray-400 mb-6">{card.description}</p>
                {card.cta && !card.disabled && (
                  <a 
                    href={card.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#4F6AF6] to-pink-500 text-white font-medium hover:opacity-90 transition-all hover:scale-105"
                  >
                    {card.cta.text}
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;