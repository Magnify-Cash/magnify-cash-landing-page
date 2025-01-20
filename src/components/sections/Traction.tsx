const Traction = () => {
  return (
    <section className="py-24 bg-white px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Early Success Driving Global Impact</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Since launching, Magnify Cash has already made waves in the micro-lending space
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
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
              className="p-6 rounded-2xl bg-white border border-border hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent group-hover:animate-pulse">
                {stat.metric}
              </div>
              <div className="font-semibold text-primary mb-1">{stat.label}</div>
              <div className="text-sm text-secondary">{stat.subtext}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Traction;