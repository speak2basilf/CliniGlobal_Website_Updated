import { FileText, Video, CheckCircle, PlayCircle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Submit Application",
    description: "Complete our online application form with your academic and professional details",
    bgColor: "bg-primary",
    iconColor: "text-primary-foreground"
  },
  {
    icon: Video,
    title: "Attend Counseling Session",
    description: "Join our career counseling session to choose the right program for your goals",
    bgColor: "bg-accent",
    iconColor: "text-accent-foreground"
  },
  {
    icon: CheckCircle,
    title: "Confirm Enrollment",
    description: "Complete your enrollment with flexible payment options and secure your seat",
    bgColor: "bg-primary",
    iconColor: "text-primary-foreground"
  },
  {
    icon: PlayCircle,
    title: "Start Training",
    description: "Begin your transformative journey with expert guidance and industry exposure",
    bgColor: "bg-accent",
    iconColor: "text-accent-foreground"
  }
];

export default function AdmissionProcess() {
  return (
    <section id="admission" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground" data-testid="text-admission-title">
            Admission Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-admission-description">
            Simple, streamlined process to get you started on your clinical research journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative" data-testid={`admission-step-${index}`}>
                <div className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <step.icon className={`w-8 h-8 ${step.iconColor}`} />
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute top-8 left-16 w-full h-0.5 bg-border hidden md:block" />
                )}
                <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`step-title-${index}`}>
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm" data-testid={`step-description-${index}`}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
