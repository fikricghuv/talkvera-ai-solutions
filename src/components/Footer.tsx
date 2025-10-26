import { Mail, Instagram, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';


function Footer() {

  const navLinks = [
    { label: 'About Us', path: '/about' },
    // Navigasi Case Studies diarahkan ke rute Docs yang spesifik
    { label: 'Case Studies', path: '/docs/case-studies/overview' }, 
  ];

  const resourceLinks = [
    { label: 'Documentation', path: '/docs' },
    { label: 'Pricing', path: '/pricing' },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4 group">
              <img
                  src='/assets/logo-talkvera-white.svg'
                  alt="TalkVera Logo"
                  className="h-8 w-auto transition-opacity group-hover:opacity-80"
              />
            </Link>
            <p className="text-sm text-gray-400">
              Building intelligent AI solutions for business growth with secure and compliant protocols.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
                <a
                    href="https://api.whatsapp.com/send/?phone=6285171182228&text&type=phone_number&app_absent=0"
                    target="_blank"  rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                >
                    <Phone size={18} className="text-gray-400 hover:text-blue-400" />
                </a>
                
                <a
                    href="https://www.instagram.com/talk.vera/"
                    target="_blank"  rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                >
                    <Instagram size={18} className="text-gray-400 hover:text-blue-400" />
                </a>
                
                <a
                    href="mailto:talkvera.agent@gmail.com"
                    className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                >
                    <Mail size={18} className="text-gray-400 hover:text-blue-400" />
                </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-500">
            © 2025 TalkVera. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
