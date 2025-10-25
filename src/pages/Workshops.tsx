import { Calendar, Clock, Users, ArrowRight, Star, MapPin, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import workshopImage from "@/assets/workshop-hands.jpg";

const Workshops = () => {
  const workshops = [
    {
      id: "hand-building-pottery-course",
      title: "Hand-Building Pottery Course",
      level: "Beginner",
      duration: "4-6 sessions",
      schedule: "Flexible timings",
      startDate: "Contact for availability",
      price: "Contact for pricing",
      capacity: "Small groups",
      rating: 4.9,
      reviews: 24,
      description: "Discover the art of hand-building - one of the oldest and most intuitive ways to create pottery. Learn pinching, coiling, and slab building techniques while connecting with the material and shaping something uniquely yours.",
      includes: ["All materials & tools", "Clay & firing costs", "Take-home pieces", "Personal guidance"],
      instructor: "Svahastha Team",
      location: "Svahastha Pottery Studio",
      featured: true,
      availableDates: [
        { date: "2024-12-21", time: "10:00 AM - 1:00 PM", spots: 3 },
        { date: "2024-12-28", time: "10:00 AM - 1:00 PM", spots: 5 },
        { date: "2025-01-04", time: "10:00 AM - 1:00 PM", spots: 7 },
        { date: "2025-01-11", time: "10:00 AM - 1:00 PM", spots: 8 },
      ]
    },
    {
      id: "wheel-throwing-pottery-course",
      title: "Wheel Throwing Pottery Course",
      level: "Beginner",
      duration: "4 weeks (8 sessions + 4 practice)",
      schedule: "April 4-26, Thu-Fri, 2-4:30pm",
      startDate: "April 4, 2025",
      price: "₹11,200",
      capacity: "Limited seats",
      rating: 4.8,
      reviews: 18,
      description: "Master the art of the potter's wheel. Learn clay wedging, centering, throwing cylinders, trimming, and glazing. Includes personal toolkit, 10kg clay, and dedicated shelf space.",
      includes: ["Personal toolkit (take home)", "10kg stoneware clay", "Dedicated shelf space", "8 guided + 4 practice sessions"],
      instructor: "Svahastha Team",
      location: "Svahastha Pottery Studio",
      featured: true,
      availableDates: [
        { date: "2025-04-04", time: "2:00 PM - 4:30 PM", spots: 2 },
        { date: "2025-04-05", time: "2:00 PM - 4:30 PM", spots: 4 },
        { date: "2025-04-11", time: "2:00 PM - 4:30 PM", spots: 6 },
      ]
    },
    {
      id: "glaze-application-course",
      title: "Glaze Application Course",
      level: "All Levels",
      duration: "Intensive sessions",
      schedule: "Contact for schedule",
      startDate: "Contact for availability",
      price: "₹9,400",
      capacity: "Limited seats",
      rating: 4.7,
      reviews: 12,
      description: "Master the art of glazing! Learn glaze formulas, mixing, application methods, and troubleshooting. Create 6 finished, food-safe pieces to take home.",
      includes: ["All materials provided", "6 finished pieces", "N95 mask & apron", "Firing services"],
      instructor: "Svahastha Team",
      location: "Svahastha Pottery Studio",
      featured: false,
      availableDates: [
        { date: "2025-01-15", time: "10:00 AM - 5:00 PM", spots: 3 },
        { date: "2025-01-22", time: "10:00 AM - 5:00 PM", spots: 5 },
      ]
    },
    {
      id: "wheel-fun-pottery-workshop",
      title: "Wheel Fun Pottery Workshop",
      level: "All Levels",
      duration: "2.5 hours",
      schedule: "11:00 AM-1:30 PM, 2:00-4:30 PM, 5:00-7:30 PM",
      startDate: "Multiple dates",
      price: "₹2,200 (Individual) / ₹3,600 (Two people)",
      capacity: "Limited slots",
      rating: 4.9,
      reviews: 45,
      description: "Experience the magic of the potter's wheel! Our bestseller workshop lets you try wheel throwing in a relaxed, fun setting. No experience needed - just bring your curiosity and sense of play.",
      includes: ["Hands-on wheel throwing", "Live demonstration", "High-quality stoneware clay", "Take home your piece"],
      instructor: "Svahastha Team",
      location: "Svahastha Pottery Studio",
      featured: true,
      availableDates: [
        { date: "2024-12-22", time: "11:00 AM - 1:30 PM", spots: 2 },
        { date: "2024-12-22", time: "2:00 PM - 4:30 PM", spots: 4 },
        { date: "2024-12-22", time: "5:00 PM - 7:30 PM", spots: 6 },
        { date: "2024-12-29", time: "11:00 AM - 1:30 PM", spots: 3 },
        { date: "2024-12-29", time: "2:00 PM - 4:30 PM", spots: 5 },
      ]
    },
    {
      id: "ceramic-painting-workshop",
      title: "Ceramic Painting Workshop",
      level: "All Levels",
      duration: "2-3 hours",
      schedule: "Flexible timings",
      startDate: "Contact for availability",
      price: "₹1,150 (Single) / ₹2,100 (Couple)",
      capacity: "Walk-in friendly",
      rating: 4.6,
      reviews: 28,
      description: "Turn plain ceramics into stunning works of art! Paint your own ceramic pieces with studio-grade underglazes. Perfect for families, friends, or solo creative time.",
      includes: ["Studio-grade underglazes", "Brushes & materials", "Table space & guidance", "Firing services"],
      instructor: "Svahastha Team",
      location: "Svahastha Pottery Studio",
      featured: false,
      availableDates: [
        { date: "2024-12-23", time: "11:00 AM - 2:00 PM", spots: 8 },
        { date: "2024-12-30", time: "11:00 AM - 2:00 PM", spots: 6 },
        { date: "2025-01-06", time: "11:00 AM - 2:00 PM", spots: 10 },
      ]
    },
    {
      id: "glow-in-the-dark-pottery",
      title: "Glow-in-the-Dark Pottery Workshop",
      level: "All Levels",
      duration: "3 hours",
      schedule: "Contact for schedule",
      startDate: "Contact for availability",
      price: "Contact for pricing",
      capacity: "Limited seats",
      rating: 4.8,
      reviews: 15,
      description: "Create pottery that shines in the dark! This unique workshop blends creativity with magic, allowing you to craft shapes that illuminate. A one-of-a-kind experience filled with awe.",
      includes: ["All materials provided", "Glow-in-the-dark clay", "Creative guidance", "Unique experience"],
      instructor: "Svahastha Team",
      location: "Svahastha Pottery Studio",
      featured: false,
      availableDates: [
        { date: "2025-01-20", time: "10:00 AM - 1:00 PM", spots: 4 },
        { date: "2025-01-27", time: "10:00 AM - 1:00 PM", spots: 6 },
      ]
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "beginner":
        return "bg-primary/10 text-primary";
      case "intermediate":
        return "bg-secondary/20 text-secondary";
      case "all levels":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative section-padding bg-accent/30 overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-heading font-bold">
                Discover Your Creative Path
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From beginner fundamentals to advanced techniques, our workshops offer 
                a nurturing environment for every level of pottery enthusiast. Join us 
                and experience the transformative power of working with clay.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Small group sizes</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Flexible schedules</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Rolling enrollment</span>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <img
                src={workshopImage}
                alt="Pottery workshop in progress"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workshops List */}
      <section className="section-padding bg-gradient-to-b from-background to-accent/5">
        <div className="container-custom">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="h-4 w-4" />
              <span>Featured Workshops</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Upcoming Workshops
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose the workshop that speaks to your creative journey. Each experience is designed to help you discover the joy of working with clay.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {workshops.map((workshop, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-2xl transition-all duration-500 group overflow-hidden relative bg-gradient-to-br from-background to-accent/20 border-0 shadow-lg" style={{ animationDelay: `${index * 0.05}s` }}>
                {/* Featured Badge */}
                {workshop.featured && (
                  <div className="absolute top-4 right-4 z-20">
                    <Badge className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg border-0">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                )}

                {/* Workshop Image/Visual Header */}
                <div className="relative h-48 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                      <div className="text-4xl font-heading text-primary/60">🏺</div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-primary/20 animate-pulse" />
                  <div className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-accent/30 animate-pulse" style={{ animationDelay: '1s' }} />
                </div>

                <CardHeader className="pb-4 relative">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-3">
                      <Badge className={`${getLevelColor(workshop.level)} border-0 shadow-sm`}>
                      {workshop.level}
                    </Badge>
                      {workshop.rating && (
                        <div className="flex items-center space-x-1 text-sm">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold text-foreground">{workshop.rating}</span>
                          <span className="text-muted-foreground">({workshop.reviews})</span>
                        </div>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-heading font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                      {workshop.price}
                      </div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl font-heading group-hover:text-primary transition-colors leading-tight">
                    {workshop.title}
                  </CardTitle>
                  
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>{workshop.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span>{workshop.instructor}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {workshop.description}
                  </p>

                  {/* Enhanced Info Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Clock className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <span className="font-semibold text-sm text-foreground">Duration</span>
                          <p className="text-sm text-muted-foreground">{workshop.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                          <Calendar className="h-4 w-4 text-accent-foreground" />
                        </div>
                        <div>
                          <span className="font-semibold text-sm text-foreground">Schedule</span>
                          <p className="text-sm text-muted-foreground">{workshop.schedule}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Calendar className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <span className="font-semibold text-sm text-foreground">Starts</span>
                          <p className="text-sm text-muted-foreground">{workshop.startDate}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                          <Users className="h-4 w-4 text-accent-foreground" />
                    </div>
                        <div>
                          <span className="font-semibold text-sm text-foreground">Capacity</span>
                          <p className="text-sm text-muted-foreground">{workshop.capacity}</p>
                    </div>
                    </div>
                    </div>
                  </div>

                  {/* Enhanced What's Included */}
                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6 border border-primary/10">
                    <p className="text-sm font-semibold mb-4 flex items-center text-foreground">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                        <Heart className="h-3 w-3 text-primary" />
                      </div>
                      What's Included
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {workshop.includes.map((item, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full h-12 text-base font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                    <Link to={`/workshops/${workshop.id}`}>
                      Book This Workshop <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold">
              Not Sure Which Workshop to Choose?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Get in touch with us for personalized recommendations based on your 
              experience level and creative goals.
            </p>
            <Button size="lg" variant="secondary" asChild>
            <a
              href="https://wa.me/916361580705"
              target="_blank"
              rel="noopener noreferrer"
              title="Contact Us for Guidance"
            >
                  Contact Us for Guidance
                </a>
              </Button>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Workshops;
