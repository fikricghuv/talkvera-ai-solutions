import { Target, Users, Award, Lightbulb, Heart, Linkedin } from 'lucide-react';
import StarField from '../components/StarFieldAnimation';
import CtaContent from '../components/Cta';
import FadeInOnScroll from '../components/FadeInOnScroll';

function AboutPage() {

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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

          <div className="mb-24">
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
                <FadeInOnScroll
                  delay={0.3}
                  threshold={0.3}
                  direction="right"
                >
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
                <FadeInOnScroll
                  delay={0.3}
                  threshold={0.3}
                  direction="right"
                >
                  <p className="text-gray-400 leading-relaxed">
                    Membangun standar baru dalam automasi cerdas dan menjadi mitra strategis bagi perusahaan yang ingin bertransformasi.
                  </p>
                </FadeInOnScroll>
              </div>
            </div>
          </div>

          <div className='pb-24'>
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
                  <div
                    key={index}
                    className="p-8 "
                  >
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

          <div className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <FadeInOnScroll
                  key={index}
                  delay={index * 0.15}
                  threshold={0.3}
                  direction="left"
                >
                  <div
                    key={index}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <FadeInOnScroll
              delay={0.3}
              threshold={0.3}
              direction="left"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Kami Mengoptimalkan Cara Anda <span className='text-blue-400'>Bertumbuh</span></h2>
                <br />
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    Di Talkvera, kami tidak hanya membangun sistem AI—kami membangun kemitraan jangka panjang yang berkembang bersama bisnis Anda. Misi kami adalah membantu Anda mencapai pertumbuhan dengan memanfaatkan solusi AI khusus yang skalabel, efisien, dan selaras dengan tujuan Anda.
                  </p>
                  <p>
                    Baik Anda mengoptimalkan operasional internal, mengurangi beban kerja manual, atau mengeksplorasi cara baru untuk melibatkan pelanggan, kami bertindak sebagai mitra strategis dalam perjalanan transformasi Anda. Kami menggabungkan keahlian teknis yang mendalam dengan pola pikir yang mengutamakan bisnis untuk memberikan dampak nyata dan terukur.
                  </p>
                  <br />
                  <p className="text-blue-400 font-semibold">
                    Fikri A
                  </p>
                  <span className='text-sm'>Co-Founder</span>
                </div>
              </div>
            </FadeInOnScroll>
            {/* Box Highlighted di Samping Kanan */}
            <FadeInOnScroll
              delay={0.3}
              threshold={0.3}
              direction="right"
            >
              <div className="relative p-1 bg-gradient-to-br from-blue-500/50 to-cyan-500/50 rounded-3xl shadow-2xl shadow-blue-500/20">
                <img
                  src="/assets/people-do-programming.jpg"
                  alt="People working on programming"
                  className="w-full h-full object-cover rounded-[1.4rem]"
                />
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      <section className="pb-24 bg-gradient-to-b from-transparent to-gray-900/30">
        <FadeInOnScroll delay={0.2} threshold={0.2}>
          <div className="max-w-7xl mx-auto px-6">
            <CtaContent />
          </div>
        </FadeInOnScroll>
      </section>
    </div>
  );
}

export default AboutPage;