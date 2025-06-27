import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, RotateCcw, Maximize2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Stone3DViewerProps {
  stone: {
    name: string;
    description: string;
    image: string;
    properties: string[];
    specs: { [key: string]: string };
  };
  isOpen: boolean;
  onClose: () => void;
}

export default function Stone3DViewer({ stone, isOpen, onClose }: Stone3DViewerProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [showSpecs, setShowSpecs] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - dragStart.x;
    const deltaY = e.clientY - dragStart.y;
    
    setRotation(prev => ({
      x: prev.x + deltaY * 0.5,
      y: prev.y + deltaX * 0.5
    }));
    
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetRotation = () => {
    setRotation({ x: 0, y: 0 });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-[hsl(20,14.3%,4.1%)] to-[hsl(25,60%,31%)] text-white">
            <div>
              <h2 className="text-2xl font-bold">{stone.name}</h2>
              <p className="text-gray-300">{stone.description}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowSpecs(!showSpecs)}
                className="text-white hover:bg-white/20"
              >
                <Info className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={resetRotation}
                className="text-white hover:bg-white/20"
              >
                <RotateCcw className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="text-white hover:bg-white/20"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row h-[600px]">
            {/* 3D Viewer */}
            <div className="flex-1 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
              <div 
                className="stone-3d-viewer h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                <div 
                  className="stone-cube"
                  style={{
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
                  }}
                >
                  {/* Cube faces */}
                  <div 
                    className="stone-face front"
                    style={{ backgroundImage: `url(${stone.image})`, backgroundSize: 'cover' }}
                  />
                  <div 
                    className="stone-face back"
                    style={{ backgroundImage: `url(${stone.image})`, backgroundSize: 'cover', filter: 'hue-rotate(30deg)' }}
                  />
                  <div 
                    className="stone-face right"
                    style={{ backgroundImage: `url(${stone.image})`, backgroundSize: 'cover', filter: 'brightness(0.8)' }}
                  />
                  <div 
                    className="stone-face left"
                    style={{ backgroundImage: `url(${stone.image})`, backgroundSize: 'cover', filter: 'brightness(1.2)' }}
                  />
                  <div 
                    className="stone-face top"
                    style={{ backgroundImage: `url(${stone.image})`, backgroundSize: 'cover', filter: 'contrast(1.2)' }}
                  />
                  <div 
                    className="stone-face bottom"
                    style={{ backgroundImage: `url(${stone.image})`, backgroundSize: 'cover', filter: 'sepia(0.2)' }}
                  />
                </div>
              </div>
              
              {/* Control hints */}
              <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-2 rounded-lg text-sm backdrop-blur-sm">
                Click and drag to rotate • Right-click for specs
              </div>
            </div>

            {/* Specifications Panel */}
            <AnimatePresence>
              {showSpecs && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 320, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="bg-white border-l overflow-hidden"
                >
                  <div className="p-6 h-full overflow-y-auto">
                    <h3 className="text-xl font-bold text-[hsl(20,14.3%,4.1%)] mb-4">
                      Stone Specifications
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-[hsl(25,60%,31%)] mb-2">Properties</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {stone.properties.map((prop, index) => (
                            <li key={index} className="flex items-center">
                              <div className="w-2 h-2 bg-[hsl(32,95%,44%)] rounded-full mr-2"></div>
                              {prop}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-[hsl(25,60%,31%)] mb-2">Technical Specs</h4>
                        <div className="space-y-2">
                          {Object.entries(stone.specs).map(([key, value]) => (
                            <div key={key} className="flex justify-between text-sm">
                              <span className="text-gray-600">{key}:</span>
                              <span className="font-medium text-[hsl(20,14.3%,4.1%)]">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}