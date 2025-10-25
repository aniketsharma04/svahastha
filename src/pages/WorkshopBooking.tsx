import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, Users, MapPin, Award, Star, ArrowLeft, CheckCircle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format, parseISO, isAfter, startOfDay } from "date-fns";
import { cn } from "@/lib/utils";

// Workshop data - in a real app, this would come from an API
const workshopData = {
  "hand-building-pottery-course": {
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
  "wheel-throwing-pottery-course": {
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
  "wheel-fun-pottery-workshop": {
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
  "ceramic-painting-workshop": {
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
  "glaze-application-course": {
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
  "glow-in-the-dark-pottery": {
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
  }
};

const WorkshopBooking = () => {
  const { workshopId } = useParams();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const workshop = workshopData[workshopId as keyof typeof workshopData];

  // Debug logging
  console.log("Workshop ID:", workshopId);
  console.log("Workshop data:", workshop);
  console.log("Selected date:", selectedDate);

  if (!workshop) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Workshop Not Found</h1>
          <p className="text-muted-foreground mb-6">The workshop you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/workshops">Back to Workshops</Link>
          </Button>
        </div>
      </div>
    );
  }

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

  const availableTimeSlots = workshop.availableDates
    .filter(slot => slot.spots > 0)
    .map(slot => ({
      date: slot.date,
      time: slot.time,
      spots: slot.spots
    }));

  const handleDateSelect = (date: Date | undefined) => {
    console.log("Date selected:", date);
    if (date) {
      setSelectedDate(date);
      setSelectedTimeSlot("");
      setIsCalendarOpen(false);
    }
  };

  const handleBooking = () => {
    if (selectedDate && selectedTimeSlot) {
      // In a real app, this would submit to a booking API
      const message = `Hi! I'd like to book ${workshop.title} on ${format(selectedDate, 'PPP')} at ${selectedTimeSlot}. Please confirm availability.`;
      const whatsappUrl = `https://wa.me/916361580705?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-background to-accent/5">
      {/* Enhanced Header */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-accent/10 to-background relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-primary/10 animate-pulse" />
        <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full bg-accent/20 animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container-custom relative z-10">
          <div className="flex items-center space-x-4 mb-8">
            <Button variant="ghost" size="sm" asChild className="hover:bg-primary/10 transition-colors">
              <Link to="/workshops" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Workshops
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Enhanced Workshop Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-background to-accent/5 rounded-2xl p-8 shadow-lg border border-primary/10">
                <div className="flex items-center space-x-4 mb-6">
                  <Badge className={`${getLevelColor(workshop.level)} border-0 shadow-sm text-sm px-3 py-1`}>
                    {workshop.level}
                  </Badge>
                  {workshop.featured && (
                    <Badge className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-0 shadow-sm">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>

                <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent leading-tight">
                  {workshop.title}
                </h1>

                <div className="flex items-center space-x-8 text-muted-foreground mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Star className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-semibold">{workshop.rating} ({workshop.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <MapPin className="h-4 w-4 text-accent-foreground" />
                    </div>
                    <span className="font-medium">{workshop.location}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium">{workshop.instructor}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-background to-accent/5 rounded-2xl p-8 shadow-lg border border-primary/10">
                <h3 className="text-2xl font-heading font-bold mb-4 text-foreground">About This Workshop</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {workshop.description}
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8 border border-primary/10 shadow-lg">
                <h3 className="text-2xl font-heading font-bold mb-6 flex items-center text-foreground">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <Heart className="h-4 w-4 text-primary" />
                  </div>
                  What's Included
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {workshop.includes.map((item, i) => (
                    <div key={i} className="flex items-center space-x-4 p-4 rounded-lg bg-background/50">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="font-medium text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8 border border-accent/20 shadow-lg">
                <h3 className="text-2xl font-heading font-bold mb-6 text-foreground">Workshop Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">Duration</span>
                      <p className="text-muted-foreground">{workshop.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Users className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">Capacity</span>
                      <p className="text-muted-foreground">{workshop.capacity}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Booking Section */}
            <div className="space-y-6">
              <Card className="sticky top-24 bg-gradient-to-br from-background to-accent/5 border-0 shadow-2xl">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-t-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl font-heading text-foreground">Book Your Spot</CardTitle>
                      <p className="text-muted-foreground">Choose your preferred date and time</p>
                    </div>
                    <div className="text-right">
                      <span className="text-4xl font-heading font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                        {workshop.price}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8 p-8">
                  {/* Enhanced Instructions */}
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
                    <h4 className="text-lg font-semibold mb-3 text-foreground flex items-center">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                        <Star className="h-3 w-3 text-primary" />
                      </div>
                      How to Book
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <strong>Step-by-step process:</strong> First select a date, then choose your preferred time slot, and finally complete your booking. You'll receive instant confirmation via WhatsApp.
                    </p>
                  </div>

                  {/* Enhanced Date Selection */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold flex items-center text-foreground">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      Step 1: Select Date
                    </h4>
                    <div className="space-y-4">
                      {/* Enhanced date buttons */}
                      <div className="grid grid-cols-1 gap-3">
                        {workshop.availableDates.map((slot, index) => {
                          const slotDate = new Date(slot.date);
                          return (
                            <Button
                              key={index}
                              variant={selectedDate?.toISOString().split('T')[0] === slot.date ? "default" : "outline"}
                              className="w-full justify-between h-12 hover:shadow-md transition-all"
                              onClick={() => {
                                setSelectedDate(slotDate);
                                setSelectedTimeSlot("");
                              }}
                            >
                              <span className="font-medium">{format(slotDate, "PPP")}</span>
                              <span className="text-sm text-muted-foreground">
                                {slot.spots} spots
                              </span>
                            </Button>
                          );
                        })}
                      </div>
                      
                      {/* Enhanced Calendar picker */}
                      <div className="pt-4 border-t border-primary/10">
                        <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full h-12 border-2 hover:border-primary/50 transition-colors"
                            >
                              <Calendar className="mr-2 h-4 w-4" />
                              Use Calendar
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0 shadow-2xl" align="start">
                            <div className="p-3">
                              <CalendarComponent
                                mode="single"
                                selected={selectedDate}
                                onSelect={handleDateSelect}
                                disabled={(date) => {
                                  const today = startOfDay(new Date());
                                  const dateStr = date.toISOString().split('T')[0];
                                  const isPastDate = isAfter(today, date);
                                  const isNotAvailable = !workshop.availableDates.some(slot => slot.date === dateStr);
                                  return isPastDate || isNotAvailable;
                                }}
                                initialFocus
                              />
                            </div>
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Time Slot Selection */}
                  {selectedDate && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold flex items-center text-foreground">
                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center mr-3">
                          <Clock className="h-4 w-4 text-accent-foreground" />
                        </div>
                        Step 2: Choose Time
                      </h4>
                      <div className="space-y-3">
                        {(() => {
                          const selectedDateStr = selectedDate.toISOString().split('T')[0];
                          const availableSlots = workshop.availableDates.filter(
                            slot => slot.date === selectedDateStr && slot.spots > 0
                          );
                          
                          if (availableSlots.length === 0) {
                            return (
                              <div className="bg-accent/10 rounded-lg p-6 text-center">
                                <p className="text-muted-foreground mb-2">No available time slots for this date.</p>
                                <p className="text-sm text-muted-foreground">Please select a different date.</p>
                              </div>
                            );
                          }
                          
                          return availableSlots.map((slot, index) => (
                            <Button
                              key={index}
                              variant={selectedTimeSlot === slot.time ? "default" : "outline"}
                              className="w-full justify-between h-14 hover:shadow-md transition-all"
                              onClick={() => setSelectedTimeSlot(slot.time)}
                            >
                              <div className="flex items-center">
                                <Clock className="mr-3 h-4 w-4" />
                                <span className="font-medium">{slot.time}</span>
                              </div>
                              <span className="text-sm text-muted-foreground">
                                {slot.spots} spots left
                              </span>
                            </Button>
                          ));
                        })()}
                      </div>
                    </div>
                  )}

                  {/* Enhanced Booking Summary */}
                  {selectedDate && selectedTimeSlot && (
                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
                      <h4 className="text-lg font-semibold mb-4 text-foreground flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                        Step 3: Review & Book
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Workshop:</span>
                          <span className="font-medium text-foreground">{workshop.title}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Date:</span>
                          <span className="font-medium text-foreground">{format(selectedDate, "PPP")}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Time:</span>
                          <span className="font-medium text-foreground">{selectedTimeSlot}</span>
                        </div>
                        <div className="flex justify-between items-center pt-2 border-t border-primary/20">
                          <span className="text-muted-foreground">Price:</span>
                          <span className="font-bold text-primary text-lg">{workshop.price}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Enhanced Book Button */}
                  {workshop.availableDates.length > 0 ? (
                    <Button 
                      className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300" 
                      onClick={handleBooking}
                      disabled={!selectedDate || !selectedTimeSlot}
                    >
                      {selectedDate && selectedTimeSlot ? 'Complete Booking' : 'Select Date & Time'}
                    </Button>
                  ) : (
                    <Button 
                      className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => {
                        const message = `Hi! I'm interested in booking ${workshop.title}. Please let me know about availability and pricing.`;
                        const whatsappUrl = `https://wa.me/916361580705?text=${encodeURIComponent(message)}`;
                        window.open(whatsappUrl, '_blank');
                      }}
                    >
                      Contact for Booking
                    </Button>
                  )}

                  <div className="bg-accent/10 rounded-lg p-4 text-center">
                    <p className="text-xs text-muted-foreground">
                      🔒 Secure booking • 📱 WhatsApp confirmation • 🆓 Free cancellation up to 24 hours before
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkshopBooking;
