import { motion } from "framer-motion";
import { Eye, Calculator, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    // Generate floating particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2
    }));
    setParticles(newParticles);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax-bg transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
          transform: `translateX(${mousePosition.x * 0.01}px) translateY(${mousePosition.y * 0.01}px)`
        }}
      />
      
      {/* Animated Overlay */}
      <motion.div 
        className="absolute inset-0 stone-texture-overlay"
        animate={{
          background: [
            "linear-gradient(135deg, hsl(20, 14.3%, 4.1%, 0.8), hsl(25, 60%, 31%, 0.6))",
            "linear-gradient(135deg, hsl(25, 60%, 31%, 0.7), hsl(20, 14.3%, 4.1%, 0.9))",
            "linear-gradient(135deg, hsl(20, 14.3%, 4.1%, 0.8), hsl(25, 60%, 31%, 0.6))"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-white rounded-full opacity-20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 4 + particle.delay,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
      
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        {/* Sparkle Effects */}
        <motion.div
          className="absolute -top-10 -left-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="w-8 h-8 text-[hsl(32,95%,44%)] opacity-70" />
        </motion.div>
        
        <motion.div
          className="absolute -top-5 -right-5"
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="w-6 h-6 text-[hsl(158,90%,20%)] opacity-60" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1.5, 
            delay: 0.5,
            type: "spring",
            bounce: 0.3
          }}
          className="text-5xl md:text-7xl font-heading font-bold mb-6 relative"
        >
          <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            Gaumti Stone Industries
          </span>
          
          {/* Glowing effect */}
          <motion.div
            className="absolute inset-0 text-5xl md:text-7xl font-heading font-bold opacity-50 blur-sm"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Gaumti Stone Industries
          </motion.div>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="text-xl md:text-3xl font-light mb-8"
        >
          <motion.span 
            className="text-[hsl(32,95%,44%)]"
            animate={{ textShadow: ["0 0 20px rgba(255,165,0,0.5)", "0 0 40px rgba(255,165,0,0.8)", "0 0 20px rgba(255,165,0,0.5)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Premium Stones.
          </motion.span>
          <span className="text-white mx-2">Perfect Finish.</span>
          <motion.span 
            className="text-[hsl(158,90%,20%)]"
            animate={{ textShadow: ["0 0 20px rgba(0,150,50,0.5)", "0 0 40px rgba(0,150,50,0.8)", "0 0 20px rgba(0,150,50,0.5)"] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            Proven Quality.
          </motion.span>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.1 }}
          className="text-lg mb-12 max-w-2xl mx-auto opacity-90"
        >
          Leading manufacturer and supplier of premium stone blocks, cutting, and finishing services for construction and retail markets.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={() => scrollToSection('products')}
              className="bg-[hsl(32,95%,44%)] hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform pulse-glow relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <Eye className="mr-2 w-5 h-5 relative z-10" />
              <span className="relative z-10">View Our Collection</span>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[hsl(20,14.3%,4.1%)] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0.5, originY: 0.5 }}
              />
              <Calculator className="mr-2 w-5 h-5 relative z-10" />
              <span className="relative z-10">Get Quote</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <motion.div 
        animate={{ 
          y: [0, 15, 0],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
        onClick={() => scrollToSection('products')}
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="flex flex-col items-center"
        >
          <ChevronDown className="w-8 h-8" />
          <motion.div
            className="w-1 h-12 bg-gradient-to-b from-white to-transparent rounded-full mt-2"
            animate={{ height: [20, 48, 20] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
