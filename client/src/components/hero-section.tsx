import { Heart, MessageCircle, Bookmark, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-gray-100 to-blue-50 py-16 lg:py-24 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-20 w-12 h-12 bg-pink-200 rounded-full opacity-60"></div>
      <div className="absolute top-40 right-32 w-8 h-8 bg-blue-200 rounded-full opacity-60"></div>
      <div className="absolute bottom-20 left-20 w-10 h-10 bg-yellow-200 rounded-full opacity-60"></div>
      <div className="absolute top-32 left-32 w-6 h-6 bg-purple-200 rounded-full opacity-60"></div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500 text-white font-medium text-sm">
                ⚡ #1 Healthcare Training Institute
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight" data-testid="text-hero-title">
                <span className="text-gray-900">Learn, Advance,</span>
                <br />
                <span className="text-blue-600">Accelerate Your Career</span>
                <br />
                <span className="text-gray-900">With </span>
                <span className="text-teal-500">Clini</span><span className="text-orange-500">Global</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl" data-testid="text-hero-description">
                Step into the Future of Healthcare with New-Age Programs like Clinical Research, Medical Coding, Clinical SAS, Bioinformatics, AI & ML in Healthcare, MBA in Healthcare, and more – designed to equip you for tomorrow's medical and healthcare landscape.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection("programs")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                data-testid="button-explore-courses"
              >
                Explore Courses →
              </Button>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                data-testid="button-enroll-now-hero"
              >
                Enroll Now →
              </Button>
            </div>
          </div>

          {/* Right Social Media Mockup */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-sm mx-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="text-lg font-bold">
                    <span className="text-teal-500">Clini</span><span className="text-orange-500">Global</span>
                  </div>
                </div>
                <MoreHorizontal className="w-5 h-5 text-gray-400" />
              </div>
              <div className="text-sm text-gray-600 mb-4">Research Institute</div>
              
              {/* Main Image */}
              <div className="relative mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                  alt="Professional healthcare worker" 
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-xl">#Empowering</h3>
                  <h3 className="font-bold text-xl">ClinicalCareers</h3>
                </div>
              </div>
              
              {/* Social Actions */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-4">
                  <Heart className="w-6 h-6 text-red-500" />
                  <MessageCircle className="w-6 h-6 text-gray-600" />
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <Bookmark className="w-6 h-6 text-gray-600" />
              </div>
              
              {/* Likes */}
              <div className="text-sm font-semibold text-gray-900 mb-2">1,048 likes</div>
              
              {/* Bottom Badge */}
              <div className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full inline-block">
                🎓 Advanced LMS Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

      {/* Floating Query Button - Positioned in bottom right */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-lg text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center space-x-2">
          <span>📞</span>
          <span>Drop us a Query</span>
        </button>
      </div>