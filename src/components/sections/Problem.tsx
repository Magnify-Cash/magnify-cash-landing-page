
import { ShieldCheck, TrendingUp, Coins } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center space-y-16">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
            Revolutionizing DeFi Access
          </h2>
          
          <div className="p-10 rounded-3xl bg-white/50 backdrop-blur-sm border border-border shadow-xl animate-fade-in [animation-delay:200ms]">
            <h3 className="text-3xl font-semibold mb-10">DeFi Market Potential</h3>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  icon: <TrendingUp className="w-12 h-12 mx-auto mb-6 text-blue-600" />,
                  value: "$47B",
                  text: "Total Value Locked in DeFi lending protocols"
                },
                {
                  icon: <ShieldCheck className="w-12 h-12 mx-auto mb-6 text-pink-600" />,
                  value: "7.7K+",
                  text: "World ID verified users on Magnify"
                },
                {
                  icon: <Coins className="w-12 h-12 mx-auto mb-6 text-purple-600" />,
                  value: "20%",
                  text: "Maximum APY for verified lenders"
                }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/5 to-pink-500/5 border border-border hover:border-accent transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  {stat.icon}
                  <div className="text-4xl font-bold text-primary mb-3 animate-fade-in">{stat.value}</div>
                  <p className="text-secondary text-lg">{stat.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <ShieldCheck className="w-16 h-16 mx-auto mb-8 text-blue-600" />,
                title: "The Challenge",
                description: "Traditional DeFi platforms struggle with identity verification, high gas fees, and complex user experiences."
              },
              {
                icon: <Coins className="w-16 h-16 mx-auto mb-8 text-pink-600" />,
                title: "Our Innovation",
                description: "Identity-verified lending pools with zero gas fees, offering up to 20% APY through World ID verification."
              },
              {
                icon: <TrendingUp className="w-16 h-16 mx-auto mb-8 text-purple-600" />,
                title: "The Opportunity",
                description: "Join a growing ecosystem of verified users earning sustainable yields through transparent, secure lending pools."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="p-10 rounded-3xl bg-white/50 backdrop-blur-sm border border-border shadow-xl hover:border-accent transition-all duration-300 hover:scale-105 group animate-fade-in"
                style={{ animationDelay: `${(index + 4) * 200}ms` }}
              >
                <div className="group-hover:animate-bounce">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-secondary text-lg leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
