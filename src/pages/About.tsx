import { Heart, Target, Compass } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import studioImage from "@/assets/studio-interior.jpg";

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-accent/30">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-in">
            Our Story
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Where tradition meets mindfulness in the art of pottery
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding pottery-texture">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl font-heading font-semibold">The Meaning of Svahastha</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <span className="font-semibold text-primary">Svahastha</span> is a Sanskrit word 
                  meaning "naturally flowing" or "inherent ease." It represents the effortless grace 
                  that emerges when mind, body, and material work in harmony.
                </p>
                <p>
                  At our studio, this philosophy guides everything we do. We believe pottery is not 
                  just about shaping clay—it's about discovering your natural creative rhythm, finding 
                  flow in the present moment, and creating beauty that emerges organically from stillness.
                </p>
                <p>
                  Founded in 2020, Svahastha began as a small workshop dedicated to reviving the ancient 
                  art of pottery with a contemporary, mindful approach. Today, we've grown into a 
                  community of artists, beginners, and seekers who gather to create, learn, and find 
                  peace in the tactile joy of working with clay.
                </p>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <img
                src={studioImage}
                alt="Svahastha pottery studio interior"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-accent/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-4">
              Our Philosophy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three principles that guide our approach to pottery and creativity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="animate-fade-in">
              <CardContent className="p-8 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-semibold">Mindful Making</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every creation begins with presence. We encourage slow, intentional work that 
                  honors the process as much as the finished piece.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-8 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-semibold">Authentic Expression</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe in fostering unique creative voices. Your imperfections are what 
                  make your work beautifully, unmistakably yours.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-8 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Compass className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-semibold">Continuous Growth</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Pottery is a lifelong journey. We create a supportive space where exploration, 
                  experimentation, and learning never end.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="animate-fade-in">
              <CardContent className="p-10 md:p-12 space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-heading font-semibold">A Note from the Founder</h2>
                  <p className="text-sm text-primary font-medium">Anjali Deshmukh</p>
                </div>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    I started Svahastha after years of searching for a creative practice that felt 
                    grounding and authentic. Pottery became my anchor—a place where I could quiet 
                    my mind and reconnect with the simple joy of making something with my hands.
                  </p>
                  <p>
                    What surprised me most was how transformative the process became. Every session 
                    at the wheel taught me patience, presence, and acceptance—lessons that extended 
                    far beyond the studio. I wanted to create a space where others could experience 
                    this same sense of discovery and peace.
                  </p>
                  <p>
                    At Svahastha, we're not just teaching pottery—we're nurturing a community of 
                    mindful makers. Whether you're here to learn a new skill, find a creative outlet, 
                    or simply slow down and breathe, you're welcome. I can't wait to see what you create.
                  </p>
                </div>
                <div className="pt-4">
                  <p className="font-heading text-2xl">— Anjali</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold">
              Our Mission
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              To create a sanctuary where creativity flows naturally, where clay becomes a medium 
              for mindfulness, and where every person who walks through our doors discovers their 
              unique artistic voice and finds peace in the process of creation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
