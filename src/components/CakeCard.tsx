import React from 'react';
import { cn } from '@/lib/utils';

export interface Cake {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
}

interface CakeCardProps {
  cake: Cake;
  onClick: (cake: Cake) => void;
  index?: number;
}

const CakeCard: React.FC<CakeCardProps> = ({ cake, onClick, index = 0 }) => {
  return (
    <article
      onClick={() => onClick(cake)}
      className={cn(
        "group cursor-pointer bg-card rounded-2xl overflow-hidden shadow-card",
        "transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-hover",
        "animate-fade-up"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={cake.image}
          alt={cake.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-cream font-body font-semibold text-lg bg-accent px-4 py-2 rounded-full">
            View Details
          </span>
        </div>
        {/* Veg indicator */}
        <div className="absolute top-3 right-3 w-6 h-6 bg-card border-2 border-green-600 flex items-center justify-center rounded">
          <span className="w-3 h-3 rounded-full bg-green-600"></span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 text-center">
        <h3 className="font-display text-xl text-foreground mb-2 line-clamp-1">
          {cake.name}
        </h3>
        <p className="font-body font-bold text-accent text-lg">
          ₹{cake.price.toLocaleString('en-IN')}
        </p>
      </div>
    </article>
  );
};

export default CakeCard;
