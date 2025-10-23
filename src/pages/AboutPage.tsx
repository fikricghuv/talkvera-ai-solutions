import { Target, Users, Award, Lightbulb, Heart, TrendingUp } from 'lucide-react';

type Page = 'home' | 'pricing' | 'about' | 'case-study' | 'docs' | 'contact'; 

interface HomePageProps {
    onNavigate: (page: Page) => void;
}

function AboutPage({ onNavigate }: HomePageProps) {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We push the boundaries of AI technology to deliver cutting-edge solutions that give our clients a competitive advantage.',
    },
    {
      icon: Heart,
      title: 'Client Success',
      description: 'Your success is our success. We are committed to building long-term partnerships and delivering measurable results.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as true partners, fostering transparent communication and shared goals.',
    },
  ];

  const team = [
    {
      name: 'Dr. Emily Chen',
      role: 'Chief Executive Officer',
      bio: 'PhD in Machine Learning from MIT. 15+ years leading AI research teams at Fortune 500 companies.',
    },
    {
      name: 'Marcus Johnson',
      role: 'Chief Technology Officer',
      bio: 'Former Principal Engineer at Google AI. Specialized in large-scale distributed systems and neural networks.',
    },
    {
      name: 'Sarah Williams',
      role: 'Head of Product',
      bio: 'Product leader with deep experience scaling AI products from zero to millions of users.',
    },
    {
      name: 'David Park',
      role: 'VP of Engineering',
      bio: 'Built and led engineering teams at Microsoft and Amazon. Expert in cloud infrastructure and MLOps.',
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Client Success',
      bio: '10+ years in enterprise consulting. Passionate about helping clients unlock AI-driven transformation.',
    },
    {
      name: 'Alex Rivera',
      role: 'Lead AI Research Scientist',
      bio: 'Published researcher in NLP and computer vision. Previously at OpenAI and Stanford AI Lab.',
    },
  ];

  const stats = [
    { number: '150+', label: 'Team Members' },
    { number: '500+', label: 'Projects Delivered' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '95%', label: 'Client Retention' },
  ];

  return (
    <div className="pt-16">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-cyan-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
              <Target className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">About TalkVera</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Pioneering the Future of AI
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're on a mission to democratize AI and empower businesses of all sizes to harness the transformative power of artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-900/30 to-transparent">
        <div className="max-w-7xl mx-auto px-6 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Founded in 2019, TalkVera began with a simple observation: businesses were struggling to adopt AI despite its enormous potential. The gap between cutting-edge research and practical business applications was too wide.
                </p>
                <p>
                  Our founding team, comprised of AI researchers and enterprise software veterans, set out to bridge that gap. We built TalkVera to be the trusted partner that businesses need to navigate the complex world of AI implementation.
                </p>
                <p>
                  Today, we're proud to serve hundreds of clients across industries, from startups to Fortune 500 companies. Our solutions have processed billions of data points, automated millions of workflows, and delivered measurable impact for organizations worldwide.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-500/30 p-12 flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-22 h-22 text-blue-400 mx-auto mb-6" />
                  <div className="text-6xl font-bold text-blue-400 mb-2">500+</div>
                  <div className="text-xl text-gray-300">AI Solutions Deployed</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-4xl font-bold mb-6 text-center">Our Mission & Vision</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 text-center">
                <div className='flex justify-center'>
                  <Target className="w-12 h-12 text-blue-400 mb-4" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-center">Mission</h3>
                <p className="text-gray-400 leading-relaxed">
                  To empower businesses with accessible, ethical, and impactful AI solutions that drive sustainable growth and create lasting value for all stakeholders.
                </p>
              </div>
              <div className="p-8 text-center">
                <div className='flex justify-center'>
                  <Lightbulb className="w-12 h-12 text-cyan-400 mb-4" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Vision</h3>
                <p className="text-gray-400 leading-relaxed">
                  To become the world's most trusted AI partner, recognized for innovation, integrity, and the positive transformation we bring to businesses and communities globally.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-12 text-center">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="p-8 "
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-6 mx-auto">
                    <Users className="w-10 h-10 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
                  <div className="text-blue-400 text-sm text-center mb-4">{member.role}</div>
                  <p className="text-gray-400 text-sm leading-relaxed text-center">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Us on This Journey</h2>
          <p className="text-xl text-gray-400 mb-10">
            Whether you're looking to transform your business with AI or join our talented team, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-xl shadow-blue-500/30"
            onClick={() => onNavigate('contact')}>
              Get in Touch
            </button>
            <button className="px-8 py-4 bg-gray-800/50 hover:bg-gray-700/50 text-white font-semibold rounded-lg border border-gray-700 transition-all"
            onClick={() => onNavigate('contact')}>
              View Open Positions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
