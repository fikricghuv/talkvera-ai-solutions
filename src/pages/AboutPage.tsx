import { Target, Users, Award, Lightbulb, Heart, TrendingUp, Linkedin } from 'lucide-react';
import StarField from '../components/StarFieldAnimation';
import CtaContent from '../components/Cta';

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

  const stats = [
    { number: '150+', label: 'Team Members' },
    { number: '500+', label: 'Projects Delivered' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '95%', label: 'Client Retention' },
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
              <span className="text-sm text-blue-300">About TalkVera</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent leading-tight">
              Pioneering the Future of AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Talkvera was founded on a singular, uncompromising principle: True AI must deliver tangible results in production environments. We recognized that too many businesses were stalled at the 'proof-of-concept' stage, struggling to transform AI’s immense potential into consistent, scalable, operational solutions.
                </p>
                <p>
                  Our founding team—comprised of veteran AI/ML specialists and experienced software engineers—came together to bridge this critical gap. Our mission is centered on uncompromising implementation, ensuring every solution we build is not only intelligently designed but also robust, fully integrated, and ready for enterprise scale.
                </p>
                <p>
                  Although we are a recently established company, our production expertise is already fully validated. To date, we have proudly launched and managed over 50+ production workflow AI automations across various sectors. Each successful deployment is a testament to our commitment: delivering measurable impact, automating complex business processes, and providing immediate productivity gains to our clients.
                </p>
              </div>
            </div>
            {/* Box Highlighted di Samping Kanan */}
            <div className="relative p-1 bg-gradient-to-br from-blue-500/50 to-cyan-500/50 rounded-3xl shadow-2xl shadow-blue-500/20">
              <div className="aspect-square rounded-[1.4rem] bg-gray-900 p-12 flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-20 h-20 text-blue-400 mx-auto mb-6" />
                  <div className="text-7xl font-extrabold text-blue-400 mb-2">500+</div>
                  <div className="text-xl text-gray-300 font-semibold">AI Solutions Deployed</div>
                  <p className="text-sm text-gray-500 mt-2">Validated and running in production environments.</p>
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
            <h2 className="text-4xl font-bold mb-14 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700 transition-all duration-300 transform hover:scale-[1.02] hover:border-blue-500/70 shadow-lg"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
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
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 bg-gradient-to-b from-transparent to-gray-900/30">
          <div className="max-w-7xl mx-auto px-6">
            <CtaContent onNavigate={onNavigate} />
          </div>
      </section>
    </div>
  );
}

export default AboutPage;
