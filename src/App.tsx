import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
// import CaseStudyPage from './pages/CaseStudyPage';
import DocsPage from './pages/DocsPage';
import ContactPage from './pages/ContactPage';

type Page = 'home' | 'pricing' | 'about' | 'case-study' | 'docs' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage}/>;
      case 'pricing':
        return <PricingPage />;
      case 'about':
        return <AboutPage />;
      // case 'case-study':
      //   return <CaseStudyPage />;
      case 'docs':
        return <DocsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage}/>;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
