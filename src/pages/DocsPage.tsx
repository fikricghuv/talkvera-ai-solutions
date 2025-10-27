import { useState, useEffect } from 'react';
import { Book, Network, Workflow, FileText, BookOpenText, ChevronRight, ChevronLeft } from 'lucide-react';
import { useParams, useNavigate, Link } from 'react-router-dom'; 
import IntroductionContent from '../components/docs/IntroductionContent';
import UltimateAssistantContent from '../components/docs/UltimateAssistantContent';
import RagPipelineContent from '../components/docs/RagPipelineContent';
import NewsletterContent from '../components/docs/NewsletterContent';
import ResourcesContent from '../components/docs/ResourcesContent';
import ProcessContent from '../components/docs/ProcessContent';
import TechStackContent from '../components/docs/TechStackContent';
import OverviewContent from '../components/docs/OverviewContent';

const DOCS_BASE_PREFIX = "/docs"; 

const navigation = [
    { id: 'introduction', label: 'Introduction', icon: Book, path: 'introduction' },
    { id: 'tech-stack', label: 'Technology Stack', icon: Network, path: 'tech-stack' },
    { id: 'process', label: 'Our Process', icon: Workflow, path: 'process' },
    { id: 'resources', label: 'Resources', icon: FileText, path: 'resources' },
    {
      id: 'customer-showcase',
      label: 'Customer Showcase',
      icon: BookOpenText,
      basePath: 'case-studies', 
      children: [
        { id: 'overview', label: 'Overview', path: 'case-studies/overview' },
        { id: 'ultimate-assistant', label: 'Ultimate Assistant', path: 'case-studies/ultimate-assistant' },
        { id: 'rag-pipeline', label: 'RAG Pipeline', path: 'case-studies/rag-pipeline' },
        { id: 'newsletter-creation', label: 'Newsletter Creation', path: 'case-studies/newsletter-creation' },
        { id: 'schedule-appointment-agent', label: 'Schedule Appointment Agent', path: 'case-studies/schedule-appointment-agent' },
        { id: 'customer-service-agent', label: 'Customer Service Agent', path: 'case-studies/customer-service-agent' },
        { id: 'generate-test-case', label: 'Generate Test Scenario', path: 'case-studies/generate-test-case' },
      ],
    },
];

const getAllValidSectionIDs = (): Set<string> => {
    const ids = new Set<string>();
    
    navigation.forEach(item => {
        ids.add(item.id);
        item.children?.forEach(child => ids.add(child.id));
    });

    return ids;
};

const VALID_SECTION_IDS = getAllValidSectionIDs();

function DocsPage() {
  const { '*': currentPath } = useParams<{ '*': string }>(); 
  const navigate = useNavigate();
  
  const currentSectionID = currentPath?.split('/').pop() || 'introduction'; 

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Fungsi helper untuk membuat path absolut penuh
  const getFullDocPath = (segment: string) => {
    // Pastikan path diawali dengan prefix dan hapus potensi double-slash
    return `${DOCS_BASE_PREFIX}/${segment}`.replace(/\/\/+/g, '/');
  };

  useEffect(() => {

    if (!currentPath || currentPath === 'docs') {
      navigate(getFullDocPath('introduction'), { replace: true });
      return; 
    }
    
    if (!VALID_SECTION_IDS.has(currentSectionID)) {
        console.warn(`Path dokumentasi tidak ditemukan: ${currentSectionID}. Mengarahkan ke Not Found.`);
        navigate('/non-existent-path-for-catch-all', { replace: true }); 
        return; 
    }

    const showcaseParent = navigation.find(item => item.id === 'customer-showcase');
    
    if (currentPath?.startsWith(showcaseParent?.basePath || '')) {
      setOpenDropdown('customer-showcase');
    } else {
      const currentIsMainItem = navigation.some(item => item.id === currentSectionID);
      if (currentIsMainItem) {
        setOpenDropdown(null); 
      }
    }
  }, [currentPath, navigate]);

  const toggleDropdown = (id: string): void => {
      // Logic untuk toggle sudah cukup baik, biarkan
      setOpenDropdown(openDropdown === id ? null : id);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderContent = () => {
    if (!VALID_SECTION_IDS.has(currentSectionID)) {
        return null; 
    }

    switch (currentSectionID) {
      case 'introduction':
        return <IntroductionContent />;
      case 'tech-stack':
        return <TechStackContent />;
      case 'process':
        return <ProcessContent />;
      case 'resources':
        return <ResourcesContent />;
      case 'overview':
        return <OverviewContent />;
      case 'ultimate-assistant':
        return <UltimateAssistantContent />;
      case 'rag-pipeline':
        return <RagPipelineContent />;
      case 'newsletter-creation':
        return <NewsletterContent />;
      
      case 'schedule-appointment-agent':
      case 'customer-service-agent':
      case 'generate-test-case':
        return <div>{currentSectionID.replace(/-/g, ' ').toUpperCase()} Content Coming Soon.</div>;

      default:
        return <IntroductionContent />;
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-transparent to-gray-900/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {!isSidebarOpen && (
            <button
                onClick={toggleSidebar}
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
                <div className="sticky bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700 p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">Documentation</h2>
                    
                    {/* TOMBOL HIDE SIDEBAR */}
                    <button
                        onClick={toggleSidebar}
                        className="p-3 rounded-lg bg-gray-800/90 hover:bg-gray-700/90 border border-gray-700 text-white transition-colors hidden lg:block"
                        title="Hide Sidebar"
                    >
                        <ChevronLeft size={20} />
                    </button>
                  </div>
                  
                  <nav className="space-y-1">
                    {navigation.map((item) => (
                      <div key={item.id}>
                        {/* Tautan Utama (Non-Dropdown) */}
                        {!item.children && (
                            <Link
                                to={getFullDocPath(item.path)} 
                                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg transition-all ${
                                    currentSectionID === item.id 
                                        ? 'bg-blue-500/20 text-blue-400'
                                        : 'text-gray-200 hover:bg-gray-800/50 hover:text-white'
                                }`}
                            >
                                <div className="flex items-center space-x-3">
                                    <item.icon size={18} />
                                    <span className="text-sm font-medium">{item.label}</span>
                                </div>
                            </Link>
                        )}

                        {/* Dropdown Header */}
                        {item.children && (
                            <button
                                onClick={() => toggleDropdown(item.id)} 
                                className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg transition-all text-gray-200 hover:bg-gray-800/50 hover:text-white"
                            >
                                <div className="flex items-center space-x-3">
                                    <item.icon size={18} />
                                    <span className="text-sm font-medium">{item.label}</span>
                                </div>
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
                            </button>
                        )}

                        {/* Dropdown Children */}
                        {item.children && openDropdown === item.id && (
                          <div className="ml-8 mt-1 space-y-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.id}
                                to={getFullDocPath(child.path)} 
                                className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all flex items-center ${
                                  currentSectionID === child.id
                                    ? 'text-blue-400 bg-blue-500/10'
                                    : 'text-gray-300 hover:text-white hover:bg-gray-800/30'
                                }`}
                              >
                                  {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>
              </aside>
          )}

          {/* Main content */}
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
