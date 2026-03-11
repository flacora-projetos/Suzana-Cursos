import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Stethoscope, 
  GraduationCap, 
  ShieldCheck, 
  ArrowRight, 
  FileText, 
  Activity, 
  HeartHandshake,
  ChevronDown,
  AlertCircle,
  BookOpen,
  PlayCircle
} from 'lucide-react';
import { WhatsAppButton, SectionHeading, HERO_URL, LOGO_URL, WHATSAPP_LINK } from '../components/Shared';

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (window.fbq) {
      window.fbq('trackCustom', 'view_lp');
    }
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-16 lg:pt-8 lg:pb-20 overflow-hidden min-h-[calc(100vh-60px)] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light/50 text-brand-dark font-medium text-sm mb-6 shadow-sm border border-brand-primary/20">
                <ShieldCheck className="w-4 h-4 text-brand-primary" />
                <span>Segurança do Paciente & Evidência Científica</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif font-bold text-brand-dark leading-tight mb-6 drop-shadow-sm">
                Tratamento avançado de feridas + cursos para enfermagem
              </h1>
              <p className="text-lg text-brand-text/90 mb-8 leading-relaxed max-w-2xl">
                Enfermeira há <strong>23 anos</strong>. Especialista em feridas e curativos há <strong>10 anos</strong>. <strong>Estomaterapeuta</strong> e <strong>Laserterapeuta</strong>. Especialista em <strong>Segurança do Paciente</strong>. Professora responsável pela área de <strong>curativos graves</strong> em Aparecida de Goiânia. Atendimento e ensino com método, evidência e acompanhamento.
              </p>
              
              <ul className="space-y-3 mb-10 max-w-2xl">
                {[
                  "23 anos de enfermagem, 10 anos focada em feridas e curativos",
                  "Conduta guiada por avaliação estruturada (mensuração, exsudato, aspecto, dor e bordas)",
                  "Escolha de coberturas e estratégias conforme tecido e objetivo do dia",
                  "Acompanhamento com documentação e evolução clara do caso",
                  "Atuação em curativos graves domiciliares e em unidades de saúde",
                  "Formação de equipes: cursos e treinamentos em curativos graves"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                    <span className="text-brand-text/90 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton text="CHAMAR NO WHATSAPP" className="w-full sm:w-auto text-lg" />
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => window.fbq && window.fbq('trackCustom', 'click_whatsapp')}
                  className="inline-flex items-center justify-center gap-2 bg-brand-dark hover:bg-brand-dark/90 text-white font-semibold py-4 px-8 rounded-full transition-all w-full sm:w-auto text-lg shadow-lg"
                >
                  QUERO ATENDIMENTO
                </a>
              </div>
              
              {/* NEW CTA FOR FREE CLASS */}
              <div className="mt-6">
                <Link 
                  to="/aula-gratis"
                  className="inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold py-4 px-8 rounded-full transition-all w-full sm:w-auto text-lg shadow-lg"
                >
                  <PlayCircle className="w-5 h-5" />
                  Assistir aula gratuita
                </Link>
              </div>

              <p className="text-sm text-brand-dark/80 mt-4 flex items-center gap-2 font-medium">
                <AlertCircle className="w-4 h-4 text-brand-primary" />
                Resposta no WhatsApp. Envie uma foto da ferida (se possível) e eu te digo o próximo passo.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2 relative flex justify-center items-center w-full"
            >
              <div className="relative w-full max-w-lg lg:max-w-full">
                <div className="absolute inset-0 bg-brand-primary/10 rounded-[2rem] transform rotate-3 scale-105 -z-10"></div>
                <img 
                  src={HERO_URL} 
                  alt="Suzana Santos em atendimento" 
                  className="w-full h-auto max-h-[50vh] lg:max-h-[75vh] object-contain rounded-2xl shadow-xl bg-white"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1000";
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AUTHORITY SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading>
            Experiência real em curativos graves, ensino e segurança do paciente
          </SectionHeading>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <div className="bg-brand-bg/50 p-8 rounded-3xl border border-brand-light">
                <h3 className="text-xl font-serif font-bold text-brand-dark mb-6">Por que confiar?</h3>
                <ul className="space-y-4">
                  {[
                    <><strong className="text-brand-dark">Suzana Santos</strong>, enfermeira há <strong>23 anos</strong></>,
                    <>Especialista em <strong>feridas e curativos</strong> há <strong>10 anos</strong></>,
                    <><strong>Estomaterapeuta</strong> e <strong>Laserterapeuta</strong></>,
                    <>Especialista em <strong>Segurança do Paciente</strong></>,
                    <>Professora responsável pela área de <strong>curativos graves</strong> em Aparecida de Goiânia</>,
                    <>Atuação prática em <strong>curativos graves domiciliares</strong> e em <strong>unidades de saúde</strong></>,
                    <>Professora de cursos em <strong>curativos graves</strong> e <strong>assistência a feridas</strong></>
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                      <span className="text-brand-text/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-brand-primary/10 border-l-4 border-brand-primary p-6 rounded-r-2xl">
                <p className="text-lg font-medium text-brand-dark italic">
                  "Você não precisa 'tentar de tudo'. Precisa de avaliação correta, conduta segura e acompanhamento."
                </p>
              </div>
              
              <div className="pt-4">
                <WhatsAppButton text="FALAR COM A SUZANA NO WHATSAPP" />
              </div>
            </div>
            
            <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="bg-brand-light p-6 rounded-3xl aspect-square flex flex-col justify-center items-center text-center">
                  <Stethoscope className="w-10 h-10 text-brand-dark mb-3" />
                  <h4 className="font-bold text-brand-dark">23 Anos</h4>
                  <p className="text-sm">de Enfermagem</p>
                </div>
                <div className="bg-white border border-brand-light p-6 rounded-3xl aspect-square flex flex-col justify-center items-center text-center shadow-sm">
                  <ShieldCheck className="w-10 h-10 text-brand-primary mb-3" />
                  <h4 className="font-bold text-brand-dark">Segurança</h4>
                  <p className="text-sm">do Paciente</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white border border-brand-light p-6 rounded-3xl aspect-square flex flex-col justify-center items-center text-center shadow-sm">
                  <Activity className="w-10 h-10 text-brand-primary mb-3" />
                  <h4 className="font-bold text-brand-dark">10 Anos</h4>
                  <p className="text-sm">Especialista em Feridas</p>
                </div>
                <div className="bg-brand-dark p-6 rounded-3xl aspect-square flex flex-col justify-center items-center text-center text-white">
                  <GraduationCap className="w-10 h-10 text-brand-light mb-3" />
                  <h4 className="font-bold text-white">Professora</h4>
                  <p className="text-sm text-brand-light/80">Curativos Graves</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOR WHOM SECTION */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading>Para quem é o meu trabalho?</SectionHeading>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Pacientes */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-light/50">
              <div className="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center mb-6">
                <HeartHandshake className="w-7 h-7 text-brand-dark" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-dark mb-6">Para Atendimento (Pacientes)</h3>
              <ul className="space-y-4 mb-8">
                {[
                  "Feridas crônicas e de difícil cicatrização",
                  "Lesão por pressão (prevenção e tratamento)",
                  "Pé diabético (manejo e prevenção de complicações)",
                  "Úlceras venosas (orientação e terapia compressiva conforme avaliação)",
                  "Feridas traumáticas e pós-operatórias (deiscências, áreas doadoras, etc.)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                    <span className="text-brand-text/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Profissionais */}
            <div className="bg-brand-dark text-white p-8 rounded-3xl shadow-sm">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-brand-light" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-6">Para Cursos (Enfermagem)</h3>
              <ul className="space-y-4 mb-8">
                {[
                  "Enfermeiros e técnicos que querem dominar avaliação, conduta e escolha de coberturas",
                  "Profissionais que precisam documentar melhor, reduzir erros e ganhar segurança clínica",
                  "Clínicas e hospitais que querem treinar equipes e padronizar protocolos"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-brand-light shrink-0 mt-0.5" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <WhatsAppButton text="FALAR NO WHATSAPP" />
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Sem 'curativo no escuro'. A conduta é guiada por avaliação, registro e reavaliação sistemática.">
            Cuidado de feridas com método, tecnologia e acompanhamento
          </SectionHeading>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Consulta Completa",
                desc: "Consulta de enfermagem com avaliação completa da ferida e do paciente (com registro e plano)."
              },
              {
                title: "Curativos Graves",
                desc: "Conduta por fase e objetivo do dia (controle, granulação, epitelização)."
              },
              {
                title: "Atendimento Domiciliar",
                desc: "Consulta e acompanhamento domiciliar (quando indicado e disponível)."
              },
              {
                title: "Apoio Institucional",
                desc: "Apoio a unidades de saúde e clínicas: padronização e segurança do cuidado."
              },
              {
                title: "Plano Individualizado",
                desc: "Objetivo por fase: limpeza, controle de exsudato, granulação, epitelização."
              },
              {
                title: "Curativos Avançados",
                desc: "Orientação de troca em casa ou na clínica, conforme necessidade."
              },
              {
                title: "Lesão por Pressão",
                desc: "Prevenção e manejo de lesão por pressão (rotina e protocolo)."
              },
              {
                title: "Auditoria",
                desc: "Auditoria e padronização para clínicas e instituições."
              },
              {
                title: "Orientação Familiar",
                desc: "Orientação para familiares e cuidadores (o 'como fazer' do dia a dia)."
              }
            ].map((service, i) => (
              <div key={i} className="p-6 rounded-2xl bg-brand-bg/30 border border-brand-light hover:bg-brand-light/20 transition-colors">
                <CheckCircle2 className="w-6 h-6 text-brand-primary mb-4" />
                <h4 className="font-bold text-brand-dark mb-2">{service.title}</h4>
                <p className="text-brand-text/80 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <WhatsAppButton text="AGENDAR PELO WHATSAPP" />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading titleClassName="text-white">Como funciona o atendimento?</SectionHeading>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-brand-primary/30 z-0"></div>
            
            {[
              {
                step: "1",
                title: "Você chama no WhatsApp",
                desc: "Envie sua dúvida, uma foto (se possível) e conte há quanto tempo a ferida existe."
              },
              {
                step: "2",
                title: "Avaliação e classificação",
                desc: "Mensuração, tipo de tecido, exsudato, dor, bordas e pele ao redor. (Tudo registrado.)"
              },
              {
                step: "3",
                title: "Plano de cuidado",
                desc: "Definição de metas e condutas, com orientações claras de troca, sinais de alerta e reavaliação."
              },
              {
                step: "4",
                title: "Acompanhamento",
                desc: "Evolução com documentação e ajustes conforme resposta do tecido."
              }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-brand-primary text-white flex items-center justify-center text-2xl font-serif font-bold mb-6 shadow-lg border-4 border-brand-dark">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold mb-3 text-brand-light">{item.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <WhatsAppButton text="CHAMAR NO WHATSAPP" className="bg-[#25D366] hover:bg-[#20BD5A] text-white" />
          </div>
        </div>
      </section>

      {/* EXPECTED RESULTS */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-sm border border-brand-light">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-8">O que você vai ganhar</h2>
                <ul className="space-y-6">
                  {[
                    "Mais clareza do que está acontecendo com a ferida",
                    "Menos troca errada, menos improviso, mais segurança",
                    "Melhor controle de exsudato, dor e odor (quando aplicável)",
                    "Mais previsibilidade no cuidado e no acompanhamento"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 bg-brand-bg/50 p-4 rounded-2xl">
                      <div className="bg-brand-primary/20 p-2 rounded-full">
                        <CheckCircle2 className="w-6 h-6 text-brand-primary" />
                      </div>
                      <span className="font-medium text-brand-dark">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-2xl flex gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-800">
                    <strong>Nota de segurança:</strong> Cada caso é único. Quando necessário, faço encaminhamento e trabalho integrado com outros profissionais.
                  </p>
                </div>
              </div>
              
              <div className="relative flex justify-center items-center">
                <div className="aspect-square rounded-full bg-brand-light/50 absolute inset-0 scale-105 -z-10"></div>
                <img 
                  src={LOGO_URL} 
                  alt="Suzana Santos Logo" 
                  className="w-3/4 h-auto object-contain drop-shadow-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Conteúdo baseado em evidências e aplicado à realidade: do leito da ferida ao prontuário.">
            Cursos práticos para enfermeiros: avaliação, conduta e tomada de decisão
          </SectionHeading>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-serif font-bold text-brand-dark mb-6 flex items-center gap-2">
                <FileText className="w-6 h-6 text-brand-primary" />
                O que você aprende
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Avaliação padronizada e documentação (foto, evolução, métricas)",
                  "Classificação por tecido e objetivo de conduta (granulação, esfacelo, necrose)",
                  "Preparo do leito da ferida e estratégias de desbridamento",
                  "Coberturas e tecnologias: quando usar e quando NÃO usar",
                  "Manejo de biofilme/infecção e controle de exsudato",
                  "Úlcera venosa e compressão (fundamentos e aplicação segura)",
                  "Pé diabético: prevenção, risco e condutas essenciais",
                  "Protocolos e checklists para padronizar atendimento e reduzir erro"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 bg-brand-bg/30 p-4 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-brand-text/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-dark text-white p-8 md:p-10 rounded-3xl">
              <h3 className="text-2xl font-serif font-bold mb-8 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-brand-light" />
                Formatos Disponíveis
              </h3>
              <ul className="space-y-6 mb-10">
                {[
                  { title: "Curso online", desc: "Aulas gravadas + materiais de apoio" },
                  { title: "Mentoria", desc: "Casos reais + revisão de conduta" },
                  { title: "Treinamento in company", desc: "Padronização de equipe para clínicas e hospitais" },
                  { title: "Imersão prática", desc: "Quando houver turma presencial" }
                ].map((format, i) => (
                  <li key={i} className="flex items-center gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <BookOpen className="w-6 h-6 text-brand-light" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{format.title}</h4>
                      <p className="text-white/70 text-sm">{format.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <WhatsAppButton text="QUERO OS CURSOS" className="w-full bg-brand-primary hover:bg-brand-primary/90" eventName="click_course_interest" />
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS & OBJECTIONS */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            <div>
              <h3 className="text-3xl font-serif font-bold text-brand-dark mb-8">O que acontece quando você tenta tratar sozinho (ou com orientação genérica)?</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Gasto desnecessário",
                    desc: "Comprar pomadas e curativos caros que não servem para a fase atual da ferida."
                  },
                  {
                    title: "Risco de infecção",
                    desc: "Limpeza incorreta ou uso de produtos que favorecem bactérias."
                  },
                  {
                    title: "Aumento da dor",
                    desc: "Trocas muito frequentes ou curativos que grudam no leito da ferida."
                  },
                  {
                    title: "Atraso na cicatrização",
                    desc: "A ferida 'estaciona' porque a causa base (ex: pressão, circulação) não foi tratada."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                      <AlertCircle className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark">{item.title}</h4>
                      <p className="text-brand-text/80 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-brand-light">
              <h3 className="text-2xl font-serif font-bold text-brand-dark mb-8">Dúvidas Frequentes</h3>
              <div className="space-y-4">
                {[
                  {
                    q: "Você atende pelo plano de saúde?",
                    a: "Os atendimentos são particulares. Forneço recibo para você solicitar reembolso junto ao seu plano, conforme as regras da sua operadora."
                  },
                  {
                    q: "Como é a consulta online?",
                    a: "Você me chama no WhatsApp, envia fotos e o histórico. Faço a avaliação, defino a conduta e te oriento sobre o que comprar e como fazer a troca."
                  },
                  {
                    q: "Em quanto tempo vejo melhora?",
                    a: "Depende da causa, comorbidades e adesão ao plano. O foco é evoluir com metas e reavaliações."
                  },
                  {
                    q: "O curso tem certificado?",
                    a: "Depende da modalidade. No WhatsApp eu te explico exatamente o que está incluso."
                  }
                ].map((faq, i) => (
                  <div key={i} className="border border-brand-light rounded-2xl overflow-hidden">
                    <button 
                      className="w-full px-6 py-4 text-left flex justify-between items-center bg-brand-bg/30 hover:bg-brand-bg/50 transition-colors"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span className="font-bold text-brand-dark">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-brand-primary transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 bg-white text-brand-text/80 border-t border-brand-light">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <WhatsAppButton text="CHAMAR NO WHATSAPP" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
