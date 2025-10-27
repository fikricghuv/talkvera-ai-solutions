import { Bot, Workflow, BarChart3, Shield, Lock, Star, ArrowRight, Zap, Rocket, Brain, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import StarField from '../components/StarFieldAnimation';
import CtaContent from '../components/Cta';
import FadeInOnScroll from '../components/FadeInOnScroll';

function HomePage() {

  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const navigate = useNavigate();

  const handleContactNavigate = () => {
    navigate('/contact');
  };

  const handleCaseStudiesNavigate = () => {
    navigate('/docs/case-studies/overview');
  };

  const features = [
    {
      icon: Bot,
      title: 'Custom AI Agent Engineering',
      description: 'Tailored AI agents designed specifically for your business needs, powered by cutting-edge machine learning models.',
    },
    {
      icon: Workflow,
      title: 'Fully Managed Automation Pipelines',
      description: 'End-to-end automation solutions that streamline your workflows and maximize operational efficiency.',
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics Dashboard',
      description: 'Real-time insights and comprehensive analytics to monitor and optimize your AI systems performance.',
    },
    {
      icon: Shield,
      title: 'Intelligent Access Control',
      description: 'Advanced security protocols with role-based access management to protect your sensitive data.',
    },
    {
      icon: Lock,
      title: 'Secure and Compliant Protocols',
      description: 'Enterprise-grade security standards ensuring full compliance with industry regulations and data protection laws.',
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Discovery",
      description: "We begin by understanding your vision, goals, and requirements. Through collaborative discussions and research, we lay the foundation for your project's success.",
      icon: Brain,
    },
    {
      number: "2",
      title: "Development",
      description: "Our team transforms ideas into reality through agile development. We build, test, and iterate, ensuring your solution meets the highest standards of quality and performance.",
      icon: Workflow,
    },
    {
      number: "3",
      title: "Deployment",
      description: "We carefully launch your solution, ensuring a smooth transition to production. Our team provides ongoing support and optimization to keep your system running at its best.",
      icon: Rocket,
    },
  ];

  const testimonials = [
    {
      quote: 'TalkVera completely transformed our first-level customer support. Within two weeks of implementation, the AI autonomously managed 78% of incoming basic inquiries, drastically reducing our agent queue times.',
      author: 'Sarah Mitchell',
      role: 'CTO, Innovatech Solutions',
    },
    {
      quote: 'The integration with our CRM was seamless. Their automation pipelines immediately shaved 45% off our average ticket resolution time, allowing us to refocus our human agents on high-value, complex client issues.',
      author: 'James Chen',
      role: 'Director of Operations, FutureLogistics',
    },
    {
      quote: 'Before TalkVera, our onboarding process took 48 hours. The automation tools cut that down to under 5 hours. This immediate improvement in efficiency has allowed us to scale without needing to hire a larger team.',
      author: 'David Lee',
      role: 'VP of Customer Success, Synergy Services',
    },
  ];

  return (
    <div className="pt-16">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        <StarField />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-cyan-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">AI-Powered Business Solutions</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent leading-tight">
            Building Intelligent AI Solutions for Business Growth
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Discover limitless opportunities with secure and intelligent AI systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleContactNavigate} // Panggil onNavigate('contact')
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-xl shadow-blue-500/30 flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 bg-gray-800/50 hover:bg-gray-700/50 text-white font-semibold rounded-lg border border-gray-700 transition-all"
            onClick={handleCaseStudiesNavigate}>
              View Case Studies
            </button>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-sm text-gray-500">AI Agents Deployed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-sm text-gray-500">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-sm text-gray-500">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Comprehensive AI Solutions (Diperbaiki menjadi Accordion Interaktif) */}
      
      <section className="py-24 relative overflow-hidden">
          {/* Efek Cahaya di Sisi Kanan (Memecah Kebosanan Kotak) */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <FadeInOnScroll delay={0.2} threshold={0.2}>
              <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                      Comprehensive AI Solutions
                  </h2>
                  <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                      End-to-end AI services designed to transform your business operations and drive innovation.
                  </p>
              </div>
            </FadeInOnScroll>
              <div className="max-w-4xl mx-auto space-y-4">
                  {features.map((feature, index) => {
                      const isActive = index === activeIndex;
                      const Icon = feature.icon;

                      return (
                        <FadeInOnScroll 
                          key={index} 
                          delay={index * 0.15} 
                          threshold={0.3}      
                          direction="right"  
                        >
                          <div key={index}>
                              <button
                                  onClick={() => setActiveIndex(isActive ? null : index)} // Toggle: Tutup jika aktif, buka jika tidak
                                  className={`group relative w-full text-left p-6 md:p-8 rounded-3xl backdrop-blur-sm transition-all duration-300 border 
                                      ${
                                          isActive
                                              ? 'bg-gray-800/90 border-blue-500/70 shadow-2xl shadow-blue-900/40 transform scale-[1.01]'
                                              : 'bg-gray-900/70 border-gray-700/50 hover:border-gray-600/70'
                                      }
                                  `}
                              >
                                  {/* Efek Border Gradien untuk yang Aktif */}
                                  <div
                                      className={`absolute inset-0 rounded-3xl p-[1px] pointer-events-none transition-opacity duration-500
                                          ${isActive ? 'opacity-100' : 'opacity-0'}
                                      `}
                                  >
                                      <div className="absolute inset-0 rounded-[calc(1.5rem+1px)] bg-gradient-to-br from-blue-500/80 via-cyan-500/80 to-transparent"></div>
                                  </div>
                                  {/* Lapisan Hitam di Bawah Border Gradien */}
                                  <div
                                      className={`absolute inset-[1px] rounded-3xl transition-all duration-500 
                                          ${isActive ? 'bg-gray-800/80' : 'bg-gray-900/80'}
                                      `}
                                  ></div>

                                  {/* Konten Kartu (Bagian yang Selalu Terlihat) */}
                                  <div className="relative z-20 flex justify-between items-center gap-4">
                                      {/* KIRI: Ikon dan Judul */}
                                      <div className='flex items-center space-x-4'>
                                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg 
                                              ${isActive ? 'bg-blue-500/40' : 'bg-gray-700/50 group-hover:bg-blue-500/30'}`}
                                          >
                                              <Icon className={`w-5 h-5 transition-colors ${isActive ? 'text-blue-300' : 'text-gray-400 group-hover:text-blue-300'}`} />
                                          </div>
                                          <h3 className={`text-xl font-semibold transition-colors ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                                              {feature.title}
                                          </h3>
                                      </div>
                                      
                                      {/* KANAN: Ikon Chevron (Indikator Buka/Tutup) */}
                                      <div className="shrink-0">
                                          <ChevronDown className={`w-6 h-6 text-blue-400 transition-transform duration-300 ${isActive ? 'rotate-180' : 'rotate-0'}`} />
                                      </div>
                                  </div>
                              </button>

                              {/* Deskripsi (Hanya Tampil saat Aktif) */}
                              <div
                                  className={`overflow-hidden transition-all duration-500 ease-in-out`}
                                  style={{ 
                                      maxHeight: isActive ? '200px' : '0', // Tinggi maksimum yang cukup
                                      opacity: isActive ? 1 : 0 
                                  }}
                              >
                                  <p className="text-gray-400 leading-relaxed mt-4 ml-6 p-4 rounded-b-lg border-l-4 border-blue-500/50 bg-gray-900/50 shadow-inner">
                                      {feature.description}
                                  </p>
                              </div>
                          </div>
                        </FadeInOnScroll>
                      );
                  })}
              </div>
          </div>
      </section>

      {/* SECTION 3: Our Proven Process (Ditingkatkan) */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-900/30 to-transparent">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[120px]"></div>

          <div className="max-w-5xl mx-auto px-6 relative">
            <FadeInOnScroll delay={0.2} threshold={0.2}>
              <div className="text-center mb-16"> {/* Meningkatkan margin bawah */}
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                      Our Proven Process
                  </h2>
                  <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                      A streamlined three-phase methodology to deliver exceptional AI solutions tailored to your business.
                  </p>
              </div>
            </FadeInOnScroll>
              <div className="relative">
                  {processSteps.map((step, index) => (
                    <FadeInOnScroll 
                      key={index} 
                      delay={index * 0.15} 
                      threshold={0.3}      
                      direction="right"  
                    >
                      <div key={index} className="relative">
                          {/* Flex container untuk Angka dan Konten, spasi responsif */}
                          <div className="flex gap-6 md:gap-8 items-start pb-16 last:pb-0"> 
                              {/* Kolom Kiri: Angka dan Garis Penghubung */}
                              <div className="relative flex flex-col items-center pt-8">
                                  <div className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-500/50 flex items-center justify-center backdrop-blur-sm shadow-xl shadow-blue-500/20 transition-transform hover:scale-105">
                                      <span className="text-3xl font-bold bg-gradient-to-br from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                          {step.number}
                                      </span>
                                  </div>

                                  {/* Garis Vertikal Timeline */}
                                  {index < processSteps.length - 1 && (
                                      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-0.5 h-[calc(100%+2rem)] bg-gradient-to-b from-blue-500/70 via-cyan-500/30 to-transparent"></div>
                                  )}
                              </div>

                              {/* Kolom Kanan: Card Konten */}
                              <div className="flex-1 pt-8 group">
                                  <div className="relative p-8 bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm">
                                      
                                      {/* Ikon Latar Belakang */}
                                      <div className="absolute top-8 right-8 opacity-20 group-hover:opacity-40 transition-opacity">
                                          <step.icon className="w-16 h-16 text-blue-400" />
                                      </div>

                                      <div className="relative">
                                          {/* Judul Bergradien */}
                                          <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                                              {step.title}
                                          </h3>
                                          <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                                              {step.description}
                                          </p>
                                      </div>

                                      {/* Overlay Effect on Hover */}
                                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                    </FadeInOnScroll>
                  ))}
              </div>
          </div>
      </section>

      {/* SECTION 4: Real Results from Real Clients (Diperbarui) */}
      <section className="py-24 bg-gradient-to-b from-transparent to-gray-900/30">
          <div className="max-w-7xl mx-auto px-6">
            <FadeInOnScroll delay={0.2} threshold={0.2}>
              <div className="text-left mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                      What People Are Saying About TalkVera
                  </h2>
                  <p className="text-xl text-gray-400 max-w-2xl">
                      See how TalkVera has helped businesses achieve unprecedented growth and efficiency.
                  </p>
              </div>
            </FadeInOnScroll>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                  <FadeInOnScroll 
                      key={index} 
                      delay={index * 0.15} 
                      threshold={0.3}      
                      direction="right"  
                  >
                      <div
                          className="group relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-yellow-500/10"
                      >
                          {/* Efek bayangan kuning/biru halus saat hover */}
                          <div className="absolute inset-0 rounded-2xl bg-blue-500/0 group-hover:bg-cyan-500/5 transition-colors duration-500 pointer-events-none"></div>
                          
                          <div className="relative z-10">
                              <div className="flex items-center space-x-1 mb-6">
                                  {[...Array(5)].map((_, i) => (
                                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                  ))}
                              </div>
                              <p className="text-gray-300 mb-6 leading-relaxed italic">
                                  "{testimonial.quote}"
                              </p>
                              <div className="pt-6 border-t border-gray-700">
                                  <div className="font-semibold text-white">{testimonial.author}</div>
                                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                              </div>
                          </div>
                      </div>
                  </FadeInOnScroll>
              ))}
            </div>
            
          </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-transparent to-gray-900/30">
          <div className="max-w-7xl mx-auto px-6">
            <FadeInOnScroll delay={0.2} threshold={0.2}>
                <CtaContent />
            </FadeInOnScroll>
          </div>
      </section>
    </div>
  );
}

export default HomePage;
