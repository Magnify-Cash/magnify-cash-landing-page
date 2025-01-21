import { Globe, Users, Coins, TrendingUp } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center space-y-16">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
            A Global Problem, A Decentralized Solution
          </h2>
          
          {/* Market Statistics */}
          <div className="p-10 rounded-3xl bg-white/50 backdrop-blur-sm border border-border shadow-xl animate-fade-in">
            <h3 className="text-3xl font-semibold mb-10">The Global Micro-Lending Market</h3>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/5 to-pink-500/5 border border-border hover:border-accent transition-all duration-300 hover:scale-105">
                <TrendingUp className="w-12 h-12 mx-auto mb-6 text-blue-600" />
                <div className="text-4xl font-bold text-primary mb-3">$160B</div>
                <p className="text-secondary text-lg">Market value in 2023</p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/5 to-pink-500/5 border border-border hover:border-accent transition-all duration-300 hover:scale-105">
                <TrendingUp className="w-12 h-12 mx-auto mb-6 text-pink-600" />
                <div className="text-4xl font-bold text-primary mb-3">12.5%</div>
                <p className="text-secondary text-lg">Annual growth rate</p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/5 to-pink-500/5 border border-border hover:border-accent transition-all duration-300 hover:scale-105">
                <TrendingUp className="w-12 h-12 mx-auto mb-6 text-purple-600" />
                <div className="text-4xl font-bold text-primary mb-3">$300B</div>
                <p className="text-secondary text-lg">Projected by 2030</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-10 rounded-3xl bg-white/50 backdrop-blur-sm border border-border shadow-xl hover:border-accent transition-all duration-300 hover:scale-105 group">
              <Globe className="w-16 h-16 mx-auto mb-8 text-blue-600 group-hover:animate-bounce" />
              <h3 className="text-2xl font-semibold mb-4">Global Impact</h3>
              <p className="text-secondary text-lg leading-relaxed">
                Over 2 billion people remain unbanked, lacking access to traditional financial services.
              </p>
            </div>
            <div className="p-10 rounded-3xl bg-white/50 backdrop-blur-sm border border-border shadow-xl hover:border-accent transition-all duration-300 hover:scale-105 group">
              <Users className="w-16 h-16 mx-auto mb-8 text-pink-600 group-hover:animate-bounce" />
              <h3 className="text-2xl font-semibold mb-4">High Performance</h3>
              <p className="text-secondary text-lg leading-relaxed">
                90%+ repayment rates in well-managed lending programs worldwide.
              </p>
            </div>
            <div className="p-10 rounded-3xl bg-white/50 backdrop-blur-sm border border-border shadow-xl hover:border-accent transition-all duration-300 hover:scale-105 group">
              <Coins className="w-16 h-16 mx-auto mb-8 text-purple-600 group-hover:animate-bounce" />
              <h3 className="text-2xl font-semibold mb-4">Market Opportunity</h3>
              <p className="text-secondary text-lg leading-relaxed">
                20-30% average interest rates make micro-lending both impactful and profitable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;