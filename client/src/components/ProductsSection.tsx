import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Sparkles, ArrowRight } from "lucide-react";

const products = [
  {
    name: "Premium Marble",
    description: "Luxurious marble varieties perfect for interiors, countertops, and architectural elements.",
    image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    hoverText: "Elegant and timeless natural stone",
    properties: ["High durability", "Heat resistant", "Easy to clean", "Natural veining patterns"]
  },
  {
    name: "Premium Granite",
    description: "Durable granite stones ideal for construction, monuments, and heavy-duty applications.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    hoverText: "Durable and versatile igneous rock",
    properties: ["Extremely durable", "Scratch resistant", "Weather resistant", "Low maintenance"]
  },
  {
    name: "Natural Sandstone",
    description: "Beautiful sandstone varieties for landscaping, facades, and decorative applications.",
    image: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    hoverText: "Natural weathered stone texture",
    properties: ["Natural slip resistance", "Thermal insulation", "Easy to work with", "Weather aging"]
  },
  {
    name: "Premium Limestone",
    description: "Quality limestone blocks perfect for construction and architectural projects.",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    hoverText: "Classic sedimentary stone",
    properties: ["Natural insulation", "Fire resistant", "Sound absorption", "Easy to carve"]
  },
  {
    name: "Decorative Stones",
    description: "Unique decorative stones for artistic installations and special design projects.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    hoverText: "Artistic and ornamental stones",
    properties: ["Unique patterns", "Various colors", "Artistic appeal", "Custom finishing"]
  }
];

export default function ProductsSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-[hsl(210,40%,96%)] to-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[hsl(20,14.3%,4.1%)] mb-6">
            Our Premium Stone Collection
          </h2>
          <p className="text-xl text-[hsl(215,16.3%,46.9%)] max-w-3xl mx-auto mb-4">
            Discover our extensive range of high-quality stones, each carefully selected and processed to meet the highest industry standards.
          </p>
          <div className="flex items-center justify-center text-[hsl(32,95%,44%)] font-semibold">
            <Sparkles className="w-5 h-5 mr-2" />
            Explore our stone varieties below
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="product-card bg-white rounded-2xl shadow-xl overflow-hidden group cursor-pointer h-full">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Properties highlight */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-[hsl(32,95%,44%)] text-white px-3 py-2 rounded-full text-sm font-semibold flex items-center pulse-glow">
                      <Sparkles className="w-4 h-4 mr-1" />
                      Details
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-2xl font-bold">{product.name.split(' ')[1] || product.name}</h3>
                    <p className="text-sm">{product.hoverText}</p>
                  </div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-[hsl(20,14.3%,4.1%)] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-[hsl(215,16.3%,46.9%)] mb-4">
                    {product.description}
                  </p>
                  
                  {/* Stone Properties */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-[hsl(25,60%,31%)] mb-2 text-sm">Key Properties:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {product.properties.slice(0, 4).map((prop, propIndex) => (
                        <div key={propIndex} className="flex items-center text-xs text-gray-600">
                          <div className="w-1.5 h-1.5 bg-[hsl(32,95%,44%)] rounded-full mr-2"></div>
                          {prop}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-[hsl(32,95%,44%)] font-semibold">
                      <Sparkles className="w-4 h-4 mr-1" />
                      Premium Quality
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-[hsl(32,95%,44%)] hover:bg-orange-600 text-white"
                      onClick={scrollToContact}
                    >
                      <ArrowRight className="w-4 h-4 mr-1" />
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          
          {/* Custom Solutions Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="product-card bg-gradient-to-br from-[hsl(32,95%,44%)] to-[hsl(158,90%,20%)] rounded-2xl shadow-xl overflow-hidden group cursor-pointer h-full floating-animation">
              <CardContent className="p-8 text-white text-center h-full flex flex-col justify-center">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Wrench className="w-12 h-12 mx-auto mb-4" />
                </motion.div>
                <h3 className="text-2xl font-heading font-bold mb-4">Custom Solutions</h3>
                <p className="mb-6">
                  Need something specific? We provide custom cutting, shaping, and finishing services tailored to your project requirements.
                </p>
                <Button 
                  className="bg-white text-[hsl(32,95%,44%)] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                  onClick={scrollToContact}
                >
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
