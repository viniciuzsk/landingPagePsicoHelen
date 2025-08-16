'use client';

import type React from 'react';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const MotionButton = motion(Button);

import {
  Heart,
  Star,
  Sparkles,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Menu,
  X,
  ArrowRight,
  Calendar,
  Laptop,
  Armchair,
  Brain,
  Shield,
  Users,
  Clock,
  MapPinIcon,
  PhoneCall,
  Send,
} from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f2eb]">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <MobileMenu isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
      <Hero />
      <About />
      <Specialties />
      <Process />
      <Contact />
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}

function Header({ mobileMenuOpen, setMobileMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#f5f2eb]/95 backdrop-blur-md py-3 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12 rounded-full bg-[#283953] flex items-center justify-center">
            <Heart className="h-6 w-6 text-[#f5f2eb]" />
            
            <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#f5f2eb] flex items-center justify-center">
              <Star className="h-2.5 w-2.5 text-[#283953]" />
            </div>
          </div>
          <span className="font-serif text-xl font-medium text-[#283953]">
            Helen Pinheiro
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {['Início', 'Sobre', 'Contato'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[#283953] hover:text-[#283953]/70 transition-colors text-sm font-medium"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            asChild
            className="bg-[#283953] text-[#f5f2eb] hover:bg-[#283953]/90 rounded-full px-6"
          >
            <a
              href="https://api.whatsapp.com/send?phone=5567996202613&text=Olá! Gostaria de agendar uma consulta."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Agendar Consulta
            </a>
          </Button>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-[#283953]" />
          ) : (
            <Menu className="h-6 w-6 text-[#283953]" />
          )}
        </button>
      </div>
    </header>
  );
}

function MobileMenu({ isOpen, setIsOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
          className="fixed inset-0 z-40 bg-[#f5f2eb] pt-20"
        >
          <div className="container flex flex-col h-full">
            <nav className="flex flex-col gap-6 py-8">
              {['Início', 'Sobre', 'Contato'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-medium text-[#283953] hover:text-[#283953]/70 transition-colors py-2 border-b border-[#283953]/10"
                >
                  {item}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pb-8">
              <Button
                asChild
                className="w-full bg-[#283953] text-[#f5f2eb] hover:bg-[#283953]/90 rounded-full py-6 text-lg"
              >
                <a
                  href="https://api.whatsapp.com/send?phone=5567996202613&text=Olá! Gostaria de agendar uma consulta."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Agendar Consulta
                </a>
              </Button>

              <div className="flex justify-center gap-6 mt-8">
                <a
                  href="https://www.instagram.com/psico_helen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#283953] hover:text-[#283953]/70 transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden relative">
      {/* Elementos decorativos */}
      <div className="absolute top-1/4 right-[20%] w-64 h-64 rounded-full bg-[#283953]/5 blur-3xl" />
      <div className="absolute bottom-1/4 left-[10%] w-64 h-64 rounded-full bg-[#283953]/5 blur-3xl" />

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-block mb-4 px-4 py-1 bg-[#283953]/10 rounded-full">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-[#283953]" />
                <span className="text-sm font-medium text-[#283953]">
                  CRP 14/10220
                </span>
              </div>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#283953] leading-tight">
              Psicóloga{' '}
              <span className="relative inline-block">
                Helen Pinheiro
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="10"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q25 0, 50 5 T100 5"
                    stroke="#283953"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
            </h1>

            <p className="mt-6 text-lg text-[#283953]/80 max-w-xl mx-auto lg:mx-0">
              Na terapia, construímos juntas um espaço para entender o que você
              sente, o que isso significa e como isso impacta sua vida. <br />É
              um processo de escuta, reflexão e desenvolvimento de estratégias
              para lidar com as emoções de forma mais consciente.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                className="bg-[#283953] text-[#f5f2eb] hover:bg-[#283953]/90 rounded-full px-8 py-6"
              >
                <a
                  href="https://api.whatsapp.com/send?phone=5567996202613&text=Olá! Gostaria de conversar sobre terapia."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Converse Comigo
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-[#283953] text-[#283953] hover:bg-[#283953]/5 rounded-full px-8 py-6 bg-transparent"
              >
                <a
                  href="https://www.instagram.com/psico_helen/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="mr-2 h-4 w-4" />
                  Instagram
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 overflow-hidden rounded-[2.5rem] shadow-xl">
              <Image
                src="/psicologa-helen.jpg"
                alt="Psicóloga Helen Pinheiro"
                width={600}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Elementos decorativos */}
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-[#283953]/10 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-[#283953] flex items-center justify-center">
                <div className="text-center text-[#f5f2eb]">
                  <div className="font-serif text-2xl font-bold">15+</div>
                  <div className="text-xs">
                    anos de
                    <br />
                    experiência
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full bg-[#283953]/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Stars */}
          <Star className="absolute top-20 left-[10%] w-8 h-8 text-[#283953]" />
          <Star className="absolute bottom-40 right-[20%] w-12 h-12 text-[#283953]" />
          <Star className="absolute top-1/2 left-[30%] w-6 h-6 text-[#283953]" />

          {/* Hearts */}
          <Heart className="absolute top-32 right-[15%] w-10 h-10 text-[#283953]" />
          <Heart className="absolute bottom-20 left-[25%] w-8 h-8 text-[#283953]" />
        </motion.div>
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <motion.div
                className="relative rounded-[2.5rem] overflow-hidden shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/consutorio.png"
                  alt="Consultório de Psicologia"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#283953]/10 transition-opacity hover:opacity-0" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block rounded-full bg-[#283953]/10 px-4 py-1"
            >
              <div className="flex items-center gap-2">
                <Brain className="h-4 w-4 text-[#283953]" />
                <span className="text-sm font-medium text-[#283953]">
                  Sobre Mim
                </span>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-4xl font-bold text-[#283953]"
            >
              Psicologia Clínica com foco no cuidado emocional
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '5rem' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-[#283953] rounded-full"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[#283953]/80 text-lg"
            >
              Meu trabalho é voltado ao atendimento de mulheres que enfrentam
              dificuldades com a regulação emocional.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[#283953]/80 text-lg"
            >
              Utilizo a Terapia Cognitivo-Comportamental (TCC), uma abordagem
              baseada em evidências científicas que busca compreender como
              pensamentos, emoções e comportamentos se conectam. As sessões são
              estruturadas, com foco em metas claras e estratégias práticas para
              lidar com os desafios do dia a dia. O processo é construído em
              parceria, respeitando o tempo, a história e os valores de cada
              mulher, oferecendo um espaço seguro para acolhimento e
              transformação.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 rounded-full bg-[#283953] flex items-center justify-center flex-shrink-0">
                  <Armchair className="h-6 w-6 text-[#f5f2eb]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#283953] mb-1">
                    Presencial
                  </h3>
                  <p className="text-sm text-[#283953]/70">
                    Atendimento no consultório em Dourados, MS, em um ambiente
                    acolhedor e reservado.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 rounded-full bg-[#283953] flex items-center justify-center flex-shrink-0">
                  <Laptop className="h-6 w-6 text-[#f5f2eb]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#283953] mb-1">Online</h3>
                  <p className="text-sm text-[#283953]/70">
                    Atendimento via Google Meet para brasileiros em qualquer
                    lugar, com total sigilo e segurança.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <Button
                asChild
                className="bg-[#283953] text-[#f5f2eb] hover:bg-[#283953]/90 rounded-full px-8 py-6"
              >
                <a
                  href="https://share.google/nRkueitERPS9Yt7r8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPinIcon className="mr-2 h-4 w-4" />
                  Conheça meu Consultório
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Specialties() {
  const specialties = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: 'Ansiedade',
      description:
        'Preocupação excessiva, medo e sintomas físicos que comprometem o bem-estar e a funcionalidade diária.',
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Desregulação emocional',
      description:
        'Dificuldades em controlar emoções intensas que interferem nas decisões e nas relações, impactando a qualidade de vida.',
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: 'Transtornos de humor',
      description:
        'Alterações significativas no humor, com episódios que podem variar entre depressão e euforia, exigindo acompanhamento especializado.',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Dificuldades em estabelecer e manter limites saudáveis',
      description:
        'Desafios na comunicação e no respeito às próprias necessidades, afetando relacionamentos pessoais e profissionais.',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Stars */}
          <Star className="absolute top-10 right-[20%] w-8 h-8 text-[#283953]" />
          <Star className="absolute bottom-20 left-[15%] w-10 h-10 text-[#283953]" />

          {/* Hearts */}
          <Heart className="absolute top-1/3 left-[25%] w-8 h-8 text-[#283953]" />
          <Heart className="absolute bottom-1/3 right-[10%] w-12 h-12 text-[#283953]" />
        </motion.div>
      </div>

      <div className="container relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block rounded-full bg-[#283953]/10 px-4 py-1 mb-4"
          >
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-[#283953]" />
              <span className="text-sm font-medium text-[#283953]">
                Especialidades
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-bold text-[#283953] mb-6"
          >
            Áreas de Atuação
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-[#283953]/70 text-lg"
          >
            Ofereço atendimento especializado em diversas áreas da saúde mental,
            com abordagens personalizadas para cada necessidade
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <motion.div
                  className="w-16 h-16 bg-[#283953] rounded-2xl flex items-center justify-center mb-6"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="text-[#f5f2eb]">{specialty.icon}</div>
                </motion.div>

                <h3 className="font-serif text-xl font-bold text-[#283953] mb-4">
                  {specialty.title}
                </h3>

                <p className="text-[#283953]/70 mb-6">
                  {specialty.description}
                </p>

                <Button
                  asChild
                  variant="ghost"
                  className="p-0 h-auto text-[#283953] hover:text-[#283953]/70"
                >
                  <a
                    href="https://api.whatsapp.com/send?phone=5567996202613&text=Olá! Gostaria de saber mais sobre o tratamento."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center font-medium"
                    >
                      Saiba mais
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button
            asChild
            className="bg-[#283953] text-[#f5f2eb] hover:bg-[#283953]/90 rounded-full px-8 py-6"
          >
            <a
              href="https://api.whatsapp.com/send?phone=5567996202613&text=Olá! Gostaria de conhecer todas as suas especialidades."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Users className="mr-2 h-4 w-4" />
              Ver todas as especialidades
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      icon: <PhoneCall className="h-6 w-6" />,
      title: 'Primeiro Contato',
      description: 'Uma conversa inicial para entender suas necessidades',
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Acolhimento',
      description: 'Sessão inicial para estabelecer vínculos e objetivos',
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: 'Processo Terapêutico',
      description: 'Desenvolvimento contínuo e acompanhamento personalizado',
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: 'Transformação',
      description: 'Resultados e mudanças positivas em sua vida',
    },
  ];

  return (
    <section className="py-20 bg-[#283953] relative overflow-hidden">
      <div className="container relative">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full bg-[#f5f2eb]/10 px-4 py-1 mb-4">
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-[#f5f2eb]" />
              <span className="text-sm font-medium text-[#f5f2eb]">
                Processo
              </span>
            </div>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#f5f2eb] mb-6">
            Como funciona
          </h2>

          <div className="h-1 w-20 bg-[#f5f2eb] rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-[#f5f2eb] rounded-[2rem] p-6 text-center relative z-10">
                <div className="w-12 h-12 bg-[#283953] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-[#f5f2eb]">{step.icon}</div>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#283953] mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-[#283953]/70">{step.description}</p>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-[#283953]/30" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const whatsappMessage = `Olá! Meu nome é ${name}. Email: ${email}. Mensagem: ${message}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5567996202613&text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="bg-[#283953] p-8 md:p-12">
              <div className="space-y-6">
                <h2 className="font-serif text-3xl font-bold text-[#f5f2eb]">
                  Vamos conversar?
                </h2>

                <p className="text-[#f5f2eb]/80">
                  Estou aqui para ajudar você em sua jornada de autoconhecimento
                  e bem-estar.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#f5f2eb]/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-[#f5f2eb]" />
                    </div>
                    <div>
                      <div className="text-[#f5f2eb]/60 text-sm">Telefone</div>
                      <a
                        href="tel:+5567996202613"
                        className="text-[#f5f2eb] hover:text-[#f5f2eb]/80 transition-colors"
                      >
                        (67) 99620-2613
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#f5f2eb]/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-[#f5f2eb]" />
                    </div>
                    <div>
                      <div className="text-[#f5f2eb]/60 text-sm">Email</div>
                      <a
                        href="mailto: psicohelen@gmail.com"
                        className="text-[#f5f2eb] hover:text-[#f5f2eb]/80 transition-colors"
                      >
                        psicohelen@gmail.com{' '}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#f5f2eb]/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-[#f5f2eb]" />
                    </div>
                    <div>
                      <div className="text-[#f5f2eb]/60 text-sm">Endereço</div>
                      <div className="text-[#f5f2eb]">
                        Rua Santos Dumont, 984 - Jardim Paulista
                        <br />
                        Dourados - MS
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#283953] mb-2"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-full border border-[#283953]/20 px-4 py-3 focus:border-[#283953] focus:ring focus:ring-[#283953]/20 focus:outline-none"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#283953] mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-full border border-[#283953]/20 px-4 py-3 focus:border-[#283953] focus:ring focus:ring-[#283953]/20 focus:outline-none"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#283953] mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-2xl border border-[#283953]/20 px-4 py-3 focus:border-[#283953] focus:ring focus:ring-[#283953]/20 focus:outline-none resize-none"
                    placeholder="Como posso ajudar você?"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#283953] text-[#f5f2eb] hover:bg-[#283953]/90 rounded-full py-6"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#283953] py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative h-12 w-12 rounded-full bg-[#f5f2eb] flex items-center justify-center">
                <Heart className="h-6 w-6 text-[#283953]" />
                <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#283953] flex items-center justify-center">
                  <Star className="h-2.5 w-2.5 text-[#f5f2eb]" />
                </div>
              </div>
              <span className="font-serif text-xl font-medium text-[#f5f2eb]">
                Helen Pinheiro
              </span>
            </div>

            <p className="text-[#f5f2eb]/70 mb-6">
              Psicóloga clínica dedicada a ajudar você a encontrar seu
              equilíbrio emocional e bem-estar.
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/psico_helen/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#f5f2eb]/10 flex items-center justify-center text-[#f5f2eb] hover:bg-[#f5f2eb] hover:text-[#283953] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold text-[#f5f2eb] mb-6">
              Links Rápidos
            </h3>
            <ul className="space-y-4">
              {['Início', 'Sobre', 'Contato'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-[#f5f2eb]/70 hover:text-[#f5f2eb] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold text-[#f5f2eb] mb-6">
              Horário de Atendimento
            </h3>
            <div className="flex items-start gap-3 mb-4">
              <Clock className="h-5 w-5 text-[#f5f2eb]/70 mt-0.5" />
              <div className="text-[#f5f2eb]/70">
                Segunda a Sexta
                <br />
                8h às 19h
              </div>
            </div>
            <Button
              asChild
              className="bg-[#f5f2eb] text-[#283953] hover:bg-[#f5f2eb]/90 rounded-full"
            >
              <a
                href="https://api.whatsapp.com/send?phone=5567996202613&text=Olá! Gostaria de agendar uma consulta."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Agende sua Consulta
              </a>
            </Button>
          </div>
        </div>

        <div className="border-t border-[#f5f2eb]/10 mt-12 pt-8 text-center text-[#f5f2eb]/60">
          <p>
            &copy; {new Date().getFullYear()} Helen Pinheiro. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsapp() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5567996202613&text=Olá! Gostaria de conversar sobre terapia."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:bg-green-600 hover:scale-110"
      aria-label="Contato via WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
      </svg>
    </a>
  );
}
