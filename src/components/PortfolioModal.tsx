import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export interface PortfolioItemDetail {
  id: number;
  title: string;
  description: string;
  role: string;
  highlight: string;
  category: string;
  images?: string[];
}

interface PortfolioModalProps {
  item: PortfolioItemDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

const PortfolioModal = ({ item, isOpen, onClose }: PortfolioModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset image index when modal opens with new item
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
    }
  }, [isOpen, item?.id]);

  if (!item) return null;

  const hasMultipleImages = item.images && item.images.length > 1;
  const hasImages = item.images && item.images.length > 0;

  const nextImage = () => {
    if (item.images) {
      setCurrentImageIndex((prev) => (prev + 1) % item.images!.length);
    }
  };

  const prevImage = () => {
    if (item.images) {
      setCurrentImageIndex((prev) => (prev - 1 + item.images!.length) % item.images!.length);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl w-[95vw] max-h-[90vh] overflow-y-auto p-0 bg-card border-border rounded-2xl">
        {/* Image Carousel */}
        {hasImages && (
          <div className="relative w-full aspect-video bg-muted overflow-hidden rounded-t-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={item.images![currentImageIndex]}
                alt={`${item.title} - Image ${currentImageIndex + 1}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Navigation Arrows */}
            {hasMultipleImages && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors shadow-soft"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors shadow-soft"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Image Indicators */}
            {hasMultipleImages && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {item.images!.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "bg-primary w-6"
                        : "bg-background/60 hover:bg-background/80"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Content */}
        <div className="p-6 md:p-8">
          <DialogHeader className="mb-4">
            {/* Category Badge */}
            <span className="inline-block w-fit px-3 py-1 bg-sage-light text-secondary-foreground rounded-full text-xs font-sans mb-3 capitalize">
              {item.category}
            </span>

            <DialogTitle className="text-2xl md:text-3xl font-serif font-medium text-charcoal leading-snug">
              {item.title}
            </DialogTitle>

            <p className="text-sm font-sans text-primary font-medium mt-2">
              {item.role}
            </p>
          </DialogHeader>

          <DialogDescription asChild>
            <div className="space-y-6">
              {/* Description */}
              <div>
                <h4 className="text-xs font-sans text-muted-foreground uppercase tracking-wider mb-2">
                  Deskripsi
                </h4>
                <p className="text-foreground font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Highlight */}
              <div className="pt-4 border-t border-border">
                <h4 className="text-xs font-sans text-muted-foreground uppercase tracking-wider mb-2">
                  Highlight
                </h4>
                <p className="text-foreground font-sans font-medium">
                  {item.highlight}
                </p>
              </div>
            </div>
          </DialogDescription>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioModal;
