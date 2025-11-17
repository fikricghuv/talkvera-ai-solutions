import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import DocsPage from './pages/DocsPage'; 
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFoundPage from './pages/NotFoundPage';
import TermsAndConditions from './pages/TermCondition'

// const BASE_TITLE = "Talkvera: AI Solution";

const ROUTE_TITLES = {
    '/home': 'TalkVera - Scale Up Bisnis Anda Tanpa Terjebak Administrasi Harian',
    '/pricing': 'Harga Layanan | TalkVera - Pilih Paket yang Tepat untuk Anda',
    '/about': 'Tentang Kami | TalkVera - Misi, Visi, dan Tim Kami',
    '/contact': 'Kontak Kami | TalkVera - Hubungi Tim Dukungan & Sales',
    '/docs': 'Dokumentasi | TalkVera - Panduan Penggunaan Lengkap',
    '/docs/case-studies/overview': 'Studi Kasus | TalkVera - Proyeksikan Projek Anda',
    '/privacy-policy': 'Kebijakan Privasi | TalkVera',
    '/term-condition': 'Syarat & Ketentuan Layanan | TalkVera',
    '*': 'Halaman Tidak Ditemukan (404) | TalkVera', 
};

/**
 * Komponen untuk mengatur judul dokumen berdasarkan rute saat ini.
 */
function TitleUpdater() {
    const location = useLocation();

    useEffect(() => {
        const pathname = location.pathname;
        let pageTitle = '';

        if (pathname.startsWith('/docs')) {
            pageTitle = ROUTE_TITLES['/docs'];
        } else {
            const normalizedPath = pathname === '/' ? '/home' : pathname.toLowerCase();
            
            pageTitle = ROUTE_TITLES[normalizedPath as keyof typeof ROUTE_TITLES] || ROUTE_TITLES['*'];
        }
        // document.title = `${pageTitle} - ${BASE_TITLE}`;
        document.title = `${pageTitle}`;
    }, [location.pathname]);

    return null;
}

/**
 * Komponen untuk menggulir ke atas saat navigasi.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// --- Komponen Utama dengan Routing ---
function AppContent() {
  const location = useLocation();
  
  const isDocsPage = location.pathname.startsWith('/docs');
  const isPrivacyPage = location.pathname.startsWith('/privacy-policy');
  const isTermsPage = location.pathname.startsWith('/term-condition'); 
  const isNotFoundsPage = location.pathname.startsWith('/notfound'); 

  const shouldHideFooter = isDocsPage || isPrivacyPage || isTermsPage;
  const shouldHideHeader = isNotFoundsPage;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <TitleUpdater /> 
      <ScrollToTop /> 
      {!shouldHideHeader && <Header />}
      
      <main>
        
        <Routes key={location.pathname}>
          <Route path="/" element={<Navigate to="/home" replace />} /> 
          <Route path="/home" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/docs/*" element={<DocsPage />} /> 
          <Route path="/privacy-policy" element={<PrivacyPolicy />} /> 
          <Route path="/term-condition" element={<TermsAndConditions />} />
          <Route path="/notfound" element={<NotFoundPage />} /> 

          <Route path="/*" element={<Navigate to="/notfound" replace />} /> 
        </Routes>
      </main>
      
      {!shouldHideFooter && <Footer />}
      
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