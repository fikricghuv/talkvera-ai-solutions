// src/components/docs/OverviewContent.jsx
import { Link } from 'react-router-dom';

const OverviewContent = () => {

    const caseStudies = [
        { 
            id: 'whatsapp-agent', 
            title: "Otomasi Customer Service 24/7", 
            subtitle: "Tingkatkan Efisiensi Layanan Pelanggan", 
            desc: "Sistem AI WhatsApp yang menangani ribuan percakapan sekaligus dengan respons instan 24/7. Kurangi biaya operasional 40-60% sambil meningkatkan customer satisfaction melalui smart automation dan personalisasi.",
            path: 'whatsapp-agent' 
        },
        { 
            id: 'rag-agent', 
            title: "Analisis Database Berbasis AI", 
            subtitle: "Knowledge Retrieval & Insights", 
            desc: "Pipeline Retrieval-Augmented Generation (RAG) yang memberikan analisis cepat dan kontekstual dari database internal—mempercepat pengambilan keputusan lintas tim.",
            path: 'rag-agent' 
        },
        { 
            id: 'newsletter-creation', 
            title: "Otomasi Pembuatan Konten Mingguan", 
            subtitle: "Content Operations Automation", 
            desc: "Sistem otomatis yang meneliti, menyusun, memformat, dan menjadwalkan newsletter mingguan. Waktu produksi berkurang lebih dari 90%.",
            path: 'newsletter-creation' 
        },
        { 
            id: 'personalized-outreach-agent', 
            title: "AI Outreach Personalisasi Instan", 
            subtitle: "Sales & Lead Engagement", 
            desc: "Agen AI yang menangkap lead secara otomatis dan mengirimkan email sambutan yang unik serta relevan—menciptakan titik kontak pertama yang jauh lebih menarik.",
            path: 'personalized-outreach-agent' 
        },
        { 
            id: 'schedule-appointment-agent', 
            title: "Penjadwalan Meeting Otomatis", 
            subtitle: "Operational Efficiency", 
            desc: "Sistem AI yang menghilangkan friksi penjadwalan dengan memeriksa ketersediaan, mengoordinasikan jadwal, dan memperbarui kalender secara real-time.",
            path: 'schedule-appointment-agent' 
        },
        { 
            id: 'sales-agent', 
            title: "AI Pendukung Penjualan & Customer Support", 
            subtitle: "Customer Assistance Automation", 
            desc: "Agen AI yang menangani pertanyaan pelanggan dan kebutuhan sales sepanjang hari dengan respons cepat, akurat, dan konsisten dengan brand voice Anda.",
            path: 'sales-agent' 
        },
        { 
            id: 'qa-automation-agent', 
            title: "Otomasi Pembuatan Test Case", 
            subtitle: "Software QA & Engineering", 
            desc: "Sistem berbasis AI yang membaca dokumen BRD/PRD dan menghasilkan test scenario lengkap dalam hitungan menit—menghemat waktu QA secara signifikan.",
            path: 'qa-automation-agent' 
        }
    ];

    return (
        <div className="space-y-16 p-6">

            {/* Header */}
            <div>
              <h1 className="text-4xl font-bold mb-4 text-white">
                Studi Kasus & Implementasi AI TalkVera
              </h1>
              <p className="leading-relaxed text-gray-100">
                Jelajahi implementasi nyata yang telah membantu berbagai perusahaan 
                <strong> mengatasi tantangan operasional</strong> dan 
                <strong> meningkatkan efisiensi secara signifikan</strong>. 
                Setiap studi kasus mencakup solusi yang digunakan, pendekatan teknis, 
                serta <strong>hasil dan ROI yang terukur</strong>.
              </p>
            </div>

            {/* Case Studies Grid */}
            <section>
              <div className="grid grid-cols-1 gap-10">
                {caseStudies.map((item, i) => (
                  <div 
                    key={i}
                    className="text-left p-6 rounded-xl border border-gray-700 bg-gray-900/20 hover:border-blue-500/40 hover:shadow-xl transition-all flex flex-col justify-between"
                  >
                    <div>
                        <h2 className="text-xl font-semibold mb-2 text-white">{item.title}</h2>
                        <h4 className="text-sm font-semibold mb-3 text-blue-400">{item.subtitle}</h4>
                        <p className="text-sm leading-relaxed text-gray-400 mb-6">{item.desc}</p>
                    </div>

                    <Link
                        to={item.path} 
                        className="py-2 px-4 text-sm font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors shadow-md mt-4 self-start inline-block text-white text-center"
                    >
                        Lihat Studi Kasus
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          </div>
    );
};

export default OverviewContent;