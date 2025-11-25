import { useEffect, useRef } from 'react';
import { Target, Users, Award, Lightbulb, Heart, Linkedin } from 'lucide-react';
import StarField from '../components/StarFieldAnimation';
import CtaContent from '../components/Cta';
import FadeInOnScroll from '../components/FadeInOnScroll';
import { trackEvent } from '../utils/trackEvent';

function AboutPage() {

  // SECTION REFS (TRACKING)
  const heroRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  // PAGE VIEW (TRACKING)
  useEffect(() => {
    trackEvent("about_page_view", { page: "AboutPage" });
  }, []);

  // SECTION VIEW TRACKING
  useEffect(() => {
    const sections = [
      { name: "hero_section_view", ref: heroRef },
      { name: "vision_section_view", ref: visionRef },
      { name: "team_section_view", ref: teamRef },
      { name: "services_section_view", ref: servicesRef },
    ];

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const section = e.target.getAttribute("data-section");
            trackEvent(section!, { visible: true });
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((s) => {
      if (s.ref.current) {
        s.ref.current.setAttribute("data-section", s.name);
        obs.observe(s.ref.current);
      }
    });

    return () => obs.disconnect();
  }, []);

  // CLICK TRACKING
  const onLinkedInClick = (name: string, role: string) => {
    trackEvent("about_click_linkedin", { name, role });
  };

  const onServiceClick = (title: string) => {
    trackEvent("about_service_click", { service: title });
  };

  const services = [
    {
      icon: Lightbulb,
      title: 'Pengembangan AI Agent Kustom',
      description:
        'Kami merancang, membangun, dan memelihara AI agent yang sepenuhnya disesuaikan dengan proses bisnis Anda—difokuskan pada hasil yang terukur dan skalabilitas jangka panjang.',
    },
    {
      icon: Heart,
      title: 'Layanan Automasi Menyeluruh',
      description:
        'Tim kami mengembangkan dan mengelola sistem automasi end-to-end yang terintegrasi mulus dengan workflow Anda, meningkatkan efisiensi sekaligus mengurangi beban operasional.',
    },
    {
      icon: Award,
      title: 'Mitra Transformasi AI',
      description:
        'Kami bekerja sebagai mitra strategis untuk mengidentifikasi peluang AI, menyelaraskan solusi dengan tujuan bisnis, dan memastikan adopsi yang lancar di seluruh organisasi.',
    },
  ];

  const team = [
    {
      name: 'Muhammad Fikri Assegaf',
      role: 'Chief Executive Officer',
      linkedinUrl: 'https://www.linkedin.com/in/muhammad-fikri-assegaf/',
    },
    {
      name: 'Muhammad Fikri Assegaf',
      role: 'Chief Technology Officer',
      linkedinUrl: 'https://www.linkedin.com/in/muhammad-fikri-assegaf/',
    },
    {
      name: 'Muhammad Fikri Assegaf',
      role: 'Head of Product',
      linkedinUrl: 'https://www.linkedin.com/in/muhammad-fikri-assegaf/',
    }
  ];

  return (
    <div className="pt-16">
      
      {/* HERO SECTION */}
      <section 
        ref={heroRef} // TRACKING
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <StarField />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-cyan-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
              <Target className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">Tentang TalkVera</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent leading-tight">
              AI yang <span className='text-blue-400'>Membantu Anda Bertumbuh</span> Lebih Cepat
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Kami memiliki misi untuk mendemokratisasi AI dan memberdayakan bisnis segala ukuran untuk memanfaatkan kekuatan transformatif kecerdasan buatan.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-gray-900/30 to-transparent">
        <div className="max-w-7xl mx-auto px-6 pt-10">

          {/* VISION SECTION */}
          <div ref={visionRef} className="mb-24"> 
            <FadeInOnScroll delay={0.2} threshold={0.2}>
              <h2 className="text-4xl font-bold mb-12 text-center"><span className='text-blue-400'>Visi</span> Talkvera</h2>
            </FadeInOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 text-center">
                <FadeInOnScroll delay={0.2} threshold={0.2}>
                  <div className='flex justify-center'>
                    <Target className="w-12 h-12 text-blue-400 mb-4" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center">Mission</h3>
                </FadeInOnScroll>
                <FadeInOnScroll delay={0.3} threshold={0.3} direction="right">
                  <p className="text-gray-400 leading-relaxed">
                    Menciptakan sistem AI yang meningkatkan efisiensi, kejelasan, dan kinerja operasional di setiap lini bisnis.
                  </p>
                </FadeInOnScroll>
              </div>
              <div className="p-8 text-center">
                <FadeInOnScroll delay={0.2} threshold={0.2}>
                  <div className='flex justify-center'>
                    <Lightbulb className="w-12 h-12 text-cyan-400 mb-4" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Vision</h3>
                </FadeInOnScroll>
                <FadeInOnScroll delay={0.3} threshold={0.3} direction="right">
                  <p className="text-gray-400 leading-relaxed">
                    Membangun standar baru dalam automasi cerdas dan menjadi mitra strategis bagi perusahaan yang ingin bertransformasi.
                  </p>
                </FadeInOnScroll>
              </div>
            </div>
          </div>

          {/* TEAM SECTION */}
          <div ref={teamRef} className='pb-24'>
            <FadeInOnScroll delay={0.2} threshold={0.2}>
              <h2 className="text-4xl font-bold mb-12 text-center">Tim di Balik <span className='text-blue-400'>Talkvera</span></h2>
            </FadeInOnScroll>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <FadeInOnScroll
                  key={index}
                  delay={index * 0.15}
                  threshold={0.3}
                  direction="right"
                >
                  <div className="p-8">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-6 mx-auto">
                      <Users className="w-10 h-10 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
                    <div className="text-blue-400 text-sm text-center mb-4">{member.role}</div>
                    <div className="flex justify-center mt-4">
                      <a
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => onLinkedInClick(member.name, member.role)} // TRACKING
                        className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors group"
                      >
                        <Linkedin className="w-5 h-5 fill-current" />
                        <span className="text-sm font-semibold">LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          </div>

          {/* SERVICES SECTION */}
          <div ref={servicesRef} className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <FadeInOnScroll
                  key={index}
                  delay={index * 0.15}
                  threshold={0.3}
                  direction="left"
                >
                  <div
                    onClick={() => onServiceClick(service.title)} // TRACKING
                    className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700 transition-all duration-300 transform hover:scale-[1.02] hover:border-blue-500/70 shadow-lg"
                  >
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
                      <service.icon className="w-7 h-7 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{service.description}</p>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          </div>

          {/* CTA SECTION (tidak perlu tracking khusus kecuali diminta) */}
          <CtaContent />

        </div>
      </section>
    </div>
  );
}

export default AboutPage;
