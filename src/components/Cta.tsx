import React from 'react';
import { Link } from 'react-router-dom';

const CtaContent: React.FC = () => {
    return (
        <div className="p-8 md:p-12 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-2xl border border-blue-500/30">
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                
                {/* 1. Konten Teks dan Tombol (Kiri) */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-5xl font-bold mb-4 text-white">
                        Unlock hidden potential <br /> within your business
                    </h1>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto md:mx-0">
                        Unlock untapped potential with safe, responsible, and powerful AI solutions.
                    </p>
                    
                    <Link 
                        to="/contact" 
                        className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-xl shadow-blue-500/30"
                    >
                        Get Started
                    </Link>
                </div>

                {/* 2. Logo (Kanan) */}
                <div className="flex-shrink-0 order-first md:order-last mb-6 md:mb-0">
                    <img
                        src="/assets/just-logo.svg" 
                        alt="TalkVera Logo"
                        className="w-100 h-100"
                    />
              </div>
          </div>
        </div>
    );
};

export default CtaContent;