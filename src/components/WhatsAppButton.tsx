import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  cakeName?: string;
  cakePrice?: number;
  variant?: 'floating' | 'inline' | 'full';
  className?: string;
}

const WHATSAPP_NUMBER = '917507733414'; // Country code + number

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  cakeName, 
  cakePrice, 
  variant = 'inline',
  className = '' 
}) => {
  const getMessage = () => {
    if (cakeName && cakePrice) {
      return `Hi! I'm interested in ordering the *${cakeName}* cake (₹${cakePrice.toLocaleString('en-IN')}). Please let me know availability and delivery details.`;
    }
    return `Hi! I'd like to order a cake from Tentacion Cake Shop. Please share your menu and availability.`;
  };

  const handleClick = () => {
    const message = encodeURIComponent(getMessage());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  if (variant === 'floating') {
    return (
      <button
        onClick={handleClick}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 animate-pulse-slow ${className}`}
        aria-label="Order via WhatsApp"
      >
        <MessageCircle size={28} fill="white" />
      </button>
    );
  }

  if (variant === 'full') {
    return (
      <button
        onClick={handleClick}
        className={`w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5C] text-white py-4 px-6 rounded-full font-body font-bold transition-all hover:scale-[1.02] ${className}`}
      >
        <MessageCircle size={22} fill="white" />
        <span>Order on WhatsApp</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5C] text-white py-3 px-6 rounded-full font-body font-semibold transition-all hover:scale-105 ${className}`}
    >
      <MessageCircle size={20} fill="white" />
      <span>WhatsApp Order</span>
    </button>
  );
};

export default WhatsAppButton;
