import { Globe, Users, Coins, TrendingUp } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center space-y-16">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
            The Future of Micro-Lending is Here
          </h2>
          
          <div className="p-10 rounded-3xl bg-white/50 backdrop-blur-sm border border-border shadow-xl animate-fade-in">
            <h3 className="text-3xl font-semibold mb-10">Market Opportunity</h3>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/5 to-pink-500/5 border border-border hover:border-accent transition-all duration-300 hover:scale-105">
                <TrendingUp className="w-12 h-12 mx-auto mb-6 text-blue-600" />
                <div className="text-4xl font-bold text-primary mb-3">$160B</div>
                <p className="text-secondary text-lg">Current market size with 12.5% YoY growth</p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/5 to-pink-500/5 border border-border hover:border-accent transition-all duration-300 hover:scale-105">
                <Users className="w-12 h-12 mx-auto mb-6 text-pink-600" />
                <div className="text-4xl font-bold text-primary mb-3">2B+</div>
                <p className="text-secondary text-lg">Unbanked individuals globally</p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/5 to-pink-500/5 border border-border hover:border-accent transition-all duration-300 hover:scale-105">
                <Coins className="w-12 h-12 mx-auto mb-6 text-purple-600" />
                <div className="text-4xl font-bold text-primary mb-3">$300B</div>
                <p className="text-secondary text-lg">Projected market value by 2030</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-10 rounded-3xl bg-white/50 backdrop-blur-sm border border-border shadow-xl hover:border-accent transition-all duration-300 hover:scale-105 group">
              <Globe className="w-16 h-16 mx-auto mb-8 text-blue-600 group-hover:animate-bounce" />
              <h3 className="text-2xl font-semibold mb-4">The Problem</h3>
              <p className="text-secondary text-lg leading-relaxed">
                Traditional lending excludes billions, requiring credit history and costly infrastructure that doesn't serve emerging markets.
              </p>
            </div>
            <div className="p-10 rounded-3xl bg-white/50 backdrop-blur-sm border border-border shadow-xl hover:border-accent transition-all duration-300 hover:scale-105 group">
              <Users className="w-16 h-16 mx-auto mb-8 text-pink-600 group-hover:animate-bounce" />
              <h3 className="text-2xl font-semibold mb-4">Our Solution</h3>
              <p className="text-secondary text-lg leading-relaxed">
                Identity-verified, gas-free loans powered by WorldID, making micro-lending accessible and efficient globally.
              </p>
            </div>
            <div className="p-10 rounded-3xl bg-white/50 backdrop-blur-sm border border-border shadow-xl hover:border-accent transition-all duration-300 hover:scale-105 group">
              <Coins className="w-16 h-16 mx-auto mb-8 text-purple-600 group-hover:animate-bounce" />
              <h3 className="text-2xl font-semibold mb-4">The Opportunity</h3>
              <p className="text-secondary text-lg leading-relaxed">
                20-30% average returns with 90%+ repayment rates in well-managed lending programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;