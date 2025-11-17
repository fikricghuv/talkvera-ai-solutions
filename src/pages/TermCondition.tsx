import { useEffect } from 'react';
import { FileText } from 'lucide-react';

const termsContent = [
  { 
    id: 'introduction', 
    title: '1. Introduction', 
    text: `Welcome to Talkvera ("we", "our", or "us"). These Terms & Conditions govern your use of our website and services. By accessing or using our website, you agree to comply with and be bound by these Terms.` 
  },
  { 
    id: 'use-of-website', 
    title: '2. Use of Our Website', 
    content: [
      { 
        subtitle: '2.1 Permitted Use', 
        details: `You may use this website for lawful purposes, including learning about our services, submitting inquiries, and requesting consultations.` 
      },
      { 
        subtitle: '2.2 Prohibited Use', 
        details: `You agree not to misuse our website, attempt unauthorized access, harm its functionality, or use it to spread malicious content.` 
      },
    ] 
  },
  { 
    id: 'services', 
    title: '3. Services and Information Accuracy', 
    text: `We strive to provide accurate and up-to-date information. However, we do not guarantee that all content on this website is error-free or complete. All services, descriptions, and features may be updated without prior notice.` 
  },
  { 
    id: 'data', 
    title: '4. Personal Information', 
    text: `By submitting information through our contact or inquiry forms, you agree that your data may be collected and processed in accordance with our Privacy Policy. You are responsible for ensuring that the information you provide is accurate and up to date.` 
  },
  { 
    id: 'intellectual-property', 
    title: '5. Intellectual Property Rights', 
    text: `All content on this website—including logos, designs, text, graphics, and images—is the property of Talkvera and is protected by applicable copyright and intellectual property laws. You may not reproduce, distribute, or reuse any content without written permission.` 
  },
  { 
    id: 'links', 
    title: '6. Third-Party Links', 
    text: `Our website may contain links to third-party websites. We are not responsible for the content or practices of such external sites and encourage you to review their respective terms and privacy policies.` 
  },
  { 
    id: 'liability', 
    title: '7. Limitation of Liability', 
    text: `To the fullest extent permitted by law, Talkvera is not liable for any damages resulting from your use of the website, including errors, interruptions, or loss of data. All use of our website and services is at your own risk.` 
  },
  { 
    id: 'changes', 
    title: '8. Changes to These Terms', 
    text: `We may update these Terms & Conditions from time to time. Any changes will be posted on this page, and the "Last updated" date will be revised accordingly.` 
  },
  { 
    id: 'contact', 
    title: '9. Contact Us', 
    text: (
      <span>
        If you have questions about these Terms, please contact us at: <br/>
        Email: <a href="mailto:hello@talkvera.com" className="text-blue-400 hover:text-cyan-400 transition-colors">hello@talkvera.com</a>
      </span>
    )
  },
];


const TermsAndConditions = () => {

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
              Terms & Conditions
            </h1>
            <p className="text-sm text-gray-400 font-medium">
              Last updated: <span className="text-blue-400">2025-11-17</span>
            </p>
          </div>
          
          {/* CONTENT */}
          <div className="prose prose-invert max-w-none space-y-8">
            {termsContent.map((section) => (
              <div key={section.id} className="space-y-3">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {section.title}
                </h2>

                {section.text && (
                  <p className="text-gray-300 leading-relaxed">
                    {section.text}
                  </p>
                )}

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
