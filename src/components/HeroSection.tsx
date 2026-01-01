import React from 'react';
import heroImage from '@/assets/hero-cake.jpg';

const HeroSection: React.FC = () => {
  const scrollToCakes = () => {
    const cakesSection = document.getElementById('cakes');
    if (cakesSection) {
      cakesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-16">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Delicious chocolate cake"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <p className="font-body text-accent text-lg mb-4 animate-fade-up">
            Welcome to
          </p>
          <h1 
            className="font-display text-5xl md:text-7xl text-cream mb-4 animate-fade-up"
            style={{ animationDelay: '100ms' }}
          >
            Tentacion
          </h1>
          <p 
            className="font-display text-2xl md:text-3xl text-cream/90 italic mb-6 animate-fade-up"
            style={{ animationDelay: '200ms' }}
          >
            Count Memories, Forget Calories
          </p>
          <p 
            className="font-body text-cream/80 text-lg mb-8 max-w-lg animate-fade-up"
            style={{ animationDelay: '300ms' }}
          >
            Experience the finest handcrafted cakes and pastries in Pune. 
            Every creation is a masterpiece of flavor and artistry.
          </p>
          
          <div 
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: '400ms' }}
          >
            <button
              onClick={scrollToCakes}
              className="bg-accent hover:bg-cherry-dark text-accent-foreground px-8 py-4 rounded-full font-body font-bold text-lg transition-all hover:scale-105 shadow-lg"
            >
              Explore Our Cakes
            </button>
            <a
              href="tel:7507733414"
              className="bg-cream/10 backdrop-blur-sm border-2 border-cream text-cream hover:bg-cream hover:text-primary px-8 py-4 rounded-full font-body font-bold text-lg transition-all"
            >
              Order Now
            </a>
          </div>

          {/* Features */}
          <div 
            className="flex flex-wrap gap-6 mt-10 animate-fade-up"
            style={{ animationDelay: '500ms' }}
          >
            {['24 hrs Open', 'Custom Cakes', 'Photo Cakes', 'Wedding Cakes'].map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-cream/90">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                <span className="font-body text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
