export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Search Tutor",
      description: "Browse tutors by subject and availability.",
    },
    {
      step: "02",
      title: "Select Slot",
      description: "Choose your preferred date and time.",
    },
    {
      step: "03",
      title: "Book Session",
      description: "Confirm booking with one click.",
    },
    {
      step: "04",
      title: "Start Learning",
      description: "Join your session and begin learning.",
    },
  ];

  return (
    <section className="py-16 bg-base-200/50 border-t border-b border-base-300">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              
              {/* Step Number Badge */}
              <div className="w-16 h-16 rounded-full bg-base-100 border-2 border-primary flex items-center justify-center text-xl font-extrabold text-primary shadow-md z-10 group-hover:bg-primary group-hover:text-primary-content transition-colors duration-300">
                {item.step}
              </div>

              {/* Connecting Line Effect for Large Screens */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-base-300 z-0" />
              )}

              {/* Content */}
              <div className="mt-6 max-w-xs">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-base-content/70">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}