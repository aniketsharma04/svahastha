import { useState } from "react";
import { Search, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";

// Sample blog data - this would come from WordPress API in the future
const sampleBlogs = [
  {
    id: 1,
    title: "The Art of Mindful Pottery",
    excerpt: "Discover how pottery can become a meditative practice that enhances mindfulness and reduces stress.",
    date: "April 15, 2024",
    author: "Anjali Deshmukh",
    category: "Mindfulness",
    tags: ["meditation", "wellness", "beginners"],
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261",
    slug: "the-art-of-mindful-pottery"
  },
  {
    id: 2,
    title: "5 Essential Tools Every Potter Needs",
    excerpt: "A comprehensive guide to the must-have tools for both beginner and experienced pottery enthusiasts.",
    date: "April 2, 2024",
    author: "Raj Patel",
    category: "Tools & Techniques",
    tags: ["tools", "beginners", "equipment"],
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61",
    slug: "essential-pottery-tools"
  },
  {
    id: 3,
    title: "Understanding Clay Types: A Beginner's Guide",
    excerpt: "Learn about the different types of clay and how to choose the right one for your pottery projects.",
    date: "March 20, 2024",
    author: "Anjali Deshmukh",
    category: "Materials",
    tags: ["clay", "beginners", "materials"],
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261",
    slug: "understanding-clay-types"
  },
  {
    id: 4,
    title: "The History of Pottery in South Asia",
    excerpt: "Explore the rich cultural heritage of pottery traditions across South Asia through the centuries.",
    date: "March 10, 2024",
    author: "Priya Sharma",
    category: "History & Culture",
    tags: ["history", "cultural", "traditions"],
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261",
    slug: "history-of-pottery-south-asia"
  },
  {
    id: 5,
    title: "Glazing Techniques for Vibrant Finishes",
    excerpt: "Master the art of glazing with these techniques that will bring your pottery pieces to life with color.",
    date: "February 28, 2024",
    author: "Raj Patel",
    category: "Tools & Techniques",
    tags: ["glazing", "color", "techniques", "advanced"],
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261",
    slug: "glazing-techniques-vibrant-finishes"
  },
  {
    id: 6,
    title: "Pottery as Therapy: Healing Through Clay",
    excerpt: "Discover how working with clay can provide therapeutic benefits for mental health and emotional wellbeing.",
    date: "February 15, 2024",
    author: "Anjali Deshmukh",
    category: "Mindfulness",
    tags: ["therapy", "wellness", "mental health"],
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261",
    slug: "pottery-as-therapy"
  },
];

// Get all unique categories from blogs
const allCategories = ["All", ...new Set(sampleBlogs.map(blog => blog.category))];

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // Filter blogs based on search query and selected category
  const filteredBlogs = sampleBlogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative section-padding bg-accent/30 overflow-hidden">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-in">
            Our Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Insights, stories, and expertise from the world of pottery and mindfulness
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 border-b border-border bg-background sticky top-20 z-40">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            {/* Search */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {allCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog List */}
      <section className="section-padding">
        <div className="container-custom">
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog) => (
                <Card key={blog.id} className="animate-fade-in hover:shadow-lg transition-all overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="space-y-2">
                      <Badge variant="outline" className="bg-primary/10 text-primary">
                        {blog.category}
                      </Badge>
                      <h3 className="text-xl font-heading font-semibold line-clamp-2">
                        <a href={`/blogs/${blog.slug}`} className="hover:text-primary transition-colors">
                          {blog.title}
                        </a>
                      </h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3 mb-4">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground space-x-4">
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="mr-1 h-3 w-3" />
                        <span>{blog.author}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-wrap gap-2">
                      {blog.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {blog.tags.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{blog.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}

          {/* Pagination */}
          <div className="mt-12">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationLink href="#" disabled>
                    Previous
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">
                    Next
                  </PaginationLink>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;