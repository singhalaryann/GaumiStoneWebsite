import { motion } from "framer-motion";
import { Scissors, Truck, Forward, IdCard } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Custom Stone Cutting",
    description: "Precision cutting and shaping services to meet your exact specifications and design requirements.",
    color: "bg-[hsl(32,95%,44%)]"
  },
  {
    icon: Truck,
    title: "Bulk Supply",
    description: "Large-scale stone supply for construction projects with competitive pricing and reliable delivery.",
    color: "bg-[hsl(158,90%,20%)]"
  },
  {
    icon: Forward,
    title: "Home Delivery",
    description: "Convenient delivery services ensuring your stone materials reach you safely and on time.",
    color: "bg-[hsl(32,95%,44%)]"
  },
  {
    icon: IdCard,
    title: "Quality Testing",
    description: "Comprehensive quality testing and certification to ensure all materials meet industry standards.",
    color: "bg-[hsl(158,90%,20%)]"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-[hsl(20,14.3%,4.1%)] text-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Expert Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive stone processing and supply services backed by years of expertise and state-of-the-art equipment.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className={`${service.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-heading font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
