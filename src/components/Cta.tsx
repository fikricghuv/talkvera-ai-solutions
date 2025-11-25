import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CtaContent: React.FC = () => {

    const trackCTA = (label: string) => {
        if (typeof window.gtag !== "undefined") {
            window.gtag("event", "cta_click", {
                event_category: "CTA Section",
                event_label: label,
            });
        }
    };

    const trackLogoClick = () => {
        if (typeof window.gtag !== "undefined") {
            window.gtag("event", "cta_logo_click", {
                event_category: "CTA Section",
                event_label: "CTA Logo",
            });
        }
    };

    return (
        <div className="p-8 md:p-12 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-2xl border border-blue-500/30 shadow-2xl shadow-blue-900/50">
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                
                {/* 1. Konten Teks dan Tombol (Kiri) */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-5xl font-bold mb-4 text-white">
                        Temukan <span className="text-blue-400">potensi tersembunyi</span> <br className="hidden sm:inline" /> pada bisnis Anda
                    </h1>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto md:mx-0">
                        Buka potensi yang belum dimanfaatkan dengan solusi AI yang aman dan efisien.
                    </p>
                    
                    <Link 
                        to="/contact"
                        onClick={() => trackCTA("Konsultasi Dengan Kami")}
                        className="inline-flex w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-xl shadow-blue-500/30 items-center justify-between space-x-4"
                    >
                        <span>Konsultasi Dengan Kami</span>
                        <ArrowRight size={20} />
                    </Link>
                </div>

                {/* 2. Logo (Kanan) */}
                <div 
                    className="flex-shrink-0 order-first md:order-last mb-6 md:mb-0 cursor-pointer"
                    onClick={trackLogoClick}
                >
                    <img
                        src="/assets/cyan-blue-logo.svg"
                        alt="TalkVera Logo"
                        className="w-48 h-48"
                    />
                </div>
          </div>
        </div>
    );
};

export default CtaContent;
