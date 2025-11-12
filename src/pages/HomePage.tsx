import { Workflow, Star, ArrowRight, Rocket, Brain, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StarField from '../components/StarFieldAnimation';
import CtaContent from '../components/Cta';
import FadeInOnScroll from '../components/FadeInOnScroll';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import AnimatedWorkflow from '../components/AnimatedWorkflow';
import CustomAutomationAnimation from '../components/CustomAutomationAnimation';
import WorkflowManagementAnimation from '../components/WorkflowManagementAnimation';
import DashboardAnalyticsAnimation from '../components/MonitoringAnimation';
import AccessControlAnimation from '../components/AccessControlAnimation';
import EnterpriseSecurityAnimation from '../components/EnterpriseSecurityAnimation';

function HomePage() {

  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const navigate = useNavigate();

  const handleContactNavigate = () => {
    navigate('/contact');
  };

  const handleCaseStudiesNavigate = () => {
    navigate('/docs/case-studies/overview');
  };

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    }
  }, [location]);
                

  const features = [
    {
      title: 'Automasi Proses Bisnis Kustom',
      description: 'Kami merancang alur kerja otomatis yang disesuaikan 100% dengan kebutuhan unik bisnis Anda. Hilangkan proses berulang dan pastikan akurasi di setiap langkah.',
    },
    {
      title: 'Manajemen Workflow Otomatis',
      description: 'Solusi automasi end-to-end yang kami kelola penuh. Cukup berikan proses Anda, dan kami akan menjalankannya, memastikan operasional Anda selalu efisien dan lancar.',
    },
    {
      title: 'Dashboard Analitik Real-Time',
      description: 'Dapatkan informasi real-time yang komprehensif untuk memonitor dan mengukur dampak sistem automasi. Lihat langsung berapa jam dan uang yang Anda hemat setiap hari.',
    },
    {
      title: 'Kontrol Akses dan Otomatisasi Cerdas',
      description: 'Protokol keamanan berlapis untuk melindungi data sensitif Anda. Kami menerapkan manajemen akses berbasis role untuk memastikan hanya pihak yang berwenang yang dapat melihat data Anda.',
    },
    {
      title: 'Standar Keamanan Level Enterprise',
      description: 'Kami menggunakan standar keamanan tingkat atas untuk menjamin perlindungan data dan kepatuhan penuh terhadap regulasi industri. Fokus pada bisnis, biar kami yang urus keamanannya.',
    }
  ];

  // Array animasi terpisah (urutan harus sama dengan features)
  const featureAnimations = [
    <CustomAutomationAnimation />,
    <WorkflowManagementAnimation />,
    <DashboardAnalyticsAnimation />,
    <AccessControlAnimation />,
    <EnterpriseSecurityAnimation />
  ];

  const processSteps = [
    {
      number: "1",
      title: "Discovery",
      description: (
        <>
          Kami memulai dengan sesi kolaboratif 60 menit untuk memahami
          <strong className="text-white"> proses bisnis manual</strong> Anda dan mengidentifikasi bottleneck (hambatan) yang paling menghabiskan waktu.
          <strong className="text-blue-400"> Anda hanya perlu menjelaskan, kami yang petakan.</strong>
        </>
      ),
      icon: Brain,
    },
    {
      number: "2",
      title: "Development",
      description: (
        <>
          Tim kami segera mengubah peta proses menjadi alur kerja yang tepat. Kami membangun, menguji, dan melakukan iterasi untuk memastikan solusi untuk Anda
          <strong className="text-white"> akurat 100%</strong> dan siap digunakan dalam hitungan hari, <strong className="text-blue-400">mengurangi penundaan (time delay) bisnis Anda.</strong>
        </>
      ),
      icon: Workflow,
    },
    {
      number: "3",
      title: "Deployment",
      description: (
        <>
          Kami meluncurkan solusi automasi Anda dengan transisi yang mulus. Setelah <strong className="text-white">live</strong>, tim kami menyediakan
          <strong className="text-white"> dukungan penuh dan pemeliharaan 24/7</strong> untuk memastikan sistem Anda berjalan optimal,
          <strong className="text-blue-400"> tanpa perlu tim IT tambahan dari sisi Anda.</strong>
        </>
      ),
      icon: Rocket,
    },
  ];

  const testimonials = [
    {
      quote: 'TalkVera benar-benar mentransformasi dukungan pelanggan tingkat pertama kami. Dalam dua minggu implementasi, automasi berhasil mengurus 78% dari pertanyaan dasar yang masuk, memotong drastis antrean agen kami.',
      author: 'Sarah Mitchell',
      role: 'CTO, Solusi Innovatech',
    },
    {
      quote: 'Integrasi dengan CRM kami sangat mulus. Pipeline automasi mereka langsung mencukur 45% dari rata-rata waktu penyelesaian tiket kami, memungkinkan agen manusia kami untuk fokus pada masalah klien yang lebih kompleks.',
      author: 'James Chen',
      role: 'Direktur Operasional, FutureLogistics',
    },
    {
      quote: 'Sebelum TalkVera, proses onboarding kami memakan waktu 48 jam. Alat automasi memotongnya menjadi di bawah 5 jam. Peningkatan efisiensi yang instan ini memungkinkan kami untuk scale up tanpa perlu merekrut tim yang lebih besar.',
      author: 'David Lee',
      role: 'VP Kesuksesan Pelanggan, Synergy Services',
    },
  ];

  const faqs = [
    {
      question: "Berapa lama waktu yang dibutuhkan untuk implementasi automasi?",
      answer: (
        <>
          Kami berfokus pada hasil cepat. Kami bertujuan untuk menghadirkan <strong className="text-white">Bukti Konsep (POC) atau *Quick Win* pertama dalam 3 minggu</strong> setelah onboarding.
          <br /><br />
          Namun, untuk transformasi operasional yang penuh dan berkelanjutan, kami menyarankan keterlibatan minimal 3 bulan yang mencakup konsultasi mendalam, roadmapping, dan optimasi berkelanjutan.
        </>
      ),
    },
    {
      question: "Siapa yang memiliki kode dan alur kerja automasi yang dibangun?",
      answer: (
        <>
          Semua kekayaan intelektual (IP)—termasuk alur kerja, custom code, infrastruktur, dan dokumentasi—<strong className="text-white">sepenuhnya milik Anda</strong> sejak hari pertama. Jika kemitraan kami berakhir, kami menyediakan serah terima (handoff) yang lengkap dan terstruktur.
        </>
      ),
    },
    {
      question: "Industri apa saja yang menjadi spesialisasi TalkVera?",
      answer: (
        <>
          Kami telah bekerja dengan industri seperti <strong className="text-white">SaaS, Ritel, Keuangan, Properti, dan E-commerce</strong>. Pendekatan konsultatif kami bersifat <strong className="text-white">independen industri</strong> (industry-agnostic) dan dapat beradaptasi dengan konteks bisnis Anda, selama ada proses yang perlu diotomatisasi.
        </>
      ),
    },
    {
      question: "Apakah Anda membangun solusi dari nol atau memanfaatkan tool yang ada (seperti n8n)?",
      answer: (
        <>
          Itu tergantung pada ruang lingkup. Kami selalu <strong className="text-white">memanfaatkan tool yang paling optimal dan efisien</strong>, seperti n8n dan integrasi API lainnya. Kami memberikan panduan berbasis data untuk memilih pendekatan yang paling tepat, menghindari biaya custom code yang tidak perlu.
        </>
      ),
    },
    {
      question: "Bagaimana saya tahu jika automasi cocok untuk bisnis saya yang sedang berkembang?",
      answer: (
        <>
          Jika bisnis Anda berurusan dengan <strong className="text-white">volume data yang tinggi, tugas operasional yang berulang (repetitif), interaksi pelanggan yang masif, atau hambatan pengambilan keputusan</strong>, automasi adalah solusi dengan <strong className="text-white">ROI yang kuat</strong>. Proses Discovery awal kami dirancang untuk mengidentifikasi use case terbaik dan nilai yang diharapkan.
        </>
      ),
    },
  ];

  return (
    <div id='home' className="pt-28 md:pt-14">
      <StarField />

      <section className="relative min-h-screen md:min-h-[80vh] grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto px-6">

        {/* LEFT COLUMN */}
        <div>

          {/* Background Blur */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative py-20 md:py-32 text-left">

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-snug text-white">
              <span className="text-blue-400">Scale Up Bisnis</span> Anda Tanpa Terjebak Administrasi Harian
            </h1>

            {/* Paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 max-w-2xl">
              <strong>Hemat Ratusan Jam & Puluhan Juta</strong> Dengan Sistem Kerja Yang Efisien + Workflow Automation
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start"> 
                <button onClick={handleContactNavigate} className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-xl shadow-blue-500/30 flex items-center justify-center space-x-2" > 
                  <span>Konsultasi Dengan Kami</span> 
                  <ArrowRight size={20} /> 
                </button> 
                <button className="px-8 py-4 bg-gray-800/50 hover:bg-gray-700/50 text-white font-semibold rounded-lg border border-gray-700 transition-all" onClick={handleCaseStudiesNavigate} > 
                  Lihat Studi Kasus Klien 
                </button> 
              </div>

            {/* Stats Section */}
            <div className="mt-10 grid grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-6 max-w-sm sm:max-w-lg mx-auto sm:mx-0">
              <div className="text-center">
                <div className="text-2xl sm:text-4xl font-bold text-blue-400 mb-1">50+</div>
                <div className="text-xs sm:text-sm text-gray-500">Implementasi Workflow</div>
              </div>

              <div className="text-center">
                <div className="text-2xl sm:text-4xl font-bold text-blue-400 mb-1">95%</div>
                <div className="text-xs sm:text-sm text-gray-500">Kepuasan Klien</div>
              </div>

              <div className="text-center">
                <div className="text-2xl sm:text-4xl font-bold text-blue-400 mb-1">24/7</div>
                <div className="text-xs sm:text-sm text-gray-500">Dukungan Teknis</div>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN (Workflow Animation) */}
        <div className="relative hidden md:flex items-center justify-center pb-16 md:pb-0">
          <AnimatedWorkflow />
        </div>


      </section>

      {/* SECTION 2: Comprehensive AI Solutions (Diperbaiki menjadi Accordion Interaktif) */}
      <section className="py-24 relative overflow-hidden">
        {/* Efek Cahaya di Sisi Kanan (Memecah Kebosanan Kotak) */}
        {/* <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div> */}

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeInOnScroll delay={0.2} threshold={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Solusi Automasi Inti <span className="text-blue-400">Percepatan Bisnis</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Layanan automasi <strong>end-to-end</strong> yang dirancang untuk <strong>mentransformasi operasional</strong> bisnis Anda dan mendorong inovasi tanpa hambatan manual
              </p>
            </div>
          </FadeInOnScroll>
          <div className="justify-center overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="max-w-4xl mx-auto space-y-3 md:space-y-4">
              {features.map((feature, index) => {
                const isActive = index === activeIndex;

                return (
                  <FadeInOnScroll
                    key={index}
                    delay={index * 0.15}
                    threshold={0.3}
                    direction="right"
                  >
                    <div>
                      <button
                        onClick={() => setActiveIndex(index)}
                        className={`group relative w-full text-left py-4 px-4 rounded-lg transition-all duration-200 
                          ${isActive ? 'font-semibold' : ''}
                        `}
                      >
                        {/* Konten */}
                        <div className="relative z-20 flex items-center gap-4">
                          <div className="flex items-center space-x-4">
                            <h2
                              className={`text-2xl transition-colors duration-300 
                                ${isActive ? 'text-white font-bold' : 'text-gray-400 font-medium group-hover:text-gray-300'}
                              `}
                            >
                              {feature.title}
                            </h2>
                          </div>

                          {isActive && (
                            <div className="flex-shrink-0 transition-opacity duration-300">
                              <ArrowRight size={24} className="text-blue-400" />
                            </div>
                          )}
                        </div>
                      </button>

                      <div className="ml-5 mt-2 mb-4 md:ml-6">
                        <p
                          className={`
                            text-base leading-relaxed pl-4 border-l-2 text-md
                            ${isActive ? 'text-gray-300 border-blue-500' : 'text-gray-400 border-gray-700'} 
                          `}
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </FadeInOnScroll>
                );
              })}
            </div>

            {/* KOLOM KANAN: Visualisasi Dinamis */}
            <div className="relative flex hidden md:flex justify-center items-center p-4 md:p-8">
              <DynamicFeatureAnimation 
                activeIndex={activeIndex}
                animations={featureAnimations}
              />
            </div>
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
                  <span className='text-blue-400'>Proses</span> Kerja Kami
                  </h2>
                  <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Metodologi tiga fase untuk menghadirkan solusi automasi <strong>cepat dan tepat</strong> yang benar-benar disesuaikan dengan bisnis Anda
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
                              {/* 1. KELOMPOKKAN DI SINI: Kelas 'group' dipindahkan ke div ini */}
                              <div className="group flex gap-6 md:gap-8 items-start pb-16 last:pb-0">
                                  
                                  {/* Kolom Kiri: Angka dan Garis Penghubung */}
                                  <div className="relative flex flex-col items-center pt-8">
                                      {/* Angka: Tambahkan HOVER pada elemen ini */}
                                      <div className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-500/50 flex items-center justify-center backdrop-blur-sm shadow-xl shadow-blue-500/20 transition-transform group-hover:scale-105 group-hover:border-cyan-400/50">
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
                                  <div className="flex-1 pt-8"> {/* Hapus kelas 'group' dari sini */}
                                      <div className="relative p-8 bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl border border-gray-700/50 group-hover:border-blue-500/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/20 backdrop-blur-sm">

                                          {/* Ikon Latar Belakang */}
                                          <div className="absolute top-8 right-8 opacity-20 group-hover:opacity-40 transition-opacity">
                                              <step.icon className="w-16 h-16 text-blue-400" />
                                          </div>

                                          <div className="relative">
                                              {/* Judul Bergradien */}
                                              <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                                                  {step.title}
                                              </h3>
                                              <p className="text-gray-100 leading-relaxed text-base md:text-lg">
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
                Apa <span className="text-blue-400">Kata Klien</span> Kami Tentang TalkVera
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl">
                Lihat bagaimana TalkVera telah membantu berbagai bisnis mencapai pertumbuhan dan efisiensi yang belum pernah ada sebelumnya.
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
                  className="group relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-cyan-300/10"
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

      {/* SECTION 5: FAQ */}
      <section id="faq" className="py-24 bg-gradient-to-b from-gray-900/20 to-gray-900/40">
        <div className="max-w-5xl mx-auto px-6">

          <FadeInOnScroll delay={0.2} threshold={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className='text-blue-400'>Pertanyaan</span> yang Sering Diajukan (FAQ)
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Temukan jawaban atas pertanyaan umum seputar layanan automasi dan solusi TalkVera.
              </p>
            </div>
          </FadeInOnScroll>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FadeInOnScroll
                key={index}
                delay={index * 0.15}
                threshold={0.3}
                direction="right"
              >
                <FAQItem key={index} faq={faq} index={index} />
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

function FAQItem({ faq, index }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`p-6 md:p-8 rounded-2xl border bg-gray-900/60 backdrop-blur-sm transition-all duration-300 cursor-pointer
        ${open ? "border-blue-500/50" : "border-gray-700/50 hover:border-blue-400"}
      `}
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg md:text-xl font-semibold text-white">
          {faq.question}
        </h3>
        <ChevronDown
          className={`w-6 h-6 text-blue-400 transition-transform duration-300 
            ${open ? "rotate-180" : "rotate-0"}
          `}
        />
      </div>

      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "300px" : "0" }}
      >
        <p className="text-gray-100 mt-4 leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

interface DynamicFeatureAnimationProps {
  activeIndex: number | null;
  animations: React.ReactNode[];
}

const DynamicFeatureAnimation = ({ activeIndex, animations }: DynamicFeatureAnimationProps) => {
  const currentIndex = activeIndex ?? -1;

  return (
    <div className="relative w-full h-full min-h-[400px] md:min-h-[500px]">
      {animations.map((animation, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${
            index === currentIndex
              ? 'opacity-100 scale-100 z-10'
              : 'opacity-0 scale-95 z-0 pointer-events-none'
          }`}
          style={{
            transform: index === currentIndex
              ? 'translateY(0)'
              : index < currentIndex
                ? 'translateY(-20px)'
                : 'translateY(20px)'
          }}
        >
          {animation}
        </div>
      ))}
    </div>
  );
};

export default HomePage;
