
interface OverviewContentProps {
    onSectionChange: (sectionId: string) => void; 
    activeSection: string; 
}

const OverviewContent = ({ onSectionChange, activeSection }: OverviewContentProps) => {
    
    const handleSetActiveSection = (sectionId: string) => {
        onSectionChange(sectionId); 
    };

    const caseStudies = [
        { 
            id: 'ultimate-assistant', 
            title: "Ultimate Assistant", 
            subtitle: "Executive Assistant", 
            desc: "A comprehensive AI assistant capable of handling multiple tasks and workflows." 
        },
        { 
            id: 'rag-pipeline', 
            title: "RAG Pipeline", 
            subtitle: "Knowledge Retrieval & Analysis", 
            desc: "Retrieval-Augmented Generation pipeline for enhanced AI responses." 
        },
        { 
            id: 'newsletter-creation', 
            title: "Newsletter Creation", 
            subtitle: "Content Marketing Automation", 
            desc: "AI-powered newsletter creation and distribution system." 
        },
        { 
            id: 'schedule-appointment-agent', // Nama ID diperbaiki agar konsisten dengan DocsPage
            title: "Schedule Appointment", 
            subtitle: "Administrative Task Automation", 
            desc: "AI-powered scheduling and appointment system." 
        },
        { 
            id: 'customer-service-agent', 
            title: "Customer Service Agent", 
            subtitle: "Customer & Sales Support", 
            desc: "An AI agent specialized in handling customer inquiries and support tickets." 
        },
        { 
            id: 'generate-test-case', 
            title: "Generate Test Scenario",
            subtitle: "Software QA & Engineering", 
            desc: "AI automation to generate comprehensive test cases based on project requirements." 
        }
    ];

    return (
        <div className="space-y-16 p-6">
            {/* Header */}
            <div>
              <h1 className="text-4xl font-bold mb-4 text-white">Customer Project Showcase</h1>
              <p className="leading-relaxed text-gray-400">
                Explore our successful implementations and see how we've helped businesses transform their operations with AI-powered solutions. Each case study details the challenges faced, our approach, and the measurable results achieved.
              </p>
            </div>

            {/* Available Templates */}
            <section>
              <div className="grid grid-cols-1 gap-8">
                {caseStudies.map((item, i) => (
                  <div 
                    key={i}
                    className={`text-left p-6 rounded-xl border transition-all flex flex-col justify-between
                                ${activeSection === item.id 
                                    ? 'border-blue-500/80 bg-blue-900/30 shadow-lg' 
                                    : 'border-gray-700 bg-gray-900/20 hover:border-blue-500/40 hover:shadow-xl'}`
                              }
                  >
                    <div>
                        <h2 className="text-xl font-semibold mb-2 text-white">{item.title}</h2>
                        <h4 className="text-sm font-semibold mb-3 text-blue-400">{item.subtitle}</h4>
                        <p className="text-sm leading-relaxed text-gray-400 mb-6">{item.desc}</p>
                    </div>

                    {/* TOMBOL BARU: Read Case Study */}
                    <button
                        onClick={() => handleSetActiveSection(item.id)}
                        // MENGGANTI w-full dengan inline-block dan menambahkan padding horizontal (px-4)
                        // Menggunakan `self-start` agar tombol rata kiri di dalam flex container (kartu)
                        className="py-2 px-4 text-sm font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors shadow-md mt-4 self-start inline-block"
                    >
                        Read Case Study
                    </button>

                  </div>
                ))}
              </div>
            </section>
          </div>
    );
};

export default OverviewContent;