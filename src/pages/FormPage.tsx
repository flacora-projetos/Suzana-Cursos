import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../components/Shared';

export default function FormPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // FUTURE: Integrate with CRM or backend here
    // For now, just simulate submission and redirect
    navigate('/aula-liberada');
  };

  return (
    <section className="py-20 bg-brand-bg min-h-[calc(100vh-60px)] flex items-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-brand-light"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light/50 text-brand-dark font-medium text-sm mb-6 shadow-sm border border-brand-primary/20">
              <ShieldCheck className="w-4 h-4 text-brand-primary" />
              <span>Aula 100% Gratuita</span>
            </div>
            <SectionHeading subtitle="Preencha os dados abaixo para liberar o seu acesso imediato à aula gratuita sobre tratamento avançado de feridas.">
              Acesse a Aula Gratuita
            </SectionHeading>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-dark mb-2">
                Seu Nome
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 rounded-xl border border-brand-light focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all bg-brand-bg/30"
                placeholder="Digite seu nome completo"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-brand-dark mb-2">
                WhatsApp
              </label>
              <input
                type="tel"
                id="phone"
                required
                className="w-full px-4 py-3 rounded-xl border border-brand-light focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all bg-brand-bg/30"
                placeholder="(00) 00000-0000"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-brand-light focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all bg-brand-bg/30"
                placeholder="seu.melhor@email.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold py-4 px-8 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg text-lg mt-8"
            >
              Liberar Minha Aula Agora
              <ArrowRight className="w-5 h-5" />
            </button>

            <p className="text-xs text-center text-brand-text/60 mt-6">
              Prometemos não enviar spam. Seus dados estão seguros e serão usados apenas para comunicação sobre nossos conteúdos e cursos.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
