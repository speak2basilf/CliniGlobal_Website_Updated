import { useState } from "react";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  const navigateToPage = (path: string) => {
    setLocation(path);
    setIsMobileMenuOpen(false);
  };
  return (
    <header className="sticky top-0 z-50 shadow-lg">
      {/* Top Blue Bar */}
      <div className="bg-blue-500 text-white py-2">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 7093794447</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>hr@cliniglobal.com</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="bg-orange-500 px-3 py-1 rounded-full text-xs font-medium">
                #1 Healthcare Training Institute
              </div>
              <div className="text-sm font-medium">
                Assured Job Placements
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div>
                <h1 className="text-2xl font-bold" data-testid="header-logo">
                  <span className="text-teal-500">Clini</span>
                  <span className="text-orange-500">Global</span>
                </h1>
                <p className="text-xs text-gray-600 font-medium">Research Institute</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection("home")}
                className={`${location === "/" ? "text-blue-600" : "text-gray-600"} hover:text-blue-600 transition-colors duration-200 font-medium relative group`}
                data-testid="nav-home"
              >
                Home
                {location === "/" && <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-600 rounded-full"></div>}
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium relative group"
                data-testid="nav-about"
              >
                About
              </button>
              <div className="relative group">
                <button 
                  onClick={() => scrollToSection("programs")}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium flex items-center space-x-1 relative"
                  data-testid="nav-courses"
                >
                  <span>Courses</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <button 
                onClick={() => scrollToSection("programs")}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium relative group"
                data-testid="nav-placements"
              >
                Placements
              </button>
              <Button
                onClick={() => navigateToPage("/blogs")}
                className={`${location === "/blogs" ? "bg-blue-600" : "bg-blue-500"} hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200 shadow-sm text-sm`}
                data-testid="nav-blogs"
              >
                Blogs
              </Button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium relative group"
                data-testid="nav-contact"
              >
                Contact
              </button>
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-3">
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 shadow-sm text-sm"
                data-testid="button-enroll-now"
              >
                ⚡ Enroll Now
              </Button>
              <Button 
                className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 shadow-sm text-sm"
                data-testid="button-lms"
              >
                🎓 LMS
              </Button>
              
              {/* Mobile menu button */}
              <button 
                className="lg:hidden p-2"
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
            <div className="lg:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection("home")}
                  className="text-left text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium"
                  data-testid="mobile-nav-home"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-left text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  data-testid="mobile-nav-about"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection("programs")}
                  className="text-left text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  data-testid="mobile-nav-courses"
                >
                  Courses
                </button>
                <button 
                  onClick={() => scrollToSection("programs")}
                  className="text-left text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  data-testid="mobile-nav-placements"
                >
                  Placements
                </button>
                <button 
                  onClick={() => navigateToPage("/blogs")}
                  className="text-left text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  data-testid="mobile-nav-blogs"
                >
                  Blogs
                </button>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  data-testid="mobile-nav-contact"
                >
                  Contact
                </button>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button 
                    onClick={() => scrollToSection("contact")}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium text-sm"
                  >
                    ⚡ Enroll Now
                  </Button>
                  <Button 
                    className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg font-medium text-sm"
                  >
                    🎓 LMS
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
