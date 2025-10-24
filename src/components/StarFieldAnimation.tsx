import { useMemo } from 'react';

const NUM_STARS = 100;

const StarField = () => {
    // Menghasilkan posisi bintang secara acak hanya sekali saat mount
    const stars = useMemo(() => {
        return Array.from({ length: NUM_STARS }).map((_, i) => ({
            id: i,
            x: Math.random() * 100, // Posisi X (dalam %)
            y: Math.random() * 100, // Posisi Y (dalam %)
            size: Math.random() * 2 + 1, // Ukuran (1px - 3px)
            opacity: Math.random() * 0.7 + 0.3, // Opasitas (0.3 - 1.0)
            delay: Math.random() * 5, // Penundaan animasi untuk efek acak
            duration: Math.random() * 3 + 2, // Durasi animasi kedip (twinkle)
        }));
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Layer Bintang-bintang Kecil */}
            {stars.map(star => (
                <div
                    key={star.id}
                    className="absolute rounded-full bg-white/80"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        opacity: star.opacity,
                        // Menerapkan animasi kedip (twinkle) dan penundaan
                        animation: `twinkle ${star.duration}s infinite alternate ease-in-out`,
                        animationDelay: `-${star.delay}s`,
                    }}
                />
            ))}
             {/* Keyframes CSS Kustom untuk Animasi: Twinkle (Kedip) dan Cosmic Pan (Gerak Lambat) */}
            <style>
                {`
                    @keyframes twinkle {
                        0% { opacity: 0.3; transform: scale(0.9); }
                        50% { opacity: 1; transform: scale(1.1); }
                        100% { opacity: 0.3; transform: scale(0.9); }
                    }

                    @keyframes cosmic-pan {
                        0% { transform: translate(-2%, -2%); }
                        50% { transform: translate(2%, 2%); }
                        100% { transform: translate(-2%, -2%); }
                    }

                    .animate-cosmic-pan {
                        animation: cosmic-pan 20s infinite alternate ease-in-out;
                    }
                `}
            </style>
        </div>
    );
}

export default StarField;