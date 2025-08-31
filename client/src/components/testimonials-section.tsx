import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael Chen",
    position: "Clinical Research Associate at Pfizer",
    quote: "CliniGlobal's comprehensive training prepared me perfectly for my role at Pfizer. The practical exposure and industry connections were invaluable.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    alt: "Michael Chen, Clinical Research Associate"
  },
  {
    name: "Dr. Priya Sharma",
    position: "Senior Medical Writer at Novartis",
    quote: "The medical writing program exceeded my expectations. I landed my dream job within 3 months of graduation, thanks to their placement support.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b742?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    alt: "Dr. Priya Sharma, Medical Writer"
  },
  {
    name: "James Rodriguez",
    position: "Clinical Data Manager at Johnson & Johnson",
    quote: "The hands-on training with industry-standard software gave me a competitive edge. Highly recommend CliniGlobal for serious career growth.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    alt: "James Rodriguez, Data Manager"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground" data-testid="text-testimonials-title">
            Student Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-testimonials-description">
            Hear from our alumni who have successfully built their careers in clinical research
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-secondary p-8 rounded-xl border border-border"
              data-testid={`testimonial-card-${index}`}
            >
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src={testimonial.image}
                  alt={testimonial.alt}
                  className="w-12 h-12 rounded-full object-cover"
                  data-testid={`testimonial-image-${index}`}
                />
                <div>
                  <h4 className="font-semibold text-foreground" data-testid={`testimonial-name-${index}`}>
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground" data-testid={`testimonial-position-${index}`}>
                    {testimonial.position}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground italic" data-testid={`testimonial-quote-${index}`}>
                "{testimonial.quote}"
              </p>
              <div className="flex mt-4" data-testid={`testimonial-rating-${index}`}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-accent" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
