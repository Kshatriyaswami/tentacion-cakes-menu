import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import CakeCard, { Cake } from '@/components/CakeCard';
import CakeModal from '@/components/CakeModal';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useCakes } from '@/contexts/CakeContext';

const Index: React.FC = () => {
  const { cakes } = useCakes();
  const [selectedCake, setSelectedCake] = useState<Cake | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCakeClick = (cake: Cake) => {
    setSelectedCake(cake);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCake(null), 200);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />

        {/* Cake Catalogue Section */}
        <section id="cakes" className="py-20">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-12">
              <span className="font-body text-accent text-sm uppercase tracking-wider">
                Our Delicious Collection
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mt-2 mb-4">
                Signature Cakes
              </h2>
              <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                Each cake is crafted with love, using the finest ingredients and 
                time-honored recipes. Browse our selection and find your perfect treat.
              </p>
            </div>

            {/* Cake Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {cakes.map((cake, index) => (
                <CakeCard
                  key={cake.id}
                  cake={cake}
                  onClick={handleCakeClick}
                  index={index}
                />
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <p className="font-body text-muted-foreground mb-4">
                Looking for something special? We create custom cakes for all occasions!
              </p>
              <a
                href="tel:7507733414"
                className="inline-flex items-center gap-2 bg-primary hover:bg-chocolate-dark text-primary-foreground px-8 py-4 rounded-full font-body font-bold transition-all hover:scale-105"
              >
                Order Custom Cake
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <span className="font-body text-accent text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mt-2">
                Our Specialities
              </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto justify-items-center">
              {[
                {
                  title: '24 Hours Open',
                  description: 'We\'re always here when you need us, day or night.',
                  icon: '🕐'
                },
                {
                  title: 'Custom Designs',
                  description: 'Tell us your vision, we\'ll create your dream cake.',
                  icon: '🎨'
                },
                {
                  title: 'Photo Cakes',
                  description: 'Personalize your celebration with edible photo prints.',
                  icon: '📷'
                },
                {
                  title: '100% Vegetarian',
                  description: 'All our products are pure vegetarian, eggless options available.',
                  icon: '🌱'
                }
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className="text-center p-4 md:p-6 animate-fade-up w-full max-w-[200px]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">{feature.icon}</div>
                  <h3 className="font-display text-base md:text-xl text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-xs md:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Cake Detail Modal */}
      <CakeModal
        cake={selectedCake}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton variant="floating" />
    </div>
  );
};

export default Index;
