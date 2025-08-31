import { GraduationCap, Briefcase, Monitor, Award } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Expert Faculty",
    description: "Learn from industry veterans with 15+ years of real-world clinical research experience",
    bgColor: "bg-primary/10",
    iconColor: "text-primary"
  },
  {
    icon: Briefcase,
    title: "100% Placement Assistance",
    description: "Guaranteed career support with our extensive network of pharmaceutical and biotech partners",
    bgColor: "bg-accent/10",
    iconColor: "text-accent"
  },
  {
    icon: Monitor,
    title: "Flexible Learning",
    description: "Choose from online, offline, or hybrid learning modes to fit your schedule and preferences",
    bgColor: "bg-primary/10",
    iconColor: "text-primary"
  },
  {
    icon: Award,
    title: "Recognized Certifications",
    description: "Earn globally recognized certifications that open doors to international opportunities",
    bgColor: "bg-accent/10",
    iconColor: "text-accent"
  }
];

export default function WhyChooseSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground" data-testid="text-why-choose-title">
            Why Choose CliniGlobal?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-why-choose-description">
            Experience the difference with our industry-leading approach to clinical research education
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-border"
              data-testid={`feature-card-${index}`}
            >
              <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3" data-testid={`feature-title-${index}`}>
                {feature.title}
              </h3>
              <p className="text-muted-foreground" data-testid={`feature-description-${index}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
