import { Building2, TrendingUp, Clock, Users, CheckCircle2, ArrowRight } from 'lucide-react';

function CaseStudyPage() {
  const caseStudies = [
    {
      company: 'GlobalFinance Corp',
      industry: 'Financial Services',
      icon: Building2,
      challenge: 'Manual processing of loan applications taking 5-7 days, leading to customer churn and operational inefficiency.',
      solution: 'Deployed custom AI agents for document verification, risk assessment, and automated decision-making with intelligent routing for edge cases.',
      results: [
        '87% reduction in processing time (from 5 days to 8 hours)',
        '94% accuracy in automated decisions',
        '$2.3M annual cost savings',
        '45% increase in customer satisfaction scores',
      ],
      metrics: [
        { label: 'Processing Time', value: '8 hrs', change: '-87%' },
        { label: 'Cost Savings', value: '$2.3M', change: 'annually' },
        { label: 'Accuracy Rate', value: '94%', change: '+12%' },
      ],
    },
    {
      company: 'RetailMax Solutions',
      industry: 'E-Commerce',
      icon: Building2,
      challenge: 'Customer support team overwhelmed with 10,000+ daily inquiries, leading to long response times and high employee turnover.',
      solution: 'Implemented intelligent chatbot system with natural language processing, integrated with existing CRM and order management systems.',
      results: [
        '78% of inquiries resolved automatically',
        'Response time reduced from 4 hours to under 2 minutes',
        '60% reduction in support team workload',
        'Customer satisfaction improved from 3.2 to 4.7 stars',
      ],
      metrics: [
        { label: 'Auto-Resolution', value: '78%', change: 'of tickets' },
        { label: 'Response Time', value: '< 2 min', change: '-95%' },
        { label: 'CSAT Score', value: '4.7/5', change: '+47%' },
      ],
    },
    {
      company: 'MedTech Innovations',
      industry: 'Healthcare Technology',
      icon: Building2,
      challenge: 'Complex medical data analysis requiring extensive manual review by specialists, creating bottlenecks in research and diagnostics.',
      solution: 'Developed specialized AI models for medical image analysis and patient data processing with explainable AI features for clinical validation.',
      results: [
        '92% accuracy in preliminary diagnostics',
        '5x faster data analysis throughput',
        'Enabled processing of 50,000+ additional cases annually',
        'Full HIPAA compliance maintained',
      ],
      metrics: [
        { label: 'Diagnostic Accuracy', value: '92%', change: '+15%' },
        { label: 'Analysis Speed', value: '5x', change: 'faster' },
        { label: 'Capacity', value: '+50K', change: 'cases/year' },
      ],
    },
  ];

  return (
    <div className="pt-16">
      <section className="py-24 bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
              <TrendingUp className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">Success Stories</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Real Impact, Real Results
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how TalkVera has helped leading organizations transform their operations with intelligent AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
              <div className="text-5xl font-bold text-blue-400 mb-2">$50M+</div>
              <div className="text-gray-400">Total Client Savings</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
              <div className="text-5xl font-bold text-blue-400 mb-2">10M+</div>
              <div className="text-gray-400">Tasks Automated</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
              <div className="text-5xl font-bold text-blue-400 mb-2">98%</div>
              <div className="text-gray-400">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`mb-20 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}
            >
              <div className="p-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                        <study.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold">{study.company}</h2>
                        <p className="text-blue-400">{study.industry}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {study.metrics.map((metric, mIndex) => (
                    <div
                      key={mIndex}
                      className="p-4 bg-gray-900/50 rounded-xl border border-gray-700"
                    >
                      <div className="text-3xl font-bold text-blue-400 mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-400">{metric.label}</div>
                      <div className="text-xs text-cyan-400 mt-1">{metric.change}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                        <Clock className="w-4 h-4 text-red-400" />
                      </div>
                      <h3 className="text-xl font-semibold">The Challenge</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed pl-10">
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                        <Users className="w-4 h-4 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-semibold">Our Solution</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed pl-10">
                      {study.solution}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                      </div>
                      <h3 className="text-xl font-semibold">Key Results</h3>
                    </div>
                    <ul className="space-y-2 pl-10">
                      {study.results.map((result, rIndex) => (
                        <li key={rIndex} className="flex items-start space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-400">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-700">
                  <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
                    <span className="font-semibold">Read Full Case Study</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Join these industry leaders and discover how TalkVera can transform your business operations.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-xl shadow-blue-500/30 flex items-center justify-center space-x-2 mx-auto">
            <span>Start Your Journey</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default CaseStudyPage;
