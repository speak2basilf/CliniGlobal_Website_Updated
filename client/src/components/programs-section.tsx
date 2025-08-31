import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    title: "PG Diploma in Clinical Research",
    description: "Comprehensive program covering all aspects of clinical research from protocol design to regulatory compliance.",
    duration: "12 Months Duration",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    alt: "Clinical research professionals"
  },
  {
    title: "Clinical Data Management",
    description: "Master data collection, validation, and management systems used in clinical trials worldwide.",
    duration: "6 Months Duration",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    alt: "Clinical data management"
  },
  {
    title: "Pharmacovigilance",
    description: "Specialized training in drug safety monitoring and adverse event reporting systems.",
    duration: "4 Months Duration",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    alt: "Pharmacovigilance specialist"
  },
  {
    title: "Medical Writing",
    description: "Learn to create clinical study reports, protocols, and regulatory documents with precision.",
    duration: "3 Months Duration",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    alt: "Medical writing professional"
  }
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground" data-testid="text-programs-title">
            Our Training Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-programs-description">
            Comprehensive programs designed to meet industry demands and accelerate your career growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              data-testid={`program-card-${index}`}
            >
              <img 
                src={program.image}
                alt={program.alt}
                className="w-full h-48 object-cover"
                data-testid={`program-image-${index}`}
              />
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground" data-testid={`program-title-${index}`}>
                  {program.title}
                </h3>
                <p className="text-muted-foreground text-sm" data-testid={`program-description-${index}`}>
                  {program.description}
                </p>
                <div className="flex items-center text-sm text-muted-foreground" data-testid={`program-duration-${index}`}>
                  <Clock className="w-4 h-4 mr-2" />
                  {program.duration}
                </div>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-4 rounded-lg font-medium transition-colors duration-200"
                  data-testid={`button-view-details-${index}`}
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
