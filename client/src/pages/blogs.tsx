import { useState } from "react";
import { Search, Calendar, User, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/header";
import Footer from "@/components/footer";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Clinical Research: AI and Machine Learning Integration",
    description: "Explore how artificial intelligence is revolutionizing clinical trials and data analysis in modern healthcare research.",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    author: "Dr. Sarah Johnson",
    date: "January 15, 2025",
    category: "Technology",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Career Opportunities in Pharmacovigilance: A Complete Guide",
    description: "Discover the growing field of drug safety monitoring and the career paths available for aspiring professionals.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    author: "Michael Chen",
    date: "January 12, 2025",
    category: "Training",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Regulatory Affairs in Clinical Research: Key Updates for 2025",
    description: "Stay informed about the latest regulatory changes affecting clinical research protocols and compliance requirements.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    author: "Dr. Priya Sharma",
    date: "January 10, 2025",
    category: "Research",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Medical Writing Excellence: Tips from Industry Experts",
    description: "Learn the essential skills and best practices for creating compelling clinical documentation and research papers.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    author: "James Rodriguez",
    date: "January 8, 2025",
    category: "Training",
    readTime: "4 min read"
  },
  {
    id: 5,
    title: "Clinical Data Management: Best Practices and Tools",
    description: "Master the fundamentals of clinical data collection, validation, and management using industry-standard software.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    author: "Dr. Emily Watson",
    date: "January 5, 2025",
    category: "Technology",
    readTime: "8 min read"
  },
  {
    id: 6,
    title: "Industry Updates: Latest Trends in Biotech and Pharma",
    description: "Stay ahead with the latest developments, mergers, and innovations shaping the pharmaceutical industry.",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    author: "Dr. Robert Kim",
    date: "January 3, 2025",
    category: "Updates",
    readTime: "6 min read"
  }
];

const categories = ["All", "Technology", "Training", "Research", "Updates"];

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [email, setEmail] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground" data-testid="blogs-title">
              Our Blogs
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="blogs-subtitle">
              Insights, updates, and knowledge shared by experts
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 rounded-full border-2 focus:border-primary"
                data-testid="search-input"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 py-2 transition-all duration-200 ${
                  selectedCategory === category 
                    ? "bg-primary text-primary-foreground shadow-lg" 
                    : "hover:bg-primary/10 hover:border-primary"
                }`}
                data-testid={`category-${category.toLowerCase()}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card 
                key={post.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border overflow-hidden"
                data-testid={`blog-card-${index}`}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    data-testid={`blog-image-${index}`}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2" data-testid={`blog-title-${index}`}>
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3" data-testid={`blog-description-${index}`}>
                    {post.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span data-testid={`blog-author-${index}`}>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span data-testid={`blog-date-${index}`}>{post.date}</span>
                      </div>
                    </div>
                    <span className="text-xs bg-secondary px-2 py-1 rounded-full" data-testid={`blog-read-time-${index}`}>
                      {post.readTime}
                    </span>
                  </div>
                  
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-all duration-200 group-hover:shadow-lg"
                    data-testid={`blog-read-more-${index}`}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-foreground mb-2">No blogs found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="newsletter-title">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-8" data-testid="newsletter-description">
              Subscribe to our newsletter and get the latest insights delivered to your inbox
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 py-3 rounded-full border-2 focus:border-primary"
                  data-testid="newsletter-email"
                  required
                />
              </div>
              <Button 
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                data-testid="newsletter-subscribe"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}