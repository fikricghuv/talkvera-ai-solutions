import { Bot, Workflow, BarChart3, Shield, Lock, CheckCircle2, ArrowRight, Zap, Rocket, Brain } from 'lucide-react';

type Page = 'home' | 'pricing' | 'about' | 'case-study' | 'docs' | 'contact'; 

interface HomePageProps {
    onNavigate: (page: Page) => void;
}

function HomePage({ onNavigate }: HomePageProps) {

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
    },
    {
      icon: Zap,
      title: 'Rapid Deployment Solutions',
      description: 'Fast-track your AI initiatives with our proven deployment methodology and expert implementation support.',
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Discovery & Strategy",
      description: "We begin by understanding your vision, goals, and requirements. Through collaborative discussions and research, we lay the foundation for your project's success.",
      icon: Brain,
    },
    {
      number: "2",
      title: "Model Development",
      description: "Our team transforms ideas into reality through agile development. We build, test, and iterate, ensuring your solution meets the highest standards of quality and performance.",
      icon: Workflow,
    },
    {
      number: "3",
      title: "Deployment & Scale",
      description: "We carefully launch your solution, ensuring a smooth transition to production. Our team provides ongoing support and optimization to keep your system running at its best.",
      icon: Rocket,
    },
  ];

  const testimonials = [
    {
      quote: 'TalkVera transformed our customer service operations. The AI agents handle 80% of inquiries autonomously, freeing our team for complex issues.',
      author: 'Sarah Mitchell',
      role: 'CTO, TechForward Inc',
    },
    {
      quote: 'The automation pipelines reduced our processing time by 60%. The ROI was evident within the first quarter of implementation.',
      author: 'James Chen',
      role: 'Operations Director, GlobalLogistics',
    },
    {
      quote: 'Outstanding security and compliance features. TalkVera helped us meet stringent regulatory requirements while improving efficiency.',
      author: 'Maria Rodriguez',
      role: 'Head of Compliance, FinanceHub',
    },
  ];

  return (
    <div className="pt-16">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
            Empowering enterprises with safe, responsible, and cutting-edge AI automation that drives measurable results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('contact')} // Panggil onNavigate('contact')
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-xl shadow-blue-500/30 flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 bg-gray-800/50 hover:bg-gray-700/50 text-white font-semibold rounded-lg border border-gray-700 transition-all"
            onClick={() => onNavigate('docs')}>
              View Case Studies
            </button>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
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

      {/* <section className="py-24 bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Comprehensive AI Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              End-to-end AI services designed to transform your business operations and drive innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* SECTION 2: Comprehensive AI Solutions (Tampilan Baru) */}
      <section className="py-24 relative overflow-hidden">
        {/* Efek Cahaya di Sisi Kanan (Memecah Kebosanan Kotak) */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Comprehensive AI Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              End-to-end AI services designed to transform your business operations and drive innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                // Hapus border standar. Tambahkan efek 'relative' dan 'group'.
                className="group relative p-8 bg-gray-900/70 rounded-3xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-900/50"
              >
                {/* Efek Border Gradien yang Mengapung (Floating Border Effect) */}
                <div className="absolute inset-0 rounded-3xl p-[1px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-[calc(1.5rem+1px)] bg-gradient-to-br from-blue-500/80 via-cyan-500/80 to-transparent"></div>
                </div>
                {/* Lapisan Hitam di Bawah Border Gradien agar gradien terlihat seperti garis tipis */}
                <div className="absolute inset-[1px] rounded-3xl bg-gray-900/80 transition-all duration-500"></div>

                {/* Konten Kartu */}
                <div className="relative z-20">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-blue-500/10">
                        <feature.icon className="w-7 h-7 text-blue-300" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                    
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Our Process (Vertical Clean Style + Right Icon) */}
<section className="py-24 relative overflow-hidden">
  <div className="max-w-4xl mx-auto px-6">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Our Proven Process
      </h2>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto">
        A streamlined methodology to deliver exceptional AI solutions tailored to your business needs.
      </p>
    </div>

    {/* Steps (Vertical Layout) */}
    <div className="flex flex-col gap-14">
      {processSteps.map((step, index) => (
        <div
          key={index}
          className="flex items-start justify-between gap-6"
        >
          {/* Kiri: Nomor dan Konten */}
          <div className="flex items-start gap-6">
            {/* Nomor step */}
            <div className="text-5xl font-extrabold text-blue-400 shrink-0 leading-none">
              {step.number}
            </div>

            {/* Konten step */}
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>

          {/* Kanan: Ikon */}
          <div className="shrink-0 text-blue-400">
            <step.icon className="w-10 h-10" />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      <section className="py-24 bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Real Results from Real Clients
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See how TalkVera has helped businesses achieve unprecedented growth and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all"
              >
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <CheckCircle2 key={i} className="w-5 h-5 text-blue-400" />
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
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Join hundreds of companies leveraging AI to drive growth, efficiency, and innovation.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-xl shadow-blue-500/30 flex items-center justify-center space-x-2 mx-auto"
          onClick={() => onNavigate('contact')}>
            
            <span>Schedule a Consultation</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
