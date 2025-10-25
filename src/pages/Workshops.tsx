import { Calendar, Clock, Users, ArrowRight, Star, MapPin, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import workshopImage from "@/assets/workshop-hands.jpg";

const Workshops = () => {
  const workshops = [
    {
      id: "beginners-pottery-journey",
      title: "Beginner's Pottery Journey",
      level: "Beginner",
      duration: "4 weeks",
      schedule: "Saturdays, 10:00 AM - 1:00 PM",
      startDate: "April 15, 2025",
      price: "₹8,500",
      capacity: "8 students",
      rating: 4.9,
      reviews: 24,
      description: "Perfect for absolute beginners. Learn wheel throwing basics, hand-building techniques, and glazing. Create functional pieces like bowls, mugs, and plates while developing fundamental pottery skills.",
      includes: ["All materials & tools", "Clay & glazing supplies", "Firing services", "Take-home pieces"],
      instructor: "Anjali Deshmukh",
      location: "Main Studio",
      featured: true,
    },
    {
      id: "mindful-clay-experience",
      title: "Mindful Clay Experience",
      level: "All Levels",
      duration: "6 weeks",
      schedule: "Sundays, 3:00 PM - 5:00 PM",
      startDate: "May 1, 2025",
      price: "₹12,000",
      capacity: "6 students",
      rating: 4.8,
      reviews: 18,
      description: "A unique workshop combining meditation and pottery. Begin each session with guided mindfulness practice, then explore clay as a meditative medium. Create intuitive, expressive pieces while cultivating presence and calm.",
      includes: ["Meditation guidance", "All materials", "Private studio time", "Mindfulness journal"],
      instructor: "Anjali Deshmukh",
      location: "Meditation Studio",
      featured: true,
    },
    {
      id: "advanced-glazing-techniques",
      title: "Advanced Glazing Techniques",
      level: "Intermediate",
      duration: "3 weeks",
      schedule: "Fridays, 6:00 PM - 9:00 PM",
      startDate: "April 22, 2025",
      price: "₹9,500",
      capacity: "6 students",
      rating: 4.7,
      reviews: 12,
      description: "Master the art of ceramic glazing. Learn glaze chemistry, layering techniques, firing methods, and surface decoration. Perfect for potters ready to elevate their finishing techniques.",
      includes: ["Glaze recipes", "Test tiles", "Multiple firings", "Reference materials"],
      instructor: "Raj Patel",
      location: "Glazing Lab",
      featured: false,
    },
    {
      id: "wheel-throwing-intensive",
      title: "Wheel Throwing Intensive",
      level: "Intermediate",
      duration: "2 weeks",
      schedule: "Monday & Wednesday, 7:00 PM - 9:30 PM",
      startDate: "May 10, 2025",
      price: "₹7,000",
      capacity: "5 students",
      rating: 4.9,
      reviews: 15,
      description: "Accelerated wheel throwing for those with basic experience. Focus on centering, pulling walls, shaping, and creating consistent forms. Build speed, precision, and confidence at the wheel.",
      includes: ["Extended practice time", "Personal feedback", "Video analysis", "Clay package"],
      instructor: "Priya Sharma",
      location: "Wheel Studio",
      featured: false,
    },
    {
      id: "sculptural-pottery",
      title: "Sculptural Pottery",
      level: "All Levels",
      duration: "5 weeks",
      schedule: "Thursdays, 4:00 PM - 7:00 PM",
      startDate: "April 28, 2025",
      price: "₹11,000",
      capacity: "7 students",
      rating: 4.6,
      reviews: 20,
      description: "Explore pottery as sculpture. Move beyond functional forms to create expressive, artistic pieces. Learn coiling, slab building, and organic shaping while developing your unique artistic voice.",
      includes: ["Diverse materials", "Texture tools", "Surface treatments", "Gallery showcase"],
      instructor: "Anjali Deshmukh",
      location: "Sculpture Studio",
      featured: false,
    },
    {
      id: "kids-pottery-camp",
      title: "Kids Pottery Camp",
      level: "Ages 8-14",
      duration: "1 week",
      schedule: "Daily, 10:00 AM - 12:00 PM",
      startDate: "June 5, 2025",
      price: "₹5,500",
      capacity: "10 students",
      rating: 4.8,
      reviews: 32,
      description: "A fun, creative week introducing children to pottery. Kids will learn basic techniques, create playful pieces, and develop fine motor skills. Each day includes hands-on making, games, and creative exploration.",
      includes: ["All materials", "Snacks provided", "Supervised activities", "Certificate"],
      instructor: "Priya Sharma",
      location: "Kids Studio",
      featured: false,
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
      <section className="section-padding pottery-texture">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-semibold mb-4">
              Upcoming Workshops
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the workshop that speaks to your creative journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {workshops.map((workshop, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-xl transition-all group overflow-hidden" style={{ animationDelay: `${index * 0.05}s` }}>
                {/* Featured Badge */}
                {workshop.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-primary text-primary-foreground shadow-lg">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center space-x-2">
                      <Badge className={getLevelColor(workshop.level)}>
                        {workshop.level}
                      </Badge>
                      {workshop.rating && (
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{workshop.rating}</span>
                          <span>({workshop.reviews})</span>
                        </div>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="text-3xl font-heading font-bold text-primary">
                        {workshop.price}
                      </span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl font-heading group-hover:text-primary transition-colors">
                    {workshop.title}
                  </CardTitle>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{workshop.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="h-4 w-4" />
                      <span>{workshop.instructor}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {workshop.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                      <div>
                        <span className="font-medium">Duration</span>
                        <p>{workshop.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Calendar className="h-4 w-4 text-primary flex-shrink-0" />
                      <div>
                        <span className="font-medium">Schedule</span>
                        <p>{workshop.schedule}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Calendar className="h-4 w-4 text-primary flex-shrink-0" />
                      <div>
                        <span className="font-medium">Starts</span>
                        <p>{workshop.startDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Users className="h-4 w-4 text-primary flex-shrink-0" />
                      <div>
                        <span className="font-medium">Capacity</span>
                        <p>{workshop.capacity}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-semibold mb-3 flex items-center">
                      <Heart className="h-4 w-4 mr-2 text-primary" />
                      What's Included
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      {workshop.includes.map((item, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full" size="lg" asChild>
                    <Link to={`/workshops/${workshop.id}`}>
                      Book This Workshop <ArrowRight className="ml-2 h-4 w-4" />
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
            <Button size="lg" variant="secondary">
              Contact Us for Guidance
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Workshops;
