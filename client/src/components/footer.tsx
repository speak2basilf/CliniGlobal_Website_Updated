import { GraduationCap, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-foreground text-card py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-card" data-testid="text-footer-logo">CliniGlobal</h3>
                <p className="text-xs text-card/70" data-testid="text-footer-tagline">Research Institute</p>
              </div>
            </div>
            <p className="text-card/80 max-w-md" data-testid="text-footer-description">
              India's leading healthcare training institution, transforming careers through comprehensive clinical research, bioinformatics, and healthcare management programs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-card mb-4" data-testid="text-quick-links-title">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("home")}
                  className="text-card/70 hover:text-card transition-colors duration-200"
                  data-testid="link-footer-home"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-card/70 hover:text-card transition-colors duration-200"
                  data-testid="link-footer-about"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("programs")}
                  className="text-card/70 hover:text-card transition-colors duration-200"
                  data-testid="link-footer-programs"
                >
                  Programs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-card/70 hover:text-card transition-colors duration-200"
                  data-testid="link-footer-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-card mb-4" data-testid="text-programs-footer-title">Programs</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-card/70 hover:text-card transition-colors duration-200" data-testid="link-clinical-research">
                  Clinical Research
                </a>
              </li>
              <li>
                <a href="#" className="text-card/70 hover:text-card transition-colors duration-200" data-testid="link-data-management">
                  Data Management
                </a>
              </li>
              <li>
                <a href="#" className="text-card/70 hover:text-card transition-colors duration-200" data-testid="link-pharmacovigilance">
                  Pharmacovigilance
                </a>
              </li>
              <li>
                <a href="#" className="text-card/70 hover:text-card transition-colors duration-200" data-testid="link-medical-writing">
                  Medical Writing
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-card/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-card/70 text-sm" data-testid="text-copyright">
            © 2025 CliniGlobal Research Institute. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0" data-testid="social-links">
            <a href="#" className="text-card/70 hover:text-card transition-colors duration-200" data-testid="link-facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-card/70 hover:text-card transition-colors duration-200" data-testid="link-twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-card/70 hover:text-card transition-colors duration-200" data-testid="link-linkedin">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-card/70 hover:text-card transition-colors duration-200" data-testid="link-instagram">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
