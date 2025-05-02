
import { ShieldCheck, TrendingUp, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";

const Problem = () => {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center space-y-16">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
            Get a Loan Just by Being You
          </h2>
          
          <div className="p-10 rounded-3xl bg-white/50 backdrop-blur-sm border border-border shadow-xl animate-fade-in [animation-delay:200ms]">
            <h3 className="text-3xl font-semibold mb-10">World ID Powered Lending</h3>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  icon: <ShieldCheck className="w-12 h-12 mx-auto mb-6 text-purple-600" />,
                  value: "Instant",
                  text: "Loan Approval Without Traditional Credit Checks",
                  link: "https://worldcoin.org/ecosystem/app_cfd0a40d70419e3675be53a0aa9b7e10"
                },
                {
                  icon: <TrendingUp className="w-12 h-12 mx-auto mb-6 text-blue-600" />,
                  value: "Live",
                  text: "Shared Lending Pool - Join Now",
                  link: "https://miniappv2.magnify.cash/lending"
                },
                {
                  icon: <Coins className="w-12 h-12 mx-auto mb-6 text-pink-600" />,
                  value: "20%",
                  text: "Maximum APY for Verified Lenders",
                  link: "https://miniappv2.magnify.cash/lending"
                }
              ].map((stat, index) => (
                <a 
                  key={index}
                  href={stat.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-border hover:border-accent transition-all duration-300 hover:scale-105 animate-fade-in group"
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-primary mb-3 animate-fade-in">{stat.value}</div>
                  <p className="text-secondary text-lg">{stat.text}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <ShieldCheck className="w-16 h-16 mx-auto mb-8 text-purple-600" />,
                title: "World ID Verification",
                description: "Get instant loans backed by your unique digital identity. No credit score needed, just your verified presence.",
                link: "https://worldcoin.org/ecosystem/app_cfd0a40d70419e3675be53a0aa9b7e10"
              },
              {
                icon: <Coins className="w-16 h-16 mx-auto mb-8 text-blue-600" />,
                title: "Shared Lending Pool",
                description: "Join our active lending marketplace. Earn up to 20% APY or access instant loans with zero collateral.",
                link: "https://miniappv2.magnify.cash/lending"
              },
              {
                icon: <TrendingUp className="w-16 h-16 mx-auto mb-8 text-pink-600" />,
                title: "Powered by $MAG",
                description: "Join a transparent, secure lending ecosystem settled on World Chain, revolutionizing micro-lending.",
                link: "https://www.coingecko.com/en/coins/magnify-cash"
              }
            ].map((item, index) => (
              <a 
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-10 rounded-3xl bg-white/50 backdrop-blur-sm border border-border shadow-xl hover:border-accent transition-all duration-300 hover:scale-105 group animate-fade-in"
                style={{ animationDelay: `${(index + 4) * 200}ms` }}
              >
                <div className="group-hover:animate-bounce">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-secondary text-lg leading-relaxed">{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
