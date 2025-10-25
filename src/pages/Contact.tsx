import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-accent/30">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-in">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Have questions? Want to schedule a visit? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding pottery-texture">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-heading font-semibold mb-6">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your interest in pottery..."
                        rows={6}
                        required
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div>
                <h2 className="text-3xl font-heading font-semibold mb-6">
                  Visit Our Studio
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Come experience our space in person. Walk-ins are welcome, but we recommend 
                  scheduling an appointment to ensure someone is available to show you around.
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <a 
                        href="https://maps.app.goo.gl/FtpTLNp534o2Lxmk8" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                        title="Open in Google Maps"
                      >
                        410, 4th Floor, 5th Main Rd, above Polar Bear, HRBR Layout 2nd Block, HRBR Layout, Kalyan Nagar, Bengaluru, Karnataka 560043
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <div className="space-y-1">
                        <a 
                          href="tel:+916361580705" 
                          className="text-muted-foreground hover:text-primary transition-colors cursor-pointer block"
                          title="Call us"
                        >
                          +91 63615 80705
                        </a>
                        <a 
                          href="https://wa.me/916361580705" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:text-primary/80 transition-colors cursor-pointer"
                          title="WhatsApp us"
                        >
                          WhatsApp us
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a 
                        href="mailto:svahastha@gmail.com" 
                        className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                        title="Send us an email"
                      >
                        svahastha@gmail.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Studio Hours</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Tuesday - Friday: 10:00 AM - 8:00 PM</p>
                        <p>Saturday - Sunday: 9:00 AM - 6:00 PM</p>
                        <p>Monday: Closed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Follow Our Journey</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding bg-accent/30">
        <div className="container-custom">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-[16/9] bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">
                  [Google Maps Embed Would Go Here]
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
