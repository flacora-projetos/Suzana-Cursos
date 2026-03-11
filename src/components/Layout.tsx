import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { MessageCircle, Instagram, Mail } from 'lucide-react';
import { WHATSAPP_LINK, LOGO_URL } from './Shared';

export default function Layout() {
  const location = useLocation();
  const isFormPage = location.pathname === '/aula-gratis';

  return (
    <div className="min-h-screen bg-brand-bg font-sans text-brand-text overflow-x-hidden flex flex-col">
      {/* HEADER */}
      {!isFormPage && (
        <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-brand-primary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => window.fbq && window.fbq('trackCustom', 'click_whatsapp')}
              className="flex items-center gap-2 text-brand-dark font-medium hover:text-[#25D366] transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span className="hidden sm:inline">(62) 9128-1434</span>
            </a>
            <a 
              href="https://www.instagram.com/enfsuzanasantos/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-brand-dark font-medium hover:text-[#E1306C] transition-colors text-sm"
            >
              <Instagram className="w-4 h-4 text-[#E1306C]" />
              <span className="hidden sm:inline">@enfsuzanasantos</span>
            </a>
            <a 
              href="mailto:suzanangelica@hotmail.com"
              className="flex items-center gap-2 text-brand-dark font-medium hover:text-brand-primary transition-colors text-sm"
            >
              <Mail className="w-4 h-4 text-brand-primary" />
              <span className="hidden md:inline">suzanangelica@hotmail.com</span>
            </a>
          </div>
        </header>
      )}

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="bg-brand-dark text-white/60 py-12 border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-start mb-12">
            <div className="flex items-center gap-4">
              <div className="bg-white p-2 rounded-xl">
                <img 
                  src={LOGO_URL} 
                  alt="Suzana Santos Logo" 
                  className="h-8 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <div>
                <h3 className="text-white font-serif font-bold text-xl">Suzana Santos</h3>
                <p className="text-sm">Tratamento Avançado de Feridas</p>
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-bold mb-2">Contato</h4>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => window.fbq && window.fbq('trackCustom', 'click_whatsapp')}
                className="flex items-center gap-2 hover:text-[#25D366] transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                (62) 9128-1434
              </a>
              <a 
                href="https://www.instagram.com/enfsuzanasantos/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#E1306C] transition-colors text-sm"
              >
                <Instagram className="w-4 h-4" />
                @enfsuzanasantos
              </a>
              <a 
                href="mailto:suzanangelica@hotmail.com"
                className="flex items-center gap-2 hover:text-brand-primary transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                suzanangelica@hotmail.com
              </a>
            </div>

            <div className="md:text-right">
              <h4 className="text-white font-bold mb-4">Atendimento</h4>
              <p className="text-sm mb-1">Goiânia e Aparecida de Goiânia</p>
              <p className="text-sm">(Domicílio e unidades de saúde)</p>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col gap-6">
            <div className="text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="max-w-3xl">
                <strong>Aviso:</strong> Conteúdo informativo. Atendimento e condutas são individualizados após avaliação. Em situações de risco, procure serviço de urgência.
              </p>
              <p className="shrink-0">&copy; {new Date().getFullYear()} Suzana Santos. Todos os direitos reservados.</p>
            </div>
            
            <div className="text-center flex items-center justify-center">
              <p className="text-[11px] text-white/40 flex items-center gap-1.5">
                Desenvolvido por
                <a 
                  href="https://wa.me/5562999465725" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-medium hover:text-white transition-colors"
                >
                  Flávio Corá
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
