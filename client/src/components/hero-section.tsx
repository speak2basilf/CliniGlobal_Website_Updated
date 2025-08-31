import { Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import VideoCarousel from "./video-carousel";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="hero-gradient py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Content (60%) */}
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm">
                <Award className="w-4 h-4 mr-2" />
                #1 Healthcare Training Institute
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight" data-testid="text-hero-title">
                Learn, Advance, and 
                <span className="text-primary"> Build Your Career</span> 
                in Clinical Research
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl" data-testid="text-hero-description">
                Industry-focused training programs designed to help you succeed in the global clinical research field. Join thousands of professionals who have transformed their careers with our expert-led programs.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                data-testid="button-apply-now-hero"
              >
                Apply Now
              </Button>
              <Button 
                variant="outline"
                className="border border-border hover:bg-secondary text-foreground px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200"
                data-testid="button-download-brochure"
              >
                Download Brochure
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="text-center" data-testid="stat-students-placed">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Students Placed</div>
              </div>
              <div className="text-center" data-testid="stat-years-experience">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center" data-testid="stat-placement-support">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Placement Support</div>
              </div>
            </div>
          </div>

          {/* Right Video Carousel (40%) */}
          <div className="lg:col-span-2">
            <VideoCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
