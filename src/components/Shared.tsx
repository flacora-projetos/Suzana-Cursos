import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WHATSAPP_LINK = "https://wa.me/556291281434";
export const LOGO_URL = "https://lh3.googleusercontent.com/d/1GMbvFCPW0nuy6KHkJLzUJsRhnqFAge9e";
export const HEADER_LOGO_URL = "https://lh3.googleusercontent.com/d/1iJGYeSMFhxK2XdYOCznyOpnY4wTAYMKS";
export const HERO_URL = "https://lh3.googleusercontent.com/d/1M-MNY7A_gzbfdJSFaG9OyuAEhOAvuwAV";

declare global {
  interface Window {
    fbq: any;
  }
}

export const trackEvent = (eventName: string, data?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, data);
  }
};

export const WhatsAppButton = ({ text, className = "", icon = true, eventName = "click_whatsapp" }: { text: string, className?: string, icon?: boolean, eventName?: string }) => (
  <a 
    href={WHATSAPP_LINK} 
    target="_blank" 
    rel="noopener noreferrer"
    onClick={() => trackEvent(eventName)}
    className={`inline-flex items-center justify-center text-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg ${className}`}
  >
    {icon && <MessageCircle className="w-5 h-5 shrink-0" />}
    <span>{text}</span>
  </a>
);

export const SectionHeading = ({ children, subtitle, titleClassName = "text-brand-dark" }: { children: React.ReactNode, subtitle?: string, titleClassName?: string }) => (
  <div className="text-center mb-12">
    <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-4 ${titleClassName}`}>{children}</h2>
    {subtitle && <p className="text-lg text-brand-text/80 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);
