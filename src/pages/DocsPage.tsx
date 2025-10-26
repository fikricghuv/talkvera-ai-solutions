// src/pages/DocsPage.tsx
import { useState, useEffect } from 'react'; // <--- PERBAIKAN DI SINI
import { Book, Network, Workflow, FileText, BookOpenText, ChevronRight, ChevronLeft } from 'lucide-react';
import IntroductionContent from '../components/docs/IntroductionContent';
import UltimateAssistantContent from '../components/docs/UltimateAssistantContent';
import RagPipelineContent from '../components/docs/RagPipelineContent';
import NewsletterContent from '../components/docs/NewsletterContent';
import ResourcesContent from '../components/docs/ResourcesContent';
import ProcessContent from '../components/docs/ProcessContent';
import TechStackContent from '../components/docs/TechStackContent';
import OverviewContent from '../components/docs/OverviewContent';

type Page = 'home' | 'pricing' | 'about' | 'case-study' | 'docs' | 'contact'; 

interface DocsPageProps {
    onNavigate: (page: Page, section?: string) => void;
    initialSection?: string; 
}

function DocsPage({ onNavigate, initialSection }: DocsPageProps) {
  const [activeSection, setActiveSection] = useState(initialSection || 'introduction');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
      if (initialSection) {
          if (initialSection.startsWith('case-studies/')) {
              // Jika ini adalah Case Study, aktifkan 'overview' dan buka dropdown 'case-studies'
              setActiveSection('overview');
              setOpenDropdown('customer-showcase'); 
          } else {
              // Untuk section lain (misalnya 'introduction', 'tech-stack')
              setActiveSection(initialSection);
              setOpenDropdown(null); // Tutup dropdown lain jika ada
          }
      }
  }, [initialSection]);

  const toggleDropdown = (id: string): void => {
    // Menggunakan setOpenDropdown tanpa 'as any'
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navigation = [
    { id: 'introduction', label: 'Introduction', icon: Book },
    { id: 'tech-stack', label: 'Technology Stack', icon: Network },
    { id: 'process', label: 'Our Process', icon: Workflow },
    { id: 'resources', label: 'Resources', icon: FileText },
    {
      id: 'customer-showcase',
      label: 'Customer Showcase',
      icon: BookOpenText,
      children: [
        { id: 'overview', label: 'Overview' },
        { id: 'ultimate-assistant', label: 'Ultimate Assistant' },
        { id: 'rag-pipeline', label: 'RAG Pipeline' },
        { id: 'newsletter-creation', label: 'Newsletter Creation' },
        { id: 'schedule-appointment-agent', label: 'Schedule Appointment Agent' },
        { id: 'customer-service-agent', label: 'Customer Service Agent' },
        { id: 'generate-test-case', label: 'Generate Test Scenario' },
      ],
    },
  ];

  const handleSectionClick = (id: string) => {
        setActiveSection(id);
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'introduction':
        return (
          <IntroductionContent />
        );

      case 'tech-stack':
        return (
          <TechStackContent />
        );

      case 'process':
        return (
          <ProcessContent />
        );

      case 'resources':
        return (
          <ResourcesContent />
        );

      case 'overview':
        return (
          <OverviewContent 
                        onSectionChange={handleSectionClick}
                        activeSection={activeSection} 
                    />
        );

      case 'ultimate-assistant':
        return (
          <UltimateAssistantContent />
        );

      case 'rag-pipeline':
        return (
          <RagPipelineContent />
        );
      
      case 'newsletter-creation':
        return (
          <NewsletterContent />
        );

      default:
        return <div>Section not found</div>;
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-transparent to-gray-900/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Tombol Show Sidebar (Hanya terlihat jika sidebar tertutup) */}
        {!isSidebarOpen && (
            <button
                onClick={toggleSidebar}
                // Gaya konsisten dengan tombol hide, menggunakan ChevronRight
                className="fixed top-30 left-6 z-40 p-3 rounded-lg bg-gray-800/90 hover:bg-gray-700/90 border border-gray-700 text-white transition-colors shadow-xl hidden lg:block"
                title="Show Sidebar"
            >
                <ChevronRight size={20} />
            </button>
        )}
        
        {/* Layout Grid - Conditional Styling */}
        <div className={`grid grid-cols-1 gap-8 ${isSidebarOpen ? 'lg:grid-cols-4' : 'lg:grid-cols-1'}`}>
          
          {/* Sidebar - Conditional Rendering */}
          {isSidebarOpen && (
              <aside className="lg:col-span-1 relative">
                {/* Mengubah p-6 menjadi pt-14 p-6 untuk memberi ruang bagi tombol di atas */}
                <div className="sticky bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700 p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">Documentation</h2>
                    
                    {/* TOMBOL HIDE SIDEBAR (di dalam kartu) */}
                    <button
                        onClick={toggleSidebar}
                        // Menghilangkan posisi absolute, menggunakan gaya yang sama
                        className="p-3 rounded-lg bg-gray-800/90 hover:bg-gray-700/90 border border-gray-700 text-white transition-colors hidden lg:block"
                        title="Hide Sidebar"
                    >
                        <ChevronLeft size={20} />
                    </button>
                  </div>
                  
                  <nav className="space-y-1">
                    {navigation.map((item) => (
                      <div key={item.id}>
                        <button
                          onClick={() =>
                            item.children
                              ? toggleDropdown(item.id)
                              : setActiveSection(item.id)
                          }
                          className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg transition-all ${
                            activeSection === item.id
                              ? 'bg-blue-500/20 text-blue-400'
                              : 'text-gray-200 hover:bg-gray-800/50 hover:text-white'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <item.icon size={18} />
                            <span className="text-sm font-medium">{item.label}</span>
                          </div>

                          {item.children && (
                            <svg
                              className={`w-4 h-4 transform transition-transform ${
                                openDropdown === item.id ? 'rotate-90' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          )}
                        </button>

                        {/* Dropdown */}
                        {item.children && openDropdown === item.id && (
                          <div className="ml-8 mt-1 space-y-1">
                            {item.children.map((child) => (
                              <button
                                key={child.id}
                                onClick={() => setActiveSection(child.id)}
                                className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all ${
                                  activeSection === child.id
                                    ? 'text-blue-400 bg-blue-500/10'
                                    : 'text-gray-300 hover:text-white hover:bg-gray-800/30'
                                }`}
                              >
                                {child.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>
              </aside>
          )}

          {/* Main content - Menggunakan kolom penuh jika sidebar tertutup */}
          <main className={isSidebarOpen ? 'lg:col-span-3' : 'lg:col-span-4'}>
            <div className="prose prose-invert max-w-none">
              {renderContent()}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default DocsPage;

