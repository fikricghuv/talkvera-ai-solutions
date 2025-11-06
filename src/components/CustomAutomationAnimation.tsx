import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { FileText, Zap, CheckCircle2, Settings, ArrowDown } from "lucide-react";

// Vertical flow version with centered aurora glow
const CustomAutomationAnimation = () => {
  const processes = [
    { icon: <FileText size={28} />, label: "Manual", color: "text-blue-400", borderColor: "border-blue-400", shadowColor: "shadow-blue-500/40" },
    { icon: <Settings size={28} />, label: "Kustomisasi", color: "text-purple-400", borderColor: "border-purple-400", shadowColor: "shadow-purple-500/40" },
    { icon: <Zap size={28} />, label: "Otomasi", color: "text-cyan-400", borderColor: "border-cyan-400", shadowColor: "shadow-cyan-500/40" },
    { icon: <CheckCircle2 size={28} />, label: "Efisiensi", color: "text-green-400", borderColor: "border-green-400", shadowColor: "shadow-green-500/40" }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const totalSteps = processes.length * 2;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSteps);
    }, 850);
    return () => clearInterval(interval);
  }, [totalSteps]);

  return (
    <div className="w-full mx-auto p-14 relative flex items-center justify-center overflow-visible">

      {/* ✅ Aurora Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-visible">
        <div className="w-[260px] h-[320px] bg-gradient-to-b from-cyan-500/30 via-blue-500/25 to-transparent rounded-full blur-2xl opacity-70 animate-pulse"></div>
        <div className="absolute w-[200px] h-[260px] bg-gradient-to-b from-blue-600/25 via-cyan-400/25 to-transparent rounded-full blur-[70px] opacity-60 animate-pulse"></div>
      </div>

      <div className="flex flex-col items-center justify-start gap-4 overflow-visible">
        {processes.map((process, index) => {
          const isIconActive = activeIndex === index * 2;
          const isArrowActive = activeIndex === index * 2 + 1;

          return (
            <div key={index} className="flex flex-col items-center justify-center overflow-visible">
              <motion.div
                className="relative text-center overflow-visible"
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.15, type: "spring", stiffness: 140 }}
              >
                <motion.div
                  className={`w-20 h-20 bg-slate-900/40 backdrop-blur-md border-2 rounded-3xl flex items-center justify-center transition-all duration-300 ${
                    isIconActive ? `${process.borderColor} ${process.shadowColor} shadow-xl` : "border-slate-700"
                  }`}
                  animate={{ scale: isIconActive ? 1.18 : 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                    <motion.div 
                    className={`transition-colors duration-300 flex items-center justify-center w-full h-full ${isIconActive ? process.color : "text-gray-600"}`}
                    >
                        {process.icon}
                    </motion.div>
                </motion.div>

                {isIconActive && (
                  <motion.div
                    className={`absolute inset-0 border-2 ${process.borderColor} rounded-3xl pointer-events-none overflow-visible`}
                    initial={{ scale: 1, opacity: 0.6 }}
                    animate={{ scale: 1.55, opacity: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                  />
                )}

                <p className={`text-center text-sm mt-2 font-semibold tracking-wide transition-colors duration-300 ${
                  isIconActive ? process.color : "text-gray-500"
                }`}>
                  {process.label}
                </p>
              </motion.div>

              {index < processes.length - 1 && (
                <div className="my-1 overflow-visible flex flex-col items-center">
                  <ArrowDown
                    size={32}
                    className={`transition-all duration-300 ${isArrowActive ? processes[index + 1].color : "text-gray-700"}`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomAutomationAnimation;
