import { Mail, Instagram, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  const trackFooterClick = (label: string) => {
    if (typeof window.gtag !== "undefined") {
      window.gtag("event", "footer_click", {
        event_category: "Footer",
        event_label: label,
      });
    }
  };

  const links = [
    { label: 'Home', path: '/home#home' },
    { label: 'Kontak', path: '/contact' },
    { label: 'Harga', path: '/pricing' },
  ];

  const resourceLinks = [
    { label: 'Dokumentasi', path: '/docs/introduction' },
    { label: 'Studi Kasus', path: '/docs/case-studies/overview' },
    { label: "FAQ", path: '/home#faq' },
  ];

  const companyLinks = [
    { label: 'Tentang', path: '/about' },
  ];

  const getStartedLink = [
    { label: 'Mulai Sekarang', desc: 'Pelajari lebih jauh bagaimana kami dapat membuat bisnismu lebih produktif.' },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-8">
          
          {/* LOGO */}
          <div className="col-span-1">
            <Link 
              to="/" 
              onClick={() => trackFooterClick("Logo")}
              className="flex items-center space-x-2 mb-4 group"
            >
              <img
                src='/assets/full-logo-cyan-blue.svg'
                alt="TalkVera Logo"
                className="h-8 w-auto transition-opacity group-hover:opacity-80"
              />
            </Link>
            <p className="text-sm text-gray-400">
              Operasional lebih rapi, tim lebih fokus—berkat automasi cerdas.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h2 className="font-semibold text-white mb-4">Links</h2>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => trackFooterClick(link.label)}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h2 className="font-semibold text-white mb-4">Resources</h2>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => trackFooterClick(link.label)}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h2 className="font-semibold text-white mb-4">Company</h2>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => trackFooterClick(link.label)}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL MEDIA */}
          <div>
            <h2 className="font-semibold text-white mb-4">Connect</h2>
            <div className="flex space-x-4">
              <a
                href="https://api.whatsapp.com/send/?phone=6285171182228&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackFooterClick("WhatsApp")}
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
              >
                <Phone size={18} className="text-gray-400 hover:text-blue-400" />
              </a>

              <a
                href="https://www.instagram.com/talk.vera/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackFooterClick("Instagram")}
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
              >
                <Instagram size={18} className="text-gray-400 hover:text-blue-400" />
              </a>

              <a
                href="mailto:hello@talkvera.com"
                onClick={() => trackFooterClick("Email")}
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
              >
                <Mail size={18} className="text-gray-400 hover:text-blue-400" />
              </a>
            </div>
          </div>

          {/* GET STARTED */}
          <div>
            <h2 className="font-semibold text-white mb-4">Mulai Sekarang</h2>
            {getStartedLink.map((item, index) => (
              <p key={index} className="text-sm text-gray-400 mb-4">
                {item.desc}
              </p>
            ))}

            <Link 
              to="/contact"
              onClick={() => trackFooterClick("Mulai Sekarang CTA")}
              className="inline-block px-6 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium font-semibold rounded-lg transition-all transform hover:scale-105 shadow-xl shadow-blue-500/20"
            >
              Mulai Sekarang
            </Link>
          </div>

        </div>

        {/* COPYRIGHT + POLICY */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-500">
            © 2025 TalkVera. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link 
              to="/privacy-policy"
              onClick={() => trackFooterClick("Privacy Policy")}
              className="text-sm text-gray-500 hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/term-condition"
              onClick={() => trackFooterClick("Terms of Service")}
              className="text-sm text-gray-500 hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
