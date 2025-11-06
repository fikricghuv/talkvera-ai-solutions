import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Shield, Lock, FileCheck, Globe, Server, Database, CheckCircle2 } from 'lucide-react';

const EnterpriseSecurityAnimation = () => {
  const [activeShield, setActiveShield] = useState(0);
  
  // Framer Motion value untuk counter yang halus
  const threats = useMotionValue(0);
  const roundedThreats = useTransform(threats, latest => Math.round(latest).toLocaleString());

  const securityFeatures = [
    { icon: Lock, label: 'Encryption', color: 'text-blue-400', bgColor: 'bg-blue-500/20', shadow: 'shadow-blue-500/50' },
    { icon: FileCheck, label: 'Compliance', color: 'text-green-400', bgColor: 'bg-green-500/20', shadow: 'shadow-green-500/50' },
    { icon: Globe, label: 'Network', color: 'text-purple-400', bgColor: 'bg-purple-500/20', shadow: 'shadow-purple-500/50' },
    { icon: Server, label: 'Infrastructure', color: 'text-cyan-400', bgColor: 'bg-cyan-500/20', shadow: 'shadow-cyan-500/50' },
    { icon: Database, label: 'Data Protection', color: 'text-yellow-400', bgColor: 'bg-yellow-500/20', shadow: 'shadow-yellow-500/50' }
  ];

  useEffect(() => {
    // Shield rotation (ini tetap, sebagai pemicu utama)
    const shieldInterval = setInterval(() => {
      setActiveShield(prev => (prev + 1) % securityFeatures.length);
    }, 2000); // Rotasi setiap 2 detik

    // Threats blocked counter (menggunakan framer-motion 'animate')
    const threatAnimation = animate(threats, 9999, {
      duration: 21.2, // (9999 / 47) * 0.1s = 21.2s, sesuai logic lama
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
    });

    return () => {
      clearInterval(shieldInterval);
      threatAnimation.stop();
    };
  }, [threats, securityFeatures.length]);

  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      <div className="relative w-full max-w-md aspect-square">
        {/* Background glow effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>

        {/* Main container */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Orbiting security features */}
          {securityFeatures.map((feature, index) => {
            // const angle = (index * 360) / securityFeatures.length - 90;
            // const radius = 180;
            // const x = Math.cos((angle * Math.PI) / 180) * radius;
            // const y = Math.sin((angle * Math.PI) / 180) * radius;
            const angle = (index * 360) / securityFeatures.length - 90;
            const radius = 180;

            const x = Math.cos((angle * Math.PI) / 180) * radius;

            // ✅ ubah ke let agar bisa dimodifikasi
            let y = Math.sin((angle * Math.PI) / 180) * radius;

            // ✅ Tambahkan jarak untuk elemen di bawah
            if (index === 2 || index === 3) {
            y += 30; // ganti 40 → 50/60 jika masih kurang
            }

            const isActive = index === activeShield;
            const FeatureIcon = feature.icon;

            return (
              <motion.div
                key={index}
                className="absolute top-1/2 left-1/2"
                initial={false}
                animate={{ 
                  x: `calc(-50% + ${x}px)`, 
                  y: `calc(-50% + ${y}px)`, 
                  scale: isActive ? 1.2 : 1 
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <div className={`relative p-4 rounded-2xl border-2 transition-all duration-300 ${
                  isActive 
                    ? `${feature.bgColor} ${feature.color.replace('text-', 'border-')} border-opacity-100 shadow-lg ${feature.shadow}` 
                    : 'bg-gray-800/50 border-gray-700/50'
                }`}>
                  <FeatureIcon className={`w-8 h-8 transition-colors duration-300 ${
                    isActive ? feature.color : 'text-gray-500'
                  }`} />
                  
                  <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-semibold whitespace-nowrap transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <span className={feature.color}>{feature.label}</span>
                  </div>

                  {isActive && (
                    <div className="absolute inset-0 rounded-2xl border-2 border-current animate-ping opacity-75" style={{ color: feature.color.replace('text-', '') }}></div>
                  )}
                </div>

                {/* Connection lines (SVG) */}
                <motion.svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ width: '200%', height: '200%' }}>
                  <motion.line
                    x1="50%"
                    y1="50%"
                    x2={`calc(50% - ${x}px)`}
                    y2={`calc(50% - ${y}px)`}
                    initial={false}
                    animate={{
                      stroke: isActive ? feature.color.replace('text-', '#') : '#374151',
                      strokeWidth: isActive ? 2 : 1,
                      strokeDasharray: isActive ? '0' : '4 4',
                      opacity: isActive ? 0.6 : 0.2
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.svg>
              </motion.div>
            );
          })}

          {/* Central enterprise shield */}
          <div className="relative z-10">
            {/* Rotating hexagon background */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            >
              <div className="w-40 h-40 border-2 border-gray-700/50 rotate-0" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}></div>
            </motion.div>

            {/* Pulse rings (CSS-based) */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-blue-500/30"
                style={{ width: '100px', height: '100px' }}
                animate={{
                  scale: [1, 1.8],
                  opacity: [0.7, 0]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: i * 0.8
                }}
              />
            ))}

            {/* Main shield */}
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 border-2 border-gray-700 shadow-2xl">
              <div className="relative overflow-hidden item-center justify-center rounded-lg">
                <Shield className="w-20 h-20 text-blue-400" strokeWidth={1.5} />

                {/* Scan line effect (CSS-based) */}
                <motion.div 
                  className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                  initial={{ top: '0%' }}
                  animate={{ top: ['0%', '100%'] }}
                  transition={{ 
                    duration: 2.5, // Sesuai logic lama: (100/2) * 50ms = 2.5s
                    repeat: Infinity, 
                    repeatType: "reverse",
                    ease: "linear" 
                  }}
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-green-400" />
                </div>
              </div>

              {/* Stats display */}
              <div className="mt-4 space-y-2 w-32">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Threats</span>
                  <motion.span className="text-red-400 font-bold">
                    {roundedThreats}
                  </motion.span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">Scan</span>
                    <span className="text-cyan-400 font-semibold">Active</span>
                  </div>
                  <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                      initial={{ width: '0%' }}
                      animate={{ width: ['0%', '100%'] }}
                      transition={{ 
                        duration: 2.5, 
                        repeat: Infinity, 
                        repeatType: "reverse", 
                        ease: "linear" 
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes orbit {
          from {
            transform: translate(-50%, -50%) rotate(var(--orbit-angle)) translateX(var(--orbit-radius)) rotate(calc(-1 * var(--orbit-angle)));
          }
          to {
            transform: translate(-50%, -50%) rotate(calc(var(--orbit-angle) + 360deg)) translateX(var(--orbit-radius)) rotate(calc(-1 * (var(--orbit-angle) + 360deg)));
          }
        }
        .animate-orbit {
          animation: orbit var(--orbit-duration) linear infinite;
        }
      `}</style>
    </div>
  );
};

export default EnterpriseSecurityAnimation;