
const Traction = () => {
  return (
    <section className="py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">Early Success Driving Global Impact</h2>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            Ranked #94 out of 2148 World ID apps with rapid user growth and engagement
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {[
            {
              metric: "5.8M+",
              label: "Total Impressions",
              subtext: "402.5% increase",
            },
            {
              metric: "229.3K",
              label: "Sessions",
              subtext: "since launch",
            },
            {
              metric: "7,701",
              label: "Verified Users",
              subtext: "21,577 verifications",
            },
            {
              metric: "1,458%",
              label: "Total Growth Rate",
              subtext: "since Dec. 21st launch",
            },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-border shadow-lg hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent group-hover:animate-pulse">
                {stat.metric}
              </div>
              <div className="font-semibold text-primary mb-2 text-lg">{stat.label}</div>
              <div className="text-secondary">{stat.subtext}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              metric: "$10.1K+",
              label: "Total Loan Volume",
              subtext: "across all markets",
            },
            {
              metric: "1.5K+",
              label: "Issued Loans",
              subtext: "across all markets",
            },
            {
              metric: "$1-15",
              label: "Average Loan Size",
              subtext: "accessible micro-loans",
            },
          ].map((stat, index) => (
            <div 
              key={`loan-${index}`}
              className="p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-border shadow-lg hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in group"
              style={{ animationDelay: `${(index + 4) * 200}ms` }}
            >
              <div className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent group-hover:animate-pulse">
                {stat.metric}
              </div>
              <div className="font-semibold text-primary mb-2 text-lg">{stat.label}</div>
              <div className="text-secondary">{stat.subtext}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Traction;
