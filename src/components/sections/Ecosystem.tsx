import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins, Wallet, PiggyBank, Bot } from "lucide-react";

const Ecosystem = () => {
  const ecosystemCards = [
    {
      title: "Magnify Token and Staking Information",
      icon: <Coins className="w-8 h-8 text-blue-600" />,
      disabled: false
    },
    {
      title: "Magnify WorldCoin App Borrow",
      icon: <Wallet className="w-8 h-8 text-pink-600" />,
      disabled: false
    },
    {
      title: "Magnify WorldCoin App Lend",
      icon: <PiggyBank className="w-8 h-8 text-gray-400" />,
      disabled: true,
      comingSoon: true
    },
    {
      title: "Magnify AI Agent",
      icon: <Bot className="w-8 h-8 text-gray-400" />,
      disabled: true,
      comingSoon: true
    }
  ];

  return (
    <section id="ecosystem" className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
          Magnify Ecosystem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ecosystemCards.map((card, index) => (
            <Card 
              key={index}
              className={`transition-all duration-300 hover:shadow-xl backdrop-blur-sm bg-white/50 ${
                card.disabled ? 'opacity-50' : 'hover:scale-105'
              }`}
            >
              <CardHeader className="space-y-4">
                <div className="flex justify-center">{card.icon}</div>
                <CardTitle className="text-center text-lg">
                  {card.title}
                  {card.comingSoon && (
                    <span className="block text-sm text-gray-400 mt-1">
                      Coming Soon
                    </span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-2 w-full bg-gradient-to-r from-blue-600 to-pink-600 rounded-full opacity-20" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;