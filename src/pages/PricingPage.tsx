import { Check, Zap, Rocket, Building2, User, Target, Layers, TrendingUp, Compass, Globe, Clock } from 'lucide-react';
import CtaContent from '../components/Cta';

type Page = 'home' | 'pricing' | 'about' | 'case-study' | 'docs' | 'contact'; 

interface HomePageProps {
    onNavigate: (page: Page) => void;
}

function PricingPage({ onNavigate }: HomePageProps) {
  const plans = [
    {
      icon: Rocket,
      name: 'Business Partner',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing companies ready to scale their AI capabilities',
      features: [
        'Dedicated AI Engineer',
        'VIP support queue',
        'Documentation and user guides',
        'Live debugging and solution management',
        'Client portal'
      ],
      highlighted: true,
    },
    {
      icon: Building2,
      name: 'Enterprise Partner',
      price: 'Custom',
      period: '',
      description: 'Comprehensive solutions for large organizations with complex needs',
      features: [
        'Includes all Business Partner features',
        'Dedicated Project Manager',
        'Weekly 60 minute meetings with our executive team',
        'Strategic roadmap review',
        'Team training and enablement sessions',
        'Documentation of all completed work',
        'Quarterly executive briefing',
        'Everything customized for you and your business'
      ],
      highlighted: false,
    },
  ];

  const partnership = [
    { icon: User, name: 'AI/ML Engineers' },
    { icon: Target, name: 'Business Process Consultants' },
    { icon: Layers, name: 'Data Scientists' },
    { icon: Compass, name: 'Solution Architects' },
    { icon: Clock, name: 'Project Managers' },
    { icon: Globe, name: 'UI/UX Specialists' },
  ];

  const processes = [
    { icon: Check, desc: 'Clear documentation of all work completed' },
    { icon: TrendingUp, desc: 'Regular progress updates and demonstrations' },
    { icon: Layers, desc: 'Collaborative planning sessions' },
    { icon: Clock, desc: 'Detailed time tracking and reporting' },
  ];

  return (
    <div className="pt-16">
      <section className="py-24 bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">Flexible Pricing Plans</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent leading-tight">
              Choose Your AI Journey
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              At Talkvera, we act as your dedicated AI partner—focused on identifying and executing the highest ROI opportunities for automation within your business.
            </p>
            <br/>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our mission is to help you and your team reclaim valuable hours each week by designing intelligent systems that eliminate repetitive tasks, streamline workflows, and scale with your operations. Over time, these time savings compound into massive gains in efficiency, productivity, and growth.
            </p>
          </div>

          {/* Pricing Cards (2 Kolom Centered) */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div
                key={index}
                // Mengurangi padding dari p-8 menjadi p-6
                className={`relative p-6 flex flex-col justify-between rounded-3xl transition-all duration-300 transform hover:scale-[1.03]
                  ${
                    plan.highlighted
                      ? 'bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border-2 border-blue-500 shadow-2xl shadow-blue-500/30'
                      : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 hover:border-blue-500/50'
                  }
                `}
              >
                {/* Most Popular Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-semibold rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}
                
                {/* Card Content Top */}
                <div className='flex flex-col'>
                    <div className="mb-5">
                        {/* Mengurangi ukuran font dari 3xl menjadi 2xl */}
                        <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                        {/* Mengurangi ukuran font dari sm menjadi xs */}
                        <p className="text-gray-400 text-xs mb-3 italic">{plan.description}</p>
                        <div className="flex items-baseline mb-5">
                            {plan.price === 'Custom' ? (
                                <span className="text-4xl font-bold text-blue-400">Custom</span>
                            ) : (
                                <>
                                    <span className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                        {plan.price}
                                    </span>
                                    <span className="text-gray-400 ml-2 text-lg">{plan.period}</span>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Feature List: Menggunakan min-height agar tombol sebaris */}
                    {/* Mengurangi min-height dari 52 menjadi 40 */}
                    <ul className="space-y-2 mb-6 min-h-40">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start space-x-2">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                </div>

                {/* Button Bottom: Selalu di bawah karena flex-col justify-between */}
                <button
                  className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all transform hover:scale-[1.02] ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-xl shadow-blue-500/40'
                      : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'
                  }`}
                  onClick={() => onNavigate('contact')}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started Now'}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">What Sets Our Development Partnership Apart</h2>
              <p className="text-xl text-gray-400">
                Every Talkvera development partnership includes access to:
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-6">
              {partnership.map((partner, index) => (
                <div
                  key={index}
                  // Styling baru: Ikon Sentris tanpa kotak, fokus pada efek glowing/underline
                  className="group relative p-4 flex flex-col items-center justify-center text-center 
                             transition-all duration-300 cursor-pointer"
                >
                  {/* Icon Container: Lebih menonjol dan mendapatkan efek glowing saat hover */}
                  <div className={`p-3 mb-2 rounded-full 
                                  bg-blue-500/10 group-hover:bg-blue-500/20 transition-all duration-300 
                                  group-hover:shadow-lg group-hover:shadow-cyan-500/40`}>
                      <partner.icon className="w-15 h-15 text-blue-400 group-hover:text-cyan-200 transition-all duration-300" /> 
                  </div>
                  
                  {/* Text: Ukuran standard, dengan garis di bawah saat hover */}
                  <h3 className="text-sm font-semibold text-white transition-all duration-300 
                                 group-hover:text-blue-200 relative pt-1">
                      {partner.name}
                      {/* Underline effect */}
                      <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-cyan-500 
                                       transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Transparent Process</h2>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
              {processes.map((data, index) => (
                <div key={index}>
                  <hr className="mb-3 border-blue-400" />
                  <h4 className="text-gray-400">{data.desc}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-24">
            <CtaContent onNavigate={onNavigate} />
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default PricingPage;
