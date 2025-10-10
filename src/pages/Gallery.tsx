import { useState } from "react";
import { Button } from "@/components/ui/button";
import galleryImage from "@/assets/gallery-pottery.jpg";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = ["All", "Bowls", "Vases", "Plates", "Sculptures", "Mugs"];

  // In a real app, these would be actual images
  const galleryItems = [
    { id: 1, category: "bowls", title: "Terracotta Bowl", image: galleryImage },
    { id: 2, category: "vases", title: "Cream Vase", image: galleryImage },
    { id: 3, category: "plates", title: "Handmade Plate", image: galleryImage },
    { id: 4, category: "sculptures", title: "Abstract Form", image: galleryImage },
    { id: 5, category: "mugs", title: "Morning Mug", image: galleryImage },
    { id: 6, category: "bowls", title: "Nesting Bowls", image: galleryImage },
    { id: 7, category: "vases", title: "Tall Vase", image: galleryImage },
    { id: 8, category: "plates", title: "Dinner Set", image: galleryImage },
    { id: 9, category: "sculptures", title: "Organic Sculpture", image: galleryImage },
    { id: 10, category: "mugs", title: "Tea Cup Set", image: galleryImage },
    { id: 11, category: "bowls", title: "Serving Bowl", image: galleryImage },
    { id: 12, category: "vases", title: "Decorative Vessel", image: galleryImage },
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-accent/30">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-in">
            Our Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            A collection of handcrafted pieces, each telling its own story
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-border bg-background sticky top-20 z-40">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const filterValue = category.toLowerCase();
              return (
                <Button
                  key={category}
                  variant={activeFilter === filterValue ? "default" : "outline"}
                  onClick={() => setActiveFilter(filterValue)}
                  className="min-w-[100px]"
                >
                  {category}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding pottery-texture">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl bg-card shadow-md hover:shadow-xl transition-all cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                    <h3 className="text-xl font-heading font-semibold">{item.title}</h3>
                    <p className="text-sm text-background/90 capitalize">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No items found in this category. Please try another filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold">
              Create Your Own Masterpiece
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Every piece in our gallery was made by hand in our studio. 
              Join a workshop and discover what you can create.
            </p>
            <Button size="lg" variant="secondary">
              Explore Workshops
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
