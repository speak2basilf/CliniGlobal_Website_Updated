import { Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground" data-testid="text-about-title">
                About CliniGlobal Research Institute
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-description">
                With over 15 years of excellence in clinical research education, CliniGlobal Research Institute is India's leading healthcare training institution. We bridge the gap between academic knowledge and industry requirements through our comprehensive, career-focused programs.
              </p>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-about-details">
                Our experienced faculty, comprising industry veterans and academic experts, ensures that every student receives world-class education combined with practical exposure to real-world clinical research scenarios.
              </p>
            </div>
            
            <div className="flex items-center space-x-4 p-6 bg-secondary rounded-lg" data-testid="faculty-highlight">
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" 
                alt="Dr. Sarah Johnson, Lead Faculty" 
                className="w-16 h-16 rounded-full object-cover"
                data-testid="img-faculty"
              />
              <div>
                <h4 className="font-semibold text-foreground" data-testid="text-faculty-name">Dr. Sarah Johnson</h4>
                <p className="text-sm text-muted-foreground" data-testid="text-faculty-title">Lead Faculty & Clinical Research Director</p>
                <p className="text-xs text-muted-foreground mt-1" data-testid="text-faculty-credentials">PhD Clinical Research, 20+ years industry experience</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700" 
              alt="Modern healthcare training facility" 
              className="rounded-2xl shadow-xl w-full"
              data-testid="img-facility"
            />
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border" data-testid="alumni-highlight">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground" data-testid="text-alumni-count">2000+</div>
                  <div className="text-sm text-muted-foreground" data-testid="text-alumni-label">Alumni Network</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
