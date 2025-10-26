import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import DocsPage from './pages/DocsPage'; // Pastikan DocsPage menerima initialSection
import ContactPage from './pages/ContactPage';

type Page = 'home' | 'pricing' | 'about' | 'case-study' | 'docs' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentSection, setCurrentSection] = useState<string | undefined>(undefined);

  // Fungsi navigasi yang LENGKAP, yang menerima page dan section.
  const handleNavigate = (page: Page, section?: string) => {
    setCurrentPage(page);
    setCurrentSection(section); 
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage currentPage={currentPage} onNavigate={handleNavigate}/>; // Pass currentPage as a prop
      case 'pricing':
        return <PricingPage onNavigate={handleNavigate}/>; // Ganti setCurrentPage menjadi handleNavigate
      case 'about':
        return <AboutPage onNavigate={handleNavigate}/>; // Ganti setCurrentPage menjadi handleNavigate
      // KASUS 'DOCS' DIHAPUS DARI SINI
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage currentPage={currentPage} onNavigate={handleNavigate}/>;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <Header currentPage={currentPage} onNavigate={handleNavigate} /> 
      <main>
        {currentPage !== 'docs' && renderPage()} 
        
        {currentPage === 'docs' && (
          <DocsPage 
            onNavigate={handleNavigate} 
            initialSection={currentSection}
          />
        )}
      </main>
      {/* <Footer onNavigate={handleNavigate} />  */}
      {currentPage !== 'docs' && (
        <Footer onNavigate={handleNavigate} /> 
      )}

    </div>
  );
}

export default App;