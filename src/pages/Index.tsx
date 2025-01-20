import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 lg:px-8 py-24 sm:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-pink-100 opacity-20" />
          <div className="mx-auto max-w-7xl text-center relative">
            <div className="animate-fade-in">
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary mb-6">
                Revolutionizing Micro-Lending
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                  with Identity-Backed Loans
                </span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-secondary mb-8">
                Secure, gas-free loans for everyone. Verified with Worldcoin.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-4 bg-accent text-primary rounded-full font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2">
                  Start Borrowing Now <ArrowRight className="w-4 h-4" />
                </button>
                <button disabled className="px-8 py-4 bg-gray-100 text-gray-400 rounded-full font-semibold cursor-not-allowed">
                  Lend Now (Coming Soon)
                </button>
              </div>
              <p className="mt-6 text-sm text-secondary">Backed by Visionary Supporters</p>
            </div>

            {/* Hero Image */}
            <div className="relative mt-16 animate-float">
              <div className="flex justify-center">
                <img
                  src="https://antimetal.com/images/hero/preview.png"
                  alt="Magnify Cash App Preview"
                  className="rounded-3xl shadow-2xl max-w-[90%] w-auto h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Traction Section */}
        <section className="py-24 bg-white px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Early Success Driving Global Impact</h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Since launching, Magnify Cash has already made waves in the micro-lending space
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 animate-fade-in">
              {[
                {
                  metric: "1,000+",
                  label: "Loans Issued",
                  subtext: "in the first week",
                },
                {
                  metric: "2,237",
                  label: "Verified Users",
                  subtext: "and growing",
                },
                {
                  metric: "87%",
                  label: "Quick Repayments",
                  subtext: "within days",
                },
                {
                  metric: "4.3",
                  label: "Star Rating",
                  subtext: "on Worldcoin",
                },
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-2xl bg-white border border-border hover:border-accent transition-colors text-center"
                >
                  <div className="text-4xl font-bold text-primary mb-2 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                    {stat.metric}
                  </div>
                  <div className="font-semibold text-primary mb-1">{stat.label}</div>
                  <div className="text-sm text-secondary">{stat.subtext}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem & Solution Section */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-8">A Global Problem, A Decentralized Solution</h2>
            <p className="text-secondary mb-4">
              Over 2 billion people remain unbanked and excluded from affordable credit.
            </p>
            <p className="text-secondary mb-8">
              Magnify Cash uses Worldcoin’s Proof of Personhood to provide identity-backed, gas-free loans that enable global financial inclusion.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-16">Why Magnify Cash?</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  title: "Identity-Backed Loans",
                  description: "Secure loans verified with Worldcoin identity",
                  icon: "🔒",
                },
                {
                  title: "Gas-Free Transactions",
                  description: "Borrow and repay without worrying about high fees",
                  icon: "⚡",
                },
                {
                  title: "Multi-Token Support",
                  description: "Use WLD, USDC, or ETH for repayments",
                  icon: "💱",
                },
                {
                  title: "MAG Token Rewards",
                  description: "Earn rewards for repayments and staking",
                  icon: "🎁",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-background border border-border hover:border-accent transition-colors"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-secondary">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="py-24 bg-surface px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-3xl font-bold mb-8">Our Vision for Scaling Financial Inclusion</h2>
            <ul className="list-disc list-inside space-y-4">
              <li>Q1 2025: Launch V2 with advanced liquidity pools and performance optimizations.</li>
              <li>Q2 2025: Scale borrower base and deepen Worldcoin integration.</li>
              <li>Q3 2025: Expand MAG token utilities for governance and rewards.</li>
            </ul>
            <p className="mt-4 text-secondary">We’re building the future of micro-lending, one step at a time.</p>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-24 bg-primary text-white px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-3xl sm:text-5xl font-bold mb-8">Join Us in Transforming Micro-Lending</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-accent text-primary rounded-full font-semibold hover:bg-accent/90 transition-colors">
                Get Started Now
              </button>
              <button className="px-8 py-4 glass rounded-full font-semibold hover:bg-white/20 transition-colors">
                Download the App
              </button>
            </div>
            <form className="mt-6">
              <input type="email" placeholder="Sign up for updates" className="px-4 py-2 rounded-l-md" />
              <button type="submit" className="px-4 py-2 bg-accent text-primary rounded-r-md">Subscribe</button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
