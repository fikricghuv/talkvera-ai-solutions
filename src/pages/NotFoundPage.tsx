import { Link } from 'react-router-dom';
import { Ghost, ArrowLeft } from 'lucide-react';

/**
 * Komponen untuk halaman 404 Not Found.
 * Didesain dengan gaya minimalis, gelap, dan sentuhan sci-fi/AI.
 */
const NotFoundPage = () => {
  return (
    <div className="pt-16">
        <div className="min-h-[70vh] flex items-center justify-center p-6 bg-[#0a0a0a]">
        <div className="text-center max-w-xl">
            
            {/* Ikon dan Judul Utama */}
            <Ghost className="w-16 h-16 md:w-20 md:h-20 text-blue-400 mx-auto mb-4 animate-bounce-slow" />
            
            <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-2">
            ERROR 404
            </p>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 
                        bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent leading-tight">
            URL Not Found
            </h1>
            
            <p className="text-lg text-gray-400 mb-8">
            We couldn't find the page you were looking for.
            </p>

            {/* Tombol Aksi */}
            <Link 
            to="/home" 
            className="inline-flex items-center space-x-2 px-6 py-3 
                        bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 
                        text-white font-semibold rounded-lg transition-all transform hover:scale-[1.03] 
                        shadow-lg shadow-blue-500/30"
            >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
            </Link>

        </div>
        </div>
    </div>
  );
};

// Efek sederhana untuk ikon Ghost
const style = document.createElement('style');
style.innerHTML = `
@keyframes bounce-slow {
  0%, 100% { transform: translateY(-5%); }
  50% { transform: translateY(5%); }
}
.animate-bounce-slow {
  animation: bounce-slow 4s infinite ease-in-out;
}
`;
document.head.appendChild(style);

export default NotFoundPage;
