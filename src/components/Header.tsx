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

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
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

          <div className="hidden md:flex items-center space-x-8">
            {/* {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.page
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))} */}
            {navItems.map((item) => {
                // Tentukan aksi navigasi
                let navigateAction = () => handleNavigate(item.page);

                // LOGIKA PERBAIKAN: Jika item adalah 'Case Study', ubah tujuannya.
                if (item.page === 'case-study') {
                    // Kita navigasi ke 'docs', tetapi kita kirim 'case-studies/overview' sebagai section
                    // Note: Kita harus mengirim 2 parameter ke onNavigate
                    navigateAction = () => onNavigate('docs', 'case-studies/overview');
                }

                return (
                    <button
                      key={`${item.label}-${item.page}`}
                      onClick={navigateAction}
                      className={`text-sm font-medium transition-colors ${
                        currentPage === item.page
                          ? 'text-blue-400'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                );
            })}
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

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-gray-800 pt-4">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
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
