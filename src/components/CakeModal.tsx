import React from 'react';
import { X } from 'lucide-react';
import { Cake } from './CakeCard';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import WhatsAppButton from './WhatsAppButton';

interface CakeModalProps {
  cake: Cake | null;
  isOpen: boolean;
  onClose: () => void;
}

const CakeModal: React.FC<CakeModalProps> = ({ cake, isOpen, onClose }) => {
  if (!cake) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden bg-card border-none">
        <DialogTitle className="sr-only">{cake.name}</DialogTitle>
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-primary/80 text-cream flex items-center justify-center hover:bg-primary transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={cake.image}
            alt={cake.name}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-card to-transparent"></div>
        </div>

        {/* Content */}
        <div className="p-6 -mt-8 relative">
          {/* Veg indicator */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 border-2 border-green-600 flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-green-600"></span>
              </div>
              <span className="text-sm text-muted-foreground font-body">100% Vegetarian</span>
            </div>
          </div>

          <h2 className="font-display text-3xl text-foreground mb-2">
            {cake.name}
          </h2>
          
          <p className="font-body font-bold text-accent text-2xl mb-4">
            ₹{cake.price.toLocaleString('en-IN')}
          </p>

          {cake.description && (
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              {cake.description}
            </p>
          )}

          {/* WhatsApp Order CTA */}
          <WhatsAppButton 
            cakeName={cake.name} 
            cakePrice={cake.price} 
            variant="full" 
          />

          {/* Alternative contact */}
          <div className="mt-4 pt-4 border-t border-border">
            <p className="font-body text-sm text-muted-foreground text-center">
              Or call us at <a href="tel:7507733414" className="text-accent font-semibold hover:underline">7507733414</a>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CakeModal;
