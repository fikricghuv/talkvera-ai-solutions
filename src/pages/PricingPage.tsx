import { Check, Zap, Rocket, Building2 } from 'lucide-react';

function PricingPage() {
  const plans = [
    {
      icon: Zap,
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI automation',
      features: [
        'Up to 3 custom AI agents',
        'Basic automation pipelines',
        'Performance analytics dashboard',
        'Email support (48h response)',
        'Monthly strategy calls',
        '50,000 API calls/month',
        'Basic security protocols',
        'Community access',
      ],
      highlighted: false,
    },
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
    {
      icon: Zap,
      name: 'AI/ML Engineers',
    },
    {
      name: 'Business Process Consultants',
      icon: Zap,
    },
    {
      name: 'Data Scientists',
      icon: Zap,
    },
    {
      name: 'Solution Architects',
      icon: Zap,
    },
    {
      name: 'Project Managers',
      icon: Zap,
    },
    {
      name: 'UI/UX Specialists',
      icon: Zap,
    },
  ];

  const processes = [
    {
      
      desc: 'Clear documentation of all work completed',
    },
    {
      desc: 'Regular progress updates and demonstrations',
      
    },
    {
      desc: 'Collaborative planning sessions',
      
    },
    {
      desc: 'Detailed time tracking and reporting',
      
    }
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl transition-all ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border-2 border-blue-500 shadow-2xl shadow-blue-500/20 scale-105'
                    : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 hover:border-gray-600'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  {/* <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
                    <plan.icon className="w-6 h-6 text-blue-400" />
                  </div> */}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline mb-2">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'
                  }`}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partnership.map((partner, index) => (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all"
                >
                  <div className="flex justify-between items-start mb-3">
                    <partner.icon className="w-6 h-6 text-blue-400 flex-shrink-0" /> 
                  </div>
                  <h3 className="text-xl font-semibold">{partner.name}</h3>
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


          <div className="mt-24 p-12 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-2xl border border-blue-500/30">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Our team can design a tailored package that perfectly fits your unique requirements and budget.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-xl shadow-blue-500/30">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PricingPage;
