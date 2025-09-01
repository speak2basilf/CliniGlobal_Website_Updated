import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import WhyChooseSection from "@/components/why-choose-section";
import AccreditationsSection from "@/components/accreditations-section";
import ProgramsSection from "@/components/programs-section";
import AdmissionProcess from "@/components/admission-process";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WhyChooseSection />
        <AccreditationsSection />
        <ProgramsSection />
        <AdmissionProcess />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
