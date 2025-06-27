import { useState } from "react";
import { motion } from "framer-motion";
import { Scissors, Truck, Forward, IdCard, Star, Clock, Shield, Award } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Custom Stone Cutting",
    description: "Precision cutting and shaping services to meet your exact specifications and design requirements.",
    color: "bg-[hsl(32,95%,44%)]",
    features: ["CNC Precision", "Custom Shapes", "Any Thickness", "Quick Turnaround"],
    stats: "500+ Projects"
  },
  {
    icon: Truck,
    title: "Bulk Supply",
    description: "Large-scale stone supply for construction projects with competitive pricing and reliable delivery.",
    color: "bg-[hsl(158,90%,20%)]",
    features: ["Volume Discounts", "Timely Delivery", "Quality Assurance", "Flexible Terms"],
    stats: "10,000+ Tons"
  },
  {
    icon: Forward,
    title: "Home Delivery",
    description: "Convenient delivery services ensuring your stone materials reach you safely and on time.",
    color: "bg-[hsl(32,95%,44%)]",
    features: ["Safe Handling", "Scheduled Delivery", "Installation Support", "Regional Coverage"],
    stats: "99% On-Time"
  },
  {
    icon: IdCard,
    title: "Quality Testing",
    description: "Comprehensive quality testing and certification to ensure all materials meet industry standards.",
    color: "bg-[hsl(158,90%,20%)]",
    features: ["Strength Testing", "Durability Analysis", "Certification", "Lab Reports"],
    stats: "ISO Certified"
  }
];

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-[hsl(20,14.3%,4.1%)] via-[hsl(25,60%,31%)] to-[hsl(20,14.3%,4.1%)] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 border border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
            animate={{ 
              textShadow: ["0 0 20px rgba(255,255,255,0.5)", "0 0 40px rgba(255,255,255,0.8)", "0 0 20px rgba(255,255,255,0.5)"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Our Expert Services
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive stone processing and supply services backed by years of expertise and state-of-the-art equipment.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                bounce: 0.4
              }}
              className="text-center group relative"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Service Card */}
              <motion.div 
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 h-full border border-white/20 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${service.color.includes('32') ? 'hsl(32,95%,44%)' : 'hsl(158,90%,20%)'}, transparent)`
                  }}
                />

                {/* Icon with 3D effect */}
                <motion.div 
                  className={`${service.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 relative pulse-glow`}
                  whileHover={{ 
                    scale: 1.2, 
                    rotateY: 180,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                  
                  {/* Floating particles around icon */}
                  {hoveredService === index && (
                    <>
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-white rounded-full"
                          initial={{ scale: 0, x: 0, y: 0 }}
                          animate={{
                            scale: [0, 1, 0],
                            x: [0, (Math.cos(i * 60 * Math.PI / 180) * 30)],
                            y: [0, (Math.sin(i * 60 * Math.PI / 180) * 30)],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.1
                          }}
                        />
                      ))}
                    </>
                  )}
                </motion.div>

                <h3 className="text-xl font-heading font-semibold mb-4 group-hover:text-[hsl(32,95%,44%)] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features list with stagger animation */}
                <motion.div 
                  className="space-y-2 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + featureIndex * 0.1 + 0.7 }}
                      className="flex items-center text-sm text-gray-400"
                    >
                      <motion.div
                        className="w-2 h-2 bg-[hsl(32,95%,44%)] rounded-full mr-2"
                        animate={{ scale: hoveredService === index ? [1, 1.5, 1] : 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      {feature}
                    </motion.div>
                  ))}
                </motion.div>

                {/* Stats badge */}
                <motion.div
                  className="bg-gradient-to-r from-[hsl(32,95%,44%)] to-[hsl(158,90%,20%)] text-white px-4 py-2 rounded-full text-sm font-bold inline-block"
                  whileHover={{ scale: 1.1 }}
                  animate={{ 
                    boxShadow: hoveredService === index 
                      ? ["0 0 20px rgba(255,165,0,0.5)", "0 0 40px rgba(255,165,0,0.8)", "0 0 20px rgba(255,165,0,0.5)"]
                      : "0 0 0px rgba(255,165,0,0)"
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Star className="w-4 h-4 inline mr-1" />
                  {service.stats}
                </motion.div>

                {/* Floating number indicator */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring", bounce: 0.5 }}
                >
                  {index + 1}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button 
            className="bg-gradient-to-r from-[hsl(32,95%,44%)] to-[hsl(158,90%,20%)] text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 40px rgba(255,165,0,0.3)",
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <Clock className="inline w-5 h-5 mr-2" />
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
