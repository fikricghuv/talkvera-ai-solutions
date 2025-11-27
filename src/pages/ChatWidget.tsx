import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Lottie from 'lottie-react';
import animationData from '../../public/assets/Chatbot-animation.json';

export const ChatWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!isOpen) {
            setHasError(false);
            setLoaded(false);
            return;
        }

        // Prevent body scroll di mobile ketika modal terbuka
        const isMobile = window.innerWidth < 640;
        if (isMobile) {
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            document.body.style.height = '100%';
        }

        return () => {
            // Restore body scroll
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
            document.body.style.height = '';
        };
    }, [isOpen]);

    return (
        <>
            {/* Chat Modal */}
            <div
                id="chat-widget"
                className={`fixed z-[9999] shadow-2xl overflow-hidden bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out transform ${
                    isOpen
                        ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto inset-0 rounded-none sm:bottom-6 sm:right-6 sm:w-[400px] sm:h-[70vh] sm:rounded-xl sm:inset-auto'
                        : 'opacity-0 scale-95 blur-sm translate-y-5 pointer-events-none bottom-6 right-6 w-[90vw] h-[65vh] rounded-xl sm:w-[400px] sm:h-[70vh]'
                }`}
            >
                {/* Header Bar - Hanya di Mobile */}
                <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 z-[10001] flex items-center justify-center px-4 sm:hidden">
                    <span className="text-white font-semibold">TalkVera Chat</span>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute right-4 p-1 rounded-full transition hover:bg-white/20"
                        aria-label="Close chat"
                    >
                        <ChevronDown className="w-5 h-5 text-white transition-transform duration-200 hover:scale-125" />
                    </button>
                </div>

                {/* Close Button - Hanya di Tablet/Desktop */}
                <div className="absolute top-4 right-3 z-[10001] hidden sm:block">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-1 rounded-full transition"
                        aria-label="Close chat"
                    >
                        <ChevronDown className="w-5 h-5 text-white transition-transform duration-200 hover:scale-125" />
                    </button>
                </div>

                {/* Iframe - padding top hanya di mobile */}
                <div className="w-full h-full pt-14 sm:pt-0">
                    <iframe
                        src="https://chat.talkvera.com"
                        title="Talkvera Chatbot Demo"
                        className="w-full h-full border-0"
                        allow="microphone; camera"
                        onLoad={() => setLoaded(true)}
                    />
                </div>
            </div>

            {/* Floating Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 z-[10000] bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white 
                                p-1 rounded-full shadow-xl transition-all duration-700 flex items-center 
                                group"
                    aria-label="Open chat"
                >
                    <Lottie
                        animationData={animationData}
                        loop
                        autoplay
                        className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] filter invert"
                    />

                    <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 
                                    transition-all duration-500 whitespace-nowrap font-medium group-hover:pr-2">
                        Talk with Vera
                    </span>
                </button>
            )}
        </>
    );
};