import React from 'react';
import { MapPin, Phone, Globe, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      {/* Decorative top border */}
      <div className="h-2 bg-accent"></div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-3xl text-cream mb-2">Tentacion</h3>
            <p className="font-body text-cream/80 italic mb-4">
              Count Memories, Forget Calories
            </p>
            <p className="font-body text-cream/70 text-sm">
              Mesmerizing Cake & Pastry Shop
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-4">
              <span className="w-6 h-6 border-2 border-green-500 flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </span>
              <span className="text-cream text-sm">100% Pure Veg</span>
            </div>
          </div>

          {/* Services */}
          <div className="text-center">
            <h4 className="font-display text-xl text-cream mb-4">Our Specialties</h4>
            <ul className="space-y-2 font-body text-cream/80 inline-block text-left">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                24 hrs Cake Shop
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                Custom Cakes
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                Photo Cakes
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                Wedding Cakes
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="font-display text-xl text-cream mb-4">Contact Us</h4>
            <div className="space-y-3 font-body text-cream/80">
              <a
                href="tel:7507733414"
                className="flex items-center justify-center md:justify-end gap-2 hover:text-accent transition-colors"
              >
                <Phone size={18} className="text-accent" />
                7507733414
              </a>
              <a
                href="https://www.tentacioncakes.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end gap-2 hover:text-accent transition-colors"
              >
                <Globe size={18} className="text-accent" />
                www.tentacioncakes.in
              </a>
              <div className="flex items-start justify-center md:justify-end gap-2">
                <MapPin size={18} className="text-accent flex-shrink-0 mt-1" />
                <span className="text-sm">
                  Sr.No. 15, Shop No. 6, Keshar Complex,<br />
                  Near Chintamani Dnyanpeeth,<br />
                  Ambegaon Pathar, Pune - 411 046
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <Clock size={18} className="text-accent" />
                <span>Open 24 Hours</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-end gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-cream/20 text-center">
          <p className="font-body text-cream/60 text-sm">
            © {new Date().getFullYear()} Tentacion Cake Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
