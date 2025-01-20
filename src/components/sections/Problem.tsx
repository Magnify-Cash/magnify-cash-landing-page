import { Globe, Users, Coins } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-background to-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
            A Global Problem, A Decentralized Solution
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 rounded-2xl bg-white border border-border hover:border-accent transition-colors animate-fade-in">
              <Globe className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
              <p className="text-secondary">
                Over 2 billion people remain unbanked and excluded from affordable credit.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-border hover:border-accent transition-colors animate-fade-in [animation-delay:200ms]">
              <Users className="w-12 h-12 mx-auto mb-4 text-pink-600" />
              <h3 className="text-xl font-semibold mb-2">Identity-Backed</h3>
              <p className="text-secondary">
                Worldcoin's Proof of Personhood ensures secure and trusted lending.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-border hover:border-accent transition-colors animate-fade-in [animation-delay:400ms]">
              <Coins className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-2">Gas-Free Loans</h3>
              <p className="text-secondary">
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