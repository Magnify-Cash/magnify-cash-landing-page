import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins, Wallet, PiggyBank, Bot } from "lucide-react";

const Ecosystem = () => {
  const ecosystemCards = [
    {
      title: (
        <>
          <a 
            href="https://www.coingecko.com/en/coins/magnify-cash" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            $MAG
          </a>{' '}
          Token & Staking
        </>
      ),
      description: (
        <>
          Participate in governance and earn rewards through our native token ecosystem.{' '}
          <a 
            href="https://staking.magnify.cash/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105 animate-pulse"
          >
            Start staking now →
          </a>
        </>
      ),
      icon: <Coins className="w-8 h-8 text-blue-600" />,
      disabled: false
    },
    {
      title: "WorldID-Verified Borrowing",
      description: (
        <>
          Quick, secure loans backed by your WorldID verification{' '}
          <a 
            href="https://worldcoin.org/ecosystem/app_cfd0a40d70419e3675be53a0aa9b7e10" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105 animate-pulse"
          >
            Verify with WorldID →
          </a>
        </>
      ),
      icon: <Wallet className="w-8 h-8 text-pink-600" />,
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
    <section id="ecosystem" className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
          Product Ecosystem
        </h2>
        <p className="text-center text-secondary text-lg mb-16 max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
          A comprehensive suite of products designed to revolutionize micro-lending through blockchain technology and identity verification.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ecosystemCards.map((card, index) => (
            <Card 
              key={index}
              className={`transition-all duration-300 hover:shadow-xl backdrop-blur-sm bg-white/50 animate-fade-in ${
                card.disabled ? 'opacity-50' : 'hover:scale-105'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="space-y-4">
                <div className="flex justify-center group-hover:animate-bounce">{card.icon}</div>
                <CardTitle className="text-center text-lg">
                  {card.title}
                  {card.comingSoon && (
                    <span className="block text-sm text-gray-400 mt-1 animate-pulse">
                      Coming Soon
                    </span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-secondary mb-4">{card.description}</p>
                <div className="h-2 w-full bg-gradient-to-r from-blue-600 to-pink-600 rounded-full opacity-20 group-hover:opacity-40 transition-opacity" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;