import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProductsSection />
      <ServicesSection />
      <GallerySection />
      <AboutSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-[hsl(20,14.3%,4.1%)] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4 font-heading">
                <span className="inline-block w-2 h-2 bg-[hsl(32,95%,44%)] rounded-full mr-2"></span>
                Gaumti Stone Industries
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Leading manufacturer and supplier of premium stone materials with a commitment to quality, craftsmanship, and customer satisfaction.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-[hsl(32,95%,44%)] w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors duration-300">
                  <span className="text-sm">f</span>
                </a>
                <a href="#" className="bg-[hsl(158,90%,20%)] w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors duration-300">
                  <span className="text-sm">ig</span>
                </a>
                <a href="#" className="bg-[hsl(32,95%,44%)] w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors duration-300">
                  <span className="text-sm">in</span>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#home" className="hover:text-[hsl(32,95%,44%)] transition-colors duration-300">Home</a></li>
                <li><a href="#products" className="hover:text-[hsl(32,95%,44%)] transition-colors duration-300">Products</a></li>
                <li><a href="#services" className="hover:text-[hsl(32,95%,44%)] transition-colors duration-300">Services</a></li>
                <li><a href="#gallery" className="hover:text-[hsl(32,95%,44%)] transition-colors duration-300">Gallery</a></li>
                <li><a href="#about" className="hover:text-[hsl(32,95%,44%)] transition-colors duration-300">About</a></li>
                <li><a href="#contact" className="hover:text-[hsl(32,95%,44%)] transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="text-[hsl(32,95%,44%)] mr-2">📞</span>
                  <span>8440992573</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[hsl(32,95%,44%)] mr-2">✉️</span>
                  <span>singhalaryan2618@gmail.com</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[hsl(32,95%,44%)] mr-2">👤</span>
                  <span>Aryan Singhal</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Gaumti Stone Industries. All rights reserved. | Designed for premium stone manufacturing and supply excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
