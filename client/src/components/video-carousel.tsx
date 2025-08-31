import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const videoSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    title: "Advanced Laboratory Training",
    description: "Hands-on experience with cutting-edge equipment",
    alt: "Clinical research laboratory"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    title: "Interactive Learning Sessions",
    description: "Expert-led classroom and online programs",
    alt: "Healthcare training classroom"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    title: "Clinical Data Management",
    description: "Master industry-standard software and protocols",
    alt: "Medical data analysis"
  }
];

export default function VideoCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % videoSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleIndicatorClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="video-carousel h-96 lg:h-[500px] rounded-2xl shadow-2xl relative overflow-hidden">
      <div className="video-overlay" />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          data-testid={`video-slide-${currentSlide}`}
        >
          <img 
            src={videoSlides[currentSlide].image}
            alt={videoSlides[currentSlide].alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 text-white z-10">
            <h3 className="text-lg font-semibold" data-testid={`slide-title-${currentSlide}`}>
              {videoSlides[currentSlide].title}
            </h3>
            <p className="text-sm opacity-90" data-testid={`slide-description-${currentSlide}`}>
              {videoSlides[currentSlide].description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Carousel indicators */}
      <div className="absolute bottom-4 right-4 flex space-x-2 z-10">
        {videoSlides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-opacity duration-200 ${
              index === currentSlide ? "bg-white opacity-100" : "bg-white opacity-50"
            }`}
            onClick={() => handleIndicatorClick(index)}
            data-testid={`carousel-indicator-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
