import { Globe, Users, Coins, TrendingUp } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
            A Global Problem, A Decentralized Solution
          </h2>
          
          {/* Market Statistics */}
          <div className="mb-16 p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-border shadow-lg animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">The Global Micro-Lending Market</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-pink-500/10 border border-border">
                <TrendingUp className="w-10 h-10 mx-auto mb-4 text-blue-600" />
                <div className="text-3xl font-bold text-primary mb-2">$160B</div>
                <p className="text-secondary">Market value in 2023</p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-pink-500/10 border border-border">
                <TrendingUp className="w-10 h-10 mx-auto mb-4 text-pink-600" />
                <div className="text-3xl font-bold text-primary mb-2">12.5%</div>
                <p className="text-secondary">Annual growth rate</p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-pink-500/10 border border-border">
                <TrendingUp className="w-10 h-10 mx-auto mb-4 text-purple-600" />
                <div className="text-3xl font-bold text-primary mb-2">$300B</div>
                <p className="text-secondary">Projected by 2030</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-border shadow-lg hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in group">
              <Globe className="w-16 h-16 mx-auto mb-6 text-blue-600 group-hover:animate-bounce" />
              <h3 className="text-2xl font-semibold mb-4">Global Impact</h3>
              <p className="text-secondary text-lg">
                Over 2 billion people remain unbanked, lacking access to traditional financial services.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-border shadow-lg hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in [animation-delay:200ms] group">
              <Users className="w-16 h-16 mx-auto mb-6 text-pink-600 group-hover:animate-bounce" />
              <h3 className="text-2xl font-semibold mb-4">High Performance</h3>
              <p className="text-secondary text-lg">
                90%+ repayment rates in well-managed lending programs worldwide.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-border shadow-lg hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in [animation-delay:400ms] group">
              <Coins className="w-16 h-16 mx-auto mb-6 text-purple-600 group-hover:animate-bounce" />
              <h3 className="text-2xl font-semibold mb-4">Market Opportunity</h3>
              <p className="text-secondary text-lg">
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