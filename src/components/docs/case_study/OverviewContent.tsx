// src/components/docs/OverviewContent.jsx
import { Link } from 'react-router-dom';

const OverviewContent = () => {

    const caseStudies = [
        { 
            id: 'rag-agent', 
            title: "Database Personal Analysis Agent", 
            subtitle: "Knowledge Retrieval & Analysis", 
            // REVISION: Fokus pada keputusan yang lebih cepat
            desc: "A powerful Retrieval-Augmented Generation (RAG) pipeline that provides rapid, context-aware analysis of internal databases for faster decision-making.",
            path: 'rag-agent' 
        },
        { 
            id: 'newsletter-creation', 
            title: "Weekly Content Automation Engine", 
            subtitle: "Content Marketing Automation", 
            // REVISION: Fokus pada efisiensi 90%
            desc: "Full AI automation system that researches, drafts, formats, and schedules a professional weekly newsletter, cutting creation time by over 90%.",
            path: 'newsletter-creation' 
        },
        { 
            id: 'personalized-outreach-agent', 
            title: "Instant Personalized Outreach Agent", 
            subtitle: "Sales & Lead Generation", 
            // REVISION: Fokus pada respons instan & personal
            desc: "An AI-driven workflow that instantly captures leads and sends a unique, personalized greeting email, ensuring a highly engaged first touchpoint.",
            path: 'personalized-outreach-agent' 
        },
        { 
            id: 'schedule-appointment-agent', 
            title: "Automated Meeting Scheduler", 
            subtitle: "Administrative Efficiency", 
            // REVISION: Fokus pada menghilangkan gesekan penjadwalan
            desc: "AI-powered system that eliminates scheduling friction by automating meeting checks, coordination, and calendar updates in real-time.",
            path: 'schedule-appointment-agent' 
        },
        { 
            id: 'sales-agent', 
            title: "Intelligent Sales Support Agent", 
            subtitle: "Customer & Sales Support", 
            // REVISION: Fokus pada penanganan pertanyaan yang cepat dan akurat
            desc: "A specialized AI agent that handles complex customer inquiries and sales support tasks 24/7 with speed, accuracy, and consistent brand voice.",
            path: 'sales-agent' 
        },
        { 
            id: 'qa-automation-agent', 
            title: "Test Case Generation Automation",
            subtitle: "Software QA & Engineering", 
            // REVISION: Fokus pada kecepatan dari dokumen ke skenario tes
            desc: "AI-powered system that automatically reads complex requirements documents (BRD/PRD) and generates structured, comprehensive test scenarios in minutes.",
            path: 'qa-automation-agent' 
        }
    ];

    return (
        <div className="space-y-16 p-6">
            {/* Header - REVISION: Made the text more value-driven */}
            <div>
              <h1 className="text-4xl font-bold mb-4 text-white">Transform Your Business with AI Automation</h1>
              <p className="leading-relaxed text-gray-100">
                Explore our successful implementations and see how we've helped leading companies <strong>solve their most pressing operational challenges</strong> and <strong>unlock new levels of efficiency</strong>. Each case study details the solution, our approach, and the <strong>measurable Return on Investment (ROI)</strong> achieved.
              </p>
            </div>

            {/* Available Templates */}
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

                    {/* Mengganti <button> dengan <Link> */}
                    <Link
                        to={item.path} 
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