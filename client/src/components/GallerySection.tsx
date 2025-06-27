import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ImageLightbox from "./ImageLightbox";

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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const navigateToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
              <motion.div
                key={filter.key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-500 transform ${
                    activeFilter === filter.key
                      ? 'bg-[hsl(32,95%,44%)] text-white shadow-lg scale-105 pulse-glow'
                      : 'bg-white text-[hsl(20,14.3%,4.1%)] border border-[hsl(20,14.3%,4.1%)] hover:bg-[hsl(20,14.3%,4.1%)] hover:text-white hover:scale-105'
                  }`}
                >
                  {filter.label}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Masonry Gallery */}
        <div className="masonry">
          {filteredItems.map((item, index) => (
            <motion.div
              key={`${activeFilter}-${item.id}`}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                bounce: 0.3
              }}
              className="masonry-item"
              layout
            >
              <Card className="gallery-item bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group relative">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-auto transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                    onClick={() => openLightbox(index)}
                  />
                  
                  {/* Hover Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center"
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-300">{item.description}</p>
                      <div className="mt-3 bg-[hsl(32,95%,44%)] text-white px-4 py-2 rounded-full text-sm font-semibold inline-block">
                        Click to expand
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Category badge */}
                  <div className="absolute top-3 left-3 bg-[hsl(32,95%,44%)] text-white px-3 py-1 rounded-full text-xs font-semibold capitalize opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {item.category}
                  </div>
                </div>
                <CardContent className="p-4 bg-gradient-to-r from-white to-gray-50">
                  <h4 className="font-semibold text-[hsl(20,14.3%,4.1%)] mb-1">{item.title}</h4>
                  <p className="text-sm text-[hsl(215,16.3%,46.9%)]">{item.description}</p>
                </CardContent>
                
                {/* Floating index indicator */}
                <motion.div
                  className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-xs font-bold text-[hsl(20,14.3%,4.1%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  whileHover={{ scale: 1.1 }}
                >
                  {index + 1}
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Add some floating elements for extra visual appeal */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-[hsl(32,95%,44%)] rounded-full opacity-20 floating-animation"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-[hsl(158,90%,20%)] rounded-full opacity-30 floating-animation" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-[hsl(32,95%,44%)] rounded-full opacity-25 floating-animation" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Enhanced Lightbox */}
      <ImageLightbox
        images={filteredItems}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNavigate={navigateToImage}
      />
    </section>
  );
}
