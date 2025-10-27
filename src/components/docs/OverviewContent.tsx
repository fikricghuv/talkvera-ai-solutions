// src/components/docs/OverviewContent.jsx
import { Link } from 'react-router-dom';

const OverviewContent = () => {

    const caseStudies = [
        { 
            id: 'ultimate-assistant', 
            title: "Ultimate Assistant", 
            subtitle: "Executive Assistant", 
            desc: "A comprehensive AI assistant capable of handling multiple tasks and workflows.",
            path: 'ultimate-assistant' 
        },
        { 
            id: 'rag-pipeline', 
            title: "RAG Pipeline", 
            subtitle: "Knowledge Retrieval & Analysis", 
            desc: "Retrieval-Augmented Generation pipeline for enhanced AI responses.",
            path: 'rag-pipeline' 
        },
        { 
            id: 'newsletter-creation', 
            title: "Newsletter Creation", 
            subtitle: "Content Marketing Automation", 
            desc: "AI-powered newsletter creation and distribution system.",
            path: 'newsletter-creation' 
        },
        { 
            id: 'schedule-appointment-agent', 
            title: "Schedule Appointment", 
            subtitle: "Administrative Task Automation", 
            desc: "AI-powered scheduling and appointment system.",
            path: 'schedule-appointment-agent' 
        },
        { 
            id: 'customer-service-agent', 
            title: "Customer Service Agent", 
            subtitle: "Customer & Sales Support", 
            desc: "An AI agent specialized in handling customer inquiries and support tickets.",
            path: 'customer-service-agent' 
        },
        { 
            id: 'generate-test-case', 
            title: "Generate Test Scenario",
            subtitle: "Software QA & Engineering", 
            desc: "AI automation to generate comprehensive test cases based on project requirements.",
            path: 'generate-test-case' 
        }
    ];

    // NOTE PENTING: Karena OverviewContent selalu diakses melalui /docs/case-studies/overview,
    // navigasi <Link to={item.path}> akan menjadi navigasi relatif dari path parent-nya (/docs/case-studies/).
    // Sehingga, <Link to="ultimate-assistant"> akan mengarah ke /docs/case-studies/ultimate-assistant.

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
              <div className="grid grid-cols-1 gap-10">
                {caseStudies.map((item, i) => (
                  <div 
                    key={i}
                    // Menghapus logika activeSection dari styling karena active state 
                    // hanya terlihat saat kita berada di halaman case study spesifik,
                    // bukan di halaman overview.
                    className="text-left p-6 rounded-xl border border-gray-700 bg-gray-900/20 hover:border-blue-500/40 hover:shadow-xl transition-all flex flex-col justify-between"
                  >
                    <div>
                        <h2 className="text-xl font-semibold mb-2 text-white">{item.title}</h2>
                        <h4 className="text-sm font-semibold mb-3 text-blue-400">{item.subtitle}</h4>
                        <p className="text-sm leading-relaxed text-gray-400 mb-6">{item.desc}</p>
                    </div>

                    {/* Mengganti <button> dengan <Link> */}
                    <Link
                        to={item.path} // Navigasi relatif dari /docs/case-studies/overview ke /docs/case-studies/item.path
                        className="py-2 px-4 text-sm font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors shadow-md mt-4 self-start inline-block text-white text-center"
                    >
                        Read Case Study
                    </Link>

                  </div>
                ))}
              </div>
            </section>
          </div>
    );
};

export default OverviewContent;