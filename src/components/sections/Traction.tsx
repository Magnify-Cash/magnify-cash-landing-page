const Traction = () => {
  return (
    <section className="py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">Early Success Driving Global Impact</h2>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            Ranked #78 out of 886 World ID apps with rapid user growth and engagement
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {[
            {
              metric: "361K+",
              label: "Weekly Impressions",
              subtext: "3.2% engagement rate",
            },
            {
              metric: "17,150",
              label: "Active Sessions",
              subtext: "last 7 days",
            },
            {
              metric: "1,929",
              label: "Verified Users",
              subtext: "unique identities",
            },
            {
              metric: "99.9%",
              label: "New User Rate",
              subtext: "2,312 this week",
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
              metric: "$7K+",
              label: "Total Loan Volume",
              subtext: "across all markets",
            },
            {
              metric: "1K+",
              label: "Issued Loans",
              subtext: "98% repayment rate",
            },
            {
              metric: "$1-10",
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