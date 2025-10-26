import React, { useEffect } from 'react';
import { FileText } from 'lucide-react';

// Konten untuk halaman Terms and Conditions
const termsContent = [
  {
    id: 'introduction',
    title: '1. Acceptance of Terms',
    text: 'By accessing or using the services provided by Talkvera ("we," "our," or "us"), you agree to be bound by these Terms and Conditions ("Terms"). If you disagree with any part of the terms, you may not access the Service. These Terms apply to all visitors, users, and others who access or use the Service.',
  },
  {
    id: 'use-license',
    title: '2. Use License',
    content: [
      {
        subtitle: '2.1 Grant of License',
        details: 'Permission is granted to temporarily download one copy of the materials (information or software) on Talkvera\'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.',
      },
      {
        subtitle: '2.2 Restrictions',
        details: 'You may not: modify or copy the materials; use the materials for any commercial purpose, or for any public display (commercial or non-commercial); attempt to decompile or reverse engineer any software contained on Talkvera\'s website; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or "mirror" the materials on any other server.',
      },
    ],
  },
  {
    id: 'user-accounts',
    title: '3. User Accounts',
    text: 'When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account. You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.',
  },
  {
    id: 'intellectual-property',
    title: '4. Intellectual Property',
    text: 'The Service and its original content, features, and functionality are and will remain the exclusive property of Talkvera and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Talkvera.',
  },
  {
    id: 'termination',
    title: '5. Termination',
    text: 'We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.',
  },
  {
    id: 'governing-law',
    title: '6. Governing Law',
    text: 'These Terms shall be governed and construed in accordance with the laws of Indonesia, without regard to its conflict of law provisions.',
  },
  {
    id: 'contact',
    title: '7. Contact Information',
    text: (
      <span>
        If you have any questions about these Terms, please contact us at: <br/>
        Email: <a href="mailto:talkvera.agent@gmail.com" className="text-blue-400 hover:text-cyan-400 transition-colors">talkvera.agent@gmail.com</a>
      </span>
    ),
  },
];


const TermsAndConditions = () => {
  
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
            <FileText className="w-10 h-10 text-blue-400 mx-auto mb-3" />
            <h1 className="text-4xl font-extrabold text-white mb-2">
              Terms and Conditions
            </h1>
            <p className="text-sm text-gray-400 font-medium">
              Effective Date: <span className="text-blue-400">10/26/2025</span>
            </p>
          </div>
          
          {/* KONTEN PERSYARATAN */}
          <div className="prose prose-invert max-w-none space-y-8">
            {termsContent.map((section) => (
              <div key={section.id} className="space-y-3">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {section.title}
                </h2>
                
                {/* Teks utama */}
                {section.text && (
                  <p className="text-gray-300 leading-relaxed">
                    {section.text}
                  </p>
                )}
                
                {/* Konten dengan sub-bagian */}
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

export default TermsAndConditions;
