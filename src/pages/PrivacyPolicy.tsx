import { useEffect } from 'react';
import { Shield } from 'lucide-react';

// Konten untuk halaman ini:
const policyContent = [
  { 
    id: 'introduction', 
    title: '1. Introduction', 
    text: 'Talkvera ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.' 
  },
  { 
    id: 'information', 
    title: '2. Information We Collect', 
    content: [
      { 
        subtitle: '2.1 Personal Information', 
        details: 'We may collect personal information that you voluntarily provide to us when you: Subscribe to our newsletter, Contact us through our website, or Use our services. This information may include your **name, email address, phone number, and company information**.' 
      },
    ] 
  },
  { 
    id: 'use', 
    title: '3. How We Use Your Information', 
    text: 'We use the information we collect to: **Provide and maintain our services**, **Improve and personalize your experience**, **Communicate with you about our services**, **Send you marketing and promotional communications** (with your consent), and **Comply with legal obligations**.' 
  },
  { 
    id: 'sharing', 
    title: '4. Information Sharing and Disclosure', 
    text: 'We may share your information with: **Service providers** who assist in our operations, **Business partners** with your consent, and **Law enforcement** when required by law.' 
  },
  { 
    id: 'security', 
    title: '5. Data Security', 
    text: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.' 
  },
  { 
    id: 'rights', 
    title: '6. Your Rights', 
    text: 'You have the right to: **Access** your personal information, **Correct** inaccurate information, Request **deletion** of your information, **Object** to processing of your information, and **Withdraw consent** at any time.' 
  },
  { 
    id: 'cookies', 
    title: '7. Cookies and Tracking Technologies', 
    text: 'We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.' 
  },
  { 
    id: 'changes', 
    title: '8. Changes to This Privacy Policy', 
    text: 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.' 
  },
  { 
    id: 'contact', 
    title: '9. Contact Us', 
    text: (
      <span>
        If you have any questions about this Privacy Policy, please contact us at: <br/>
        Email: <a href="mailto:talkvera.agent.gmail.com" className="text-blue-400 hover:text-cyan-400 transition-colors">talkvera.agent@gmail.com</a>
      </span>
    )
  },
];


const PrivacyPolicy = () => {
  
  // Efek untuk menggulir ke atas saat halaman dimuat
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-transparent to-gray-900/30">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-gray-900/50 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-gray-800 shadow-2xl">
          
          {/* HEADER */}
          <div className="text-center mb-12 border-b border-gray-700/50 pb-6">
            <Shield className="w-10 h-10 text-blue-400 mx-auto mb-3" />
            <h1 className="text-4xl font-extrabold text-white mb-2">
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-400 font-medium">
              Last updated: <span className="text-blue-400">10/26/2025</span>
            </p>
          </div>
          
          {/* KONTEN KEBIJAKAN */}
          <div className="prose prose-invert max-w-none space-y-8">
            {policyContent.map((section) => (
              <div key={section.id} className="space-y-3">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {section.title}
                </h2>
                
                {/* Teks utama (untuk sebagian besar bagian) */}
                {section.text && (
                  <p className="text-gray-300 leading-relaxed">
                    {section.text}
                  </p>
                )}
                
                {/* Konten dengan sub-bagian (khusus untuk Bagian 2) */}
                {section.content && (
                  <div className="ml-0 space-y-4">
                    {section.content.map((sub, index) => (
                      <div key={index}>
                        <h3 className="text-xl font-semibold text-gray-200 mb-1">
                          {sub.subtitle}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {sub.details}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
