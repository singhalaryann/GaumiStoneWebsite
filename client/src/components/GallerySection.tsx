import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const galleryItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
    title: "Manufacturing Facility",
    description: "State-of-the-art stone processing equipment",
    category: "facility"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
    title: "Marble Flooring Project",
    description: "Luxury residential installation",
    category: "marble"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=900",
    title: "Precision Cutting",
    description: "Advanced stone cutting technology",
    category: "process"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700",
    title: "Granite Countertops",
    description: "Contemporary kitchen design",
    category: "granite"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
    title: "Sandstone Facade",
    description: "Architectural exterior project",
    category: "sandstone"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
    title: "Quality Control",
    description: "Rigorous quality testing process",
    category: "process"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=900",
    title: "Marble Bathroom",
    description: "Luxury spa-like design",
    category: "marble"
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700",
    title: "Granite Monument",
    description: "Memorial and architectural stonework",
    category: "granite"
  }
];

const filters = [
  { key: "all", label: "All Projects" },
  { key: "marble", label: "Marble" },
  { key: "granite", label: "Granite" },
  { key: "sandstone", label: "Sandstone" }
];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (imageUrl: string) => {
    window.open(imageUrl, '_blank');
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[hsl(20,14.3%,4.1%)] mb-6">
            Project Gallery
          </h2>
          <p className="text-xl text-[hsl(215,16.3%,46.9%)] max-w-3xl mx-auto mb-8">
            Explore our completed projects and see the quality craftsmanship that sets us apart.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-[hsl(32,95%,44%)] text-white'
                    : 'bg-white text-[hsl(20,14.3%,4.1%)] border border-[hsl(20,14.3%,4.1%)] hover:bg-[hsl(20,14.3%,4.1%)] hover:text-white'
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </motion.div>
        
        {/* Masonry Gallery */}
        <div className="masonry">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="masonry-item"
            >
              <Card className="gallery-item bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                    onClick={() => openLightbox(item.image)}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-[hsl(20,14.3%,4.1%)] mb-1">{item.title}</h4>
                  <p className="text-sm text-[hsl(215,16.3%,46.9%)]">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
