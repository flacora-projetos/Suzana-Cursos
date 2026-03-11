import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { PlayCircle, MessageCircle, GraduationCap, Bell } from 'lucide-react';
import { SectionHeading, WhatsAppButton, WHATSAPP_LINK, trackEvent } from '../components/Shared';

// FUTURE: Replace this with actual video embed URL when ready
const VIDEO_EMBED_URL = "";

const VideoPlaceholder = () => (
  <div className="aspect-video bg-brand-dark rounded-3xl overflow-hidden relative flex flex-col items-center justify-center text-white shadow-2xl border-4 border-brand-light/20">
    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-transparent"></div>
    <PlayCircle className="w-20 h-20 text-brand-light mb-6 opacity-80" />
    <h3 className="text-2xl font-serif font-bold text-center px-4 mb-2">A aula gratuita será exibida aqui</h3>
    <p className="text-white/60 text-center px-8 max-w-md">O vídeo será incorporado nesta área assim que estiver disponível. Fique de olho!</p>
  </div>
);

export default function ThankYouPage() {
  useEffect(() => {
    trackEvent('view_thankyou');
  }, []);

  return (
    <section className="py-20 bg-brand-bg min-h-[calc(100vh-60px)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-800 font-medium text-sm mb-6 shadow-sm border border-green-200">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Cadastro Confirmado!
            </div>
            <SectionHeading subtitle="Assista agora à aula exclusiva que preparamos para você sobre avaliação e conduta em feridas complexas.">
              Sua Aula Está Liberada
            </SectionHeading>
          </div>

          {/* VIDEO SECTION */}
          <div className="mb-16 max-w-4xl mx-auto">
            {VIDEO_EMBED_URL ? (
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                {/* 
                  FUTURE VIDEO TRACKING IMPLEMENTATION:
                  When the real video player (e.g., YouTube, Vimeo, or HTML5) is integrated,
                  attach event listeners to its API to fire the following Meta Pixel events:
                  
                  - trackEvent('play_video') -> Fire when the user clicks play for the first time.
                  - trackEvent('50_percent_video') -> Fire when the video reaches 50% completion.
                  - trackEvent('90_percent_video') -> Fire when the video reaches 90% completion.
                */}
                <iframe 
                  src={VIDEO_EMBED_URL} 
                  title="Aula Gratuita"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <VideoPlaceholder />
            )}
          </div>

          {/* NEXT STEPS / CTAS */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-light text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
              </div>
              <h4 className="font-bold text-brand-dark mb-2">Ficou com dúvidas?</h4>
              <p className="text-sm text-brand-text/70 mb-6 flex-grow">Fale diretamente comigo no WhatsApp para tirar suas dúvidas sobre o conteúdo.</p>
              <WhatsAppButton text="Falar no WhatsApp" className="w-full py-3 px-4 text-sm" />
            </div>

            <div className="bg-brand-dark text-white p-6 rounded-2xl shadow-sm border border-brand-dark text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-brand-light" />
              </div>
              <h4 className="font-bold text-white mb-2">Aprofunde-se</h4>
              <p className="text-sm text-white/70 mb-6 flex-grow">Conheça nossos cursos completos e treinamentos para profissionais.</p>
              <a 
                href="/#cursos" // FUTURE: Update to actual courses page or section
                onClick={() => trackEvent('click_course_offer')}
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold py-3 px-4 rounded-full transition-all text-sm"
              >
                Conhecer os Cursos
              </a>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-light text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mb-4">
                <Bell className="w-6 h-6 text-brand-primary" />
              </div>
              <h4 className="font-bold text-brand-dark mb-2">Próximas Turmas</h4>
              <p className="text-sm text-brand-text/70 mb-6 flex-grow">Entre na lista de espera para ser avisado sobre novas turmas de mentoria.</p>
              <a 
                href={WHATSAPP_LINK} // FUTURE: Update to actual waitlist form
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('click_waitlist')}
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-light hover:bg-brand-light/80 text-brand-dark font-semibold py-3 px-4 rounded-full transition-all text-sm border border-brand-primary/20"
              >
                Lista de Espera
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
