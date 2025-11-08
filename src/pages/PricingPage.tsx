import { Check, MessagesSquare, Tag, User, FlaskConical, Settings, Layers, TrendingUp, Palette, Clock, Puzzle, ArrowRight } from 'lucide-react';
import CtaContent from '../components/Cta';
import { Link } from 'react-router-dom';
import FadeInOnScroll from '../components/FadeInOnScroll';
import { useNavigate } from 'react-router-dom';

function PricingPage() {
  const navigate = useNavigate(); 

  // Fungsi untuk navigasi ke halaman kontak
  const handleContactNavigate = () => {
    navigate('/contact');
  };

  const plans = [
    {
      name: 'Business Partner',
      price: 'Custom',
      period: '',
      description: [
        'Solusi menyeluruh untuk perusahaan yang ingin meningkatkan kemampuan AI.',
        'Didesain untuk mempercepat efisiensi operasional dan transformasi digital.'
      ],
      features: [
        'Dedicated AI Engineer',
        'Dokumentasi lengkap dan panduan penggunaan',
        'Debugging real-time dan manajemen solusi berkelanjutan',
        'Dedicated Project Manager',
        'Strategic roadmap review & konsultasi rutin',
        'Sesi pelatihan dan pengembangan kemampuan tim',
        'Dokumentasi detail untuk setiap pekerjaan yang diselesaikan',
        'Semuanya disesuaikan sepenuhnya dengan kebutuhan bisnis Anda'
      ],
      highlighted: true,
    },
  ];


  const partnership = [
    { icon: Settings, name: 'AI/ML Engineers' },
    { icon: MessagesSquare, name: 'Business Process Consultants' },
    { icon: FlaskConical, name: 'Data Scientists' },
    { icon: Puzzle, name: 'Solution Architects' },
    { icon: User, name: 'Project Managers' },
    { icon: Palette, name: 'UI/UX Specialists' },
  ];

  const processes = [
    { icon: Check, desc: 'Dokumentasi lengkap dan mudah diakses untuk setiap pekerjaan' },
    { icon: TrendingUp, desc: 'Pembaruan progres rutin disertai demonstrasi langsung' },
    { icon: Layers, desc: 'Sesi perencanaan yang kolaboratif dan terstruktur' },
    { icon: Clock, desc: 'Pelacakan waktu dan laporan detail di setiap tahap' },
  ];

  return (
    <div className="pt-16">
      <section className="py-24 bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
              <Tag className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">Pilihan Harga yang Fleksibel</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent leading-tight">
              <span className='text-blue-400'>Mulai</span> Perjalanan AI Anda
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Di Talkvera, kami bertindak sebagai mitra AI khusus Anda—berfokus pada identifikasi dan eksekusi peluang ROI tertinggi untuk otomatisasi dalam bisnis Anda.
            </p>
            <br/>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Misi kami adalah membantu Anda dan tim Anda mendapatkan kembali jam-jam berharga setiap minggu dengan merancang sistem cerdas yang menghilangkan tugas-tugas berulang, menyederhanakan alur kerja, dan menyesuaikan skala dengan operasional Anda. Seiring waktu, penghematan waktu ini menghasilkan peningkatan besar dalam efisiensi, produktivitas, dan pertumbuhan.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="max-w-4xl mx-auto flex justify-center mb-16 px-4">
                
                {/* Grid Diubah: grid-cols-1 md:grid-cols-1 (karena hanya ada 1 plan di data) */}
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8"> 
                    
                    {plans.map((plan, index) => (
                        <div
                            key={index}
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
                                    <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                                    <div className="text-gray-400 text-xs mb-3 italic space-y-1">
                                      {Array.isArray(plan.description)
                                        ? plan.description.map((line, idx) => (
                                            <p key={idx}>{line}</p>
                                          ))
                                        : <p>{plan.description}</p>}
                                    </div>
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

                                {/* Feature List */}
                                <ul className="space-y-2 mb-10 min-h-40">
                                    {plan.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start space-x-2">
                                            <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tombol Bottom: Menggunakan fungsi handleContactNavigate */}
                            <button
                                className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all transform hover:scale-[1.02] ${
                                    plan.highlighted
                                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-xl shadow-blue-500/40'
                                        : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'
                                }`}
                                // GANTI onNavigate('contact') dengan fungsi React Router
                                onClick={handleContactNavigate} 
                            >
                                {plan.price === 'Custom' ? 'Contact Sales' : 'Konsultasi Dengan Kami Now'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
          
          <div className="mt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <FadeInOnScroll 
                  delay={0.3} 
                  threshold={0.3}      
                  direction="left"  
              >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className='text-blue-400'>Post-Deployment</span> Solution Management
                </h2>
                <br />
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    Meluncurkan solusi AI Anda hanyalah permulaan. Di Talkvera, kami menawarkan dukungan pasca-penerapan yang komprehensif untuk memastikan sistem Anda terus berkinerja andal seiring perkembangan bisnis Anda.
                  </p>
                  <p>
                    Dari pemantauan sistem dan pengoptimalan kinerja yang berkelanjutan hingga adaptasi alur kerja seiring munculnya tantangan baru, tim kami selalu terlibat untuk menjaga solusi AI Anda tetap berjalan pada kinerja terbaik.
                  </p>
                </div>
              </div>
              </FadeInOnScroll>
              <FadeInOnScroll 
                  delay={0.3} 
                  threshold={0.3}      
                  direction="right"  
              >
              <div className="relative p-1 bg-gradient-to-br from-blue-500/50 to-cyan-500/50 rounded-3xl shadow-2xl shadow-blue-500/20">
                <img
                  src="/assets/peoples-do-programming.jpg" 
                  alt="People working on programming"
                  className="w-full h-full object-cover rounded-[1.4rem]" 
                />
              </div>
              </FadeInOnScroll>
            </div>
          </div>

          <div className="mt-24">
            <FadeInOnScroll delay={0.2} threshold={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Keunggulan <span className='text-blue-400'>Kemitraan Pengembangan</span> Kami</h2>
              <p className="text-xl text-gray-400">
                Setiap kemitraan pengembangan di Talkvera mendapatkan akses ke:
              </p>
            </div>
            </FadeInOnScroll>

            <div className="max-w-10xl mx-auto grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-8">
              {partnership.map((partner, index) => (
                <FadeInOnScroll 
                  key={index}
                  delay={0.15 * index} 
                  threshold={0.3}      
                  direction="left"  
                >
                <div
                  key={index}
                  className="group relative p-4 flex flex-col items-center justify-center text-center 
                             transition-all duration-300 cursor-pointer"
                >
                  <div className={`p-3 mb-2 rounded-full 
                                  bg-blue-500/10 group-hover:bg-blue-500/20 transition-all duration-300 
                                  group-hover:shadow-lg group-hover:shadow-cyan-500/40`}>
                      <partner.icon className="w-30 h-30 text-blue-400 group-hover:text-cyan-200 transition-all duration-300" /> 
                  </div>
                  
                  <h3 className="font-semibold text-white transition-all duration-300 
                                 group-hover:text-blue-200 relative pt-1">
                      {partner.name}
                      <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-cyan-500 
                                       transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </h3>
                </div>
                </FadeInOnScroll>
              ))}
            </div>
            <FadeInOnScroll delay={0.2} threshold={0.2}>
            <div className='text-center mt-12'>
              <Link 
                  to="/contact" 
                  className="inline-flex w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-xl shadow-blue-500/30 items-center justify-between space-x-4"
              >
                  <span>Konsultasi Dengan Kami</span>
                  <ArrowRight size={20} />
              </Link>
            </div>
            </FadeInOnScroll>
          </div>
          
          <div className="mt-24">
            <FadeInOnScroll delay={0.2} threshold={0.2}>
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Proses yang <span className='text-blue-400'>Transparan</span></h2>
            </div>
            </FadeInOnScroll>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
              {processes.map((data, index) => (
                <FadeInOnScroll 
                  key={index}
                  delay={0.15 * index} 
                  threshold={0.3}      
                  direction="right"  
                >
                <div key={index}>
                  <hr className="mb-3 border-blue-400" />
                  <h4 className="text-gray-100">{data.desc}</h4>
                </div>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
          <FadeInOnScroll delay={0.2} threshold={0.2}>
          <div className="mt-24">
            <CtaContent  />
          </div>
          </FadeInOnScroll>
          
        </div>
      </section>
    </div>
  );
}

export default PricingPage;