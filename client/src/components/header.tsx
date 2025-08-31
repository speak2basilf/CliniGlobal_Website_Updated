import { useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">CliniGlobal</h1>
              <p className="text-xs text-muted-foreground">Research Institute</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              data-testid="nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              data-testid="nav-about"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection("programs")}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              data-testid="nav-programs"
            >
              Programs
            </button>
            <button 
              onClick={() => scrollToSection("admission")}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              data-testid="nav-admission"
            >
              Admission
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium transition-colors duration-200 shadow-sm"
              data-testid="button-apply-now"
            >
              Apply Now
            </Button>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-left text-foreground hover:text-primary transition-colors duration-200 font-medium"
                data-testid="mobile-nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-left text-muted-foreground hover:text-primary transition-colors duration-200"
                data-testid="mobile-nav-about"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection("programs")}
                className="text-left text-muted-foreground hover:text-primary transition-colors duration-200"
                data-testid="mobile-nav-programs"
              >
                Programs
              </button>
              <button 
                onClick={() => scrollToSection("admission")}
                className="text-left text-muted-foreground hover:text-primary transition-colors duration-200"
                data-testid="mobile-nav-admission"
              >
                Admission
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-left text-muted-foreground hover:text-primary transition-colors duration-200"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
