import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom'; // Import yang dibutuhkan
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import DocsPage from './pages/DocsPage'; 
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermAndCondition';

// Buat komponen wrapper untuk menangani window.scrollTo, 
// karena React Router tidak melakukannya secara default
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Scroll ke atas setiap kali path berubah

  return null;
}

// Pisahkan komponen App menjadi dua: AppContent (yang berisi rute) dan AppWrapper (yang berisi BrowserRouter)
function AppContent() {
  // Gunakan useLocation untuk menentukan halaman saat ini (untuk Header/Footer)
  const location = useLocation();
  const isDocsPage = location.pathname.startsWith('/docs');
  const isPrivacyPage = location.pathname.startsWith('/privacy');

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <ScrollToTop /> 
      <Header /> 
      
      <main>
        
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} /> 
          <Route path="/home" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/docs/*" element={<DocsPage />} /> 
          <Route path="/privacy" element={<PrivacyPolicy />} /> 
          <Route path="/termcondition" element={<TermsAndConditions />} /> 
          <Route path="*" element={<HomePage />} /> 
        </Routes>
      </main>
      
      {!isDocsPage && !isPrivacyPage &&  <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}