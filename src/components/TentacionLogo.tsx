import React from 'react';

interface TentacionLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const TentacionLogo: React.FC<TentacionLogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-10',
    md: 'h-14',
    lg: 'h-20'
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Logo text matching visiting card style */}
      <div className={`flex flex-col items-center ${sizeClasses[size]}`}>
        <span 
          className="font-display text-cream tracking-wide leading-none"
          style={{ 
            fontSize: size === 'sm' ? '1.25rem' : size === 'md' ? '1.75rem' : '2.5rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}
        >
          TENTACION
        </span>
        <span 
          className="font-body text-cream/90 tracking-widest uppercase"
          style={{ 
            fontSize: size === 'sm' ? '0.5rem' : size === 'md' ? '0.625rem' : '0.875rem',
            letterSpacing: '0.25em'
          }}
        >
          Cake Shop
        </span>
      </div>
    </div>
  );
};

export default TentacionLogo;
