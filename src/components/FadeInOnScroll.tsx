import { useInView } from 'react-intersection-observer';
import { ReactNode, useEffect, useState } from 'react';

interface FadeInOnScrollProps {
    children: ReactNode;
    delay?: number;
    threshold?: number;
    direction?: 'up' | 'left' | 'right';
    locationPathName?: string;
}

const FadeInOnScroll = ({
    children,
    delay = 0,
    threshold = 0.2,
    direction = 'up',
    locationPathName,
}: FadeInOnScrollProps) => {
    const [triggerKey, setTriggerKey] = useState(0);

    // 🔁 Reset animasi setiap kali route berubah
    useEffect(() => {
        setTriggerKey((prev) => prev + 1);
    }, [locationPathName]);

    const { ref, inView } = useInView({
        threshold,
        triggerOnce: false, // biar bisa retrigger
    });

    const getTransform = () => {
        if (inView) return 'translate(0, 0)';

        switch (direction) {
            case 'left':
                return 'translateX(-50px)';
            case 'right':
                return 'translateX(50px)';
            case 'up':
            default:
                return 'translateY(20px)';
        }
    };

    const animationStyle = {
        transition: `opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s, transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
        opacity: inView ? 1 : 0,
        transform: getTransform(),
    };

    return (
        // 👇 kuncinya di sini: setiap route berubah, React akan re-mount div ini
        <div key={triggerKey} ref={ref} style={animationStyle}>
            {children}
        </div>
    );
};

export default FadeInOnScroll;
