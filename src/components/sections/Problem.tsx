import { Globe, Users, Coins } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
            A Global Problem, A Decentralized Solution
          </h2>
          <div className="grid md:grid-cols-3 gap-12 mt-16">
            <div className="p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-border shadow-lg hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in group">
              <Globe className="w-16 h-16 mx-auto mb-6 text-blue-600 group-hover:animate-bounce" />
              <h3 className="text-2xl font-semibold mb-4">Global Impact</h3>
              <p className="text-secondary text-lg">
                Over 2 billion people remain unbanked and excluded from affordable credit.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-border shadow-lg hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in [animation-delay:200ms] group">
              <Users className="w-16 h-16 mx-auto mb-6 text-pink-600 group-hover:animate-bounce" />
              <h3 className="text-2xl font-semibold mb-4">Identity-Backed</h3>
              <p className="text-secondary text-lg">
                Worldcoin's Proof of Personhood ensures secure and trusted lending.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-border shadow-lg hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in [animation-delay:400ms] group">
              <Coins className="w-16 h-16 mx-auto mb-6 text-purple-600 group-hover:animate-bounce" />
              <h3 className="text-2xl font-semibold mb-4">Gas-Free Loans</h3>
              <p className="text-secondary text-lg">
                Enabling accessible financial services without transaction fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;