import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); 
  const currentPathname = window.location.pathname; // Dapatkan pathname saat ini

  const navItems: { label: string; path: string }[] = [
    { label: 'Home', path: '/home' }, 
    { label: 'Pricing', path: '/pricing' },
    { label: 'About', path: '/about' },
    { label: 'Case Study', path: '/docs/case-studies/overview' }, 
    { label: 'Docs', path: '/docs/introduction' },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);
  const handleNavigate = (path: string) => {
    navigate(path);
    closeMobileMenu();
  };
    
  // Fungsi penentu kelas NavLink
  const getNavLinkClass = ({ isActive, path }: { isActive: boolean, path: string }) => {
      // 1. Cek Case Study Link
      if (path === '/docs/case-studies/overview') {
          // Aktif jika path saat ini dimulai dengan /docs/case-studies
          const isCaseStudyActive = currentPathname.startsWith('/docs/case-studies');
          return isCaseStudyActive ? 'text-blue-400' : 'text-gray-300 hover:text-white';
      }

      // 2. Cek Docs Link
      if (path === '/docs/introduction') {
          // Aktif jika dimulai dengan /docs/ TAPI BUKAN /docs/case-studies
          const isDocsActive = currentPathname.startsWith('/docs/') && !currentPathname.startsWith('/docs/case-studies');
          return isDocsActive ? 'text-blue-400' : 'text-gray-300 hover:text-white';
      }
      
      // 3. Link Lain (Home, Pricing, About)
      // Gunakan isActive bawaan dari NavLink
      return isActive ? 'text-blue-400' : 'text-gray-300 hover:text-white';
  }


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* 1. LOGO */}
          <Link
            to="/home" 
            onClick={closeMobileMenu}
            className="flex items-center space-x-2 group"
          >
            <img
                src='/assets/logo-talkvera-white.svg'
                alt="TalkVera Logo"
                className="h-8 w-auto transition-opacity group-hover:opacity-80"
            />
          </Link>

          {/* --- DESKTOP NAVIGATION --- */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => `text-sm font-medium transition-colors ${getNavLinkClass({ isActive, path: item.path })}`}
                >
                  {item.label}
                </NavLink>
            ))}
            
            {/* 3. GET STARTED BUTTON */}
            <button 
              onClick={() => handleNavigate('/contact')}
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

        {/* --- MOBILE MENU --- */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-gray-800 pt-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMobileMenu}
                className={({ isActive }) => `block w-full text-left text-sm font-medium transition-colors ${getNavLinkClass({ isActive, path: item.path })}`}
              >
                {item.label}
              </NavLink>
            ))}
            
            {/* 5. MOBILE GET STARTED BUTTON */}
            <button 
              onClick={() => handleNavigate('/contact')}
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
