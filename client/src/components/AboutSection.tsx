import { motion } from "framer-motion";
import { CheckCircle, Phone, Mail } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[hsl(20,14.3%,4.1%)] mb-8">
              About Gaumti Stone Industries
            </h2>
            <p className="text-lg text-[hsl(215,16.3%,46.9%)] mb-6">
              Founded with a vision to provide premium quality stone materials, Gaumti Stone Industries has established itself as a trusted name in the stone manufacturing and supply industry. Our commitment to excellence and customer satisfaction drives everything we do.
            </p>
            <p className="text-lg text-[hsl(215,16.3%,46.9%)] mb-6">
              Under the leadership of <strong>Aryan Singhal</strong>, our company has grown from a small local operation to a comprehensive stone processing facility serving both retail and bulk construction markets across the region.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[hsl(32,95%,44%)] mb-2">15+</div>
                <div className="text-[hsl(215,16.3%,46.9%)]">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[hsl(158,90%,20%)] mb-2">500+</div>
                <div className="text-[hsl(215,16.3%,46.9%)]">Projects Completed</div>
              </div>
            </div>
            
            {/* Quality Commitment */}
            <div className="bg-[hsl(210,40%,96%)] p-6 rounded-xl">
              <h3 className="text-xl font-heading font-semibold text-[hsl(20,14.3%,4.1%)] mb-4">
                Our Quality Commitment
              </h3>
              <ul className="space-y-2 text-[hsl(215,16.3%,46.9%)]">
                <li className="flex items-center">
                  <CheckCircle className="text-[hsl(158,90%,20%)] mr-3 w-5 h-5" />
                  Premium grade stone selection
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[hsl(158,90%,20%)] mr-3 w-5 h-5" />
                  State-of-the-art processing equipment
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[hsl(158,90%,20%)] mr-3 w-5 h-5" />
                  Rigorous quality testing protocols
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[hsl(158,90%,20%)] mr-3 w-5 h-5" />
                  Timely delivery and professional service
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Professional photo placeholder for Aryan Singhal */}
            <div className="bg-gradient-to-br from-[hsl(20,14.3%,4.1%)] to-[hsl(25,60%,31%)] p-1 rounded-2xl inline-block mb-6">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                alt="Aryan Singhal - Owner of Gaumti Stone Industries" 
                className="w-64 h-64 object-cover rounded-xl"
              />
            </div>
            <h3 className="text-2xl font-heading font-bold text-[hsl(20,14.3%,4.1%)] mb-2">
              Aryan Singhal
            </h3>
            <p className="text-[hsl(32,95%,44%)] font-semibold mb-4">Founder & Managing Director</p>
            <p className="text-[hsl(215,16.3%,46.9%)] max-w-md mx-auto mb-8">
              "Our mission is to provide the finest quality stones while building lasting relationships with our clients through exceptional service and craftsmanship."
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center justify-center text-[hsl(215,16.3%,46.9%)]">
                <Phone className="text-[hsl(32,95%,44%)] mr-3 w-5 h-5" />
                <span>8440992573</span>
              </div>
              <div className="flex items-center justify-center text-[hsl(215,16.3%,46.9%)]">
                <Mail className="text-[hsl(32,95%,44%)] mr-3 w-5 h-5" />
                <span>singhalaryan2618@gmail.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
