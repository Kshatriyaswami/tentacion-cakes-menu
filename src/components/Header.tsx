import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import ChocolateDripHeader from './ChocolateDripHeader';
import tentacionLogo from '@/assets/tentacion-logo-navbar.jpg';
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Cakes',
    path: '/#cakes'
  }, {
    name: 'Contact',
    path: '/#contact'
  }];
  const isActive = (path: string) => {
    if (path.includes('#')) return false;
    return location.pathname === path;
  };
  return <header className="relative text-primary-foreground bg-chocolate-dark">
      {/* Chocolate drip effect at top */}
      <ChocolateDripHeader />
      
      {/* Top bar with contact info */}
      <div className="bg-chocolate-dark py-2 px-4">
        <div className="container mx-auto flex items-center justify-between text-sm">
          <a href="https://www.tentacioncakes.in" target="_blank" rel="noopener noreferrer" className="text-cream hover:text-accent transition-colors">
            www.tentacioncakes.in
          </a>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone size={14} className="text-accent" />
              <a href="tel:7507733414" className="text-cream hover:text-accent transition-colors">
                7507733414
              </a>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-cream">
              <span className="w-5 h-5 border-2 border-green-500 flex items-center justify-center text-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
              </span>
              <span className="text-xs">100% Veg</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header with logo */}
      <div className="bg-cream py-4 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo on the left */}
            <Link to="/">
              <img 
                src={tentacionLogo} 
                alt="Tentacion - Mesmerizing Cake & Pastry Shop" 
                className="h-16 md:h-20 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(link => <Link key={link.name} to={link.path} className={`font-body font-semibold text-lg transition-colors hover:text-accent ${isActive(link.path) ? 'text-accent' : 'text-primary'}`}>
                  {link.name}
                </Link>)}
              {/* Minimal admin link */}
              <Link to="/admin" className="text-primary/40 hover:text-primary/60 text-xs transition-colors">
                •
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden text-primary p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="md:hidden absolute top-full left-0 right-0 bg-background z-50 border-t border-border/20 animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map(link => <Link key={link.name} to={link.path} onClick={() => setIsMenuOpen(false)} className={`font-body font-semibold text-lg py-2 transition-colors hover:text-accent ${isActive(link.path) ? 'text-accent' : 'text-foreground'}`}>
                  {link.name}
                </Link>)}
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;