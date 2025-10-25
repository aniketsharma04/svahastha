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
  "beginners-pottery-journey": {
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
    availableDates: [
      { date: "2024-12-21", time: "10:00 AM - 1:00 PM", spots: 3 },
      { date: "2024-12-28", time: "10:00 AM - 1:00 PM", spots: 5 },
      { date: "2025-01-04", time: "10:00 AM - 1:00 PM", spots: 7 },
      { date: "2025-01-11", time: "10:00 AM - 1:00 PM", spots: 8 },
      { date: "2025-01-18", time: "10:00 AM - 1:00 PM", spots: 6 },
      { date: "2025-01-25", time: "10:00 AM - 1:00 PM", spots: 4 },
    ]
  },
  "mindful-clay-experience": {
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
    availableDates: [
      { date: "2024-12-22", time: "3:00 PM - 5:00 PM", spots: 2 },
      { date: "2024-12-29", time: "3:00 PM - 5:00 PM", spots: 4 },
      { date: "2025-01-05", time: "3:00 PM - 5:00 PM", spots: 6 },
      { date: "2025-01-12", time: "3:00 PM - 5:00 PM", spots: 3 },
      { date: "2025-01-19", time: "3:00 PM - 5:00 PM", spots: 5 },
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
      alert(`Booking confirmed for ${workshop.title} on ${format(selectedDate, 'PPP')} at ${selectedTimeSlot}`);
    }
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <section className="section-padding bg-accent/30">
        <div className="container-custom">
          <div className="flex items-center space-x-4 mb-6">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/workshops" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Workshops
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Workshop Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Badge className={getLevelColor(workshop.level)}>
                    {workshop.level}
                  </Badge>
                  {workshop.featured && (
                    <Badge className="bg-primary text-primary-foreground">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>

                <h1 className="text-4xl md:text-5xl font-heading font-bold">
                  {workshop.title}
                </h1>

                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{workshop.rating}</span>
                    <span>({workshop.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{workshop.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Award className="h-4 w-4" />
                    <span>{workshop.instructor}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-semibold">About This Workshop</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {workshop.description}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-semibold flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-primary" />
                  What's Included
                </h3>
                <ul className="space-y-2">
                  {workshop.includes.map((item, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <div>
                    <span className="font-medium">Duration</span>
                    <p className="text-muted-foreground">{workshop.duration}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-primary" />
                  <div>
                    <span className="font-medium">Capacity</span>
                    <p className="text-muted-foreground">{workshop.capacity}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Section */}
            <div className="space-y-6">
              <Card className="sticky top-24">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl font-heading">Book Your Spot</CardTitle>
                      <p className="text-muted-foreground">Choose your preferred date and time</p>
                    </div>
                    <div className="text-right">
                      <span className="text-3xl font-heading font-bold text-primary">
                        {workshop.price}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Instructions */}
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>How to book:</strong> First select a date, then choose your preferred time slot, and finally complete your booking.
                    </p>
                  </div>

                  {/* Date Selection */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium">Step 1: Select Date</label>
                    <div className="space-y-2">
                      {/* Simple date buttons as fallback */}
                      <div className="grid grid-cols-1 gap-2">
                        {workshop.availableDates.map((slot, index) => {
                          const slotDate = new Date(slot.date);
                          return (
                            <Button
                              key={index}
                              variant={selectedDate?.toISOString().split('T')[0] === slot.date ? "default" : "outline"}
                              className="w-full justify-between"
                              onClick={() => {
                                setSelectedDate(slotDate);
                                setSelectedTimeSlot("");
                              }}
                            >
                              <span>{format(slotDate, "PPP")}</span>
                              <span className="text-sm text-muted-foreground">
                                {slot.spots} spots
                              </span>
                            </Button>
                          );
                        })}
                      </div>
                      
                      {/* Calendar picker */}
                      <div className="pt-2 border-t">
                        <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                          <PopoverTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full"
                            >
                              <Calendar className="mr-2 h-4 w-4" />
                              Use Calendar
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
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

                  {/* Time Slot Selection */}
                  {selectedDate && (
                    <div className="space-y-3">
                      <label className="text-sm font-medium">Step 2: Choose Time</label>
                      <div className="space-y-2">
                        {(() => {
                          const selectedDateStr = selectedDate.toISOString().split('T')[0];
                          const availableSlots = workshop.availableDates.filter(
                            slot => slot.date === selectedDateStr && slot.spots > 0
                          );
                          
                          if (availableSlots.length === 0) {
                            return (
                              <div className="text-center py-4 text-muted-foreground">
                                <p>No available time slots for this date.</p>
                                <p className="text-sm">Please select a different date.</p>
                              </div>
                            );
                          }
                          
                          return availableSlots.map((slot, index) => (
                            <Button
                              key={index}
                              variant={selectedTimeSlot === slot.time ? "default" : "outline"}
                              className="w-full justify-between"
                              onClick={() => setSelectedTimeSlot(slot.time)}
                            >
                              <span>{slot.time}</span>
                              <span className="text-sm text-muted-foreground">
                                {slot.spots} spots left
                              </span>
                            </Button>
                          ));
                        })()}
                      </div>
                    </div>
                  )}

                  {/* Booking Summary */}
                  {selectedDate && selectedTimeSlot && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg space-y-2">
                      <h4 className="font-semibold text-green-800">Step 3: Review & Book</h4>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p><strong>Workshop:</strong> {workshop.title}</p>
                        <p><strong>Date:</strong> {format(selectedDate, "PPP")}</p>
                        <p><strong>Time:</strong> {selectedTimeSlot}</p>
                        <p><strong>Price:</strong> {workshop.price}</p>
                      </div>
                    </div>
                  )}

                  {/* Book Button */}
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={handleBooking}
                    disabled={!selectedDate || !selectedTimeSlot}
                  >
                    {selectedDate && selectedTimeSlot ? 'Complete Booking' : 'Select Date & Time'}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Secure payment processing • Free cancellation up to 24 hours before
                  </p>
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
