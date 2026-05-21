import { LuCalendarCheck, LuClock, LuBadgeDollarSign } from "react-icons/lu";
import { MdVerified } from "react-icons/md";

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      icon: <LuCalendarCheck className="w-8 h-8 text-primary" />,
      title: "Easy Booking",
      description: "Book tutors instantly with a smooth and simple interface.",
    },
    {
      id: 2,
      icon: <MdVerified className="w-8 h-8 text-success" />,
      title: "Verified Tutors",
      description: "All tutors are verified to ensure quality education.",
    },
    {
      id: 3,
      icon: <LuClock className="w-8 h-8 text-secondary" />,
      title: "Flexible Scheduling",
      description: "Choose time slots that fit your daily routine.",
    },
    {
      id: 4,
      icon: <LuBadgeDollarSign className="w-8 h-8 text-accent" />,
      title: "Affordable Pricing",
      description: "Find tutors that match your budget easily.",
    },
  ];

  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose MediQueue?</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="card bg-base-200 shadow-sm border border-base-300 hover:border-primary/30 hover:shadow-md transition-all duration-300 p-6 rounded-2xl group text-center md:text-left"
            >
              <div className="bg-base-100 w-14 h-14 rounded-xl flex items-center justify-center shadow-inner mb-4 mx-auto md:mx-0 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-base-content">{feature.title}</h3>
              <p className="text-sm text-base-content/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}