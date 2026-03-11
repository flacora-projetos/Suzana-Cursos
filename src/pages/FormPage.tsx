import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, CheckCircle2, Star } from 'lucide-react';

export default function FormPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  // Phone mask function
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    
    if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    }
    if (value.length > 10) {
      value = `${value.slice(0, 10)}-${value.slice(10)}`;
    }
    
    setFormData({...formData, phone: value});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.phone.replace(/\D/g, '').length < 10) {
      alert("Por favor, insira um número de WhatsApp válido com DDD.");
      return;
    }
    // FUTURE: Integrate with CRM or backend here
    // For now, just simulate submission and redirect
    navigate('/aula-liberada');
  };

  return (
    <section className="py-12 md:py-20 bg-brand-bg min-h-[calc(100vh-60px)] flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-6 md:p-12 rounded-3xl shadow-sm border border-brand-light"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light/50 text-brand-dark font-medium text-sm mb-6 shadow-sm border border-brand-primary/20">
              <ShieldCheck className="w-4 h-4 text-brand-primary" />
              <span>Aula 100% Gratuita</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-brand-dark leading-tight">
              Assista à aula gratuita sobre tratamento avançado de feridas
            </h1>
            <p className="text-base md:text-lg text-brand-text/80 max-w-2xl mx-auto mb-4">
              Conteúdo indicado para enfermeiros, técnicos e profissionais da saúde que desejam aprofundar seus conhecimentos em curativos e tratamento de feridas.
            </p>
            <p className="text-sm font-medium text-brand-primary bg-brand-primary/10 inline-block px-4 py-2 rounded-full">
              Com Suzana Santos, enfermeira há 23 anos, especialista em feridas e curativos há 10 anos.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
            <div className="md:col-span-2 space-y-6 order-2 md:order-1">
              <h3 className="font-bold text-brand-dark text-lg">O que você vai aprender:</h3>
              <ul className="space-y-4">
                {[
                  "Entenda os princípios do tratamento avançado de feridas",
                  "Veja orientações aplicáveis à prática clínica",
                  "Conheça a metodologia da Suzana Santos"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                    <span className="text-brand-text/90 text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-6 border-t border-brand-light mt-6">
                <div className="flex items-center gap-2 mb-2">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />)}
                </div>
                <p className="text-sm text-brand-text/80 italic">
                  "Profissionais da saúde já participaram das capacitações ministradas por Suzana Santos."
                </p>
              </div>
            </div>

            <div className="md:col-span-3 order-1 md:order-2 bg-brand-bg/30 p-6 md:p-8 rounded-2xl border border-brand-light">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-dark mb-1.5">
                    Seu Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-brand-light focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all bg-white"
                    placeholder="Digite seu nome completo"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-brand-dark mb-1.5">
                    WhatsApp (com DDD)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-brand-light focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all bg-white"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    maxLength={15}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-1.5">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-brand-light focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all bg-white"
                    placeholder="seu.melhor@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold py-4 px-8 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg text-lg"
                  >
                    Quero assistir à aula gratuita
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <p className="text-center text-sm text-brand-dark/70 mt-3 font-medium">
                    Após o cadastro, você será direcionado imediatamente para a aula.
                  </p>
                </div>

                <p className="text-xs text-center text-brand-text/60 mt-6 leading-relaxed">
                  Seus dados estão seguros. Usaremos suas informações apenas para liberar a aula e enviar conteúdos e informações sobre cursos da Suzana.
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
