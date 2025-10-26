import { Menu, X, Sparkles } from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'pricing' | 'about' | 'case-study' | 'docs' | 'contact';
type Section = string | undefined;
interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page, section?: Section) => void;
}

function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Pricing', page: 'pricing' },
    { label: 'About', page: 'about' },
    { label: 'Case Study', page: 'case-study' },
    // { label: 'Contact', page: 'contact' },
    { label: 'Docs', page: 'docs' },
  ];

  const handleNavigate = (page: Page, section?: Section) => {
    // Fungsi umum yang memanggil onNavigate dan menutup menu
    onNavigate(page, section);
    setMobileMenuOpen(false);
  };

  const getNavigationAction = (itemPage: Page) => {
    if (itemPage === 'case-study') {
        // Navigasi spesifik: ke halaman 'docs' dengan section 'case-studies/overview'
        return () => handleNavigate('docs', 'case-studies/overview');
    }
    // Navigasi standar
    return () => handleNavigate(itemPage);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center space-x-2 group"
          >
            <img
                src='/assets/logo-talkvera-white.svg'
                alt="TalkVera Logo"
                className="h-8 w-auto transition-opacity group-hover:opacity-80" // Sesuaikan ukuran dan efek hover
            />
          </button>

          {/* --- DESKTOP NAVIGATION --- (Sudah benar) */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
                <button
                    key={`${item.label}-${item.page}`}
                    // Menggunakan fungsi yang sama untuk desktop
                    onClick={getNavigationAction(item.page)}
                    className={`text-sm font-medium transition-colors ${
                      currentPage === item.page
                        ? 'text-blue-400'
                        : 'text-gray-300 hover:text-white'
                    }`}
                >
                  {item.label}
                </button>
            ))}
            <button 
              onClick={() => handleNavigate('contact')}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
            >
              Get Started
            </button>
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* --- MOBILE MENU --- (Perbaikan di sini) */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-gray-800 pt-4">
            {navItems.map((item) => (
              <button
                key={item.page}
                // Menggunakan fungsi getNavigationAction untuk mendapatkan aksi yang benar
                onClick={getNavigationAction(item.page)}
                className={`block w-full text-left text-sm font-medium transition-colors ${
                  currentPage === item.page
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => handleNavigate('contact')}
              className="w-full px-6 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg"
            >
              Get Started
            </button>
            
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;