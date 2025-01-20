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
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary mb-6">
              Revolutionizing Micro-Lending
              <br />
              <span className="bg-gradient-to-r from-[#9EE755] to-[#CFDD3C] bg-clip-text text-transparent">
                with Identity-Backed Loans
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-secondary mb-8">
              Secure, gas-free loans for everyone. Verified with Worldcoin.
            </p>
            <div className="flex justify-center gap-4">
              <button disabled className="px-6 py-3 bg-gray-400 text-white rounded-full cursor-not-allowed">
                Coming Soon
              </button>
              <button className="px-6 py-3 glass rounded-full hover:bg-white/20 transition-colors flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mt-16">
            <div className="flex justify-center">
              <img
                src="https://antimetal.com/images/hero/preview.png"
                alt="Magnify Cash App Preview"
                className="rounded-3xl shadow-2xl max-w-[90%] w-auto h-auto"
              />
            </div>
          </div>
        </section>

        {/* Traction Section */}
        <section className="py-24 bg-surface px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-4">Early Success Driving Global Impact</h2>
            <p className="text-center text-secondary mb-12">Since launching, Magnify Cash has already made waves in the micro-lending space:</p>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { metric: "1,000+", label: "Loans Issued" },
                { metric: "2,237", label: "Verified Users" },
                { metric: "87", label: "Quick Repayments" },
                { metric: "4.3", label: "Star Rating" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.metric}</div>
                  <div className="text-secondary">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-16">Why Choose Magnify Cash?</h2>
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

        {/* FAQ Section */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-16">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  question: "How does identity verification work?",
                  answer: "We use Worldcoin's Proof of Personhood protocol for secure and private verification.",
                },
                {
                  question: "What are the loan terms?",
                  answer: "Loan terms vary based on your verification status and credit history.",
                },
                {
                  question: "How do I get started?",
                  answer: "Simply verify your identity with Worldcoin and apply for a loan through our platform.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="border border-border rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-background/50"
                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  >
                    <span className="font-medium">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        activeAccordion === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeAccordion === index && (
                    <div className="px-6 py-4 bg-background/50">
                      <p className="text-secondary">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-white px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-3xl sm:text-5xl font-bold mb-8">Join the Future of Micro-Lending</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Be part of a global movement driving financial inclusion with blockchain technology.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-accent text-primary rounded-full font-semibold hover:bg-accent/90 transition-colors">
                Get Started Now
              </button>
              <button className="px-8 py-4 glass rounded-full font-semibold hover:bg-white/20 transition-colors">
                Download the App
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;