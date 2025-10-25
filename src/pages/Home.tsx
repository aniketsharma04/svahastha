import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-pottery.jpg";
import workshopImage from "@/assets/workshop-hands.jpg";
import galleryImage from "@/assets/gallery-pottery.jpg";

const Home = () => {
  const workshops = [
    {
      title: "Hand-Building Pottery Course",
      duration: "4-6 sessions",
      description: "Discover the art of hand-building - one of the oldest and most intuitive ways to create pottery.",
      date: "Contact for availability",
    },
    {
      title: "Wheel Fun Pottery Workshop",
      duration: "2.5 hours",
      description: "Experience the magic of the potter's wheel! Our bestseller workshop for all levels.",
      date: "Multiple dates available",
    },
    {
      title: "Ceramic Painting Workshop",
      duration: "2-3 hours",
      description: "Turn plain ceramics into stunning works of art with studio-grade underglazes.",
      date: "Walk-in friendly",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      text: "Svahastha transformed my understanding of creativity. The studio is a sanctuary of calm and inspiration.",
      role: "Participant, 2024",
    },
    {
      name: "Arjun Mehta",
      text: "The mindful approach to pottery here is unique. Every session feels therapeutic and rewarding.",
      role: "Workshop Student",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Handcrafted pottery in studio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>

        <div className="container-custom relative z-10 text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 text-foreground">
            Where Clay Meets Calm
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover mindfulness and self-expression through the ancient art of pottery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/workshops">
                Explore Workshops <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/gallery">View Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding pottery-texture">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground">
              Svahastha – The Pottery Studio
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Svahastha, we believe pottery is more than craft—it's a journey of mindfulness. 
              Our studio offers a serene space where creativity flows naturally, guided by the rhythm of the wheel 
              and the warmth of clay. Whether you're a beginner or an experienced artist, we welcome you to 
              explore, create, and find peace in every piece you shape.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-accent/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold">Mindful Creation</h3>
              <p className="text-muted-foreground">
                Experience pottery as meditation, finding calm in every turn of the wheel.
              </p>
            </div>
            <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold">Expert Guidance</h3>
              <p className="text-muted-foreground">
                Learn from passionate artisans dedicated to nurturing your creative journey.
              </p>
            </div>
            <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold">Handcrafted Beauty</h3>
              <p className="text-muted-foreground">
                Create unique pieces that reflect your personal style and artistic vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Workshops */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-4">
              Upcoming Workshops
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our immersive workshops designed to nurture creativity and mindfulness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <Card key={index} className="animate-scale-in hover:shadow-lg transition-shadow" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-2xl font-heading font-semibold">{workshop.title}</h3>
                  <div className="space-y-2">
                    <p className="text-sm text-primary font-medium">{workshop.duration} • {workshop.date}</p>
                    <p className="text-muted-foreground">{workshop.description}</p>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/workshops">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/workshops">
                View All Workshops <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-accent/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-heading font-semibold">
                Handcrafted with Love
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every piece tells a story. Explore our gallery of handcrafted pottery, 
                each one a testament to the beauty of slow, mindful creation. From elegant 
                vases to functional tableware, discover the artistry that emerges from clay.
              </p>
              <Button variant="default" asChild>
                <Link to="/gallery">
                  Explore Gallery <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative animate-scale-in">
              <img
                src={galleryImage}
                alt="Collection of handcrafted pottery"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-4">
              Stories from Our Studio
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear from those who've discovered their creative voice at Svahastha
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 space-y-4">
                  <p className="text-lg text-foreground/90 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Join us at Svahastha and discover the transformative power of pottery
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/workshops">Join a Workshop</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
