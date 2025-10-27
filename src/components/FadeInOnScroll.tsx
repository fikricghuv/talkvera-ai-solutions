import { useInView } from 'react-intersection-observer'; 
import { ReactNode } from 'react'; 

// --- PERUBAHAN PADA INTERFACE ---
interface FadeInOnScrollProps {
    children: ReactNode; 
    delay?: number;
    threshold?: number;
    direction?: 'up' | 'left' | 'right'; 
}

const FadeInOnScroll = ({ children, delay = 0, threshold = 0.2, direction = 'up' }: FadeInOnScrollProps) => {
    const finalThreshold = threshold > 0 ? threshold : 0.1;
    
    const { ref, inView } = useInView({
        threshold: finalThreshold,
        triggerOnce: true, 
    });

    const getTransform = () => {
        if (inView) {
            return 'translate(0, 0)'; // Posisi akhir
        }
        
        // Posisi awal
        switch (direction) {
            case 'left':
                // Muncul dari kiri (bergeser ke kanan 50px)
                return 'translateX(-50px)';
            case 'right':
                // Muncul dari kanan (bergeser ke kiri 50px)
                return 'translateX(50px)';
            case 'up':
            default:
                // Muncul dari bawah (bergeser ke atas 20px)
                return 'translateY(20px)';
        }
    };

    const animationStyle = {
        transition: `opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s, transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
        opacity: inView ? 1 : 0,
        transform: getTransform(), 
    };

    return (
        <div ref={ref} style={animationStyle}>
            {children}
        </div>
    );
};

export default FadeInOnScroll;